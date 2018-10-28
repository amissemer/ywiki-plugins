import $ from 'jquery';
import * as proxy from './proxyService';
import rateLimit from '../common/rate-limit';
import { MAX_WIKI_PAGE_CREATION_RATE } from '../common/config';
import AttachmentFactory from '../common/confluence/Attachment';

const Attachment = AttachmentFactory(proxy);
/**
 * An API for confluence that runs ajax queries through the proxy object to bypass the CORS restriction.
 */

export function deletePage(spaceKey, pageTitle) {
  return getContent(spaceKey, pageTitle).then(page => {
    return deletePageById(page.id);
  });
}
export function deletePageRecursive(spaceKey, pageTitle) {
  return getContent(spaceKey, pageTitle).then(page => {
    return deletePageRecursiveInternal(page.id);
  });
}
export function getAttachment(pageId, attachmentName) {
  return proxy.ajax(`/download/attachments/${pageId}/${attachmentName}?api=v2`);
}
export function deletePageById(pageId) {
  return proxy
    .ajax({
      url: `/rest/api/content/${encodeURIComponent(pageId)}`,
      type: 'DELETE',
    })
    .fail(errorLogger('DELETE page failed'));
}
export function movePages(sourceSpaceKey, sourcePageTitle, targetSpaceKey, targetParentTitle) {
  if (sourceSpaceKey == targetSpaceKey) {
    return new $.Deferred()
      .reject("You don't need a tool for that, just use the standard Move feature of Confluence")
      .promise();
  }
  return getContent(sourceSpaceKey, sourcePageTitle).then(sourcePage => {
    return movePagesRecursiveInternal(sourcePage.id, targetSpaceKey, targetParentTitle);
  });
}
function getAtlToken() {
  return proxy.$metacontent('meta[name=ajs-atl-token]');
}

let atlToken;
getAtlToken().then(
  value => {
    atlToken = value;
  },
  () => {
    console.error('Could not retrieve atl-token from Confluence');
  },
);

function movePagesRecursiveInternal(sourcePageId, targetSpaceKey, targetParentTitle) {
  return getContentById(sourcePageId, 'children.page').then(sourcePage => {
    // first move the current page
    return moveOne(sourcePageId, targetSpaceKey, targetParentTitle).then(() => {
      // then move the children
      const childrenPromises = [];
      console.log('In movePagesRecursiveInternal for ', sourcePage.title);
      if (sourcePage.children && sourcePage.children.page && sourcePage.children.page.results) {
        sourcePage.children.page.results.forEach(child => {
          childrenPromises.push(movePagesRecursiveInternal(child.id, targetSpaceKey, sourcePage.title));
        });
      }
      // return when all children have been recursively moved
      return $.when(...childrenPromises);
    });
  });
}

function moveOne(sourcePageId, targetSpaceKey, targetParentTitle) {
  const url = '/pages/movepage.action?pageId=';
  `${encodeURIComponent(sourcePageId)}&spaceKey=${encodeURIComponent(targetSpaceKey)}&targetTitle=${encodeURIComponent(
    targetParentTitle,
  )}&position=append&atl_token=${atlToken}&_=${Math.random()}`;
  console.log('Moving page ', sourcePageId, ' under ', `${targetSpaceKey}:${targetParentTitle}`, url);
  return proxy.ajax(url);
}

function deletePageRecursiveInternal(pageId) {
  return getContentById(pageId, 'children.page').then(page => {
    // first delete children
    const childrenPromises = [];
    console.log('In deletePageRecursiveInternal for ', page.title);
    if (page.children && page.children.page && page.children.page.results) {
      page.children.page.results.forEach(child => {
        childrenPromises.push(deletePageRecursiveInternal(child.id));
      });
    }
    // when all children are deleted
    return (
      $.when(...childrenPromises)
        // delete the current page
        .then(() => {
          return deletePageById(pageId);
        })
    );
  });
}

/**
 * Get a page by spaceKey and title from Confluence and returns a deferred for that page.
 * See $.ajax().done()
 * Failures are logged and ignored.
 * The deferred is resolved with the first matching page is any, else it is rejected.
 */
export function getContent(spaceKey, pageTitle, expand) {
  let expandParam = '';
  if (expand) {
    expandParam = `&expand=${encodeURIComponent(expand)}`;
  }
  const url = `/rest/api/content?type=page&spaceKey=${encodeURIComponent(spaceKey)}&limit=1&title=`;
  encodeURIComponent(pageTitle) + expandParam;
  console.log(`Getting page content from ${url}`);
  return proxy.ajax(url).then(response => {
    console.log('Filtering AJAX response', response);
    if (response.results && response.results.length > 0) {
      const page = response.results[0];
      console.log('Returning ', page);
      return page;
    }
    console.warn(`Page Not found: '${spaceKey}:${pageTitle}'`);
    return $.Deferred().reject(`Page Not found: '${spaceKey}:${pageTitle}'`);
  }, errorLogger('Failed getContent promise'));
}

export function getContentById(pageId, expand) {
  let expandParam = '';
  if (expand) {
    expandParam = `?expand=${encodeURIComponent(expand)}`;
  }
  const url = `/rest/api/content/${encodeURIComponent(pageId)}${expandParam}`;
  console.log(url);
  return proxy.ajax(url).fail(errorLogger('GET page by pageId failed'));
}

/** search for content with CQL
 for example https://wiki.hybris.com/rest/api/content/search?cql=label=customer%20and%20type=%22page%22%20and%20space=%22ps%22 */
export function searchPagesWithCQL(spaceKey, cqlQuery, limit, expand) {
  if (!limit || limit < 0) {
    limit = 15;
  }
  const expandParam = expand ? `&expand=${encodeURIComponent(expand)}` : '';
  return proxy.ajax(
    `/rest/api/content/search?limit=${encodeURIComponent(limit)}&cql=${encodeURIComponent(
      `${cqlQuery} and type=page and space='${spaceKey}'`,
    )}${expandParam}`,
  );
}

/**
 * Copy the page "fromPageTitle" (without its descendants) under the page "toPageTitle",
 * and do a placeholder replacement the page title using the templateProcessor.
 */
export async function copyPage(fromSpaceKey, fromPageTitle, toSpaceKey, toPageTitle, templateProcessor) {
  const pageToCopy = await getContent(fromSpaceKey, fromPageTitle, 'space,body.storage,metadata.labels');
  await templateProcessor.transformPage(pageToCopy);
  // Create the new page under toPageTitle
  return await createPage(pageToCopy, toSpaceKey, toPageTitle);
}

export function copyPageRecursive(
  fromSpaceKey,
  fromPageTitle,
  toSpaceKey,
  toPageTitle,
  templateProcessor,
  copiedPages,
) {
  const sourcePagePromise = getContent(fromSpaceKey, fromPageTitle);
  const targetPagePromise = getContent(toSpaceKey, toPageTitle, 'space');
  return $.when(sourcePagePromise, targetPagePromise).then((sourcePage, targetPage) => {
    return copyPageRecursiveInternal(
      sourcePage.id,
      targetPage.space.key,
      targetPage.id,
      templateProcessor,
      copiedPages,
    );
  });
}

async function copyPageRecursiveInternal(sourcePageId, targetSpaceKey, targetPageId, templateProcessor, copiedPages) {
  const pageToCopy = await getContentById(
    sourcePageId,
    'space,body.storage,children.page,children.attachment,metadata.labels',
  );
  if (templateProcessor.isApplicableTemplatePage(pageToCopy)) {
    await templateProcessor.transformPage(pageToCopy);
    // Create the new page under targetSpaceKey:targetPageId
    const copiedPage = await createPageUnderPageId(pageToCopy, targetSpaceKey, targetPageId);
    if (templateProcessor.copyAttachments) {
      await copyAllAttachments(pageToCopy, copiedPage.id);
    }
    copiedPages.push(copiedPage);
    return await copyAllChildren(pageToCopy, targetSpaceKey, copiedPage.id, templateProcessor, copiedPages);
  }
  console.log('Page is not a template, not copied, but children will be copied: ', pageToCopy.title);
  return await copyAllChildren(pageToCopy, targetSpaceKey, targetPageId, templateProcessor, copiedPages);
}

async function copyAllAttachments(pageToCopy, targetContainerId) {
  let attachmentResults = pageToCopy.children.attachment;
  while (attachmentResults && attachmentResults.results.length) {
    for (const attachmentInternal of attachmentResults.results) {
      const sourceAttachment = await Attachment.from(attachmentInternal);
      const targetAttachment = await Attachment.getOrCreateAttachment(targetContainerId, sourceAttachment.title());
      await targetAttachment.cloneFrom(sourceAttachment);
    }
    if (attachmentResults._links.next) {
      attachmentResults = await proxy.ajax(attachmentResults._links.next);
    } else {
      attachmentResults = false;
    }
  }
}

function copyAllChildren(pageToCopy, targetSpaceKey, targetPageId, templateProcessor, copiedPages) {
  // recursively copy all children
  const childrenPromises = [];
  console.log('In copyAllChildren', pageToCopy, targetPageId);
  if (pageToCopy.children && pageToCopy.children.page && pageToCopy.children.page.results) {
    pageToCopy.children.page.results.forEach(child => {
      childrenPromises.push(
        copyPageRecursiveInternal(child.id, targetSpaceKey, targetPageId, templateProcessor, copiedPages),
      );
    });
  }
  // return the combination of all children copy promises
  return $.when(...childrenPromises);
}

// returns a function that will log all the arguments on the console as an error, preprended with a message.
function errorLogger(message) {
  return function() {
    console.error(message, arguments);
    return $.Deferred().reject(arguments);
  };
}

export function createPage(page, targetSpaceKey, targetParentTitle) {
  return getContent(targetSpaceKey, targetParentTitle, 'space').then(targetParentPage => {
    console.log(
      'targetParentPage: space=',
      targetParentPage.space.key,
      'id=',
      targetParentPage.id,
      'title=',
      targetParentPage.title,
    );
    return createPageUnderPageId(page, targetParentPage.space.key, targetParentPage.id);
  });
}

export function createPageUnderPageId(page, targetSpaceKey, targetPageId) {
  const pageToCreate = {
    ancestors: [{ id: targetPageId }],
    space: { key: targetSpaceKey },
    body: { storage: { representation: 'storage', value: page.body.storage.value } },
    title: page.title,
    type: 'page',
  };
  console.log('New Page', pageToCreate);
  return postPageRateLimited(pageToCreate);
}

var postPageRateLimited = rateLimit(postPage, MAX_WIKI_PAGE_CREATION_RATE);
function postPage(page) {
  return proxy
    .ajax({
      url: '/rest/api/content',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(page),
    })
    .fail(errorLogger('POST new page failed'));
}

export function updateContent(page) {
  return proxy
    .ajax({
      url: `/rest/api/content/${encodeURIComponent(page.id)}`,
      type: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify(page),
    })
    .fail(errorLogger(`PUT page failed ${page.title}`));
}

/** label can be a string or an array of strings to add as labels to the confluence PageId */
export function addLabel(pageId, label) {
  const labels = [];
  if (!label) return;
  if (typeof label === 'string') {
    labels.push({ prefix: 'global', name: label });
  } else if (label.length) {
    for (let i = 0; i < label.length; i++) {
      if (label[i]) {
        labels.push({ prefix: 'global', name: label[i] });
      }
    }
  } else {
    throw `Unknown type of label: ${label}`;
  }
  return proxy
    .ajax({
      url: `/rest/api/content/${encodeURIComponent(pageId)}/label`,
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(labels),
    })
    .fail(errorLogger(`ADD label to page ${pageId} failed`));
}
