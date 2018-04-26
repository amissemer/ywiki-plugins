import * as proxy from './proxyService';
import $ from 'jquery';
import rateLimit from '../common/rate-limit';
import {MAX_WIKI_PAGE_CREATION_RATE} from '../common/config';

/**
 * An API for confluence that runs ajax queries through the proxy object to bypass the CORS restriction.
 */

export function deletePage(spaceKey,pageTitle) {
  return getContent(spaceKey,pageTitle)
  .then( function (page) {
    return deletePageById(page.id);
  });
}
export function deletePageRecursive(spaceKey,pageTitle) {
  return getContent(spaceKey,pageTitle)
  .then( function (page) {
    return deletePageRecursiveInternal( page.id );
  });
}
export function getAttachment(pageId, attachmentName) {
  return proxy.ajax("/download/attachments/" + pageId + "/" + attachmentName + "?api=v2");
}
export function deletePageById(pageId) {
  return proxy.ajax({
    url: '/rest/api/content/'+encodeURIComponent(pageId),
    type: 'DELETE'
  }).fail(errorLogger( "DELETE page failed"));
}
export function movePages(sourceSpaceKey, sourcePageTitle,targetSpaceKey, targetParentTitle) {
  if (sourceSpaceKey==targetSpaceKey) {
    return new $.Deferred().reject("You don't need a tool for that, just use the standard Move feature of Confluence").promise();
  }
  return getContent(sourceSpaceKey, sourcePageTitle)
  .then( function (sourcePage) {
    return movePagesRecursiveInternal( sourcePage.id, targetSpaceKey, targetParentTitle );
  });
}
function getAtlToken() {
  return proxy.$metacontent('meta[name=ajs-atl-token]');
}

var atlToken;
getAtlToken().then(function(value) {atlToken = value}, function() { console.error("Could not retrieve atl-token from Confluence"); });

function movePagesRecursiveInternal( sourcePageId, targetSpaceKey, targetParentTitle) {
  return getContentById( sourcePageId, 'children.page')
  .then( function (sourcePage) {
    // first move the current page
    return moveOne( sourcePageId, targetSpaceKey, targetParentTitle )
    .then( function () {
      // then move the children
      var childrenPromises = [];
      console.log("In movePagesRecursiveInternal for ", sourcePage.title);
      if (sourcePage.children && sourcePage.children.page && sourcePage.children.page.results) {
        sourcePage.children.page.results.forEach( function (child) {
          childrenPromises.push(movePagesRecursiveInternal( child.id, targetSpaceKey, sourcePage.title ));
        });
      }
      // return when all children have been recursively moved
      return $.when.apply($,childrenPromises);
    });
  });

}

function moveOne (sourcePageId, targetSpaceKey, targetParentTitle) {
  var url = '/pages/movepage.action?pageId='+encodeURIComponent(sourcePageId)+'&spaceKey='+encodeURIComponent(targetSpaceKey)+'&targetTitle='+encodeURIComponent(targetParentTitle)+'&position=append&atl_token='+atlToken+'&_='+Math.random();
  console.log("Moving page ",sourcePageId," under ",targetSpaceKey+":"+ targetParentTitle, url);
  return proxy.ajax(url);
}

function deletePageRecursiveInternal(pageId) {
  return getContentById(pageId, 'children.page')
  .then( function (page) {
    // first delete children
    var childrenPromises = [];
    console.log("In deletePageRecursiveInternal for ", page.title);
    if (page.children && page.children.page && page.children.page.results) {
      page.children.page.results.forEach( function (child) {
        childrenPromises.push(deletePageRecursiveInternal(child.id));
      });
    }
    // when all children are deleted
    return $.when.apply($,childrenPromises)
    // delete the current page
    .then( function() {
      return deletePageById(pageId);
    });
  });
}

/**
* Get a page by spaceKey and title from Confluence and returns a deferred for that page.
* See $.ajax().done()
* Failures are logged and ignored.
* The deferred is resolved with the first matching page is any, else it is rejected.
*/
export function getContent(spaceKey,pageTitle,expand) {
  var expandParam="";
  if (expand) {
    expandParam = '&expand='+encodeURIComponent(expand);
  }
  var defer = $.Deferred();
  var url = '/rest/api/content?type=page&spaceKey='+encodeURIComponent(spaceKey)+'&limit=1&title=' + encodeURIComponent(pageTitle) + expandParam;
  console.log(url);
  proxy.ajax(url)
  .done( function (response) {
    console.log("Filtering AJAX response",response);
    if (response.results && response.results.length>0) {
      var page = response.results[0];
      console.log("Returning ",page);
      defer.resolve(page);
    } else {
      defer.reject("Page Not found: '"+spaceKey+":"+pageTitle+"'");
    }
  })
  .fail( function (jqr, status, error) {
    defer.reject(status, error, jqr);
  });
  return defer.promise();
}

export function getContentById(pageId, expand) {
  var expandParam="";
  if (expand) {
    expandParam = '?expand='+encodeURIComponent(expand);
  }
  var url = '/rest/api/content/'+encodeURIComponent(pageId) + expandParam;
  console.log(url);
  return proxy.ajax(url)
  .fail(errorLogger( "GET page by pageId failed"));
}

/** search for content with CQL
for example https://wiki.hybris.com/rest/api/content/search?cql=label=customer%20and%20type=%22page%22%20and%20space=%22ps%22 */
export function searchPagesWithCQL(spaceKey, cqlQuery, limit, expand) {
  if (!limit || limit<0) {
    limit=15;
  }
  var expandParam=(expand?"&expand="+encodeURIComponent(expand):"");
  return proxy.ajax('/rest/api/content/search?limit='+encodeURIComponent(limit)+'&cql='+encodeURIComponent(cqlQuery+' and type=page and space=\''+spaceKey+'\'')+expandParam);
}

/**
* Copy the page "fromPageTitle" (without its descendants) under the page "toPageTitle",
* and do a placeholder replacement in each page title using the titleReplacements.
*/
export function copyPage(fromSpaceKey, fromPageTitle, toSpaceKey, toPageTitle, titleReplacements) {
  return getContent(fromSpaceKey, fromPageTitle, 'space,body.storage')
  .then(function(pageToCopy) {
    transformPage(pageToCopy, titleReplacements);
    // Create the new page under toPageTitle
    return createPage(pageToCopy,toSpaceKey,toPageTitle);
  }
  );
}

function transformPage(page, replacements) {
  console.log("Found page to Copy",page);
  page.title = replacePlaceholders(page.title,replacements);
  console.log("New Title for target page: "+page.title);
  if (typeof replacements!=='string') {
    page.body.storage.value = replacePlaceholders(page.body.storage.value,replacements);
  }
}

export function copyPageRecursive(fromSpaceKey, fromPageTitle, toSpaceKey, toPageTitle, filter, titleReplacements, copiedPages) {
  var sourcePagePromise = getContent(fromSpaceKey, fromPageTitle);
  var targetPagePromise = getContent(toSpaceKey,toPageTitle, 'space');
  return $.when( sourcePagePromise, targetPagePromise )
  .then(function(sourcePage, targetPage) {
    return copyPageRecursiveInternal( sourcePage.id, targetPage.space.key, targetPage.id, filter, titleReplacements, copiedPages);
  });
}

function copyPageRecursiveInternal(sourcePageId, targetSpaceKey, targetPageId, filter, titleReplacements, copiedPages) {
  return getContentById(sourcePageId, 'space,body.storage,children.page')
  .then(function (pageToCopy) {
    if (filter(pageToCopy)) {
      transformPage(pageToCopy, titleReplacements);

      // Create the new page under targetSpaceKey:targetPageId
      return createPageUnderPageId(pageToCopy,targetSpaceKey,targetPageId)
        .then( function(copiedPage) {
          copiedPages.push(copiedPage);
          return copyAllChildren(pageToCopy, targetSpaceKey, copiedPage.id, filter, titleReplacements,copiedPages);
        });
    } else {
      console.log("Page is not a template, not copied, but children will be copied: ",pageToCopy.title);
      return copyAllChildren(pageToCopy, targetSpaceKey, targetPageId, filter, titleReplacements,copiedPages);
    }

  })
}

function copyAllChildren(pageToCopy, targetSpaceKey, targetPageId, filter, titleReplacements, copiedPages) {
  // recursively copy all children
  var childrenPromises = [];
  console.log("In copyAllChildren", pageToCopy,targetPageId);
  if (pageToCopy.children && pageToCopy.children.page && pageToCopy.children.page.results) {
    pageToCopy.children.page.results.forEach( function (child) {
      childrenPromises.push(copyPageRecursiveInternal(child.id, targetSpaceKey, targetPageId, filter, titleReplacements,copiedPages));
    });
  }
  // return the combination of all children copy promises
  return $.when.apply($,childrenPromises);
}

// returns a function that will log all the arguments on the console as an error, preprended with a message.
function errorLogger(message) {
  return function() {
    console.error(message,arguments);
  }
}
/** if replacements is not provided, returns the template.
if replacements is a simple string, returns that string
if replacements is a map, for each (key,value) pair in the map, replaces [key] placeholders with value. */
function replacePlaceholders(template, replacements) {
  if (typeof replacements === undefined) return template;
  if (typeof replacements === 'string') return replacements;
  var result = template;
  for (var key in replacements) {
    if (replacements.hasOwnProperty(key)) {
      var varStr = '['+key+']';
      if (result.indexOf(varStr) == -1) {
        console.warn(varStr + " is not used in template",template);
      }
      var result = result.split(varStr).join(replacements[key]);
    }
  }
  if (result.indexOf('[')!=-1) {
    console.warn("title still has uninterpolated variables",result);
  }
  return result;
}

export function createPage(page, targetSpaceKey, targetParentTitle) {
  return getContent(targetSpaceKey,targetParentTitle,'space')
  .then(function(targetParentPage) {
    console.log("targetParentPage: space=",targetParentPage.space.key, "id=", targetParentPage.id, "title=", targetParentPage.title);
    return createPageUnderPageId(page, targetParentPage.space.key, targetParentPage.id);
  });
}

export function createPageUnderPageId(page, targetSpaceKey, targetPageId) {
  page.ancestors=[ { id: targetPageId } ];
  console.log("New Page",page);
  page.space={ key: targetSpaceKey };
  return postPageRateLimited(page);
}

var postPageRateLimited = rateLimit(postPage, MAX_WIKI_PAGE_CREATION_RATE);
function postPage(page) {
  return proxy.ajax(
    {
      url: '/rest/api/content',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(page)
    }).fail( errorLogger( "POST new page failed" ));
}

export function updateContent(page) {
    return proxy.ajax(
      {
        url: '/rest/api/content/'+encodeURIComponent(page.id),
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(page)
      }).fail( errorLogger( "PUT page failed "+page.title ));
  }

/** label can be a string or an array of strings to add as labels to the confluence PageId */
export function addLabel(pageId, label) {
  var labels = [];
  if (!label) return;
  if (typeof label === "string") {
    labels.push({"prefix": "global","name": label});
  } else if (label.length) {
    for (var i=0;i<label.length;i++) {
      if (label[i]) {
        labels.push({"prefix": "global","name": label[i]});
      }
    }
  } else {
    throw "Unknown type of label: "+label;
  }
  return proxy.ajax(
    {
      url: '/rest/api/content/'+encodeURIComponent(pageId)+'/label',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(labels)
    }).fail( errorLogger( "ADD label to page "+pageId+" failed" ));
}
