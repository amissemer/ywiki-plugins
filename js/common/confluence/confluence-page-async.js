import { throttleRead, throttleWrite } from './confluence-throttle';
import Page from './Page';

export async function movePages(sourceSpaceKey, sourcePageTitle, targetSpaceKey, targetParentTitle) {
  const sourcePage = await getContent(sourceSpaceKey, sourcePageTitle);
  return movePagesById(sourcePage.id, targetSpaceKey, targetParentTitle);
}
function getAtlToken() {
  return $('meta[name=ajs-atl-token]').attr('content');
}

export async function movePagesById(sourcePageId, targetSpaceKey, target) {
  return await throttleWrite(async () => {
    let targetParentTitle;
    if (Number.isInteger(Number(target))) {
      const targetParent = await getContentById(Number(target));
      targetParentTitle = targetParent.title;
    } else {
      targetParentTitle = target;
    }
    if (!targetParentTitle) {
      throw `targetParentTitle is mandatory (for source ${sourcePageId} and target ${target})`;
    }
    const url = `/pages/movepage.action?pageId=${encodeURIComponent(sourcePageId)}&spaceKey=${encodeURIComponent(
      targetSpaceKey,
    )}&targetTitle=${encodeURIComponent(
      targetParentTitle,
    )}&position=append&atl_token=${getAtlToken()}&_=${Math.random()}`;
    console.log('Moving page ', sourcePageId, ' under ', `${targetSpaceKey}:${targetParentTitle}`, url);
    const resp = await $.ajax(url);
    if (typeof resp === 'string' && resp.indexOf('Not Permitted' >= 0)) {
      throw 'Not Permitted';
    } else if (typeof resp === 'string') {
      throw 'Generic move error';
    } else if (resp.actionErrors) {
      throw resp.actionErrors.join();
    }
  });
}

/**
 * Get a page by spaceKey and title from Confluence and returns a deferred for that page.
 * See $.ajax().done()
 * Failures are logged and ignored.
 * The deferred is resolved with the first matching page is any, else it is rejected.
 */
export async function getContent(spaceKey, pageTitle, expand) {
  let expandParam = '';
  if (expand) {
    expandParam = `&expand=${encodeURIComponent(expand)}`;
  }
  const url = `/rest/api/content?type=page&spaceKey=${encodeURIComponent(spaceKey)}&limit=1&title=${encodeURIComponent(
    pageTitle,
  )}${expandParam}`;
  console.log(`Getting page content from ${url}`);
  const response = await throttleRead(() => $.ajax(url));
  console.log('Filtering AJAX response', response);
  if (response.results && response.results.length > 0) {
    const page = response.results[0];
    console.log('Returning ', page);
    return page;
  }
  throw `Page Not found: '${spaceKey}:${pageTitle}'`;
}

export async function getContentById(pageId, expand) {
  let expandParam = '';
  if (expand) {
    expandParam = `?expand=${encodeURIComponent(expand)}`;
  }
  const url = `/rest/api/content/${encodeURIComponent(pageId)}${expandParam}`;
  console.log(url);
  return await throttleRead(() => $.ajax(url));
}

/** search for content with CQL
 for example https://wiki.hybris.com/rest/api/content/search?cql=label=customer%20and%20type=%22page%22%20and%20space=%22ps%22 */
export async function searchPagesWithCQL(spaceKey, cqlQuery, limit, expand) {
  if (!limit || limit < 0) {
    limit = 15;
  }
  const expandParam = expand ? `&expand=${encodeURIComponent(expand)}` : '';
  return await $.ajax(
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
  const newPage = Page.copyFrom(pageToCopy);
  await templateProcessor.transformPage(newPage);
  // Find the parent
  const targetParentPage = await getContent(toSpaceKey, toPageTitle, 'space');
  console.log(
    'targetParentPage: space=',
    targetParentPage.space.key,
    'id=',
    targetParentPage.id,
    'title=',
    targetParentPage.title,
  );
  newPage.setSpaceKey(toSpaceKey).setParentId(targetParentPage.id);
  return await createPageUnderPageId(newPage);
}

export async function copyPageToSpace(sourcePageId, targetSpaceKey, targetParentId) {
  const pageToCopy = await getContentById(sourcePageId, 'space,body.storage,metadata.labels');
  try {
    return await getContent(targetSpaceKey, pageToCopy.title);
    // if it exists, do nothing (we should update the content, still)
  } catch (err) {
    // Create the new page
    const newPage = Page.copyFrom(pageToCopy)
      .setSpaceKey(targetSpaceKey)
      .setParentId(targetParentId);
    return await createPageUnderPageId(newPage);
  }
}

export async function createPageFromTemplate(
  templateSpace,
  templateTitle,
  targetSpaceKey,
  targetPageId,
  templateProcessor,
) {
  const pageToCopy = await getContent(templateSpace, templateTitle, 'space,body.storage,metadata.labels');
  // var parentPage = await getContentById(targetPageId, 'space');
  const newPage = Page.copyFrom(pageToCopy)
    .setSpaceKey(targetSpaceKey)
    .setParentId(targetPageId);
  await templateProcessor.transformPage(newPage);
  // Create the new page
  return await createPageUnderPageId(newPage);
}

export async function copyPageRecursive(
  fromSpaceKey,
  fromPageTitle,
  toSpaceKey,
  toPageTitle,
  templateProcessor,
  copiedPages,
) {
  const sourcePagePromise = getContent(fromSpaceKey, fromPageTitle);
  const targetPagePromise = getContent(toSpaceKey, toPageTitle, 'space');
  const pages = await Promise.all(sourcePagePromise, targetPagePromise);
  return await copyPageRecursiveInternal(pages[0].id, pages[1].space.key, pages[1].id, templateProcessor, copiedPages);
}

export async function copyPageRecursiveInternal(
  sourcePageId,
  targetSpaceKey,
  targetPageId,
  templateProcessor,
  copiedPages,
) {
  const pageToCopy = await getContentById(sourcePageId, 'space,body.storage,children.page,metadata.labels');
  const newPage = Page.copyFrom(pageToCopy);
  if (templateProcessor.isApplicableTemplatePage(newPage)) {
    await templateProcessor.transformPage(newPage);
    newPage.setSpaceKey(targetSpaceKey).setParentId(targetPageId);

    // Create the new page under targetSpaceKey:targetPageId
    const copiedPage = await createPageUnderPageId(newPage);
    copiedPages.push(copiedPage);
    return await copyAllChildren(pageToCopy, targetSpaceKey, copiedPage.id, templateProcessor, copiedPages);
  }
  console.log('Page is not a template, not copied, but children will be copied: ', pageToCopy.title);
  return await copyAllChildren(pageToCopy, targetSpaceKey, targetPageId, templateProcessor, copiedPages);
}

export async function copyAllChildren(pageToCopy, targetSpaceKey, targetPageId, templateProcessor, copiedPages) {
  // recursively copy all children
  const copiedChildren = [];
  console.log('In copyAllChildren', pageToCopy, targetPageId);
  if (pageToCopy.children && pageToCopy.children.page && pageToCopy.children.page.results) {
    await pageToCopy.children.page.results.forEachSerial(async child => {
      const childrenP = await copyPageRecursiveInternal(
        child.id,
        targetSpaceKey,
        targetPageId,
        templateProcessor,
        copiedPages,
      );
      copiedChildren.push(childrenP);
    });
  }
  return copiedChildren;
}

/**
 * Creates a new page in Confluence. Typically create the newPage with
 * import Page from './Page';
 * let newPage = new Page('title','body','spaceKey',parentId);
 * createPageUnderPageId(newPage);
 *
 * or
 *
 * let newPage = Page.copyFrom(otherPage).setParentId(newParent).setSpaceKey('otherSpace');
 * createPageUnderPageId(newPage);
 */
export async function createPageUnderPageId(/* type Page */ newPage) {
  console.log('Posting new page', newPage);
  return await postPage(newPage);
}

export async function postPage(page) {
  return throttleWrite(() =>
    $.ajax({
    url: '/rest/api/content',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(page),
  }),
  );
}

/* Typically you create the page with Page.newVersionOf(page, "optional message", isMajorEdit);
then set the body and title you want to update with setBody and setTitle. */
export async function updateContent(page) {
  return throttleWrite(() =>
    $.ajax({
    url: `/rest/api/content/${encodeURIComponent(page.id)}`,
    type: 'PUT',
    contentType: 'application/json',
    data: JSON.stringify(page),
  }),
  );
}

export async function getPageTree(pageId, parentId, parentTitle, counter) {
  console.log(`Queueing getContentById for ${pageId}`);
  const pageAndChildren = await getContentById(pageId, 'history.lastUpdated,children.page,metadata.labels');
  counter.pages++;
  if (counter.pages % 100 == 0) console.log(`Found ${counter.pages} pages so far...`);
  const childrenP = [];
  let childrenPages = pageAndChildren.children.page;
  while (childrenPages && childrenPages.size > 0) {
    childrenPages.results.forEach(child =>
      childrenP.push(getPageTree(child.id, pageId, pageAndChildren.title, counter)),
    );
    // get next page if any
    if (childrenPages._links.next) {
      console.log(`Queueing GET next page of children for ${pageAndChildren.title}: ${childrenPages._links.next}`);
      childrenPages = await throttleRead(() => $.ajax(childrenPages._links.next));
    } else {
      childrenPages = false;
    }
  }

  return {
    title: pageAndChildren.title,
    id: pageId,
    lastUpdated: new Date(pageAndChildren.history.lastUpdated.when),
    createdDate: new Date(pageAndChildren.history.createdDate),
    parentId,
    parentTitle,
    children: await Promise.all(childrenP),
    labels: Array.prototype.map.call(pageAndChildren.metadata.labels.results, l => l.name),
  };
}
