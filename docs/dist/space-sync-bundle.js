/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/ywiki-plugins/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/mainframe/spaceSyncPlugin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/common/config.js":
/*!*****************************!*\
  !*** ./js/common/config.js ***!
  \*****************************/
/*! exports provided: DEFAULT_JIRA_COLUMNS, DEFAULT_JIRA_ISSUE_COUNT, MAIN_JIRA_LABEL, TAGS_FIELD, WIKI_HOST, MAX_WIKI_PAGE_CREATION_RATE, SINGLE_WORKSPACE_PAGE_REDIRECT_DELAY, PREFIX, PREFERRED_REGION_KEY, DEFAULT_PROJECT_DOCUMENTATION_ROOT_PAGE, CISTATS_DATA_PAGE, DEFAULT_CUSTOMER_PAGE_TEMPLATE, XSLT_ENDPOINT_URL, PROP_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_JIRA_COLUMNS", function() { return DEFAULT_JIRA_COLUMNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_JIRA_ISSUE_COUNT", function() { return DEFAULT_JIRA_ISSUE_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAIN_JIRA_LABEL", function() { return MAIN_JIRA_LABEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAGS_FIELD", function() { return TAGS_FIELD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIKI_HOST", function() { return WIKI_HOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_WIKI_PAGE_CREATION_RATE", function() { return MAX_WIKI_PAGE_CREATION_RATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SINGLE_WORKSPACE_PAGE_REDIRECT_DELAY", function() { return SINGLE_WORKSPACE_PAGE_REDIRECT_DELAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREFIX", function() { return PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREFERRED_REGION_KEY", function() { return PREFERRED_REGION_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PROJECT_DOCUMENTATION_ROOT_PAGE", function() { return DEFAULT_PROJECT_DOCUMENTATION_ROOT_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CISTATS_DATA_PAGE", function() { return CISTATS_DATA_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CUSTOMER_PAGE_TEMPLATE", function() { return DEFAULT_CUSTOMER_PAGE_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XSLT_ENDPOINT_URL", function() { return XSLT_ENDPOINT_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROP_KEY", function() { return PROP_KEY; });
const DEFAULT_JIRA_COLUMNS = 'key,summary,created,priority,status';
const DEFAULT_JIRA_ISSUE_COUNT = 10;
const MAIN_JIRA_LABEL = "CI";
const TAGS_FIELD = "customfield_10032";
const WIKI_HOST = 'wiki.hybris.com';
const MAX_WIKI_PAGE_CREATION_RATE = 50; // (in millis) The wiki seems to have trouble handling too fast page creations, when there are more than 10 of them or so, so we are limiting the rate
const SINGLE_WORKSPACE_PAGE_REDIRECT_DELAY = 500; // (in millis) for ESPLM-846
const PREFIX = "ywiki-plugins.";
const PREFERRED_REGION_KEY = "preferred.region";
const DEFAULT_PROJECT_DOCUMENTATION_ROOT_PAGE = 'Project Documentation';
const CISTATS_DATA_PAGE = 'Continuous Improvement - The Golden Button';
const DEFAULT_CUSTOMER_PAGE_TEMPLATE = '.CI New Project Documentation Template';
const XSLT_ENDPOINT_URL = 'https://bzycrip1eh.execute-api.eu-central-1.amazonaws.com/dev/page/transform';
// export const WIKI_HOST = 'performancewiki2.hybris.com';
const PROP_KEY = 'ysync';

/***/ }),

/***/ "./js/common/confluence/confluence-attachment-async.js":
/*!*************************************************************!*\
  !*** ./js/common/confluence/confluence-attachment-async.js ***!
  \*************************************************************/
/*! exports provided: cloneAttachment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneAttachment", function() { return cloneAttachment; });
/* harmony import */ var _confluence_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confluence-throttle */ "./js/common/confluence/confluence-throttle.js");


const BASE_URL = '/rest/api/content/';

async function cloneAttachment(attachment, targetContainerId, syncTimeStamp) {
    let targetAttachment = await lookupAttachment(targetContainerId, attachment.title);
    let targetAttachmentId = targetAttachment ? targetAttachment.id:null;
    if (syncTimeStamp && targetAttachmentId!=null && (targetAttachmentId !== syncTimeStamp.targetContentId || targetAttachment.version.number !== syncTimeStamp.targetVersion ) ) {
        throw `Attachment ${targetAttachmentId} was modified on target, should we overwrite?`;
    }
    if (syncTimeStamp && targetAttachmentId!=null && attachment.version.number === syncTimeStamp.sourceVersion) {
        console.log(`attachment ${targetAttachmentId} was already up-to-date, synced with source version ${attachment.version.number}`);
        return targetAttachment;
    } else {
        return clone(attachment._links.download, targetContainerId, attachment.title, targetAttachmentId);
    }
}

async function lookupAttachment(containerId, attachmentTitle) {
    let results = await $.get(BASE_URL+`${containerId}/child/attachment?filename=${attachmentTitle}&expand=space,version,container`);
    if (results && results.results && results.results.length) {
        return results.results[0];
    } else {
        return null;
    }
}

async function clone(attachmentUrl, targetContainerId, title, /* optional */ targetId) {
    let blobData = await loadBlob(attachmentUrl);
    let attachment = JSON.parse(await storeBlob(targetContainerId, blobData, title, targetId));
    if (attachment.results && attachment.results instanceof Array ) {
        // the attachment API returns an array
        attachment = attachment.results[0]; 
    } 
    // populate the space.key to save a GET, since we need it to store the sync timestamp
    if (!attachment.space) {
        attachment.space = {
            key: attachment._expandable.space.replace(/.*\//,'')
        };
    }
    return attachment;
}

/** 
 * ContentId is mandatory when updating an existing attachment, and must be omitted when
 * creating a new attachment.
 */
async function storeBlob(containerId, blobData, title, /* optional */ contentId) {
    let url = BASE_URL;
    url += containerId;
    url += '/child/attachment';
    if (contentId) {
        url += '/' + contentId + '/data';
    }
    let formData = new FormData();
    formData.append('file', blobData, title);
    formData.append('minorEdit', 'true');
    return Object(_confluence_throttle__WEBPACK_IMPORTED_MODULE_0__["throttleWrite"])( () => postBinary(url, formData));
}



async function loadBlob(url) {
    return Object(_confluence_throttle__WEBPACK_IMPORTED_MODULE_0__["throttleRead"])( () => loadBinary(url) );
}

async function postBinary(url, formData) {
    return new Promise( (resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.onerror = reject;
        xhr.setRequestHeader('X-Atlassian-Token','nocheck');
        xhr.onload = function (e) {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                reject(`Could not POST to ${url}: ${this.status} ${this.statusText}, details: ${this.responseText}`);
            }
        };
        xhr.send(formData);
    });
}
async function loadBinary(url) {
    return new Promise( (resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'blob';
        xhr.onerror = reject;
        xhr.onload = function(e) {
          if (this.status == 200) {
            // get binary data as a response
            let blob = this.response;
            resolve(blob);
          } else {
            reject(e);
          }
        };
        xhr.send();
    });
}

/***/ }),

/***/ "./js/common/confluence/confluence-page-async.js":
/*!*******************************************************!*\
  !*** ./js/common/confluence/confluence-page-async.js ***!
  \*******************************************************/
/*! exports provided: movePages, movePagesById, getContent, getContentById, searchPagesWithCQL, copyPage, copyPageToSpace, createPageFromTemplate, copyPageRecursive, copyPageRecursiveInternal, copyAllChildren, createPage, createPageUnderPageId, postPage, updateContent, getPageTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movePages", function() { return movePages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movePagesById", function() { return movePagesById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContent", function() { return getContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContentById", function() { return getContentById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchPagesWithCQL", function() { return searchPagesWithCQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyPage", function() { return copyPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyPageToSpace", function() { return copyPageToSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPageFromTemplate", function() { return createPageFromTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyPageRecursive", function() { return copyPageRecursive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyPageRecursiveInternal", function() { return copyPageRecursiveInternal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyAllChildren", function() { return copyAllChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPage", function() { return createPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPageUnderPageId", function() { return createPageUnderPageId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postPage", function() { return postPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateContent", function() { return updateContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageTree", function() { return getPageTree; });
/* harmony import */ var _confluence_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confluence-throttle */ "./js/common/confluence/confluence-throttle.js");


async function movePages(sourceSpaceKey, sourcePageTitle,targetSpaceKey, targetParentTitle) {
  var sourcePage = await getContent(sourceSpaceKey, sourcePageTitle);
  return await movePagesById( sourcePage.id, targetSpaceKey, targetParentTitle );
}
function getAtlToken() {
  return $('meta[name=ajs-atl-token]').attr("content");
}

async function movePagesById (sourcePageId, targetSpaceKey, target) {
  return await Object(_confluence_throttle__WEBPACK_IMPORTED_MODULE_0__["throttleWrite"])( async () => {
    let targetParentTitle;
    if (Number.isInteger(Number(target))) {
      let targetParent = await getContentById(Number(target));
      targetParentTitle = targetParent.title;
    } else {
      targetParentTitle = target;
    }
    if (!targetParentTitle) throw 'targetParentTitle is mandatory (for source '+sourcePageId+' and target '+target+')';
    var url = '/pages/movepage.action?pageId='+encodeURIComponent(sourcePageId)+'&spaceKey='+encodeURIComponent(targetSpaceKey)+'&targetTitle='+encodeURIComponent(targetParentTitle)+'&position=append&atl_token='+getAtlToken()+'&_='+Math.random();
    console.log("Moving page ",sourcePageId," under ",targetSpaceKey+":"+ targetParentTitle, url);
    let resp = await $.ajax(url);
    if (typeof resp === 'string' && resp.indexOf('Not Permitted'>=0)) {
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
async function getContent(spaceKey,pageTitle,expand) {
  var expandParam="";
  if (expand) {
    expandParam = '&expand='+encodeURIComponent(expand);
  }
  var url = '/rest/api/content?type=page&spaceKey='+encodeURIComponent(spaceKey)+'&limit=1&title=' + encodeURIComponent(pageTitle) + expandParam;
  console.log("Getting page content from " + url);
  var response = await $.ajax(url);
  console.log("Filtering AJAX response",response);
  if (response.results && response.results.length>0) {
    var page = response.results[0];
    console.log("Returning ",page);
    return page;
  } else {
    throw "Page Not found: '"+spaceKey+":"+pageTitle+"'";
  }
}

async function getContentById(pageId, expand) {
  var expandParam="";
  if (expand) {
    expandParam = '?expand='+encodeURIComponent(expand);
  }
  var url = '/rest/api/content/'+encodeURIComponent(pageId) + expandParam;
  console.log(url);
  return await $.ajax(url);
}
 
/** search for content with CQL
for example https://wiki.hybris.com/rest/api/content/search?cql=label=customer%20and%20type=%22page%22%20and%20space=%22ps%22 */
async function searchPagesWithCQL(spaceKey, cqlQuery, limit, expand) {
  if (!limit || limit<0) {
    limit=15;
  }
  var expandParam=(expand?"&expand="+encodeURIComponent(expand):"");
  return await $.ajax('/rest/api/content/search?limit='+encodeURIComponent(limit)+'&cql='+encodeURIComponent(cqlQuery+' and type=page and space=\''+spaceKey+'\'')+expandParam);
}

/**
* Copy the page "fromPageTitle" (without its descendants) under the page "toPageTitle",
* and do a placeholder replacement the page title using the templateProcessor.
*/
async function copyPage(fromSpaceKey, fromPageTitle, toSpaceKey, toPageTitle, templateProcessor) {
  var pageToCopy = await getContent(fromSpaceKey, fromPageTitle, 'space,body.storage,metadata.labels');
  await templateProcessor.transformPage(pageToCopy);
  // Create the new page under toPageTitle
  return await createPage(pageToCopy,toSpaceKey,toPageTitle);
}

async function copyPageToSpace(sourcePageId, targetSpaceKey, targetParentId) {
  let pageToCopy = await getContentById(sourcePageId, 'space,body.storage,metadata.labels');
  try {
    return await getContent(targetSpaceKey, pageToCopy.title);
    // if it exists, do nothing
  } catch (err) {
    // Create the new page 
    return await createPageUnderPageId(pageToCopy,targetSpaceKey,targetParentId);
  }
}

async function createPageFromTemplate(templateSpace, templateTitle, targetSpaceKey, targetPageId, templateProcessor) {
  var pageToCopy = await getContent(templateSpace, templateTitle, 'space,body.storage,metadata.labels');
  //var parentPage = await getContentById(targetPageId, 'space');
  await templateProcessor.transformPage(pageToCopy);
  // Create the new page under toPageTitle
  return await createPageUnderPageId(pageToCopy,targetSpaceKey,targetPageId);
}

async function copyPageRecursive(fromSpaceKey, fromPageTitle, toSpaceKey, toPageTitle, templateProcessor, copiedPages) {
  var sourcePagePromise = getContent(fromSpaceKey, fromPageTitle);
  var targetPagePromise = getContent(toSpaceKey,toPageTitle, 'space');
  var pages = await Promise.all(sourcePagePromise,targetPagePromise);
  return await copyPageRecursiveInternal( pages[0].id, pages[1].space.key, pages[1].id, templateProcessor, copiedPages);
}

async function copyPageRecursiveInternal(sourcePageId, targetSpaceKey, targetPageId, templateProcessor, copiedPages) {
  var pageToCopy = await getContentById(sourcePageId, 'space,body.storage,children.page,metadata.labels');
  if (templateProcessor.isApplicableTemplatePage(pageToCopy)) {
    await templateProcessor.transformPage(pageToCopy);

    // Create the new page under targetSpaceKey:targetPageId
    var copiedPage = await createPageUnderPageId(pageToCopy,targetSpaceKey,targetPageId);
    copiedPages.push(copiedPage);
    return await copyAllChildren(pageToCopy, targetSpaceKey, copiedPage.id, templateProcessor, copiedPages);
  } else {
    console.log("Page is not a template, not copied, but children will be copied: ",pageToCopy.title);
    return await copyAllChildren(pageToCopy, targetSpaceKey, targetPageId, templateProcessor, copiedPages);
  }
}

async function copyAllChildren(pageToCopy, targetSpaceKey, targetPageId, templateProcessor, copiedPages) {
  // recursively copy all children
  var copiedChildren = [];
  console.log("In copyAllChildren", pageToCopy,targetPageId);
  if (pageToCopy.children && pageToCopy.children.page && pageToCopy.children.page.results) {
    for (let child of pageToCopy.children.page.results) {
      copiedChildren.push(await copyPageRecursiveInternal(child.id, targetSpaceKey, targetPageId, templateProcessor, copiedPages));
    }
  }
  return copiedChildren;
}

async function createPage(page, targetSpaceKey, targetParentTitle) {
  var targetParentPage = await getContent(targetSpaceKey,targetParentTitle,'space');
  console.log("targetParentPage: space=",targetParentPage.space.key, "id=", targetParentPage.id, "title=", targetParentPage.title);
  return await createPageUnderPageId(page, targetParentPage.space.key, targetParentPage.id);
}

async function createPageUnderPageId(page, targetSpaceKey, targetPageId) {
  page.ancestors=[ { id: targetPageId } ];
  console.log("New Page",page);
  page.space={ key: targetSpaceKey };
  return await postPage(page);
}

async function postPage(page) {
  return await Object(_confluence_throttle__WEBPACK_IMPORTED_MODULE_0__["throttleWrite"])( async () => await $.ajax(
    {
      url: '/rest/api/content',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(page)
    }
  ));
}

async function updateContent(page) {
  return await Object(_confluence_throttle__WEBPACK_IMPORTED_MODULE_0__["throttleWrite"])( async () => await $.ajax(
    {
      url: '/rest/api/content/'+encodeURIComponent(page.id),
      type: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify(page)
    }
  ));
}

async function getPageTree( pageId, parentId, parentTitle, counter ) {
  console.log(`Queueing getContentById for ${pageId}`);
  var pageAndChildren = await Object(_confluence_throttle__WEBPACK_IMPORTED_MODULE_0__["throttleRead"])(() => getContentById(pageId, 'history.lastUpdated,children.page,metadata.labels'));
  counter.pages++;
  if (counter.pages%100 == 0) console.log(`Found ${counter.pages} pages so far...`);
  var childrenP = [];
  var childrenPages = pageAndChildren.children.page;
  while (childrenPages && childrenPages.size>0) {
    for (let child of childrenPages.results) {
      childrenP.push(getPageTree(child.id, pageId, pageAndChildren.title, counter));
    }
    // get next page if any
    if (childrenPages._links.next) {
      console.log(`Queueing GET next page of children for ${pageAndChildren.title}: ${childrenPages._links.next}`);
      childrenPages = await Object(_confluence_throttle__WEBPACK_IMPORTED_MODULE_0__["throttleRead"])(() => $.ajax(childrenPages._links.next));
    } else {
      childrenPages=false;
    }
  }

  return {
    title: pageAndChildren.title,
    id: pageId,
    lastUpdated: new Date(pageAndChildren.history.lastUpdated.when),
    createdDate: new Date(pageAndChildren.history.createdDate),
    parentId: parentId,
    parentTitle: parentTitle,
    children: await Promise.all(childrenP),
    labels: Array.prototype.map.call(pageAndChildren.metadata.labels.results, l=>l.name)
  };
}

/***/ }),

/***/ "./js/common/confluence/confluence-properties-async.js":
/*!*************************************************************!*\
  !*** ./js/common/confluence/confluence-properties-async.js ***!
  \*************************************************************/
/*! exports provided: load, create, update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony import */ var _confluence_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confluence-throttle */ "./js/common/confluence/confluence-throttle.js");


const BASE_URL = '/rest/api/content/';

async function load(contentId, key)  {
    let url = BASE_URL + `${contentId}/property/${key}`; 
    return $.get(url);
}

async function create(contentId, propertyData)  {
    let url = BASE_URL + `${contentId}/property`; 
    return $.ajax({
        url: url, 
        contentType: "application/json;charset=UTF-8",
        type: "POST",
        data: JSON.stringify( propertyData )
    });
}

async function update(contentId, propertyData)  {
    let url = BASE_URL + `${contentId}/property/${propertyData.key}`; 
    return $.ajax({
        url: url, 
        contentType: "application/json;charset=UTF-8",
        type: "PUT",
        data: JSON.stringify( propertyData )
    });
}


/***/ }),

/***/ "./js/common/confluence/confluence-properties-service.js":
/*!***************************************************************!*\
  !*** ./js/common/confluence/confluence-properties-service.js ***!
  \***************************************************************/
/*! exports provided: getPropertyValue, setPropertyValue, doWithPropertyValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropertyValue", function() { return getPropertyValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPropertyValue", function() { return setPropertyValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doWithPropertyValue", function() { return doWithPropertyValue; });
/* harmony import */ var _confluence_properties_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confluence-properties-async */ "./js/common/confluence/confluence-properties-async.js");


async function getPropertyValue(contentId, key) {
    try {
        return (await Object(_confluence_properties_async__WEBPACK_IMPORTED_MODULE_0__["load"])(contentId, key)).value;
    } catch (err) {
        return null;
    }
}

async function setPropertyValue(contentId, key, value) {
    let propertyData = {
        id: null,
        key: key,
        version: {
            minorEdit: true,
            number: null
        },
        value: value
    };

    try {
        let existingProperty = await Object(_confluence_properties_async__WEBPACK_IMPORTED_MODULE_0__["load"])(contentId, key);
        propertyData.id = existingProperty.id;
        propertyData.version.number = existingProperty.version.number+1;
    } catch (err) {
        // ignore, it just means the property does not exist yet
    }
    if (propertyData.id) {
        Object(_confluence_properties_async__WEBPACK_IMPORTED_MODULE_0__["update"])(contentId, propertyData);
    } else {
        Object(_confluence_properties_async__WEBPACK_IMPORTED_MODULE_0__["create"])(contentId, propertyData);
    }
}

/**
 * updateCallback: function(propertyData)=>void
 */
async function doWithPropertyValue(contentId, key, updateCallback) {
    let propertyData;
    try {
        propertyData = await Object(_confluence_properties_async__WEBPACK_IMPORTED_MODULE_0__["load"])(contentId, key);
        propertyData.version.number++;
    } catch (err) {
        propertyData = {
            id: null,
            key: key,
            version: {
                minorEdit: true,
                number: null
            },
            value: {}
        };
    }
    await updateCallback(propertyData.value);
    if (propertyData.id) {
        Object(_confluence_properties_async__WEBPACK_IMPORTED_MODULE_0__["update"])(contentId, propertyData);
    } else {
        Object(_confluence_properties_async__WEBPACK_IMPORTED_MODULE_0__["create"])(contentId, propertyData);
    }
}


/***/ }),

/***/ "./js/common/confluence/confluence-throttle.js":
/*!*****************************************************!*\
  !*** ./js/common/confluence/confluence-throttle.js ***!
  \*****************************************************/
/*! exports provided: throttleRead, throttleWrite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttleRead", function() { return throttleRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttleWrite", function() { return throttleWrite; });
const MAX_PARALLEL_READ = 3;
const MAX_PARALLEL_WRITE = 1;
const throttleRead = __webpack_require__(/*! throat */ "./node_modules/throat/index.js")(MAX_PARALLEL_READ);
const throttleWrite = __webpack_require__(/*! throat */ "./node_modules/throat/index.js")(MAX_PARALLEL_WRITE);


/***/ }),

/***/ "./js/common/confluence/content-sync-service.js":
/*!******************************************************!*\
  !*** ./js/common/confluence/content-sync-service.js ***!
  \******************************************************/
/*! exports provided: syncPageToSpace, syncSubTreeToSpace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syncPageToSpace", function() { return syncPageToSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syncSubTreeToSpace", function() { return syncSubTreeToSpace; });
/* harmony import */ var _confluence_page_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confluence-page-async */ "./js/common/confluence/confluence-page-async.js");
/* harmony import */ var _confluence_attachment_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confluence-attachment-async */ "./js/common/confluence/confluence-attachment-async.js");
/* harmony import */ var _confluence_properties_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confluence-properties-service */ "./js/common/confluence/confluence-properties-service.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./js/common/config.js");





/** 
 * Synchronizes a single page between spaces, with or without attachments.
 * If the page doesn't exist in the target, it is created under targetParentId.
 */
async function syncPageToSpace(sourcePageId, targetSpaceKey, targetParentId, syncAttachments) {
    let pageToCopy = await Object(_confluence_page_async__WEBPACK_IMPORTED_MODULE_0__["getContentById"])(sourcePageId, 'version,space,body.storage,metadata.labels,children.attachment.version,children.attachment.space');
    let targetPage;
    let syncProp = await Object(_confluence_properties_service__WEBPACK_IMPORTED_MODULE_2__["getPropertyValue"])(sourcePageId, _config__WEBPACK_IMPORTED_MODULE_3__["PROP_KEY"]);
    if (syncProp && syncProp.syncTargets && syncProp.syncTargets[targetSpaceKey]) {
      let syncTimeStamp = syncProp.syncTargets[targetSpaceKey];
      try {
        targetPage = await Object(_confluence_page_async__WEBPACK_IMPORTED_MODULE_0__["getContentById"])(syncTimeStamp.targetContentId, 'version,metadata.labels');
        // TODO filter links
        await updateContentIfNecessary(pageToCopy, targetPage, syncTimeStamp);
      } catch (err) {
        // the last synced target page was removed, we will recreate
      }
    }
    if (!targetPage) {
      try {
        targetPage = await Object(_confluence_page_async__WEBPACK_IMPORTED_MODULE_0__["getContent"])(targetSpaceKey, pageToCopy.title, 'version,metadata.labels');
        // Do a full initial sync
        // TODO filter links
        await updateContentIfNecessary(pageToCopy, targetPage);
      } catch (err) {
        // Create the new page 
        // TODO filter links
        targetPage = await Object(_confluence_page_async__WEBPACK_IMPORTED_MODULE_0__["createPageUnderPageId"])(pageToCopy,targetSpaceKey,targetParentId);
      }
    }
    await setSyncTimeStamps(pageToCopy, targetPage, pageToCopy.space.key, targetSpaceKey);

    if (syncAttachments) {
      let synced = await syncAttachmentsToContainer(pageToCopy.children.attachment, targetPage.id, targetSpaceKey);
      console.log(`${synced.length} attachments synced for ${pageToCopy.title}`);
    }

    return targetPage;
}

async function updateContentIfNecessary(sourcePage, targetPage, syncTimeStamp) {
  if (syncTimeStamp && targetPage.version.number !== syncTimeStamp.targetVersion) {
    throw `targetPage was modified after sync, should we overwrite? ${targetPage.title}`;
  }
  if (syncTimeStamp && sourcePage.version.number === syncTimeStamp.sourceVersion) {
    console.log(`page ${targetPage.title} was already up-to-date, synced with source version ${sourcePage.version.number}`);
    // TODO update labels even if not modified
  } else {
    targetPage.version.number++;
    targetPage.body = targetPage.body || {};
    targetPage.body.storage = sourcePage.body.storage; // TODO filtering
    targetPage.title = sourcePage.title;
    targetPage.metadata.labels = sourcePage.metadata.labels;
    await Object(_confluence_page_async__WEBPACK_IMPORTED_MODULE_0__["updateContent"])(targetPage);
  }
}

async function setSyncTimeStamps(srcContent, targetContent, souceSpace, targetSpace) {
  let syncTime = new Date();
  let syncTimeStamp = {
    sourceContentId : srcContent.id,
    targetContentId : targetContent.id,
    sourceVersion: srcContent.version.number,
    targetVersion: targetContent.version.number,
    syncTime: syncTime
  };
  await Object(_confluence_properties_service__WEBPACK_IMPORTED_MODULE_2__["doWithPropertyValue"])(srcContent.id, _config__WEBPACK_IMPORTED_MODULE_3__["PROP_KEY"], function(value) {
    if (value.syncTargets) {
      console.log("Previous value on source item: syncTargets: ",value.syncTargets);
    } else {
      value.syncTargets = {};
    }
    value.syncTargets[targetSpace] = syncTimeStamp;
  });
  await Object(_confluence_properties_service__WEBPACK_IMPORTED_MODULE_2__["doWithPropertyValue"])(targetContent.id, _config__WEBPACK_IMPORTED_MODULE_3__["PROP_KEY"], function(value) {
    if (value.syncSources) {
      console.log("Previous value on target item: syncSources: ",value.syncSources);
    } else {
      value.syncSources = {};
    }
    value.syncSources[souceSpace] = syncTimeStamp;
  });
}

async function syncSubTreeToSpace(sourcePageId, targetSpaceKey) {
  let subTreeRoot = await Object(_confluence_page_async__WEBPACK_IMPORTED_MODULE_0__["getContentById"])(sourcePageId, 'space,ancestors');
}

async function syncAttachmentsToContainer(attachments, targetContainerId, targetSpaceKey) {
  const synced = [];
  for (let attachment of attachments.results) {

    let syncProp = await Object(_confluence_properties_service__WEBPACK_IMPORTED_MODULE_2__["getPropertyValue"])(attachment.id, _config__WEBPACK_IMPORTED_MODULE_3__["PROP_KEY"]);
    let syncTimeStamp=null;
    if (syncProp && syncProp.syncTargets && syncProp.syncTargets[targetSpaceKey]) {
      syncTimeStamp = syncProp.syncTargets[targetSpaceKey];
    }
    let cloned = await Object(_confluence_attachment_async__WEBPACK_IMPORTED_MODULE_1__["cloneAttachment"])(attachment, targetContainerId, syncTimeStamp);
    await setSyncTimeStamps(attachment, cloned, attachment.space.key, cloned.space.key);
    synced.push(cloned);
  }
  if (attachments._links.next) {
    console.log("More than 25 attachments, loading next page");
    let nextBatch = await syncAttachmentsToContainer(await $.get(attachments._links.next + "&expand=space,version"), targetContainerId, targetSpaceKey);
    return [].concat(synced, nextBatch);
  } else {
    return synced;
  }
}

/***/ }),

/***/ "./js/mainframe/spaceSyncPlugin.js":
/*!*****************************************!*\
  !*** ./js/mainframe/spaceSyncPlugin.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_confluence_content_sync_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/confluence/content-sync-service */ "./js/common/confluence/content-sync-service.js");
/* harmony import */ var _common_confluence_confluence_page_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/confluence/confluence-page-async */ "./js/common/confluence/confluence-page-async.js");



/*

Source Space Key: <input id="sourceSpaceKey" value="ps" /><br>
Target Space Key: <input id="targetSpaceKey" value="~adrien.missemer@hybris.com" /><br>
Target Parent Page: <input id="targetParentPage" value="Tests" /><br>
Source Page Title: <input id="sourcePageTitle" value="Test Adrien With Attachments" /><br>
<input type="button" id="copyBtn" value="Copy"/>
<br>
<textarea id="output" style="width: 100%; height: 100px;"></textarea>
<br>
Result page: 
<div id="resultPage"></div>
<script src="http://localhost/ywiki-plugins/dist/space-sync-bundle.js"></script>
*/
console.log("jquery binding");
$("#copyBtn").click(async () => {
    try {
        let sourceSpaceKey = $("#sourceSpaceKey").val();
        let targetSpaceKey = $("#targetSpaceKey").val();
        let targetParentPage = $("#targetParentPage").val();
        let sourcePageTitle = $("#sourcePageTitle").val();
        output();
        output(`Syncing ${sourcePageTitle} to ${targetSpaceKey}...`);
        let sourcePage = await Object(_common_confluence_confluence_page_async__WEBPACK_IMPORTED_MODULE_1__["getContent"])(sourceSpaceKey,sourcePageTitle);
        let targetParent = await Object(_common_confluence_confluence_page_async__WEBPACK_IMPORTED_MODULE_1__["getContent"])(targetSpaceKey,targetParentPage);
        let syncedPage = await Object(_common_confluence_content_sync_service__WEBPACK_IMPORTED_MODULE_0__["syncPageToSpace"])(sourcePage.id, targetSpaceKey, targetParent.id, true);
        output("Done");
        $("#resultPage").html(`<a href="https://wiki.hybris.com/pages/viewpage.action?pageId=${syncedPage.id}">${syncedPage.title}</a>`);
    } catch (err) {
        output(err);
    }
});

const OUT = $("#output");

function output(txt) {
    if (txt === undefined || txt === null) {
        OUT.text("");
    } else {
        OUT.text(OUT.text() + txt + '\n');
    }
}

/***/ }),

/***/ "./node_modules/throat/index.js":
/*!**************************************!*\
  !*** ./node_modules/throat/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (PromiseArgument) {
  var Promise;
  function throat(size, fn) {
    var queue = new Queue();
    function run(fn, self, args) {
      if (size) {
        size--;
        var result = new Promise(function (resolve) {
          resolve(fn.apply(self, args));
        });
        result.then(release, release);
        return result;
      } else {
        return new Promise(function (resolve) {
          queue.push(new Delayed(resolve, fn, self, args));
        });
      }
    }
    function release() {
      size++;
      if (!queue.isEmpty()) {
        var next = queue.shift();
        next.resolve(run(next.fn, next.self, next.args));
      }
    }
    if (typeof size === 'function') {
      var temp = fn;
      fn = size;
      size = temp;
    }
    if (typeof size !== 'number') {
      throw new TypeError(
        'Expected throat size to be a number but got ' + typeof size
      );
    }
    if (fn !== undefined && typeof fn !== 'function') {
      throw new TypeError(
        'Expected throat fn to be a function but got ' + typeof fn
      );
    }
    if (typeof fn === 'function') {
      return function () {
        var args = [];
        for (var i = 0; i < arguments.length; i++) {
          args.push(arguments[i]);
        }
        return run(fn, this, args);
      };
    } else {
      return function (fn) {
        if (typeof fn !== 'function') {
          throw new TypeError(
            'Expected throat fn to be a function but got ' + typeof fn
          );
        }
        var args = [];
        for (var i = 1; i < arguments.length; i++) {
          args.push(arguments[i]);
        }
        return run(fn, this, args);
      };
    }
  }
  if (arguments.length === 1 && typeof PromiseArgument === 'function') {
    Promise = PromiseArgument;
    return throat;
  } else {
    Promise = module.exports.Promise;
    if (typeof Promise !== 'function') {
      throw new Error(
        'You must provide a Promise polyfill for this library to work in older environments'
      );
    }
    return throat(arguments[0], arguments[1]);
  }
};

/* istanbul ignore next */
if (typeof Promise === 'function') {
  module.exports.Promise = Promise;
}

function Delayed(resolve, fn, self, args) {
  this.resolve = resolve;
  this.fn = fn;
  this.self = self || null;
  this.args = args;
}

function Queue() {
  this._s1 = [];
  this._s2 = [];
}

Queue.prototype.push = function (value) {
  this._s1.push(value);
};

Queue.prototype.shift = function () {
  var s2 = this._s2;
  if (s2.length === 0) {
    var s1 = this._s1;
    if (s1.length === 0) {
      return;
    }
    this._s1 = s2;
    s2 = this._s2 = s1.reverse();
  }
  return s2.pop();
};

Queue.prototype.isEmpty = function () {
  return !this._s1.length && !this._s2.length;
};


/***/ })

/******/ });
//# sourceMappingURL=space-sync-bundle.js.map