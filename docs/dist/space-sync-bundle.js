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
/*! exports provided: DEFAULT_JIRA_COLUMNS, DEFAULT_JIRA_ISSUE_COUNT, MAIN_JIRA_LABEL, TAGS_FIELD, WIKI_HOST, MAX_WIKI_PAGE_CREATION_RATE, SINGLE_WORKSPACE_PAGE_REDIRECT_DELAY, PREFIX, PREFERRED_REGION_KEY, DEFAULT_PROJECT_DOCUMENTATION_ROOT_PAGE, CISTATS_DATA_PAGE, DEFAULT_CUSTOMER_PAGE_TEMPLATE, XSLT_ENDPOINT_URL, PROP_KEY, DEFAULT_RESTRICTION_GROUP */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RESTRICTION_GROUP", function() { return DEFAULT_RESTRICTION_GROUP; });
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
const DEFAULT_RESTRICTION_GROUP = 'dl sap customer experience all employees (external)';

/***/ }),

/***/ "./js/common/confluence/Page.js":
/*!**************************************!*\
  !*** ./js/common/confluence/Page.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Page(title, body, spaceKey, parentId) {
  this.setTitle(title);
  this.setBody(body);
  this.setSpaceKey(spaceKey);
  this.setParentId(parentId);
  this.type = "page";
};
Page.prototype.toString = function() {
  return JSON.stringify(this);
};
Page.prototype._setId = function(id) {
    this.id=id;
    return this;
}
Page.prototype.setParentId = function(parentId) {
    this.ancestors = [ { id: parentId}];
    return this;
};
Page.prototype.setSpaceKey = function(spaceKey) {
    this.space = {
        key: spaceKey
    };
    return this;
};
Page.prototype.setBody = function(body) {
    this.body = { 
        storage: { 
          representation: "storage",
          value: body
        }
    };
    return this;
};
Page.prototype.setBodyFromPage = function(page) {
    return this.setBody(page.body && page.body.storage ? page.body.storage.value : null);
}
Page.prototype.setTitle = function(title) {
    this.title = title;
    return this;
};
Page.prototype.setVersion = function(versionNumber, message, isMajorEdit) {
    this.version = {
        number: versionNumber,
        minorEdit: true
    };
    if (message) {
        this.version.message = message;
    }
    if (isMajorEdit) {
        this.version.minorEdit = false;
    }
    return this;
}
// static builder
Page.copyFrom = function(page) {
    let spaceKey = page.space ? page.space.key : '';
    let parentId = page.ancestors && page.ancestors.length ? page.ancestors[0].id : 0;
    let body = page.body && page.body.storage ? page.body.storage.value : null;
    return new Page(page.title, body, spaceKey, parentId);
};
Page.newVersionOf = function(page, message, isMajorEdit) {
    return Page.copyFrom(page)._setId(page.id).setVersion(page.version.number+1, message, isMajorEdit);
}
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./js/common/confluence/confluence-page-async.js":
/*!*******************************************************!*\
  !*** ./js/common/confluence/confluence-page-async.js ***!
  \*******************************************************/
/*! exports provided: movePages, movePagesById, getContent, getContentById, searchPagesWithCQL, copyPage, copyPageToSpace, createPageFromTemplate, copyPageRecursive, copyPageRecursiveInternal, copyAllChildren, createPageUnderPageId, postPage, updateContent, getPageTree */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPageUnderPageId", function() { return createPageUnderPageId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postPage", function() { return postPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateContent", function() { return updateContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageTree", function() { return getPageTree; });
/* harmony import */ var _confluence_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confluence-throttle */ "./js/common/confluence/confluence-throttle.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page */ "./js/common/confluence/Page.js");



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
  var response = await Object(_confluence_throttle__WEBPACK_IMPORTED_MODULE_0__["throttleRead"])(() => $.ajax(url));
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
  return await Object(_confluence_throttle__WEBPACK_IMPORTED_MODULE_0__["throttleRead"])(() => $.ajax(url));
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
  let newPage = _Page__WEBPACK_IMPORTED_MODULE_1__["default"].copyFrom(pageToCopy);
  await templateProcessor.transformPage(newPage);
  // Find the parent
  var targetParentPage = await getContent(toSpaceKey,toPageTitle,'space');
  console.log("targetParentPage: space=",targetParentPage.space.key, "id=", targetParentPage.id, "title=", targetParentPage.title);
  newPage.setSpaceKey(toSpaceKey).setParentId(targetParentPage.id);
  return await createPageUnderPageId(newPage);
}

async function copyPageToSpace(sourcePageId, targetSpaceKey, targetParentId) {
  let pageToCopy = await getContentById(sourcePageId, 'space,body.storage,metadata.labels');
  try {
    return await getContent(targetSpaceKey, pageToCopy.title);
    // if it exists, do nothing (we should update the content, still)
  } catch (err) {
    // Create the new page 
    let newPage = _Page__WEBPACK_IMPORTED_MODULE_1__["default"].copyFrom(pageToCopy).setSpaceKey(targetSpaceKey).setParentId(targetParentId);
    return await createPageUnderPageId(newPage);
  }
}

async function createPageFromTemplate(templateSpace, templateTitle, targetSpaceKey, targetPageId, templateProcessor) {
  var pageToCopy = await getContent(templateSpace, templateTitle, 'space,body.storage,metadata.labels');
  //var parentPage = await getContentById(targetPageId, 'space');
  let newPage = _Page__WEBPACK_IMPORTED_MODULE_1__["default"].copyFrom(pageToCopy).setSpaceKey(targetSpaceKey).setParentId(targetPageId);
  await templateProcessor.transformPage(newPage);
  // Create the new page
  return await createPageUnderPageId(newPage);
}

async function copyPageRecursive(fromSpaceKey, fromPageTitle, toSpaceKey, toPageTitle, templateProcessor, copiedPages) {
  var sourcePagePromise = getContent(fromSpaceKey, fromPageTitle);
  var targetPagePromise = getContent(toSpaceKey,toPageTitle, 'space');
  var pages = await Promise.all(sourcePagePromise,targetPagePromise);
  return await copyPageRecursiveInternal( pages[0].id, pages[1].space.key, pages[1].id, templateProcessor, copiedPages);
}

async function copyPageRecursiveInternal(sourcePageId, targetSpaceKey, targetPageId, templateProcessor, copiedPages) {
  var pageToCopy = await getContentById(sourcePageId, 'space,body.storage,children.page,metadata.labels');
  let newPage = _Page__WEBPACK_IMPORTED_MODULE_1__["default"].copyFrom(pageToCopy);
  if (templateProcessor.isApplicableTemplatePage(newPage)) {
    await templateProcessor.transformPage(newPage);
    newPage.setSpaceKey(targetSpaceKey).setParentId(targetPageId);

    // Create the new page under targetSpaceKey:targetPageId
    var copiedPage = await createPageUnderPageId(newPage);
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
async function createPageUnderPageId(/* type Page */ newPage) {
  console.log("Posting new page", newPage);
  return await postPage(newPage);
}

async function postPage(page) {
  return await Object(_confluence_throttle__WEBPACK_IMPORTED_MODULE_0__["throttleWrite"])( () => $.ajax(
    {
      url: '/rest/api/content',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(page)
    }
  ));
}

/* Typically you create the page with Page.newVersionOf(page, "optional message", isMajorEdit);
then set the body and title you want to update with setBody and setTitle. */
async function updateContent(page) {
  return await Object(_confluence_throttle__WEBPACK_IMPORTED_MODULE_0__["throttleWrite"])( () => $.ajax(
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
  var pageAndChildren = await getContentById(pageId, 'history.lastUpdated,children.page,metadata.labels');
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

/***/ "./js/common/confluence/confluence-page-postprocessor.js":
/*!***************************************************************!*\
  !*** ./js/common/confluence/confluence-page-postprocessor.js ***!
  \***************************************************************/
/*! exports provided: postProcess, preProcess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postProcess", function() { return postProcess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preProcess", function() { return preProcess; });
/* harmony import */ var _confluence_permissions_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confluence-permissions-async */ "./js/common/confluence/confluence-permissions-async.js");


async function postProcess(body, page) {
    if (body.indexOf('<ac:structured-macro ac:name="html"')>=0) {
            // if there is already editor restriction, no need to set one
        if (await Object(_confluence_permissions_async__WEBPACK_IMPORTED_MODULE_0__["getEditorRestrictions"])(page.id)) return;
        await Object(_confluence_permissions_async__WEBPACK_IMPORTED_MODULE_0__["setEditorRestriction"])(page.id);
        console.log(`Permissions set on page ${page.title}`);
    }
}

async function preProcess(page, sourcePage, targetSpace) {
    let sourceSpaceRegex = new RegExp('\\b'+sourcePage+'\\b','g'); // find all occurrences of the source space as a whole word
    let body = page.body.storage.value;
    if (sourceSpaceRegex.test(body)) {
        page.body.storage.value = body.replace(sourceSpaceRegex, targetSpace);
        console.warn(`Updated 1 or more ref to space '${sourcePage}' in ${page.title} to '${targetSpace}'`);
    }
    return page;
}

/***/ }),

/***/ "./js/common/confluence/confluence-permissions-async.js":
/*!**************************************************************!*\
  !*** ./js/common/confluence/confluence-permissions-async.js ***!
  \**************************************************************/
/*! exports provided: getEditorRestrictions, setEditorRestriction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEditorRestrictions", function() { return getEditorRestrictions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEditorRestriction", function() { return setEditorRestriction; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _confluence_user_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confluence-user-async */ "./js/common/confluence/confluence-user-async.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./js/common/config.js");




/**
 * returns either false if no edit restriction exist, or an object with a user and a group property 
 * containing the list of user names and group names with edit restriction.
 */
async function getEditorRestrictions(contentId) {
    let resp = await jquery__WEBPACK_IMPORTED_MODULE_0___default.a.get('/rest/api/content/'+contentId+'/restriction/byOperation/update');
    let restrictions = { user: [], group: []};
    if (resp && resp.restrictions) {
        if (resp.restrictions.group && resp.restrictions.group.results) {
            restrictions.group = resp.restrictions.group.results.map(r=>r.name);
        }
        if (resp.restrictions.user && resp.restrictions.user.results) {
            restrictions.user = resp.restrictions.user.results.map(r=>r.username);
        }
    }
    if (restrictions.user.length + restrictions.group.length == 0) {
        restrictions = false;
    }
    return restrictions;
}

async function setEditorRestriction(contentId, groupName) {
    if (!groupName) {
        groupName = _config__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_RESTRICTION_GROUP"];
    }
    let username = await Object(_confluence_user_async__WEBPACK_IMPORTED_MODULE_1__["default"])();
    // set ourselves as editor
    await experimental('/rest/experimental/content/'+contentId+'/restriction/byOperation/update/user?userName=' + encodeURIComponent(username));
    // and the whole group as well
    await experimental('/rest/experimental/content/'+contentId+'/restriction/byOperation/update/group/' + encodeURIComponent(groupName));
}

/** the experimental restriction API resturns 200 OK without any content which
 * jquery considers as an error, so we need to catch the error
 */
async function experimental(url) {
    try { 
        await jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
            url: url,
            type: 'PUT'
        });
    } catch (err) {
        if (err.status != 200 && err.status  != 204) { // is this a real error
            throw err; // rethrow
        } // else success
    }
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
    try {
        if (propertyData.id) {
            await Object(_confluence_properties_async__WEBPACK_IMPORTED_MODULE_0__["update"])(contentId, propertyData);
        } else {
            await Object(_confluence_properties_async__WEBPACK_IMPORTED_MODULE_0__["create"])(contentId, propertyData);
        }
    } catch ( err ) {
        console.warn('Could not set content property, ignoring');
    }
}


/***/ }),

/***/ "./js/common/confluence/confluence-sync-timestamps.js":
/*!************************************************************!*\
  !*** ./js/common/confluence/confluence-sync-timestamps.js ***!
  \************************************************************/
/*! exports provided: setSyncTimeStamps, getTargetSyncTimeStamp, getSourceSyncTimeStamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSyncTimeStamps", function() { return setSyncTimeStamps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTargetSyncTimeStamp", function() { return getTargetSyncTimeStamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSourceSyncTimeStamp", function() { return getSourceSyncTimeStamp; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./js/common/config.js");
/* harmony import */ var _confluence_properties_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confluence-properties-service */ "./js/common/confluence/confluence-properties-service.js");




async function setSyncTimeStamps(srcContent, targetContent, souceSpace, targetSpace) {
    let syncTime = new Date();
    let syncTimeStamp = {
      sourceContentId : srcContent.id,
      targetContentId : targetContent.id,
      sourceVersion: srcContent.version.number,
      targetVersion: targetContent.version.number,
      syncTime: syncTime
    };
    await Object(_confluence_properties_service__WEBPACK_IMPORTED_MODULE_1__["doWithPropertyValue"])(srcContent.id, _config__WEBPACK_IMPORTED_MODULE_0__["PROP_KEY"], function(value) {
      if (value.syncTargets) {
        console.log("Previous value on source item: syncTargets: ",value.syncTargets);
      } else {
        value.syncTargets = {};
      }
      value.syncTargets[targetSpace] = syncTimeStamp;
    });
    await Object(_confluence_properties_service__WEBPACK_IMPORTED_MODULE_1__["doWithPropertyValue"])(targetContent.id, _config__WEBPACK_IMPORTED_MODULE_0__["PROP_KEY"], function(value) {
      if (value.syncSources) {
        console.log("Previous value on target item: syncSources: ",value.syncSources);
      } else {
        value.syncSources = {};
      }
      value.syncSources[souceSpace] = syncTimeStamp;
    });
}

async function getTargetSyncTimeStamp(contentId, spaceKey) {
    let value = await Object(_confluence_properties_service__WEBPACK_IMPORTED_MODULE_1__["getPropertyValue"])(contentId, _config__WEBPACK_IMPORTED_MODULE_0__["PROP_KEY"]);
    if (value && value.syncTargets && value.syncTargets[spaceKey]) {
        return value.syncTargets[spaceKey];
    }
    return null;
}

async function getSourceSyncTimeStamp(contentId, spaceKey) {
    let value = await Object(_confluence_properties_service__WEBPACK_IMPORTED_MODULE_1__["getPropertyValue"])(contentId, _config__WEBPACK_IMPORTED_MODULE_0__["PROP_KEY"]);
    if (value && value.syncSources && value.syncSources[spaceKey]) {
        return value.syncSources[spaceKey];
    }
    return null;
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

/***/ "./js/common/confluence/confluence-user-async.js":
/*!*******************************************************!*\
  !*** ./js/common/confluence/confluence-user-async.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getUser; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


let userCached;

async function getUser() {
    if (userCached) return userCached;
    userCached = (await jquery__WEBPACK_IMPORTED_MODULE_0___default.a.get('/rest/api/user/current') ).username;
    return userCached;
}

/***/ }),

/***/ "./js/mainframe/fragmentLoader.js":
/*!****************************************!*\
  !*** ./js/mainframe/fragmentLoader.js ***!
  \****************************************/
/*! exports provided: loadFragment, loadTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFragment", function() { return loadFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTemplate", function() { return loadTemplate; });
/* harmony import */ var _pluginCommon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pluginCommon */ "./js/mainframe/pluginCommon.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);



/** Loads an html fragment (under docs/fragments/), optionally injects it in the target jQuery selector */
async function loadFragment(fragment, targetSelector) {
    var data = await jquery__WEBPACK_IMPORTED_MODULE_1___default.a.get(_pluginCommon__WEBPACK_IMPORTED_MODULE_0__["host"]+'/fragments/'+fragment);
    if (targetSelector) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(targetSelector).html(data);
    }
    return data;
}
async function loadTemplate(template) {
    return jquery__WEBPACK_IMPORTED_MODULE_1___default.a.templates(await jquery__WEBPACK_IMPORTED_MODULE_1___default.a.get(_pluginCommon__WEBPACK_IMPORTED_MODULE_0__["host"]+'/fragments/'+template));
} 


/***/ }),

/***/ "./js/mainframe/pluginCommon.js":
/*!**************************************!*\
  !*** ./js/mainframe/pluginCommon.js ***!
  \**************************************/
/*! exports provided: host, cacheBuster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "host", function() { return host; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheBuster", function() { return cacheBuster; });
const WHITELISTED_ORIGIN = [
  'https://localhost',
  'https://amissemer.github.io',
  'https://es-global-ci.github.io'
];

function getOriginLocation() {
  var scripts = document.getElementsByTagName('script');
  var candidates = [];
  for (let s of scripts) {
    var url = s.getAttribute("src");
    if (url && url.indexOf('http')==0) candidates.push(url);
  }
  console.log('Looking for script origin within', candidates);

  for (let idx = candidates.length-1; idx>=0; idx--) {
    var l = document.createElement("a");
    l.href = candidates[idx];
    if (!l.origin) l.origin=l.protocol+"//"+l.host
    if (whitelistedOrigin(l.origin)) {
      console.log("Found own origin: ",l.origin, 'cache busting', l.search);
      return l;
    }
  }
  throw 'Could not find a whitelisted origin';
}

function whitelistedOrigin(origin) {
  return WHITELISTED_ORIGIN.indexOf(origin)>=0;
}

var originlocation = getOriginLocation();
var host = originlocation.origin+'/ywiki-plugins';
var cacheBuster=originlocation.search;
console.log("plugin Host="+host+", cacheBuster="+cacheBuster);




/***/ }),

/***/ "./js/mainframe/spaceSyncPlugin.css":
/*!******************************************!*\
  !*** ./js/mainframe/spaceSyncPlugin.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./js/mainframe/spaceSyncPlugin.js":
/*!*****************************************!*\
  !*** ./js/mainframe/spaceSyncPlugin.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_js_bootstrap_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.min */ "./node_modules/bootstrap/dist/js/bootstrap.min.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _spaceSyncPlugin_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spaceSyncPlugin.css */ "./js/mainframe/spaceSyncPlugin.css");
/* harmony import */ var _spaceSyncPlugin_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_spaceSyncPlugin_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stylesheetPlugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stylesheetPlugin */ "./js/mainframe/stylesheetPlugin.js");
/* harmony import */ var _fragmentLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fragmentLoader */ "./js/mainframe/fragmentLoader.js");
/* harmony import */ var jsviews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jsviews */ "./node_modules/jsviews/jsviews.js");
/* harmony import */ var jsviews__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jsviews__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sync_log__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sync/log */ "./js/mainframe/sync/log.js");
/* harmony import */ var _sync_contextMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sync/contextMenu */ "./js/mainframe/sync/contextMenu.js");
/* harmony import */ var _sync_pageSyncAnalyzer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sync/pageSyncAnalyzer */ "./js/mainframe/sync/pageSyncAnalyzer.js");
/* harmony import */ var _sync_pageSyncPerformer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sync/pageSyncPerformer */ "./js/mainframe/sync/pageSyncPerformer.js");
/* harmony import */ var _sync_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sync/model */ "./js/mainframe/sync/model.js");
/* harmony import */ var _sync_spaceScanner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sync/spaceScanner */ "./js/mainframe/sync/spaceScanner.js");
/* harmony import */ var _sync_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sync/tooltip */ "./js/mainframe/sync/tooltip.js");
// Entry point of the sync tool
// Load main dependencies and css



// resets some default












Object(_stylesheetPlugin__WEBPACK_IMPORTED_MODULE_4__["loadPluginStyleSheet"])('space-sync-bundle.css');
// load jsviews and binds it to jQuery
jsviews__WEBPACK_IMPORTED_MODULE_6___default()(jquery__WEBPACK_IMPORTED_MODULE_0___default.a);

// read the <ci-sync-app> macro setting from the wiki page
let appElt = jquery__WEBPACK_IMPORTED_MODULE_0___default()('ci-sync-app').first();
let sourceSpace = appElt.data('source-space');
let targetSpace = appElt.data('target-space');
let sourceRootPage = appElt.data('source-root-page');
let targetParentPage = appElt.data('target-parent-page');
Object(_sync_log__WEBPACK_IMPORTED_MODULE_7__["default"])(`sourceSpace="${sourceSpace}"`);
Object(_sync_log__WEBPACK_IMPORTED_MODULE_7__["default"])(`targetSpace="${targetSpace}"`);
Object(_sync_log__WEBPACK_IMPORTED_MODULE_7__["default"])(`sourceRootPage="${sourceRootPage}"`);
Object(_sync_log__WEBPACK_IMPORTED_MODULE_7__["default"])(`targetParentPage="${targetParentPage}"`);
// store the targetSpace in the model for future reference
_sync_model__WEBPACK_IMPORTED_MODULE_11__["default"].targetSpace = targetSpace;

// load the jsview template and link it to the model and helper functions
Object(_fragmentLoader__WEBPACK_IMPORTED_MODULE_5__["loadTemplate"])('sync-plugin/page-groups-table.html').then( function(tmpl) {
    tmpl.link(appElt, _sync_model__WEBPACK_IMPORTED_MODULE_11__["default"], {
        analyze : _sync_pageSyncAnalyzer__WEBPACK_IMPORTED_MODULE_9__["default"],
        perform: _sync_pageSyncPerformer__WEBPACK_IMPORTED_MODULE_10__["default"]
    });
});

// trigger the scan of the space for pages to sync
Object(_sync_spaceScanner__WEBPACK_IMPORTED_MODULE_12__["default"])(sourceSpace, sourceRootPage);


/***/ }),

/***/ "./js/mainframe/stylesheetPlugin.js":
/*!******************************************!*\
  !*** ./js/mainframe/stylesheetPlugin.js ***!
  \******************************************/
/*! exports provided: loadStyleSheet, loadPluginStyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadStyleSheet", function() { return loadStyleSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPluginStyleSheet", function() { return loadPluginStyleSheet; });
/* harmony import */ var _pluginCommon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pluginCommon */ "./js/mainframe/pluginCommon.js");


// Loads a stylesheet at url. Url can be relative to the configured host.
function loadStyleSheet(host, url) {
  if (!url.startsWith('http')) {
    url = host+'/'+url;
  }
  var link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  link.setAttribute('href', url);
  document.getElementsByTagName('head')[0].appendChild(link);
  console.log('style loaded');
}

function loadPluginStyleSheet(filename) {
  return loadStyleSheet(_pluginCommon__WEBPACK_IMPORTED_MODULE_0__["host"], 'dist/'+filename+_pluginCommon__WEBPACK_IMPORTED_MODULE_0__["cacheBuster"]);
}

/***/ }),

/***/ "./js/mainframe/sync/PageWrapper.js":
/*!******************************************!*\
  !*** ./js/mainframe/sync/PageWrapper.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageWrapper; });
/* harmony import */ var _SyncStatusEnum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SyncStatusEnum */ "./js/mainframe/sync/SyncStatusEnum.js");
/* harmony import */ var _common_confluence_confluence_sync_timestamps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/confluence/confluence-sync-timestamps */ "./js/common/confluence/confluence-sync-timestamps.js");
/* harmony import */ var _common_confluence_confluence_page_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/confluence/confluence-page-async */ "./js/common/confluence/confluence-page-async.js");
/* harmony import */ var _SyncStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SyncStatus */ "./js/mainframe/sync/SyncStatus.js");
/* harmony import */ var _spaceScanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spaceScanner */ "./js/mainframe/sync/spaceScanner.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);







const TARGET_EXPANDS = 'version,metadata.labels,space';
const MIN_PROGRESS = 20; // in percent, what's the min size of the progress bars

class PageWrapper {
    constructor(page, parent) {
        this.title = page.title;
        this.url = page._links.webui;
        this.page = page;
        this.children = null;
        this.parentPage = parent;
        this.isPageGroup = isPageGroupRoot(page, parent);
        this.pageGroupRoot = findRoot(this); // cache the pageGroup that contains this page

        // PageGroup specific properties
        if (this.isPageGroup) {
            this.pagesToPush = [];
            this.pagesToPull = [];
            this.syncedPages = [];
            this.conflictingPages = [];
            this.descendants = [];
            this.analyzing = false;
            this.analyzed = false;
            this.progress = {};
        }
        
    }
    async refreshSourcePage() {
        let page = await Object(_spaceScanner__WEBPACK_IMPORTED_MODULE_4__["loadPageForSync"])(this.page.id);
        let o = jquery__WEBPACK_IMPORTED_MODULE_5___default.a.observable(this);
        o.setProperty("page", page);
        o.setProperty("title", page.title);
        o.setProperty("url", page._links.webui);
        o.removeProperty("syncStatus");
    }
    skipSync(context) {
        return context.title!=this.title && this.isPageGroup;
    }
    _updateWithSyncStatus(syncStatus) {
        this.removeExistingBySourcePageId(syncStatus.sourcePage.id);
        switch (syncStatus.status) {
            case _SyncStatusEnum__WEBPACK_IMPORTED_MODULE_0__["default"].TARGET_MISSING: return this.addPageToPush(syncStatus);
            case _SyncStatusEnum__WEBPACK_IMPORTED_MODULE_0__["default"].TARGET_UPDATED: return this.addPageToPull(syncStatus);
            case _SyncStatusEnum__WEBPACK_IMPORTED_MODULE_0__["default"].CONFLICTING: return this.addConflictingPage(syncStatus);
            case _SyncStatusEnum__WEBPACK_IMPORTED_MODULE_0__["default"].UP_TO_DATE: return this.addSyncedPage(syncStatus);
            case _SyncStatusEnum__WEBPACK_IMPORTED_MODULE_0__["default"].SOURCE_UPDATED: return this.addPageToPush(syncStatus);
        }
    }
    removeExistingBySourcePageId(pageId) {
        this.removeFromArray(this.pagesToPush, pageId);
        this.removeFromArray(this.pagesToPull, pageId);
        this.removeFromArray(this.conflictingPages, pageId);
        this.removeFromArray(this.syncedPages, pageId);
    }
    addPageToPush(page) {
        jquery__WEBPACK_IMPORTED_MODULE_5___default.a.observable(this.pagesToPush).insert(page);
    }
    addPageToPull(page) {
        jquery__WEBPACK_IMPORTED_MODULE_5___default.a.observable(this.pagesToPull).insert(page);
    }
    addConflictingPage(page) {
        jquery__WEBPACK_IMPORTED_MODULE_5___default.a.observable(this.conflictingPages).insert(page);
    }
    addSyncedPage(page) {
        jquery__WEBPACK_IMPORTED_MODULE_5___default.a.observable(this.syncedPages).insert(page);
    }
    removeFromArray(arr, pageId) {
        let idx = arr.findIndex(s=>s.sourcePage.id==pageId);
        if (idx >= 0) {
            jquery__WEBPACK_IMPORTED_MODULE_5___default.a.observable(arr).remove(idx);
        }
    }
    setProgress(action, percent) {
        // percent is always scaled to start from MIN_PROGRESS%, so that the progress bar is visible from the start
        jquery__WEBPACK_IMPORTED_MODULE_5___default.a.observable(this.progress).setProperty(action, MIN_PROGRESS + Math.round((100-MIN_PROGRESS)*percent / 100.));
    }
    removeProgress(action) {
        jquery__WEBPACK_IMPORTED_MODULE_5___default.a.observable(this.progress).removeProperty(action);
    }
    setAnalyzing(analyzing) {
        jquery__WEBPACK_IMPORTED_MODULE_5___default.a.observable(this).setProperty('analyzing', analyzing);
    }
    setAnalyzed(analyzed) {
        let o = jquery__WEBPACK_IMPORTED_MODULE_5___default.a.observable(this);
        o.setProperty('analyzing', false);
        o.setProperty('analyzed', true);
    }
    getSourceDiff() {
        return getDiffUrl(this.syncStatus.sourcePage, this.syncStatus.syncTimeStamp.targetVersion);
    }
    getTargetDiff() {
        return getDiffUrl(this.syncStatus.targetPage, this.syncStatus.syncTimeStamp.sourceVersion);
    }
    async computeSyncStatus(targetSpaceKey, syncAttachments) {
        let syncStatus;
        let targetPage;
        let pageToCopy = this.page;
        let syncTimeStamp = await Object(_common_confluence_confluence_sync_timestamps__WEBPACK_IMPORTED_MODULE_1__["getSourceSyncTimeStamp"])(pageToCopy.id, targetSpaceKey);
        if (syncTimeStamp && syncTimeStamp.targetContentId!=pageToCopy.id) {
          log(`Error syncTimeStamp`);
        } else if (syncTimeStamp) {
          try {
            targetPage = await Object(_common_confluence_confluence_page_async__WEBPACK_IMPORTED_MODULE_2__["getContentById"])(syncTimeStamp.sourceContentId, TARGET_EXPANDS);
            syncStatus = new _SyncStatus__WEBPACK_IMPORTED_MODULE_3__["default"](this, targetSpaceKey, targetPage, syncTimeStamp);
          } catch (err) {
            // target based on syncTimeStamp id is missing
            console.debug("Normal error ",err);
          }
        }
        if (!syncStatus && !targetPage) {
          try {
            targetPage = await Object(_common_confluence_confluence_page_async__WEBPACK_IMPORTED_MODULE_2__["getContent"])(targetSpaceKey, pageToCopy.title, TARGET_EXPANDS);
            syncTimeStamp = await Object(_common_confluence_confluence_sync_timestamps__WEBPACK_IMPORTED_MODULE_1__["getTargetSyncTimeStamp"])(targetPage.id, pageToCopy.space.key);
            syncStatus = new _SyncStatus__WEBPACK_IMPORTED_MODULE_3__["default"](this, targetSpaceKey, targetPage, syncTimeStamp);
          } catch (err) {
            // target with same title as source is missing
            syncStatus = new _SyncStatus__WEBPACK_IMPORTED_MODULE_3__["default"](this, targetSpaceKey)
          }
        }
        jquery__WEBPACK_IMPORTED_MODULE_5___default.a.observable(this).setProperty("syncStatus", syncStatus);
        this.pageGroupRoot._updateWithSyncStatus(syncStatus);
    }
}

function findRoot(pageWrapper) {
    if (pageWrapper.parentPage ==null || pageWrapper.isPageGroup) return pageWrapper;
    return findRoot(pageWrapper.parentPage);
}

const PAGE_GROUP_LABELS = ['service-dashboard','ci-publish-package'];

function hasLabel(page, labelsToFind) {
    for (let label of page.metadata.labels.results) {
        if (labelsToFind.indexOf(label.name)>=0) return true;
    }
    return false;
}

function isPageGroupRoot(page, parentPage) {
    return (!parentPage) || hasLabel(page, PAGE_GROUP_LABELS);
}

/* URL to display changes since last synchro */
function getDiffUrl(page, lastSyncedVersion) {
    return `/pages/diffpagesbyversion.action?pageId=${page.id}&selectedPageVersions=${page.version.number}&selectedPageVersions=${lastSyncedVersion}`;
}

/***/ }),

/***/ "./js/mainframe/sync/SyncStatus.js":
/*!*****************************************!*\
  !*** ./js/mainframe/sync/SyncStatus.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SyncStatusEnum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SyncStatusEnum */ "./js/mainframe/sync/SyncStatusEnum.js");
/* harmony import */ var _common_confluence_confluence_page_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/confluence/confluence-page-async */ "./js/common/confluence/confluence-page-async.js");
/* harmony import */ var _common_confluence_confluence_page_postprocessor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/confluence/confluence-page-postprocessor */ "./js/common/confluence/confluence-page-postprocessor.js");
/* harmony import */ var _common_confluence_confluence_sync_timestamps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/confluence/confluence-sync-timestamps */ "./js/common/confluence/confluence-sync-timestamps.js");
/* harmony import */ var _common_confluence_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/confluence/Page */ "./js/common/confluence/Page.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log */ "./js/mainframe/sync/log.js");







const COPY_EXPANDS = 'version,space,body.storage,metadata.labels,children.page,children.attachment.version,children.attachment.space';
const STYLES = {
    [_SyncStatusEnum__WEBPACK_IMPORTED_MODULE_0__["default"].TARGET_MISSING]: "create-target",
    [_SyncStatusEnum__WEBPACK_IMPORTED_MODULE_0__["default"].SOURCE_UPDATED]: "push",
    [_SyncStatusEnum__WEBPACK_IMPORTED_MODULE_0__["default"].TARGET_UPDATED]: "pull",
    [_SyncStatusEnum__WEBPACK_IMPORTED_MODULE_0__["default"].CONFLICTING]: "conflict"
};

function SyncStatus(pageWrapper, targetSpaceKey, targetPage, syncTimeStamp) {
    let sourcePage = pageWrapper.page;
    this.targetPage = targetPage;
    this.sourcePage = sourcePage;
    this.syncTimeStamp = syncTimeStamp;
    this.pageWrapper = pageWrapper;
    this.performPush = noop;
    this.performPull = noop;
    this.targetSpaceKey = targetSpaceKey;
    if (!targetPage) {
      this.status = _SyncStatusEnum__WEBPACK_IMPORTED_MODULE_0__["default"].TARGET_MISSING;
      this.performPush = createPage;
    } else if (syncTimeStamp && targetPage.version.number !== syncTimeStamp.sourceVersion && sourcePage.version.number === syncTimeStamp.targetVersion) {
      this.status = _SyncStatusEnum__WEBPACK_IMPORTED_MODULE_0__["default"].TARGET_UPDATED;
      this.performPull = performPull;
      return;
    } else if (syncTimeStamp && targetPage.version.number !== syncTimeStamp.sourceVersion) {
      this.status = _SyncStatusEnum__WEBPACK_IMPORTED_MODULE_0__["default"].CONFLICTING;
      this.performPush = performUpdate;
      this.performPull = performPull;
    } else if (syncTimeStamp && sourcePage.version.number === syncTimeStamp.targetVersion) {
      this.status = _SyncStatusEnum__WEBPACK_IMPORTED_MODULE_0__["default"].UP_TO_DATE;
    } else {
      this.status = _SyncStatusEnum__WEBPACK_IMPORTED_MODULE_0__["default"].SOURCE_UPDATED;
      this.performPush = performUpdate;
    }

    async function noop() {}
  
    async function createPage() {
        // make sure the parent syncStatus was determined first
        if (!pageWrapper.parentPage.syncStatus) {
            await pageWrapper.parentPage.computeSyncStatus(targetSpaceKey,false);
        }
        // make sure the target parent page exists
        if (pageWrapper.parentPage.syncStatus.status===_SyncStatusEnum__WEBPACK_IMPORTED_MODULE_0__["default"].TARGET_MISSING && !pageWrapper.parentPage.syncStatus.targetPage) {
            await pageWrapper.parentPage.syncStatus.performPush(); // create the parent recursively if necessary
        }
        // now create the page under the target parent page
        let newPage = _common_confluence_Page__WEBPACK_IMPORTED_MODULE_4__["default"].copyFrom(sourcePage); // .setVersion(1, `pushed by ysync from ${identifier(sourcePage)}`); (doesn't work on page creation)
       
        await Object(_common_confluence_confluence_page_postprocessor__WEBPACK_IMPORTED_MODULE_2__["preProcess"])(newPage, sourcePage.space.key, targetSpaceKey);
        newPage.setSpaceKey(targetSpaceKey).setParentId(pageWrapper.parentPage.syncStatus.targetPage.id);

        this.targetPage = await Object(_common_confluence_confluence_page_async__WEBPACK_IMPORTED_MODULE_1__["createPageUnderPageId"])(newPage);
        Object(_log__WEBPACK_IMPORTED_MODULE_5__["default"])(`Created page ${nameAndVersion(this.targetPage)} from ${identifier(sourcePage)}`);
        await this.markSynced();
    }

    async function performUpdate() {
        let updatedTargetPage = _common_confluence_Page__WEBPACK_IMPORTED_MODULE_4__["default"].newVersionOf(this.targetPage, `pushed by ysync from ${identifier(this.sourcePage)}`, true);
        updatedTargetPage.setBodyFromPage(this.sourcePage).setTitle(this.sourcePage.title);
        await Object(_common_confluence_confluence_page_postprocessor__WEBPACK_IMPORTED_MODULE_2__["preProcess"])(updatedTargetPage, this.sourcePage.space.key, targetSpaceKey);
        this.targetPage = await Object(_common_confluence_confluence_page_async__WEBPACK_IMPORTED_MODULE_1__["updateContent"])(updatedTargetPage);
        Object(_log__WEBPACK_IMPORTED_MODULE_5__["default"])(`Pushed page ${nameAndVersion(this.targetPage)} (status=${this.status}) from ${identifier(this.sourcePage)}`);
        await this.markSynced();
    }

    function identifier(page) {
        return `${page.space.key}:${page.id}:${page.version.number}`;
    }
    function nameAndVersion(page) {
        return `"${page.space.key}:${page.title}" (v. ${page.version.number})`;
    }
  
    async function performPull() {
        if (!this.targetPage.body || !this.targetPage.body.storage) {
            this.targetPage = targetPage = await Object(_common_confluence_confluence_page_async__WEBPACK_IMPORTED_MODULE_1__["getContentById"])(targetPage.id, COPY_EXPANDS);
        }
        let updatedSourcePage = _common_confluence_Page__WEBPACK_IMPORTED_MODULE_4__["default"].newVersionOf(this.sourcePage, `pulled by ysync from ${identifier(this.targetPage)}`);
        updatedSourcePage.setBodyFromPage(this.targetPage).setTitle(this.targetPage.title);
        await Object(_common_confluence_confluence_page_postprocessor__WEBPACK_IMPORTED_MODULE_2__["preProcess"])(updatedSourcePage, this.targetPage.space.key, this.sourcePage.space.key);
        this.sourcePage = await Object(_common_confluence_confluence_page_async__WEBPACK_IMPORTED_MODULE_1__["updateContent"])(updatedSourcePage);
        Object(_log__WEBPACK_IMPORTED_MODULE_5__["default"])(`Pulled page ${nameAndVersion(this.sourcePage)} (status=${this.status}) from ${identifier(this.targetPage)}`);
        await this.markSynced();
        await this.pageWrapper.refreshSourcePage();
    }
}

SyncStatus.prototype.style = function() {
    return STYLES[this.status] || "";
};

SyncStatus.prototype.markSynced = async function() {
    // source and target in timeStamps are reversed, for now
    return Object(_common_confluence_confluence_sync_timestamps__WEBPACK_IMPORTED_MODULE_3__["setSyncTimeStamps"])(this.targetPage, this.sourcePage, this.targetPage.space.key, this.sourcePage.space.key);
}

/* harmony default export */ __webpack_exports__["default"] = (SyncStatus); 


/***/ }),

/***/ "./js/mainframe/sync/SyncStatusEnum.js":
/*!*********************************************!*\
  !*** ./js/mainframe/sync/SyncStatusEnum.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const SyncStatusEnum = Object.freeze({
    "TARGET_MISSING" : "TARGET_MISSING",
    "TARGET_UPDATED" : "TARGET_UPDATED",
    "CONFLICTING" : "CONFLICTING",
    "UP_TO_DATE" : "UP_TO_DATE",
    "SOURCE_UPDATED" : "SOURCE_UPDATED"
});
/* harmony default export */ __webpack_exports__["default"] = (SyncStatusEnum);

/***/ }),

/***/ "./js/mainframe/sync/contextMenu.js":
/*!******************************************!*\
  !*** ./js/mainframe/sync/contextMenu.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-ui */ "./node_modules/jquery-ui/ui/widget.js");
/* harmony import */ var jquery_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery_contextmenu_dist_jquery_contextMenu_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery-contextmenu/dist/jquery.contextMenu.min.css */ "./node_modules/jquery-contextmenu/dist/jquery.contextMenu.min.css");
/* harmony import */ var jquery_contextmenu_dist_jquery_contextMenu_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_contextmenu_dist_jquery_contextMenu_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery_contextmenu_dist_jquery_contextMenu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery-contextmenu/dist/jquery.contextMenu.js */ "./node_modules/jquery-contextmenu/dist/jquery.contextMenu.js");
/* harmony import */ var jquery_contextmenu_dist_jquery_contextMenu_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery_contextmenu_dist_jquery_contextMenu_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! font-awesome/css/font-awesome.min.css */ "./node_modules/font-awesome/css/font-awesome.min.css");
/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log */ "./js/mainframe/sync/log.js");







const DEFAULT_Z_INDEX = 2000;
const TRIGGER = 'left';
const WARNING_ICON = "fa-exclamation-triangle";
const WARN = true;

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function(){
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contextMenu({
        // define which elements trigger this menu
        selector: ".sync-table tr .link-conflict",
        className: 'context-menu-with-title context-menu-conflict',
        // define the elements of the menu
        items: {
            openSource: MENU_ITEMS.openSourceItem,
            openTarget: MENU_ITEMS.openTargetItem,
            "sep1": MENU_ITEMS.separator,
            checkTargetChanges: MENU_ITEMS.checkTargetChangesItem,
            checkSourceChanges: MENU_ITEMS.checkSourceChangesItem,
            overwriteTargetChanges: MENU_ITEMS.pushItem("Overwrite target", WARN),
            overwriteSourceChanges: MENU_ITEMS.pullItem("Overwrite source", WARN)
        },
        zIndex: DEFAULT_Z_INDEX,
        trigger: TRIGGER
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contextMenu({
        // define which elements trigger this menu
        selector: ".sync-table tr .link-pull",
        className: 'context-menu-with-title  context-menu-pull',
        // define the elements of the menu
        items: {
            openSource: MENU_ITEMS.openSourceItem,
            openTarget: MENU_ITEMS.openTargetItem,
            "sep1": MENU_ITEMS.separator,
            checkTargetChanges: MENU_ITEMS.checkTargetChangesItem,
            pullTargetChanges: MENU_ITEMS.pullItem(),
            resetTarget: MENU_ITEMS.pushItem("Force reset target from source", WARN)
        },
        zIndex: DEFAULT_Z_INDEX,
        trigger: TRIGGER
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contextMenu({
        // define which elements trigger this menu
        selector: ".sync-table tr .link-push",
        className: 'context-menu-with-title  context-menu-push',
        // define the elements of the menu
        items: {
            openSource: MENU_ITEMS.openSourceItem,
            openTarget: MENU_ITEMS.openTargetItem,
            "sep1": MENU_ITEMS.separator,
            checkSourceChanges: MENU_ITEMS.checkSourceChangesItem,
            pushSourceChanges: MENU_ITEMS.pushItem(),
            resetSource: MENU_ITEMS.pullItem("Reset source from target", WARN)
        },
        zIndex: DEFAULT_Z_INDEX,
        trigger: TRIGGER
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contextMenu({
        // define which elements trigger this menu
        selector: ".sync-table tr .link-create-target",
        className: 'context-menu-with-title  context-menu-create-target',
        // define the elements of the menu
        items: {
            openSource: MENU_ITEMS.openSourceItem,
            "sep1": MENU_ITEMS.separator,
            pushSourceChanges: MENU_ITEMS.pushItem("Create target page")
        },
        zIndex: DEFAULT_Z_INDEX,
        trigger: TRIGGER
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contextMenu({
        // define which elements trigger this menu
        selector: ".sync-table tr .link-",
        className: 'context-menu-with-title context-menu-none',
        // define the elements of the menu
        items: {
            openSource: MENU_ITEMS.openSourceItem,
            openTarget: MENU_ITEMS.openTargetItem
        },
        zIndex: DEFAULT_Z_INDEX,
        trigger: TRIGGER
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contextMenu({
        // define which elements trigger this menu
        selector: ".sync-table tr .link-default",
        //className: 'context-menu-with-title context-menu-default',
        // define the elements of the menu
        items: {
            checkSync: MENU_ITEMS.checkSyncItem
        },
        zIndex: DEFAULT_Z_INDEX,
        trigger: TRIGGER
    });
    setMenuTitle('.context-menu-conflict', "Conflicting page");
    setMenuTitle('.context-menu-pull', "Target is more recent");
    setMenuTitle('.context-menu-push', "Source is more recent");
    setMenuTitle('.context-menu-none', "Page is synchronized");
    setMenuTitle('.context-menu-create-target', "Target doesn't exist");
});

function getData(element) {
    return jquery__WEBPACK_IMPORTED_MODULE_0___default.a.view(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element)).data;
}
function getPageGroup(element) {
    let view = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.view(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element));
    if (view.data.isPageGroup) {
        return view.data;
    } else if (view.parent.data.isPageGroup) {
        return view.parent.data;
    } else {
        return view.parent.parent.data;
    }
}
function getTargetSpace(element) {
    return jquery__WEBPACK_IMPORTED_MODULE_0___default.a.view(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element)).root.data.targetSpace;
}

const MENU_ITEMS = {
    openSourceItem : {
        name: "Open source", 
        callback: function() {
            let data = getData(this);
            window.open(data.syncStatus.sourcePage._links.webui);
        }
    },
    openTargetItem : {
        name: "Open target", 
        callback: function() {
            let data = getData(this);
            window.open(data.syncStatus.targetPage._links.webui);
        }
    },
    checkTargetChangesItem : {
        name: "Check target changes", 
        callback: function() {
            let data = getData(this);
            window.open(data.getTargetDiff());
        }
    },
    checkSourceChangesItem : {
        name: "Check source changes", 
        callback: function() {
            let data = getData(this);
            window.open(data.getSourceDiff());
        }
    },
    checkSyncItem : {
        name: "Check Synchronization Status (single page)", 
        callback: handleErrors("checkSyncItem", async (elt) => { return singleSyncCheck(elt) } )
    },
    pushItem: function(name, warning) {
        return {
            name: name || "Push changes", 
            icon: warning?WARNING_ICON:null,
            callback: handleErrors("pushItem", async (elt) => {
                let data = getData(elt);
                await data.syncStatus.performPush();
                return singleSyncCheck(elt);
            })
        }
    },
    pullItem: function(name, warning) {
        return {
            name: name || "Pull changes", 
            icon: warning?WARNING_ICON:null,
            callback: handleErrors("pullItem", async (elt) => { 
                let data = getData(elt);
                await data.syncStatus.performPull();
                return singleSyncCheck(elt);
            })
        }
    },
    separator : "---------"
} 

async function singleSyncCheck(elt) {
    let pageGroup = getPageGroup(elt);
    let targetSpace = getTargetSpace(elt);
    let pageWrapper = getData(elt);
    await pageWrapper.computeSyncStatus(targetSpace, true);
}

function setMenuTitle(cssClass, title) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(cssClass).attr('data-menutitle', title);
}
function handleErrors(funcName, asyncFunc) {
    return function() {
        (async (elt)=>{
            try {
                Object(_log__WEBPACK_IMPORTED_MODULE_5__["default"])(`Starting ${funcName}...`);
                await asyncFunc(elt);
                Object(_log__WEBPACK_IMPORTED_MODULE_5__["default"])(`Done ${funcName}.`);
            } catch (err) {
                Object(_log__WEBPACK_IMPORTED_MODULE_5__["default"])(`Error in ${funcName}: ${JSON.stringify(err)}`);
            }
        })(this);
    }
}


/***/ }),

/***/ "./js/mainframe/sync/log.js":
/*!**********************************!*\
  !*** ./js/mainframe/sync/log.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return log; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


const output = {messages: ''};

function log(msg) {
    if (!msg) msg='';
    append(msg);
    console.log(msg);
}
log.output = output;

function append(message) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.observable(output).setProperty("messages", output.messages+message+'\n');
}

/***/ }),

/***/ "./js/mainframe/sync/model.js":
/*!************************************!*\
  !*** ./js/mainframe/sync/model.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "./js/mainframe/sync/log.js");
/* harmony import */ var _pluginCommon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pluginCommon */ "./js/mainframe/pluginCommon.js");



const model = {
    output: _log__WEBPACK_IMPORTED_MODULE_0__["default"].output, 
    pages: [],
    host: _pluginCommon__WEBPACK_IMPORTED_MODULE_1__["host"],
    progress: {}
};

/** Exports the singleton root jsview model */
/* harmony default export */ __webpack_exports__["default"] = (model);

/***/ }),

/***/ "./js/mainframe/sync/notify.js":
/*!*************************************!*\
  !*** ./js/mainframe/sync/notify.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_notify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-notify */ "./node_modules/bootstrap-notify/bootstrap-notify.js");
/* harmony import */ var bootstrap_notify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_notify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log */ "./js/mainframe/sync/log.js");




const errorOpts = {
    // default settings for error notify
    type: 'danger',
    allow_dismiss: true,
    delay: -1,
    icon_type: 'class'
};

const notify = {
    error: function(message, url) {
        Object(_log__WEBPACK_IMPORTED_MODULE_2__["default"])(`Notified error: ${message}`);
        let n = {
            icon: 'glyphicon glyphicon-warning-sign',
            message: message 
        };
        if (url) {
            n.url = url;
            n.target = '_blank';
        }
        return jquery__WEBPACK_IMPORTED_MODULE_0___default.a.notify(n, errorOpts);
    },
    // progress is not usable for now due to an amination glitch, possibly caused by duplicate jQuery versions on page
    progress: function(message) {
        Object(_log__WEBPACK_IMPORTED_MODULE_2__["default"])(`Notified progress: ${message}`);
        let notif = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.notify({
            message: message
        },{
            type: 'info',
            showProgressbar: true,
            allow_dismiss: false,
            delay: -1
        });
    }
};

/* harmony default export */ __webpack_exports__["default"] = (notify);


/***/ }),

/***/ "./js/mainframe/sync/pageSyncAnalyzer.js":
/*!***********************************************!*\
  !*** ./js/mainframe/sync/pageSyncAnalyzer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pageSyncAnalyzer; });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "./js/mainframe/sync/log.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _notify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notify */ "./js/mainframe/sync/notify.js");




const SYNC_ACTION = 'sync';
function pageSyncAnalyzer(pageGroup, targetSpace) {
    Object(_log__WEBPACK_IMPORTED_MODULE_0__["default"])(`Checking synchronization status for ${pageGroup.title} - ${pageGroup.page.id}...`);
    let refreshSourcePages = false;
    if (pageGroup.analyzed) { // this is a refresh, we should refresh the source pages
        refreshSourcePages = true;
    }
    pageGroup.setAnalyzing(true);
    pageGroup.setProgress(SYNC_ACTION, 0);
    checkSyncStatus(pageGroup, targetSpace, refreshSourcePages).subscribe(
        percent => pageGroup.setProgress(SYNC_ACTION, percent),
        e => {
            _notify__WEBPACK_IMPORTED_MODULE_2__["default"].error(`Error while checking synchronization of page group ${pageGroup.title}: ${e} ${JSON.stringify(e)}`)
            pageGroup.removeProgress(SYNC_ACTION);
            pageGroup.setAnalyzed(false);
        },
        () => {
            Object(_log__WEBPACK_IMPORTED_MODULE_0__["default"])(`Checked sync status complete for ${pageGroup.title} - ${pageGroup.page.id}`);
            pageGroup.removeProgress(SYNC_ACTION);
            pageGroup.setAnalyzed(true);
        }
    );
}

function checkSyncStatus(pageGroup, targetSpace, refreshSourcePages) {
    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(observer => {
        (async () => {
            let numPages = 1 + pageGroup.descendants.length;
            let synced = 0;
            await checkSyncStatusRecursive(pageGroup, pageGroup, targetSpace, true, callback, refreshSourcePages);
            observer.complete();

            function callback() {
                observer.next( Math.round((100* (++synced))/numPages) );
            }

        })().then(null, e=>observer.error(e));
    });
}

async function checkSyncStatusRecursive(pageGroup, pageWrapper, targetSpaceKey, syncAttachments, callback, refreshSourcePages) {
    if (refreshSourcePages) {
        await pageWrapper.refreshSourcePage();
    }
    let children = pageWrapper.children;
    await pageWrapper.computeSyncStatus(targetSpaceKey, syncAttachments);
    callback();
    await Promise.all(children.map(async child => {
        if (!child.skipSync(pageGroup)) {
            return checkSyncStatusRecursive(pageGroup, child, targetSpaceKey, syncAttachments, callback, refreshSourcePages)
        } else {
            return null;
        }
    }));
}


/***/ }),

/***/ "./js/mainframe/sync/pageSyncPerformer.js":
/*!************************************************!*\
  !*** ./js/mainframe/sync/pageSyncPerformer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pageSyncPerformer; });
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "./js/mainframe/sync/log.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _notify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notify */ "./js/mainframe/sync/notify.js");




const PERMISSION_ERROR = "Confluence Permission Error";
const ACTIONS = {
    "push" : {
        getList: pageGroup => pageGroup.pagesToPush,
        perform: async syncStatus => syncStatus.performPush()
    },
    "pull" : {
        getList: pageGroup => pageGroup.pagesToPull,
        perform: async syncStatus => syncStatus.performPull()
    },
    "pushConflicting" : {
        getList: pageGroup => pageGroup.conflictingPages,
        perform: async syncStatus => syncStatus.performPush()
    }
}

function pageSyncPerformer(action, pageGroup) {
    Object(_log__WEBPACK_IMPORTED_MODULE_0__["default"])(`Performing sync for ${pageGroup.title}`);
    pageGroup.setProgress(action, 0);
    doSync(action, pageGroup).subscribe(
        percent => pageGroup.setProgress(action, percent),
        e => {
            if (e.name === PERMISSION_ERROR) {
                _notify__WEBPACK_IMPORTED_MODULE_2__["default"].error(`Cannot ${action} on ${e.page.title}, target page is write protected, click here to check permissions, then retry`, e.page._links.webui);
            } else {
                _notify__WEBPACK_IMPORTED_MODULE_2__["default"].error(`Error while synchronizing (${action}) page group ${pageGroup.title}: ${e} ${JSON.stringify(e)}`);
            }
            pageGroup.removeProgress(action);
        },
        () => {
            Object(_log__WEBPACK_IMPORTED_MODULE_0__["default"])(`Sync complete for ${pageGroup.title}`);
            pageGroup.removeProgress(action);
        }
    );
}

function doSync(action, pageGroup) {
    let actionRef = ACTIONS[action];
    let listOfSyncStatus = actionRef.getList(pageGroup);
    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(observer => {
        (async () => {
            let numPages = listOfSyncStatus.length;
            let synced = 0;
            await doSyncRecursive(actionRef, pageGroup, pageGroup, listOfSyncStatus, true, callback);
            observer.complete();

            function callback() {
                observer.next( Math.round((100* (++synced))/numPages) );
            }
        })().then(null, e=>observer.error(e));
    });
}

async function doSyncRecursive(actionRef, pageGroup, pageWrapper, listOfSyncStatus, syncAttachments, callback) {
    let children = pageWrapper.children;
    let page = pageWrapper.page;
    let syncStatus = listOfSyncStatus.find(e=>e.sourcePage.id==page.id);
    if (syncStatus) { // is there a syncStatus to perform for current page?
        try {
            await actionRef.perform(syncStatus);
        } catch (err) {
            if (err.status == 403) { // HTTP 403 Forbidden
                throw { name: PERMISSION_ERROR, page: syncStatus.targetPage };
            } else {
                throw err;
            }
        }
        let targetSpace = syncStatus.targetSpaceKey;
        await pageWrapper.computeSyncStatus(targetSpace, true); // TODO this doesn't seem to work in case of a batch pull. Also page titles aren't properly pushed
        callback(); // count 1 sync
    }
    // in any case, check the children
    await Promise.all(children.map(async child => {
        if (!child.skipSync(pageGroup)) {
            return doSyncRecursive(actionRef, pageGroup, child, listOfSyncStatus, syncAttachments, callback)
        } else {
            return null;
        }
    }));
}


/***/ }),

/***/ "./js/mainframe/sync/spaceScanner.js":
/*!*******************************************!*\
  !*** ./js/mainframe/sync/spaceScanner.js ***!
  \*******************************************/
/*! exports provided: default, loadPageForSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return spaceScanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPageForSync", function() { return loadPageForSync; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./js/mainframe/sync/model.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _notify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notify */ "./js/mainframe/sync/notify.js");
/* harmony import */ var _PageWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageWrapper */ "./js/mainframe/sync/PageWrapper.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/Observable.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_confluence_confluence_page_async__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/confluence/confluence-page-async */ "./js/common/confluence/confluence-page-async.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./log */ "./js/mainframe/sync/log.js");








const PAGE_EXPANDS = 'version,space,body.storage,metadata.labels,children.page,children.attachment.version,children.attachment.space';
const MIN_PROGRESS=10;
const SCAN_ACTION = 'scan';
const INDENT = "  ";

async function spaceScanner(sourceSpace, sourceRootPage) {
    setScanProgress(0);
    let sourcePage = await Object(_common_confluence_confluence_page_async__WEBPACK_IMPORTED_MODULE_5__["getContent"])(sourceSpace, sourceRootPage, PAGE_EXPANDS);
    var pageCount = 0;
    let pageSearchResult = await Object(_common_confluence_confluence_page_async__WEBPACK_IMPORTED_MODULE_5__["searchPagesWithCQL"])(sourceSpace, "ancestor = "+sourcePage.id, 100);
    pageCount += pageSearchResult.size;
    while (pageSearchResult._links.next) {
        pageSearchResult = await jquery__WEBPACK_IMPORTED_MODULE_1___default.a.get(pageSearchResult._links.next);
        pageCount += pageSearchResult.size;
    }
    var pageFoundCout = 0;
    function pageFoundCallback() {
        setScanProgress( Math.round(100*(++pageFoundCout)/pageCount) ); 
    }

    
    listPageGroups(sourceSpace, sourceRootPage, sourcePage, pageFoundCallback).subscribe(
        pageGroup => {
            Object(_log__WEBPACK_IMPORTED_MODULE_6__["default"])(`Found page group: ${pageGroup.title}`);
            pageGroup.descendants = descendants(pageGroup, pageGroup.children);
            addPageGroup(pageGroup);
        },
        e => {
            _notify__WEBPACK_IMPORTED_MODULE_2__["default"].error(`Error while listing Page Groups: ${e}`);
            setScanProgress();
        },
        () => {
            Object(_log__WEBPACK_IMPORTED_MODULE_6__["default"])('Page group listing complete');
            setScanProgress();
        }
    );
}

function addPageGroup(pageGroup) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default.a.observable(_model__WEBPACK_IMPORTED_MODULE_0__["default"].pages).insert(pageGroup);
}

function setScanProgress(percent) {
    if(typeof percent!=='number') {
        jquery__WEBPACK_IMPORTED_MODULE_1___default.a.observable(_model__WEBPACK_IMPORTED_MODULE_0__["default"].progress).removeProperty(SCAN_ACTION);
    } else {
        // percent is always scaled to start from MIN_PROGRESS%, so that the progress bar is visible from the start
        jquery__WEBPACK_IMPORTED_MODULE_1___default.a.observable(_model__WEBPACK_IMPORTED_MODULE_0__["default"].progress).setProperty(SCAN_ACTION, MIN_PROGRESS + Math.round((100-MIN_PROGRESS)*percent / 100.));
    }
}

function descendants(context, children, level) {
    let descendantsRes = [];
    level = level || INDENT;
    for (let child of children) {
        if (!child.skipSync(context)) {
            child.level = level;
            descendantsRes.push(child);
            descendantsRes = descendantsRes.concat(descendants(context, child.children, level+INDENT));
        }
    }
    return descendantsRes;
}

function listPageGroups(sourceSpaceKey, sourcePageTitle, sourcePage, pageFoundCallback) {
    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(observer => {
        (async () => {
            Object(_log__WEBPACK_IMPORTED_MODULE_6__["default"])();
            Object(_log__WEBPACK_IMPORTED_MODULE_6__["default"])(`Listing page groups to sync from ${sourceSpaceKey}:${sourcePageTitle}...`);
            await scanPageGroups(sourcePage, null, observer, pageFoundCallback);
            observer.complete();
        })().then(null, e=>observer.error(e));
    });
}

async function loadPageForSync(pageId) {
    return Object(_common_confluence_confluence_page_async__WEBPACK_IMPORTED_MODULE_5__["getContentById"])(pageId, PAGE_EXPANDS);
}

/** emits page groups to the observer (the root and subtrees starting from pages with a given label).
 * Wraps all pages in PageWrapper. */
async function scanPageGroups(sourcePage, parentPageWrapper, observer, pageFoundCallback) {
    let thisPageWrapper = new _PageWrapper__WEBPACK_IMPORTED_MODULE_3__["default"](sourcePage, parentPageWrapper);
    pageFoundCallback();
    let children = sourcePage.children.page;
    let allChildren = [];
    while (children) {
        allChildren = allChildren.concat(await Promise.all(children.results.map(async child => {
            let childDetails = await loadPageForSync(child.id);
            let childWrapper = await scanPageGroups(childDetails, thisPageWrapper, observer, pageFoundCallback);
            return childWrapper;
        })));
        if (children._links.next) {
            children = await jquery__WEBPACK_IMPORTED_MODULE_1___default.a.ajax(children._links.next);
        } else {
            children = null;
        }
    }
    thisPageWrapper.children = allChildren;

    if (thisPageWrapper.isPageGroup) {
        observer.next(thisPageWrapper);
    }
    return thisPageWrapper;
}


/***/ }),

/***/ "./js/mainframe/sync/tooltip.js":
/*!**************************************!*\
  !*** ./js/mainframe/sync/tooltip.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').tooltip({
        selector:'[data-toggle=tooltip]',
        delay: { "show": 200, "hide": 200 }
    });
});

/***/ }),

/***/ "./node_modules/bootstrap-notify/bootstrap-notify.js":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap-notify/bootstrap-notify.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*** IMPORTS FROM imports-loader ***/
var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
(function() {

/*
* Project: Bootstrap Notify = v3.1.3
* Description: Turns standard Bootstrap alerts into "Growl-like" notifications.
* Author: Mouse0270 aka Robert McIntosh
* License: MIT License
* Website: https://github.com/mouse0270/bootstrap-growl
*/
(function (factory) {
	if (true) {
		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(function ($) {
	// Create the defaults once
	var defaults = {
			element: 'body',
			position: null,
			type: "info",
			allow_dismiss: true,
			newest_on_top: false,
			showProgressbar: false,
			placement: {
				from: "top",
				align: "right"
			},
			offset: 20,
			spacing: 10,
			z_index: 1031,
			delay: 5000,
			timer: 1000,
			url_target: '_blank',
			mouse_over: null,
			animate: {
				enter: 'animated fadeInDown',
				exit: 'animated fadeOutUp'
			},
			onShow: null,
			onShown: null,
			onClose: null,
			onClosed: null,
			icon_type: 'class',
			template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
		};

	String.format = function() {
		var str = arguments[0];
		for (var i = 1; i < arguments.length; i++) {
			str = str.replace(RegExp("\\{" + (i - 1) + "\\}", "gm"), arguments[i]);
		}
		return str;
	};

	function Notify ( element, content, options ) {
		// Setup Content of Notify
		var content = {
			content: {
				message: typeof content == 'object' ? content.message : content,
				title: content.title ? content.title : '',
				icon: content.icon ? content.icon : '',
				url: content.url ? content.url : '#',
				target: content.target ? content.target : '-'
			}
		};

		options = $.extend(true, {}, content, options);
		this.settings = $.extend(true, {}, defaults, options);
		this._defaults = defaults;
		if (this.settings.content.target == "-") {
			this.settings.content.target = this.settings.url_target;
		}
		this.animations = {
			start: 'webkitAnimationStart oanimationstart MSAnimationStart animationstart',
			end: 'webkitAnimationEnd oanimationend MSAnimationEnd animationend'
		}

		if (typeof this.settings.offset == 'number') {
		    this.settings.offset = {
		    	x: this.settings.offset,
		    	y: this.settings.offset
		    };
		}

		this.init();
	};

	$.extend(Notify.prototype, {
		init: function () {
			var self = this;

			this.buildNotify();
			if (this.settings.content.icon) {
				this.setIcon();
			}
			if (this.settings.content.url != "#") {
				this.styleURL();
			}
			this.styleDismiss();
			this.placement();
			this.bind();

			this.notify = {
				$ele: this.$ele,
				update: function(command, update) {
					var commands = {};
					if (typeof command == "string") {
						commands[command] = update;
					}else{
						commands = command;
					}
					for (var command in commands) {
						switch (command) {
							case "type":
								this.$ele.removeClass('alert-' + self.settings.type);
								this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass('progress-bar-' + self.settings.type);
								self.settings.type = commands[command];
								this.$ele.addClass('alert-' + commands[command]).find('[data-notify="progressbar"] > .progress-bar').addClass('progress-bar-' + commands[command]);
								break;
							case "icon":
								var $icon = this.$ele.find('[data-notify="icon"]');
								if (self.settings.icon_type.toLowerCase() == 'class') {
									$icon.removeClass(self.settings.content.icon).addClass(commands[command]);
								}else{
									if (!$icon.is('img')) {
										$icon.find('img');
									}
									$icon.attr('src', commands[command]);
								}
								break;
							case "progress":
								var newDelay = self.settings.delay - (self.settings.delay * (commands[command] / 100));
								this.$ele.data('notify-delay', newDelay);
								this.$ele.find('[data-notify="progressbar"] > div').attr('aria-valuenow', commands[command]).css('width', commands[command] + '%');
								break;
							case "url":
								this.$ele.find('[data-notify="url"]').attr('href', commands[command]);
								break;
							case "target":
								this.$ele.find('[data-notify="url"]').attr('target', commands[command]);
								break;
							default:
								this.$ele.find('[data-notify="' + command +'"]').html(commands[command]);
						};
					}
					var posX = this.$ele.outerHeight() + parseInt(self.settings.spacing) + parseInt(self.settings.offset.y);
					self.reposition(posX);
				},
				close: function() {
					self.close();
				}
			};
		},
		buildNotify: function () {
			var content = this.settings.content;
			this.$ele = $(String.format(this.settings.template, this.settings.type, content.title, content.message, content.url, content.target));
			this.$ele.attr('data-notify-position', this.settings.placement.from + '-' + this.settings.placement.align);
			if (!this.settings.allow_dismiss) {
				this.$ele.find('[data-notify="dismiss"]').css('display', 'none');
			}
			if ((this.settings.delay <= 0 && !this.settings.showProgressbar) || !this.settings.showProgressbar) {
				this.$ele.find('[data-notify="progressbar"]').remove();
			}
		},
		setIcon: function() {
			if (this.settings.icon_type.toLowerCase() == 'class') {
				this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon);
			}else{
				if (this.$ele.find('[data-notify="icon"]').is('img')) {
					this.$ele.find('[data-notify="icon"]').attr('src', this.settings.content.icon);
				}else{
					this.$ele.find('[data-notify="icon"]').append('<img src="'+this.settings.content.icon+'" alt="Notify Icon" />');
				}
			}
		},
		styleDismiss: function() {
			this.$ele.find('[data-notify="dismiss"]').css({
				position: 'absolute',
				right: '10px',
				top: '5px',
				zIndex: this.settings.z_index + 2
			});
		},
		styleURL: function() {
			this.$ele.find('[data-notify="url"]').css({
				backgroundImage: 'url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)',
				height: '100%',
				left: '0px',
				position: 'absolute',
				top: '0px',
				width: '100%',
				zIndex: this.settings.z_index + 1
			});
		},
		placement: function() {
			var self = this,
				offsetAmt = this.settings.offset.y,
				css = {
					display: 'inline-block',
					margin: '0px auto',
					position: this.settings.position ?  this.settings.position : (this.settings.element === 'body' ? 'fixed' : 'absolute'),
					transition: 'all .5s ease-in-out',
					zIndex: this.settings.z_index
				},
				hasAnimation = false,
				settings = this.settings;

			$('[data-notify-position="' + this.settings.placement.from + '-' + this.settings.placement.align + '"]:not([data-closing="true"])').each(function() {
				return offsetAmt = Math.max(offsetAmt, parseInt($(this).css(settings.placement.from)) +  parseInt($(this).outerHeight()) +  parseInt(settings.spacing));
			});
			if (this.settings.newest_on_top == true) {
				offsetAmt = this.settings.offset.y;
			}
			css[this.settings.placement.from] = offsetAmt+'px';

			switch (this.settings.placement.align) {
				case "left":
				case "right":
					css[this.settings.placement.align] = this.settings.offset.x+'px';
					break;
				case "center":
					css.left = 0;
					css.right = 0;
					break;
			}
			this.$ele.css(css).addClass(this.settings.animate.enter);
			$.each(Array('webkit-', 'moz-', 'o-', 'ms-', ''), function(index, prefix) {
				self.$ele[0].style[prefix+'AnimationIterationCount'] = 1;
			});

			$(this.settings.element).append(this.$ele);

			if (this.settings.newest_on_top == true) {
				offsetAmt = (parseInt(offsetAmt)+parseInt(this.settings.spacing)) + this.$ele.outerHeight();
				this.reposition(offsetAmt);
			}

			if ($.isFunction(self.settings.onShow)) {
				self.settings.onShow.call(this.$ele);
			}

			this.$ele.one(this.animations.start, function(event) {
				hasAnimation = true;
			}).one(this.animations.end, function(event) {
				if ($.isFunction(self.settings.onShown)) {
					self.settings.onShown.call(this);
				}
			});

			setTimeout(function() {
				if (!hasAnimation) {
					if ($.isFunction(self.settings.onShown)) {
						self.settings.onShown.call(this);
					}
				}
			}, 600);
		},
		bind: function() {
			var self = this;

			this.$ele.find('[data-notify="dismiss"]').on('click', function() {
				self.close();
			})

			this.$ele.mouseover(function(e) {
				$(this).data('data-hover', "true");
			}).mouseout(function(e) {
				$(this).data('data-hover', "false");
			});
			this.$ele.data('data-hover', "false");

			if (this.settings.delay > 0) {
				self.$ele.data('notify-delay', self.settings.delay);
				var timer = setInterval(function() {
					var delay = parseInt(self.$ele.data('notify-delay')) - self.settings.timer;
					if ((self.$ele.data('data-hover') === 'false' && self.settings.mouse_over == "pause") || self.settings.mouse_over != "pause") {
						var percent = ((self.settings.delay - delay) / self.settings.delay) * 100;
						self.$ele.data('notify-delay', delay);
						self.$ele.find('[data-notify="progressbar"] > div').attr('aria-valuenow', percent).css('width', percent + '%');
					}
					if (delay <= -(self.settings.timer)) {
						clearInterval(timer);
						self.close();
					}
				}, self.settings.timer);
			}
		},
		close: function() {
			var self = this,
				$successors = null,
				posX = parseInt(this.$ele.css(this.settings.placement.from)),
				hasAnimation = false;

			this.$ele.data('closing', 'true').addClass(this.settings.animate.exit);
			self.reposition(posX);

			if ($.isFunction(self.settings.onClose)) {
				self.settings.onClose.call(this.$ele);
			}

			this.$ele.one(this.animations.start, function(event) {
				hasAnimation = true;
			}).one(this.animations.end, function(event) {
				$(this).remove();
				if ($.isFunction(self.settings.onClosed)) {
					self.settings.onClosed.call(this);
				}
			});

			setTimeout(function() {
				if (!hasAnimation) {
					self.$ele.remove();
					if (self.settings.onClosed) {
						self.settings.onClosed(self.$ele);
					}
				}
			}, 600);
		},
		reposition: function(posX) {
			var self = this,
				notifies = '[data-notify-position="' + this.settings.placement.from + '-' + this.settings.placement.align + '"]:not([data-closing="true"])',
				$elements = this.$ele.nextAll(notifies);
			if (this.settings.newest_on_top == true) {
				$elements = this.$ele.prevAll(notifies);
			}
			$elements.each(function() {
				$(this).css(self.settings.placement.from, posX);
				posX = (parseInt(posX)+parseInt(self.settings.spacing)) + $(this).outerHeight();
			});
		}
	});

	$.notify = function ( content, options ) {
		var plugin = new Notify( this, content, options );
		return plugin.notify;
	};
	$.notifyDefaults = function( options ) {
		defaults = $.extend(true, {}, defaults, options);
		return defaults;
	};
	$.notifyClose = function( command ) {
		if (typeof command === "undefined" || command == "all") {
			$('[data-notify]').find('[data-notify="dismiss"]').trigger('click');
		}else{
			$('[data-notify-position="'+command+'"]').find('[data-notify="dismiss"]').trigger('click');
		}
	};

}));

}.call(window));

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/bootstrap/dist/js/bootstrap.min.js":
/*!*********************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.min.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
(function() {

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
}.call(window));

/***/ }),

/***/ "./node_modules/font-awesome/css/font-awesome.min.css":
/*!************************************************************!*\
  !*** ./node_modules/font-awesome/css/font-awesome.min.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/jquery-contextmenu/dist/jquery.contextMenu.js":
/*!********************************************************************!*\
  !*** ./node_modules/jquery-contextmenu/dist/jquery.contextMenu.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

/**
 * jQuery contextMenu v2.7.0 - Plugin for simple contextMenu handling
 *
 * Version: v2.7.0
 *
 * Authors: Björn Brala (SWIS.nl), Rodney Rehm, Addy Osmani (patches for FF)
 * Web: http://swisnl.github.io/jQuery-contextMenu/
 *
 * Copyright (c) 2011-2018 SWIS BV and contributors
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *
 * Date: 2018-07-12T09:06:55.786Z
 */

// jscs:disable
/* jshint ignore:start */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as anonymous module.
        define(['jquery'], factory);
    } else if (true) {
        // Node / CommonJS
        factory(__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"));
    } else {}
})(function ($) {

    'use strict';

    // TODO: -
    // ARIA stuff: menuitem, menuitemcheckbox und menuitemradio
    // create <menu> structure if $.support[htmlCommand || htmlMenuitem] and !opt.disableNative

    // determine html5 compatibility
    $.support.htmlMenuitem = ('HTMLMenuItemElement' in window);
    $.support.htmlCommand = ('HTMLCommandElement' in window);
    $.support.eventSelectstart = ('onselectstart' in document.documentElement);
    /* // should the need arise, test for css user-select
     $.support.cssUserSelect = (function(){
     var t = false,
     e = document.createElement('div');

     $.each('Moz|Webkit|Khtml|O|ms|Icab|'.split('|'), function(i, prefix) {
     var propCC = prefix + (prefix ? 'U' : 'u') + 'serSelect',
     prop = (prefix ? ('-' + prefix.toLowerCase() + '-') : '') + 'user-select';

     e.style.cssText = prop + ': text;';
     if (e.style[propCC] == 'text') {
     t = true;
     return false;
     }

     return true;
     });

     return t;
     })();
     */


    if (!$.ui || !$.widget) {
        // duck punch $.cleanData like jQueryUI does to get that remove event
        $.cleanData = (function (orig) {
            return function (elems) {
                var events, elem, i;
                for (i = 0; elems[i] != null; i++) {
                    elem = elems[i];
                    try {
                        // Only trigger remove when necessary to save time
                        events = $._data(elem, 'events');
                        if (events && events.remove) {
                            $(elem).triggerHandler('remove');
                        }

                        // Http://bugs.jquery.com/ticket/8235
                    } catch (e) {
                    }
                }
                orig(elems);
            };
        })($.cleanData);
    }
    /* jshint ignore:end */
    // jscs:enable

    var // currently active contextMenu trigger
        $currentTrigger = null,
        // is contextMenu initialized with at least one menu?
        initialized = false,
        // window handle
        $win = $(window),
        // number of registered menus
        counter = 0,
        // mapping selector to namespace
        namespaces = {},
        // mapping namespace to options
        menus = {},
        // custom command type handlers
        types = {},
        // default values
        defaults = {
            // selector of contextMenu trigger
            selector: null,
            // where to append the menu to
            appendTo: null,
            // method to trigger context menu ["right", "left", "hover"]
            trigger: 'right',
            // hide menu when mouse leaves trigger / menu elements
            autoHide: false,
            // ms to wait before showing a hover-triggered context menu
            delay: 200,
            // flag denoting if a second trigger should simply move (true) or rebuild (false) an open menu
            // as long as the trigger happened on one of the trigger-element's child nodes
            reposition: true,
            // Flag denoting if a second trigger should close the menu, as long as
            // the trigger happened on one of the trigger-element's child nodes.
            // This overrides the reposition option.
            hideOnSecondTrigger: false,

            //ability to select submenu
            selectableSubMenu: false,

            // Default classname configuration to be able avoid conflicts in frameworks
            classNames: {
                hover: 'context-menu-hover', // Item hover
                disabled: 'context-menu-disabled', // Item disabled
                visible: 'context-menu-visible', // Item visible
                notSelectable: 'context-menu-not-selectable', // Item not selectable

                icon: 'context-menu-icon',
                iconEdit: 'context-menu-icon-edit',
                iconCut: 'context-menu-icon-cut',
                iconCopy: 'context-menu-icon-copy',
                iconPaste: 'context-menu-icon-paste',
                iconDelete: 'context-menu-icon-delete',
                iconAdd: 'context-menu-icon-add',
                iconQuit: 'context-menu-icon-quit',
                iconLoadingClass: 'context-menu-icon-loading'
            },

            // determine position to show menu at
            determinePosition: function ($menu) {
                // position to the lower middle of the trigger element
                if ($.ui && $.ui.position) {
                    // .position() is provided as a jQuery UI utility
                    // (...and it won't work on hidden elements)
                    $menu.css('display', 'block').position({
                        my: 'center top',
                        at: 'center bottom',
                        of: this,
                        offset: '0 5',
                        collision: 'fit'
                    }).css('display', 'none');
                } else {
                    // determine contextMenu position
                    var offset = this.offset();
                    offset.top += this.outerHeight();
                    offset.left += this.outerWidth() / 2 - $menu.outerWidth() / 2;
                    $menu.css(offset);
                }
            },
            // position menu
            position: function (opt, x, y) {
                var offset;
                // determine contextMenu position
                if (!x && !y) {
                    opt.determinePosition.call(this, opt.$menu);
                    return;
                } else if (x === 'maintain' && y === 'maintain') {
                    // x and y must not be changed (after re-show on command click)
                    offset = opt.$menu.position();
                } else {
                    // x and y are given (by mouse event)
                    var offsetParentOffset = opt.$menu.offsetParent().offset();
                    offset = {top: y - offsetParentOffset.top, left: x -offsetParentOffset.left};
                }

                // correct offset if viewport demands it
                var bottom = $win.scrollTop() + $win.height(),
                    right = $win.scrollLeft() + $win.width(),
                    height = opt.$menu.outerHeight(),
                    width = opt.$menu.outerWidth();

                if (offset.top + height > bottom) {
                    offset.top -= height;
                }

                if (offset.top < 0) {
                    offset.top = 0;
                }

                if (offset.left + width > right) {
                    offset.left -= width;
                }

                if (offset.left < 0) {
                    offset.left = 0;
                }

                opt.$menu.css(offset);
            },
            // position the sub-menu
            positionSubmenu: function ($menu) {
                if (typeof $menu === 'undefined') {
                    // When user hovers over item (which has sub items) handle.focusItem will call this.
                    // but the submenu does not exist yet if opt.items is a promise. just return, will
                    // call positionSubmenu after promise is completed.
                    return;
                }
                if ($.ui && $.ui.position) {
                    // .position() is provided as a jQuery UI utility
                    // (...and it won't work on hidden elements)
                    $menu.css('display', 'block').position({
                        my: 'left top-5',
                        at: 'right top',
                        of: this,
                        collision: 'flipfit fit'
                    }).css('display', '');
                } else {
                    // determine contextMenu position
                    var offset = {
                        top: -9,
                        left: this.outerWidth() - 5
                    };
                    $menu.css(offset);
                }
            },
            // offset to add to zIndex
            zIndex: 1,
            // show hide animation settings
            animation: {
                duration: 50,
                show: 'slideDown',
                hide: 'slideUp'
            },
            // events
            events: {
                show: $.noop,
                hide: $.noop,
                activated: $.noop
            },
            // default callback
            callback: null,
            // list of contextMenu items
            items: {}
        },
        // mouse position for hover activation
        hoveract = {
            timer: null,
            pageX: null,
            pageY: null
        },
        // determine zIndex
        zindex = function ($t) {
            var zin = 0,
                $tt = $t;

            while (true) {
                zin = Math.max(zin, parseInt($tt.css('z-index'), 10) || 0);
                $tt = $tt.parent();
                if (!$tt || !$tt.length || 'html body'.indexOf($tt.prop('nodeName').toLowerCase()) > -1) {
                    break;
                }
            }
            return zin;
        },
        // event handlers
        handle = {
            // abort anything
            abortevent: function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();
            },
            // contextmenu show dispatcher
            contextmenu: function (e) {
                var $this = $(this);

                // disable actual context-menu if we are using the right mouse button as the trigger
                if (e.data.trigger === 'right') {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                }

                // abort native-triggered events unless we're triggering on right click
                if ((e.data.trigger !== 'right' && e.data.trigger !== 'demand') && e.originalEvent) {
                    return;
                }

                // Let the current contextmenu decide if it should show or not based on its own trigger settings
                if (typeof e.mouseButton !== 'undefined' && e.data) {
                    if (!(e.data.trigger === 'left' && e.mouseButton === 0) && !(e.data.trigger === 'right' && e.mouseButton === 2)) {
                        // Mouse click is not valid.
                        return;
                    }
                }

                // abort event if menu is visible for this trigger
                if ($this.hasClass('context-menu-active')) {
                    return;
                }

                if (!$this.hasClass('context-menu-disabled')) {
                    // theoretically need to fire a show event at <menu>
                    // http://www.whatwg.org/specs/web-apps/current-work/multipage/interactive-elements.html#context-menus
                    // var evt = jQuery.Event("show", { data: data, pageX: e.pageX, pageY: e.pageY, relatedTarget: this });
                    // e.data.$menu.trigger(evt);

                    $currentTrigger = $this;
                    if (e.data.build) {
                        var built = e.data.build($currentTrigger, e);
                        // abort if build() returned false
                        if (built === false) {
                            return;
                        }

                        // dynamically build menu on invocation
                        e.data = $.extend(true, {}, defaults, e.data, built || {});

                        // abort if there are no items to display
                        if (!e.data.items || $.isEmptyObject(e.data.items)) {
                            // Note: jQuery captures and ignores errors from event handlers
                            if (window.console) {
                                (console.error || console.log).call(console, 'No items specified to show in contextMenu');
                            }

                            throw new Error('No Items specified');
                        }

                        // backreference for custom command type creation
                        e.data.$trigger = $currentTrigger;

                        op.create(e.data);
                    }
                    op.show.call($this, e.data, e.pageX, e.pageY);
                }
            },
            // contextMenu left-click trigger
            click: function (e) {
                e.preventDefault();
                e.stopImmediatePropagation();
                $(this).trigger($.Event('contextmenu', {data: e.data, pageX: e.pageX, pageY: e.pageY}));
            },
            // contextMenu right-click trigger
            mousedown: function (e) {
                // register mouse down
                var $this = $(this);

                // hide any previous menus
                if ($currentTrigger && $currentTrigger.length && !$currentTrigger.is($this)) {
                    $currentTrigger.data('contextMenu').$menu.trigger('contextmenu:hide');
                }

                // activate on right click
                if (e.button === 2) {
                    $currentTrigger = $this.data('contextMenuActive', true);
                }
            },
            // contextMenu right-click trigger
            mouseup: function (e) {
                // show menu
                var $this = $(this);
                if ($this.data('contextMenuActive') && $currentTrigger && $currentTrigger.length && $currentTrigger.is($this) && !$this.hasClass('context-menu-disabled')) {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    $currentTrigger = $this;
                    $this.trigger($.Event('contextmenu', {data: e.data, pageX: e.pageX, pageY: e.pageY}));
                }

                $this.removeData('contextMenuActive');
            },
            // contextMenu hover trigger
            mouseenter: function (e) {
                var $this = $(this),
                    $related = $(e.relatedTarget),
                    $document = $(document);

                // abort if we're coming from a menu
                if ($related.is('.context-menu-list') || $related.closest('.context-menu-list').length) {
                    return;
                }

                // abort if a menu is shown
                if ($currentTrigger && $currentTrigger.length) {
                    return;
                }

                hoveract.pageX = e.pageX;
                hoveract.pageY = e.pageY;
                hoveract.data = e.data;
                $document.on('mousemove.contextMenuShow', handle.mousemove);
                hoveract.timer = setTimeout(function () {
                    hoveract.timer = null;
                    $document.off('mousemove.contextMenuShow');
                    $currentTrigger = $this;
                    $this.trigger($.Event('contextmenu', {
                        data: hoveract.data,
                        pageX: hoveract.pageX,
                        pageY: hoveract.pageY
                    }));
                }, e.data.delay);
            },
            // contextMenu hover trigger
            mousemove: function (e) {
                hoveract.pageX = e.pageX;
                hoveract.pageY = e.pageY;
            },
            // contextMenu hover trigger
            mouseleave: function (e) {
                // abort if we're leaving for a menu
                var $related = $(e.relatedTarget);
                if ($related.is('.context-menu-list') || $related.closest('.context-menu-list').length) {
                    return;
                }

                try {
                    clearTimeout(hoveract.timer);
                } catch (e) {
                }

                hoveract.timer = null;
            },
            // click on layer to hide contextMenu
            layerClick: function (e) {
                var $this = $(this),
                    root = $this.data('contextMenuRoot'),
                    button = e.button,
                    x = e.pageX,
                    y = e.pageY,
                    fakeClick = x === undefined,
                    target,
                    offset;

                e.preventDefault();

                setTimeout(function () {
                    // If the click is not real, things break: https://github.com/swisnl/jQuery-contextMenu/issues/132
                    if(fakeClick){
                        if (root !== null && typeof root !== 'undefined' && root.$menu !== null  && typeof root.$menu !== 'undefined') {
                            root.$menu.trigger('contextmenu:hide');
                        }
                        return;
                    }

                    var $window;
                    var triggerAction = ((root.trigger === 'left' && button === 0) || (root.trigger === 'right' && button === 2));

                    // find the element that would've been clicked, wasn't the layer in the way
                    if (document.elementFromPoint && root.$layer) {
                        root.$layer.hide();
                        target = document.elementFromPoint(x - $win.scrollLeft(), y - $win.scrollTop());

                        // also need to try and focus this element if we're in a contenteditable area,
                        // as the layer will prevent the browser mouse action we want
                        if (target.isContentEditable) {
                            var range = document.createRange(),
                                sel = window.getSelection();
                            range.selectNode(target);
                            range.collapse(true);
                            sel.removeAllRanges();
                            sel.addRange(range);
                        }
                        $(target).trigger(e);
                        root.$layer.show();
                    }

                    if (root.hideOnSecondTrigger && triggerAction && root.$menu !== null && typeof root.$menu !== 'undefined') {
                      root.$menu.trigger('contextmenu:hide');
                      return;
                    }

                    if (root.reposition && triggerAction) {
                        if (document.elementFromPoint) {
                            if (root.$trigger.is(target)) {
                                root.position.call(root.$trigger, root, x, y);
                                return;
                            }
                        } else {
                            offset = root.$trigger.offset();
                            $window = $(window);
                            // while this looks kinda awful, it's the best way to avoid
                            // unnecessarily calculating any positions
                            offset.top += $window.scrollTop();
                            if (offset.top <= e.pageY) {
                                offset.left += $window.scrollLeft();
                                if (offset.left <= e.pageX) {
                                    offset.bottom = offset.top + root.$trigger.outerHeight();
                                    if (offset.bottom >= e.pageY) {
                                        offset.right = offset.left + root.$trigger.outerWidth();
                                        if (offset.right >= e.pageX) {
                                            // reposition
                                            root.position.call(root.$trigger, root, x, y);
                                            return;
                                        }
                                    }
                                }
                            }
                        }
                    }

                    if (target && triggerAction) {
                        root.$trigger.one('contextmenu:hidden', function () {
                            $(target).contextMenu({x: x, y: y, button: button});
                        });
                    }

                    if (root !== null && typeof root !== 'undefined' && root.$menu !== null  && typeof root.$menu !== 'undefined') {
                        root.$menu.trigger('contextmenu:hide');
                    }
                }, 50);
            },
            // key handled :hover
            keyStop: function (e, opt) {
                if (!opt.isInput) {
                    e.preventDefault();
                }

                e.stopPropagation();
            },
            key: function (e) {

                var opt = {};

                // Only get the data from $currentTrigger if it exists
                if ($currentTrigger) {
                    opt = $currentTrigger.data('contextMenu') || {};
                }
                // If the trigger happen on a element that are above the contextmenu do this
                if (typeof opt.zIndex === 'undefined') {
                    opt.zIndex = 0;
                }
                var targetZIndex = 0;
                var getZIndexOfTriggerTarget = function (target) {
                    if (target.style.zIndex !== '') {
                        targetZIndex = target.style.zIndex;
                    } else {
                        if (target.offsetParent !== null && typeof target.offsetParent !== 'undefined') {
                            getZIndexOfTriggerTarget(target.offsetParent);
                        }
                        else if (target.parentElement !== null && typeof target.parentElement !== 'undefined') {
                            getZIndexOfTriggerTarget(target.parentElement);
                        }
                    }
                };
                getZIndexOfTriggerTarget(e.target);
                // If targetZIndex is heigher then opt.zIndex dont progress any futher.
                // This is used to make sure that if you are using a dialog with a input / textarea / contenteditable div
                // and its above the contextmenu it wont steal keys events
                if (opt.$menu && parseInt(targetZIndex,10) > parseInt(opt.$menu.css("zIndex"),10)) {
                    return;
                }
                switch (e.keyCode) {
                    case 9:
                    case 38: // up
                        handle.keyStop(e, opt);
                        // if keyCode is [38 (up)] or [9 (tab) with shift]
                        if (opt.isInput) {
                            if (e.keyCode === 9 && e.shiftKey) {
                                e.preventDefault();
                                if (opt.$selected) {
                                    opt.$selected.find('input, textarea, select').blur();
                                }
                                if (opt.$menu !== null && typeof opt.$menu !== 'undefined') {
                                    opt.$menu.trigger('prevcommand');
                                }
                                return;
                            } else if (e.keyCode === 38 && opt.$selected.find('input, textarea, select').prop('type') === 'checkbox') {
                                // checkboxes don't capture this key
                                e.preventDefault();
                                return;
                            }
                        } else if (e.keyCode !== 9 || e.shiftKey) {
                            if (opt.$menu !== null && typeof opt.$menu !== 'undefined') {
                                opt.$menu.trigger('prevcommand');
                            }
                            return;
                        }
                        break;
                    // omitting break;
                    // case 9: // tab - reached through omitted break;
                    case 40: // down
                        handle.keyStop(e, opt);
                        if (opt.isInput) {
                            if (e.keyCode === 9) {
                                e.preventDefault();
                                if (opt.$selected) {
                                    opt.$selected.find('input, textarea, select').blur();
                                }
                                if (opt.$menu !== null && typeof opt.$menu !== 'undefined') {
                                    opt.$menu.trigger('nextcommand');
                                }
                                return;
                            } else if (e.keyCode === 40 && opt.$selected.find('input, textarea, select').prop('type') === 'checkbox') {
                                // checkboxes don't capture this key
                                e.preventDefault();
                                return;
                            }
                        } else {
                            if (opt.$menu !== null && typeof opt.$menu !== 'undefined') {
                                opt.$menu.trigger('nextcommand');
                            }
                            return;
                        }
                        break;

                    case 37: // left
                        handle.keyStop(e, opt);
                        if (opt.isInput || !opt.$selected || !opt.$selected.length) {
                            break;
                        }

                        if (!opt.$selected.parent().hasClass('context-menu-root')) {
                            var $parent = opt.$selected.parent().parent();
                            opt.$selected.trigger('contextmenu:blur');
                            opt.$selected = $parent;
                            return;
                        }
                        break;

                    case 39: // right
                        handle.keyStop(e, opt);
                        if (opt.isInput || !opt.$selected || !opt.$selected.length) {
                            break;
                        }

                        var itemdata = opt.$selected.data('contextMenu') || {};
                        if (itemdata.$menu && opt.$selected.hasClass('context-menu-submenu')) {
                            opt.$selected = null;
                            itemdata.$selected = null;
                            itemdata.$menu.trigger('nextcommand');
                            return;
                        }
                        break;

                    case 35: // end
                    case 36: // home
                        if (opt.$selected && opt.$selected.find('input, textarea, select').length) {
                            return;
                        } else {
                            (opt.$selected && opt.$selected.parent() || opt.$menu)
                                .children(':not(.' + opt.classNames.disabled + ', .' + opt.classNames.notSelectable + ')')[e.keyCode === 36 ? 'first' : 'last']()
                                .trigger('contextmenu:focus');
                            e.preventDefault();
                            return;
                        }
                        break;

                    case 13: // enter
                        handle.keyStop(e, opt);
                        if (opt.isInput) {
                            if (opt.$selected && !opt.$selected.is('textarea, select')) {
                                e.preventDefault();
                                return;
                            }
                            break;
                        }
                        if (typeof opt.$selected !== 'undefined' && opt.$selected !== null) {
                            opt.$selected.trigger('mouseup');
                        }
                        return;

                    case 32: // space
                    case 33: // page up
                    case 34: // page down
                        // prevent browser from scrolling down while menu is visible
                        handle.keyStop(e, opt);
                        return;

                    case 27: // esc
                        handle.keyStop(e, opt);
                        if (opt.$menu !== null && typeof opt.$menu !== 'undefined') {
                            opt.$menu.trigger('contextmenu:hide');
                        }
                        return;

                    default: // 0-9, a-z
                        var k = (String.fromCharCode(e.keyCode)).toUpperCase();
                        if (opt.accesskeys && opt.accesskeys[k]) {
                            // according to the specs accesskeys must be invoked immediately
                            opt.accesskeys[k].$node.trigger(opt.accesskeys[k].$menu ? 'contextmenu:focus' : 'mouseup');
                            return;
                        }
                        break;
                }
                // pass event to selected item,
                // stop propagation to avoid endless recursion
                e.stopPropagation();
                if (typeof opt.$selected !== 'undefined' && opt.$selected !== null) {
                    opt.$selected.trigger(e);
                }
            },
            // select previous possible command in menu
            prevItem: function (e) {
                e.stopPropagation();
                var opt = $(this).data('contextMenu') || {};
                var root = $(this).data('contextMenuRoot') || {};

                // obtain currently selected menu
                if (opt.$selected) {
                    var $s = opt.$selected;
                    opt = opt.$selected.parent().data('contextMenu') || {};
                    opt.$selected = $s;
                }

                var $children = opt.$menu.children(),
                    $prev = !opt.$selected || !opt.$selected.prev().length ? $children.last() : opt.$selected.prev(),
                    $round = $prev;

                // skip disabled or hidden elements
                while ($prev.hasClass(root.classNames.disabled) || $prev.hasClass(root.classNames.notSelectable) || $prev.is(':hidden')) {
                    if ($prev.prev().length) {
                        $prev = $prev.prev();
                    } else {
                        $prev = $children.last();
                    }
                    if ($prev.is($round)) {
                        // break endless loop
                        return;
                    }
                }

                // leave current
                if (opt.$selected) {
                    handle.itemMouseleave.call(opt.$selected.get(0), e);
                }

                // activate next
                handle.itemMouseenter.call($prev.get(0), e);

                // focus input
                var $input = $prev.find('input, textarea, select');
                if ($input.length) {
                    $input.focus();
                }
            },
            // select next possible command in menu
            nextItem: function (e) {
                e.stopPropagation();
                var opt = $(this).data('contextMenu') || {};
                var root = $(this).data('contextMenuRoot') || {};

                // obtain currently selected menu
                if (opt.$selected) {
                    var $s = opt.$selected;
                    opt = opt.$selected.parent().data('contextMenu') || {};
                    opt.$selected = $s;
                }

                var $children = opt.$menu.children(),
                    $next = !opt.$selected || !opt.$selected.next().length ? $children.first() : opt.$selected.next(),
                    $round = $next;

                // skip disabled
                while ($next.hasClass(root.classNames.disabled) || $next.hasClass(root.classNames.notSelectable) || $next.is(':hidden')) {
                    if ($next.next().length) {
                        $next = $next.next();
                    } else {
                        $next = $children.first();
                    }
                    if ($next.is($round)) {
                        // break endless loop
                        return;
                    }
                }

                // leave current
                if (opt.$selected) {
                    handle.itemMouseleave.call(opt.$selected.get(0), e);
                }

                // activate next
                handle.itemMouseenter.call($next.get(0), e);

                // focus input
                var $input = $next.find('input, textarea, select');
                if ($input.length) {
                    $input.focus();
                }
            },
            // flag that we're inside an input so the key handler can act accordingly
            focusInput: function () {
                var $this = $(this).closest('.context-menu-item'),
                    data = $this.data(),
                    opt = data.contextMenu,
                    root = data.contextMenuRoot;

                root.$selected = opt.$selected = $this;
                root.isInput = opt.isInput = true;
            },
            // flag that we're inside an input so the key handler can act accordingly
            blurInput: function () {
                var $this = $(this).closest('.context-menu-item'),
                    data = $this.data(),
                    opt = data.contextMenu,
                    root = data.contextMenuRoot;

                root.isInput = opt.isInput = false;
            },
            // :hover on menu
            menuMouseenter: function () {
                var root = $(this).data().contextMenuRoot;
                root.hovering = true;
            },
            // :hover on menu
            menuMouseleave: function (e) {
                var root = $(this).data().contextMenuRoot;
                if (root.$layer && root.$layer.is(e.relatedTarget)) {
                    root.hovering = false;
                }
            },
            // :hover done manually so key handling is possible
            itemMouseenter: function (e) {
                var $this = $(this),
                    data = $this.data(),
                    opt = data.contextMenu,
                    root = data.contextMenuRoot;

                root.hovering = true;

                // abort if we're re-entering
                if (e && root.$layer && root.$layer.is(e.relatedTarget)) {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                }

                // make sure only one item is selected
                (opt.$menu ? opt : root).$menu
                    .children('.' + root.classNames.hover).trigger('contextmenu:blur')
                    .children('.hover').trigger('contextmenu:blur');

                if ($this.hasClass(root.classNames.disabled) || $this.hasClass(root.classNames.notSelectable)) {
                    opt.$selected = null;
                    return;
                }


                $this.trigger('contextmenu:focus');
            },
            // :hover done manually so key handling is possible
            itemMouseleave: function (e) {
                var $this = $(this),
                    data = $this.data(),
                    opt = data.contextMenu,
                    root = data.contextMenuRoot;

                if (root !== opt && root.$layer && root.$layer.is(e.relatedTarget)) {
                    if (typeof root.$selected !== 'undefined' && root.$selected !== null) {
                        root.$selected.trigger('contextmenu:blur');
                    }
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    root.$selected = opt.$selected = opt.$node;
                    return;
                }

                if(opt && opt.$menu && opt.$menu.hasClass('context-menu-visible')){
                    return;
                }

                $this.trigger('contextmenu:blur');
            },
            // contextMenu item click
            itemClick: function (e) {
                var $this = $(this),
                    data = $this.data(),
                    opt = data.contextMenu,
                    root = data.contextMenuRoot,
                    key = data.contextMenuKey,
                    callback;

                // abort if the key is unknown or disabled or is a menu
                if (!opt.items[key] || $this.is('.' + root.classNames.disabled + ', .context-menu-separator, .' + root.classNames.notSelectable) || ($this.is('.context-menu-submenu') && root.selectableSubMenu === false )) {
                    return;
                }

                e.preventDefault();
                e.stopImmediatePropagation();

                if ($.isFunction(opt.callbacks[key]) && Object.prototype.hasOwnProperty.call(opt.callbacks, key)) {
                    // item-specific callback
                    callback = opt.callbacks[key];
                } else if ($.isFunction(root.callback)) {
                    // default callback
                    callback = root.callback;
                } else {
                    // no callback, no action
                    return;
                }

                // hide menu if callback doesn't stop that
                if (callback.call(root.$trigger, key, root, e) !== false) {
                    root.$menu.trigger('contextmenu:hide');
                } else if (root.$menu.parent().length) {
                    op.update.call(root.$trigger, root);
                }
            },
            // ignore click events on input elements
            inputClick: function (e) {
                e.stopImmediatePropagation();
            },
            // hide <menu>
            hideMenu: function (e, data) {
                var root = $(this).data('contextMenuRoot');
                op.hide.call(root.$trigger, root, data && data.force);
            },
            // focus <command>
            focusItem: function (e) {
                e.stopPropagation();
                var $this = $(this),
                    data = $this.data(),
                    opt = data.contextMenu,
                    root = data.contextMenuRoot;

                if ($this.hasClass(root.classNames.disabled) || $this.hasClass(root.classNames.notSelectable)) {
                    return;
                }

                $this
                    .addClass([root.classNames.hover, root.classNames.visible].join(' '))
                    // select other items and included items
                    .parent().find('.context-menu-item').not($this)
                    .removeClass(root.classNames.visible)
                    .filter('.' + root.classNames.hover)
                    .trigger('contextmenu:blur');

                // remember selected
                opt.$selected = root.$selected = $this;


                if(opt && opt.$node && opt.$node.hasClass('context-menu-submenu')){
                    opt.$node.addClass(root.classNames.hover);
                }

                // position sub-menu - do after show so dumb $.ui.position can keep up
                if (opt.$node) {
                    root.positionSubmenu.call(opt.$node, opt.$menu);
                }
            },
            // blur <command>
            blurItem: function (e) {
                e.stopPropagation();
                var $this = $(this),
                    data = $this.data(),
                    opt = data.contextMenu,
                    root = data.contextMenuRoot;

                if (opt.autoHide) { // for tablets and touch screens this needs to remain
                    $this.removeClass(root.classNames.visible);
                }
                $this.removeClass(root.classNames.hover);
                opt.$selected = null;
            }
        },
        // operations
        op = {
            show: function (opt, x, y) {
                var $trigger = $(this),
                    css = {};

                // hide any open menus
                $('#context-menu-layer').trigger('mousedown');

                // backreference for callbacks
                opt.$trigger = $trigger;

                // show event
                if (opt.events.show.call($trigger, opt) === false) {
                    $currentTrigger = null;
                    return;
                }

                // create or update context menu
                var hasVisibleItems = op.update.call($trigger, opt);
                if (hasVisibleItems === false) {
                    $currentTrigger = null;
                    return;
                }

                // position menu
                opt.position.call($trigger, opt, x, y);

                // make sure we're in front
                if (opt.zIndex) {
                    var additionalZValue = opt.zIndex;
                    // If opt.zIndex is a function, call the function to get the right zIndex.
                    if (typeof opt.zIndex === 'function') {
                        additionalZValue = opt.zIndex.call($trigger, opt);
                    }
                    css.zIndex = zindex($trigger) + additionalZValue;
                }

                // add layer
                op.layer.call(opt.$menu, opt, css.zIndex);

                // adjust sub-menu zIndexes
                opt.$menu.find('ul').css('zIndex', css.zIndex + 1);

                // position and show context menu
                opt.$menu.css(css)[opt.animation.show](opt.animation.duration, function () {
                    $trigger.trigger('contextmenu:visible');

                    op.activated(opt);
                    opt.events.activated(opt);
                });
                // make options available and set state
                $trigger
                    .data('contextMenu', opt)
                    .addClass('context-menu-active');

                // register key handler
                $(document).off('keydown.contextMenu').on('keydown.contextMenu', handle.key);
                // register autoHide handler
                if (opt.autoHide) {
                    // mouse position handler
                    $(document).on('mousemove.contextMenuAutoHide', function (e) {
                        // need to capture the offset on mousemove,
                        // since the page might've been scrolled since activation
                        var pos = $trigger.offset();
                        pos.right = pos.left + $trigger.outerWidth();
                        pos.bottom = pos.top + $trigger.outerHeight();

                        if (opt.$layer && !opt.hovering && (!(e.pageX >= pos.left && e.pageX <= pos.right) || !(e.pageY >= pos.top && e.pageY <= pos.bottom))) {
                            /* Additional hover check after short time, you might just miss the edge of the menu */
                            setTimeout(function () {
                                if (!opt.hovering && opt.$menu !== null && typeof opt.$menu !== 'undefined') {
                                    opt.$menu.trigger('contextmenu:hide');
                                }
                            }, 50);
                        }
                    });
                }
            },
            hide: function (opt, force) {
                var $trigger = $(this);
                if (!opt) {
                    opt = $trigger.data('contextMenu') || {};
                }

                // hide event
                if (!force && opt.events && opt.events.hide.call($trigger, opt) === false) {
                    return;
                }

                // remove options and revert state
                $trigger
                    .removeData('contextMenu')
                    .removeClass('context-menu-active');

                if (opt.$layer) {
                    // keep layer for a bit so the contextmenu event can be aborted properly by opera
                    setTimeout((function ($layer) {
                        return function () {
                            $layer.remove();
                        };
                    })(opt.$layer), 10);

                    try {
                        delete opt.$layer;
                    } catch (e) {
                        opt.$layer = null;
                    }
                }

                // remove handle
                $currentTrigger = null;
                // remove selected
                opt.$menu.find('.' + opt.classNames.hover).trigger('contextmenu:blur');
                opt.$selected = null;
                // collapse all submenus
                opt.$menu.find('.' + opt.classNames.visible).removeClass(opt.classNames.visible);
                // unregister key and mouse handlers
                // $(document).off('.contextMenuAutoHide keydown.contextMenu'); // http://bugs.jquery.com/ticket/10705
                $(document).off('.contextMenuAutoHide').off('keydown.contextMenu');
                // hide menu
                if (opt.$menu) {
                    opt.$menu[opt.animation.hide](opt.animation.duration, function () {
                        // tear down dynamically built menu after animation is completed.
                        if (opt.build) {
                            opt.$menu.remove();
                            $.each(opt, function (key) {
                                switch (key) {
                                    case 'ns':
                                    case 'selector':
                                    case 'build':
                                    case 'trigger':
                                        return true;

                                    default:
                                        opt[key] = undefined;
                                        try {
                                            delete opt[key];
                                        } catch (e) {
                                        }
                                        return true;
                                }
                            });
                        }

                        setTimeout(function () {
                            $trigger.trigger('contextmenu:hidden');
                        }, 10);
                    });
                }
            },
            create: function (opt, root) {
                if (typeof root === 'undefined') {
                    root = opt;
                }

                // create contextMenu
                opt.$menu = $('<ul class="context-menu-list"></ul>').addClass(opt.className || '').data({
                    'contextMenu': opt,
                    'contextMenuRoot': root
                });

                $.each(['callbacks', 'commands', 'inputs'], function (i, k) {
                    opt[k] = {};
                    if (!root[k]) {
                        root[k] = {};
                    }
                });

                if (!root.accesskeys) {
                    root.accesskeys = {};
                }

                function createNameNode(item) {
                    var $name = $('<span></span>');
                    if (item._accesskey) {
                        if (item._beforeAccesskey) {
                            $name.append(document.createTextNode(item._beforeAccesskey));
                        }
                        $('<span></span>')
                            .addClass('context-menu-accesskey')
                            .text(item._accesskey)
                            .appendTo($name);
                        if (item._afterAccesskey) {
                            $name.append(document.createTextNode(item._afterAccesskey));
                        }
                    } else {
                        if (item.isHtmlName) {
                            // restrict use with access keys
                            if (typeof item.accesskey !== 'undefined') {
                                throw new Error('accesskeys are not compatible with HTML names and cannot be used together in the same item');
                            }
                            $name.html(item.name);
                        } else {
                            $name.text(item.name);
                        }
                    }
                    return $name;
                }

                // create contextMenu items
                $.each(opt.items, function (key, item) {
                    var $t = $('<li class="context-menu-item"></li>').addClass(item.className || ''),
                        $label = null,
                        $input = null;

                    // iOS needs to see a click-event bound to an element to actually
                    // have the TouchEvents infrastructure trigger the click event
                    $t.on('click', $.noop);

                    // Make old school string seperator a real item so checks wont be
                    // akward later.
                    // And normalize 'cm_separator' into 'cm_seperator'.
                    if (typeof item === 'string' || item.type === 'cm_separator') {
                        item = {type: 'cm_seperator'};
                    }

                    item.$node = $t.data({
                        'contextMenu': opt,
                        'contextMenuRoot': root,
                        'contextMenuKey': key
                    });

                    // register accesskey
                    // NOTE: the accesskey attribute should be applicable to any element, but Safari5 and Chrome13 still can't do that
                    if (typeof item.accesskey !== 'undefined') {
                        var aks = splitAccesskey(item.accesskey);
                        for (var i = 0, ak; ak = aks[i]; i++) {
                            if (!root.accesskeys[ak]) {
                                root.accesskeys[ak] = item;
                                var matched = item.name.match(new RegExp('^(.*?)(' + ak + ')(.*)$', 'i'));
                                if (matched) {
                                    item._beforeAccesskey = matched[1];
                                    item._accesskey = matched[2];
                                    item._afterAccesskey = matched[3];
                                }
                                break;
                            }
                        }
                    }

                    if (item.type && types[item.type]) {
                        // run custom type handler
                        types[item.type].call($t, item, opt, root);
                        // register commands
                        $.each([opt, root], function (i, k) {
                            k.commands[key] = item;
                            // Overwrite only if undefined or the item is appended to the root. This so it
                            // doesn't overwrite callbacks of root elements if the name is the same.
                            if ($.isFunction(item.callback) && (typeof k.callbacks[key] === 'undefined' || typeof opt.type === 'undefined')) {
                                k.callbacks[key] = item.callback;
                            }
                        });
                    } else {
                        // add label for input
                        if (item.type === 'cm_seperator') {
                            $t.addClass('context-menu-separator ' + root.classNames.notSelectable);
                        } else if (item.type === 'html') {
                            $t.addClass('context-menu-html ' + root.classNames.notSelectable);
                        } else if (item.type !== 'sub' && item.type) {
                            $label = $('<label></label>').appendTo($t);
                            createNameNode(item).appendTo($label);

                            $t.addClass('context-menu-input');
                            opt.hasTypes = true;
                            $.each([opt, root], function (i, k) {
                                k.commands[key] = item;
                                k.inputs[key] = item;
                            });
                        } else if (item.items) {
                            item.type = 'sub';
                        }

                        switch (item.type) {
                            case 'cm_seperator':
                                break;

                            case 'text':
                                $input = $('<input type="text" value="1" name="" />')
                                    .attr('name', 'context-menu-input-' + key)
                                    .val(item.value || '')
                                    .appendTo($label);
                                break;

                            case 'textarea':
                                $input = $('<textarea name=""></textarea>')
                                    .attr('name', 'context-menu-input-' + key)
                                    .val(item.value || '')
                                    .appendTo($label);

                                if (item.height) {
                                    $input.height(item.height);
                                }
                                break;

                            case 'checkbox':
                                $input = $('<input type="checkbox" value="1" name="" />')
                                    .attr('name', 'context-menu-input-' + key)
                                    .val(item.value || '')
                                    .prop('checked', !!item.selected)
                                    .prependTo($label);
                                break;

                            case 'radio':
                                $input = $('<input type="radio" value="1" name="" />')
                                    .attr('name', 'context-menu-input-' + item.radio)
                                    .val(item.value || '')
                                    .prop('checked', !!item.selected)
                                    .prependTo($label);
                                break;

                            case 'select':
                                $input = $('<select name=""></select>')
                                    .attr('name', 'context-menu-input-' + key)
                                    .appendTo($label);
                                if (item.options) {
                                    $.each(item.options, function (value, text) {
                                        $('<option></option>').val(value).text(text).appendTo($input);
                                    });
                                    $input.val(item.selected);
                                }
                                break;

                            case 'sub':
                                createNameNode(item).appendTo($t);
                                item.appendTo = item.$node;
                                $t.data('contextMenu', item).addClass('context-menu-submenu');
                                item.callback = null;

                                // If item contains items, and this is a promise, we should create it later
                                // check if subitems is of type promise. If it is a promise we need to create
                                // it later, after promise has been resolved.
                                if ('function' === typeof item.items.then) {
                                    // probably a promise, process it, when completed it will create the sub menu's.
                                    op.processPromises(item, root, item.items);
                                } else {
                                    // normal submenu.
                                    op.create(item, root);
                                }
                                break;

                            case 'html':
                                $(item.html).appendTo($t);
                                break;

                            default:
                                $.each([opt, root], function (i, k) {
                                    k.commands[key] = item;
                                    // Overwrite only if undefined or the item is appended to the root. This so it
                                    // doesn't overwrite callbacks of root elements if the name is the same.
                                    if ($.isFunction(item.callback) && (typeof k.callbacks[key] === 'undefined' || typeof opt.type === 'undefined')) {
                                        k.callbacks[key] = item.callback;
                                    }
                                });
                                createNameNode(item).appendTo($t);
                                break;
                        }

                        // disable key listener in <input>
                        if (item.type && item.type !== 'sub' && item.type !== 'html' && item.type !== 'cm_seperator') {
                            $input
                                .on('focus', handle.focusInput)
                                .on('blur', handle.blurInput);

                            if (item.events) {
                                $input.on(item.events, opt);
                            }
                        }

                        // add icons
                        if (item.icon) {
                            if ($.isFunction(item.icon)) {
                                item._icon = item.icon.call(this, this, $t, key, item);
                            } else {
                                if (typeof(item.icon) === 'string' && (
                                    item.icon.substring(0, 4) === 'fab '
                                    || item.icon.substring(0, 4) === 'fas '
                                    || item.icon.substring(0, 4) === 'far '
                                    || item.icon.substring(0, 4) === 'fal ')
                                ) {
                                    // to enable font awesome
                                    $t.addClass(root.classNames.icon + ' ' + root.classNames.icon + '--fa5');
                                    item._icon = $('<i class="' + item.icon + '"></i>');
                                } else if (typeof(item.icon) === 'string' && item.icon.substring(0, 3) === 'fa-') {
                                    item._icon = root.classNames.icon + ' ' + root.classNames.icon + '--fa fa ' + item.icon;
                                } else {
                                    item._icon = root.classNames.icon + ' ' + root.classNames.icon + '-' + item.icon;
                                }
                            }

                            if(typeof(item._icon) === "string"){
                                $t.addClass(item._icon);
                            } else {
                                $t.prepend(item._icon);
                            }
                        }
                    }

                    // cache contained elements
                    item.$input = $input;
                    item.$label = $label;

                    // attach item to menu
                    $t.appendTo(opt.$menu);

                    // Disable text selection
                    if (!opt.hasTypes && $.support.eventSelectstart) {
                        // browsers support user-select: none,
                        // IE has a special event for text-selection
                        // browsers supporting neither will not be preventing text-selection
                        $t.on('selectstart.disableTextSelect', handle.abortevent);
                    }
                });
                // attach contextMenu to <body> (to bypass any possible overflow:hidden issues on parents of the trigger element)
                if (!opt.$node) {
                    opt.$menu.css('display', 'none').addClass('context-menu-root');
                }
                opt.$menu.appendTo(opt.appendTo || document.body);
            },
            resize: function ($menu, nested) {
                var domMenu;
                // determine widths of submenus, as CSS won't grow them automatically
                // position:absolute within position:absolute; min-width:100; max-width:200; results in width: 100;
                // kinda sucks hard...

                // determine width of absolutely positioned element
                $menu.css({position: 'absolute', display: 'block'});
                // don't apply yet, because that would break nested elements' widths
                $menu.data('width',
                    (domMenu = $menu.get(0)).getBoundingClientRect ?
                        Math.ceil(domMenu.getBoundingClientRect().width) :
                        $menu.outerWidth() + 1); // outerWidth() returns rounded pixels
                // reset styles so they allow nested elements to grow/shrink naturally
                $menu.css({
                    position: 'static',
                    minWidth: '0px',
                    maxWidth: '100000px'
                });
                // identify width of nested menus
                $menu.find('> li > ul').each(function () {
                    op.resize($(this), true);
                });
                // reset and apply changes in the end because nested
                // elements' widths wouldn't be calculatable otherwise
                if (!nested) {
                    $menu.find('ul').addBack().css({
                        position: '',
                        display: '',
                        minWidth: '',
                        maxWidth: ''
                    }).outerWidth(function () {
                        return $(this).data('width');
                    });
                }
            },
            update: function (opt, root) {
                var $trigger = this;
                if (typeof root === 'undefined') {
                    root = opt;
                    op.resize(opt.$menu);
                }

                var hasVisibleItems = false;

                // re-check disabled for each item
                opt.$menu.children().each(function () {
                    var $item = $(this),
                        key = $item.data('contextMenuKey'),
                        item = opt.items[key],
                        disabled = ($.isFunction(item.disabled) && item.disabled.call($trigger, key, root)) || item.disabled === true,
                        visible;
                    if ($.isFunction(item.visible)) {
                        visible = item.visible.call($trigger, key, root);
                    } else if (typeof item.visible !== 'undefined') {
                        visible = item.visible === true;
                    } else {
                        visible = true;
                    }

                    if (visible) {
                        hasVisibleItems = true;
                    }

                    $item[visible ? 'show' : 'hide']();

                    // dis- / enable item
                    $item[disabled ? 'addClass' : 'removeClass'](root.classNames.disabled);

                    if ($.isFunction(item.icon)) {
                        $item.removeClass(item._icon);
                        var iconResult = item.icon.call(this, $trigger, $item, key, item);
                        if(typeof(iconResult) === "string"){
                            $item.addClass(iconResult);
                        } else {
                            $item.prepend(iconResult);
                        }
                    }

                    if (item.type) {
                        // dis- / enable input elements
                        $item.find('input, select, textarea').prop('disabled', disabled);

                        // update input states
                        switch (item.type) {
                            case 'text':
                            case 'textarea':
                                item.$input.val(item.value || '');
                                break;

                            case 'checkbox':
                            case 'radio':
                                item.$input.val(item.value || '').prop('checked', !!item.selected);
                                break;

                            case 'select':
                                item.$input.val((item.selected === 0 ? "0" : item.selected) || '');
                                break;
                        }
                    }

                    if (item.$menu) {
                        // update sub-menu
                        var subMenuHasVisibleItems = op.update.call($trigger, item, root);
                        if (subMenuHasVisibleItems) {
                            hasVisibleItems = true;
                        }
                    }
                });
                return hasVisibleItems;
            },
            layer: function (opt, zIndex) {
                // add transparent layer for click area
                // filter and background for Internet Explorer, Issue #23
                var $layer = opt.$layer = $('<div id="context-menu-layer"></div>')
                    .css({
                        height: $win.height(),
                        width: $win.width(),
                        display: 'block',
                        position: 'fixed',
                        'z-index': zIndex,
                        top: 0,
                        left: 0,
                        opacity: 0,
                        filter: 'alpha(opacity=0)',
                        'background-color': '#000'
                    })
                    .data('contextMenuRoot', opt)
                    .insertBefore(this)
                    .on('contextmenu', handle.abortevent)
                    .on('mousedown', handle.layerClick);

                // IE6 doesn't know position:fixed;
                if (typeof document.body.style.maxWidth === 'undefined') { // IE6 doesn't support maxWidth
                    $layer.css({
                        'position': 'absolute',
                        'height': $(document).height()
                    });
                }

                return $layer;
            },
            processPromises: function (opt, root, promise) {
                // Start
                opt.$node.addClass(root.classNames.iconLoadingClass);

                function completedPromise(opt, root, items) {
                    // Completed promise (dev called promise.resolve). We now have a list of items which can
                    // be used to create the rest of the context menu.
                    if (typeof items === 'undefined') {
                        // Null result, dev should have checked
                        errorPromise(undefined);//own error object
                    }
                    finishPromiseProcess(opt, root, items);
                }

                function errorPromise(opt, root, errorItem) {
                    // User called promise.reject() with an error item, if not, provide own error item.
                    if (typeof errorItem === 'undefined') {
                        errorItem = {
                            "error": {
                                name: "No items and no error item",
                                icon: "context-menu-icon context-menu-icon-quit"
                            }
                        };
                        if (window.console) {
                            (console.error || console.log).call(console, 'When you reject a promise, provide an "items" object, equal to normal sub-menu items');
                        }
                    } else if (typeof errorItem === 'string') {
                        errorItem = {"error": {name: errorItem}};
                    }
                    finishPromiseProcess(opt, root, errorItem);
                }

                function finishPromiseProcess(opt, root, items) {
                    if (typeof root.$menu === 'undefined' || !root.$menu.is(':visible')) {
                        return;
                    }
                    opt.$node.removeClass(root.classNames.iconLoadingClass);
                    opt.items = items;
                    op.create(opt, root, true); // Create submenu
                    op.update(opt, root); // Correctly update position if user is already hovered over menu item
                    root.positionSubmenu.call(opt.$node, opt.$menu); // positionSubmenu, will only do anything if user already hovered over menu item that just got new subitems.
                }

                // Wait for promise completion. .then(success, error, notify) (we don't track notify). Bind the opt
                // and root to avoid scope problems
                promise.then(completedPromise.bind(this, opt, root), errorPromise.bind(this, opt, root));
            },
            // operation that will run after contextMenu showed on screen
            activated: function(opt){
                var $menu = opt.$menu;
                var $menuOffset = $menu.offset();
                var winHeight = $(window).height();
                var winScrollTop = $(window).scrollTop();
                var menuHeight = $menu.height();
                if(menuHeight > winHeight){
                    $menu.css({
                        'height' : winHeight + 'px',
                        'overflow-x': 'hidden',
                        'overflow-y': 'auto',
                        'top': winScrollTop + 'px'
                    });
                } else if(($menuOffset.top < winScrollTop) || ($menuOffset.top + menuHeight > winScrollTop + winHeight)){
                    $menu.css({
                        'top': '0px'
                    });
                }
            }
        };

    // split accesskey according to http://www.whatwg.org/specs/web-apps/current-work/multipage/editing.html#assigned-access-key
    function splitAccesskey(val) {
        var t = val.split(/\s+/);
        var keys = [];

        for (var i = 0, k; k = t[i]; i++) {
            k = k.charAt(0).toUpperCase(); // first character only
            // theoretically non-accessible characters should be ignored, but different systems, different keyboard layouts, ... screw it.
            // a map to look up already used access keys would be nice
            keys.push(k);
        }

        return keys;
    }

// handle contextMenu triggers
    $.fn.contextMenu = function (operation) {
        var $t = this, $o = operation;
        if (this.length > 0) {  // this is not a build on demand menu
            if (typeof operation === 'undefined') {
                this.first().trigger('contextmenu');
            } else if (typeof operation.x !== 'undefined' && typeof operation.y !== 'undefined') {
                this.first().trigger($.Event('contextmenu', {
                    pageX: operation.x,
                    pageY: operation.y,
                    mouseButton: operation.button
                }));
            } else if (operation === 'hide') {
                var $menu = this.first().data('contextMenu') ? this.first().data('contextMenu').$menu : null;
                if ($menu) {
                    $menu.trigger('contextmenu:hide');
                }
            } else if (operation === 'destroy') {
                $.contextMenu('destroy', {context: this});
            } else if ($.isPlainObject(operation)) {
                operation.context = this;
                $.contextMenu('create', operation);
            } else if (operation) {
                this.removeClass('context-menu-disabled');
            } else if (!operation) {
                this.addClass('context-menu-disabled');
            }
        } else {
            $.each(menus, function () {
                if (this.selector === $t.selector) {
                    $o.data = this;

                    $.extend($o.data, {trigger: 'demand'});
                }
            });

            handle.contextmenu.call($o.target, $o);
        }

        return this;
    };

    // manage contextMenu instances
    $.contextMenu = function (operation, options) {
        if (typeof operation !== 'string') {
            options = operation;
            operation = 'create';
        }

        if (typeof options === 'string') {
            options = {selector: options};
        } else if (typeof options === 'undefined') {
            options = {};
        }

        // merge with default options
        var o = $.extend(true, {}, defaults, options || {});
        var $document = $(document);
        var $context = $document;
        var _hasContext = false;

        if (!o.context || !o.context.length) {
            o.context = document;
        } else {
            // you never know what they throw at you...
            $context = $(o.context).first();
            o.context = $context.get(0);
            _hasContext = !$(o.context).is(document);
        }

        switch (operation) {

            case 'update':
                // Updates visibility and such
                if(_hasContext){
                    op.update($context);
                } else {
                    for(var menu in menus){
                        if(menus.hasOwnProperty(menu)){
                            op.update(menus[menu]);
                        }
                    }
                }
                break;

            case 'create':
                // no selector no joy
                if (!o.selector) {
                    throw new Error('No selector specified');
                }
                // make sure internal classes are not bound to
                if (o.selector.match(/.context-menu-(list|item|input)($|\s)/)) {
                    throw new Error('Cannot bind to selector "' + o.selector + '" as it contains a reserved className');
                }
                if (!o.build && (!o.items || $.isEmptyObject(o.items))) {
                    throw new Error('No Items specified');
                }
                counter++;
                o.ns = '.contextMenu' + counter;
                if (!_hasContext) {
                    namespaces[o.selector] = o.ns;
                }
                menus[o.ns] = o;

                // default to right click
                if (!o.trigger) {
                    o.trigger = 'right';
                }

                if (!initialized) {
                    var itemClick = o.itemClickEvent === 'click' ? 'click.contextMenu' : 'mouseup.contextMenu';
                    var contextMenuItemObj = {
                        // 'mouseup.contextMenu': handle.itemClick,
                        // 'click.contextMenu': handle.itemClick,
                        'contextmenu:focus.contextMenu': handle.focusItem,
                        'contextmenu:blur.contextMenu': handle.blurItem,
                        'contextmenu.contextMenu': handle.abortevent,
                        'mouseenter.contextMenu': handle.itemMouseenter,
                        'mouseleave.contextMenu': handle.itemMouseleave
                    };
                    contextMenuItemObj[itemClick] = handle.itemClick;
                    // make sure item click is registered first
                    $document
                        .on({
                            'contextmenu:hide.contextMenu': handle.hideMenu,
                            'prevcommand.contextMenu': handle.prevItem,
                            'nextcommand.contextMenu': handle.nextItem,
                            'contextmenu.contextMenu': handle.abortevent,
                            'mouseenter.contextMenu': handle.menuMouseenter,
                            'mouseleave.contextMenu': handle.menuMouseleave
                        }, '.context-menu-list')
                        .on('mouseup.contextMenu', '.context-menu-input', handle.inputClick)
                        .on(contextMenuItemObj, '.context-menu-item');

                    initialized = true;
                }

                // engage native contextmenu event
                $context
                    .on('contextmenu' + o.ns, o.selector, o, handle.contextmenu);

                if (_hasContext) {
                    // add remove hook, just in case
                    $context.on('remove' + o.ns, function () {
                        $(this).contextMenu('destroy');
                    });
                }

                switch (o.trigger) {
                    case 'hover':
                        $context
                            .on('mouseenter' + o.ns, o.selector, o, handle.mouseenter)
                            .on('mouseleave' + o.ns, o.selector, o, handle.mouseleave);
                        break;

                    case 'left':
                        $context.on('click' + o.ns, o.selector, o, handle.click);
                        break;
				    case 'touchstart':
                        $context.on('touchstart' + o.ns, o.selector, o, handle.click);
                        break;
                    /*
                     default:
                     // http://www.quirksmode.org/dom/events/contextmenu.html
                     $document
                     .on('mousedown' + o.ns, o.selector, o, handle.mousedown)
                     .on('mouseup' + o.ns, o.selector, o, handle.mouseup);
                     break;
                     */
                }

                // create menu
                if (!o.build) {
                    op.create(o);
                }
                break;

            case 'destroy':
                var $visibleMenu;
                if (_hasContext) {
                    // get proper options
                    var context = o.context;
                    $.each(menus, function (ns, o) {

                        if (!o) {
                            return true;
                        }

                        // Is this menu equest to the context called from
                        if (!$(context).is(o.selector)) {
                            return true;
                        }

                        $visibleMenu = $('.context-menu-list').filter(':visible');
                        if ($visibleMenu.length && $visibleMenu.data().contextMenuRoot.$trigger.is($(o.context).find(o.selector))) {
                            $visibleMenu.trigger('contextmenu:hide', {force: true});
                        }

                        try {
                            if (menus[o.ns].$menu) {
                                menus[o.ns].$menu.remove();
                            }

                            delete menus[o.ns];
                        } catch (e) {
                            menus[o.ns] = null;
                        }

                        $(o.context).off(o.ns);

                        return true;
                    });
                } else if (!o.selector) {
                    $document.off('.contextMenu .contextMenuAutoHide');
                    $.each(menus, function (ns, o) {
                        $(o.context).off(o.ns);
                    });

                    namespaces = {};
                    menus = {};
                    counter = 0;
                    initialized = false;

                    $('#context-menu-layer, .context-menu-list').remove();
                } else if (namespaces[o.selector]) {
                    $visibleMenu = $('.context-menu-list').filter(':visible');
                    if ($visibleMenu.length && $visibleMenu.data().contextMenuRoot.$trigger.is(o.selector)) {
                        $visibleMenu.trigger('contextmenu:hide', {force: true});
                    }

                    try {
                        if (menus[namespaces[o.selector]].$menu) {
                            menus[namespaces[o.selector]].$menu.remove();
                        }

                        delete menus[namespaces[o.selector]];
                    } catch (e) {
                        menus[namespaces[o.selector]] = null;
                    }

                    $document.off(namespaces[o.selector]);
                }
                break;

            case 'html5':
                // if <command> and <menuitem> are not handled by the browser,
                // or options was a bool true,
                // initialize $.contextMenu for them
                if ((!$.support.htmlCommand && !$.support.htmlMenuitem) || (typeof options === 'boolean' && options)) {
                    $('menu[type="context"]').each(function () {
                        if (this.id) {
                            $.contextMenu({
                                selector: '[contextmenu=' + this.id + ']',
                                items: $.contextMenu.fromMenu(this)
                            });
                        }
                    }).css('display', 'none');
                }
                break;

            default:
                throw new Error('Unknown operation "' + operation + '"');
        }

        return this;
    };

// import values into <input> commands
    $.contextMenu.setInputValues = function (opt, data) {
        if (typeof data === 'undefined') {
            data = {};
        }

        $.each(opt.inputs, function (key, item) {
            switch (item.type) {
                case 'text':
                case 'textarea':
                    item.value = data[key] || '';
                    break;

                case 'checkbox':
                    item.selected = data[key] ? true : false;
                    break;

                case 'radio':
                    item.selected = (data[item.radio] || '') === item.value;
                    break;

                case 'select':
                    item.selected = data[key] || '';
                    break;
            }
        });
    };

// export values from <input> commands
    $.contextMenu.getInputValues = function (opt, data) {
        if (typeof data === 'undefined') {
            data = {};
        }

        $.each(opt.inputs, function (key, item) {
            switch (item.type) {
                case 'text':
                case 'textarea':
                case 'select':
                    data[key] = item.$input.val();
                    break;

                case 'checkbox':
                    data[key] = item.$input.prop('checked');
                    break;

                case 'radio':
                    if (item.$input.prop('checked')) {
                        data[item.radio] = item.value;
                    }
                    break;
            }
        });

        return data;
    };

// find <label for="xyz">
    function inputLabel(node) {
        return (node.id && $('label[for="' + node.id + '"]').val()) || node.name;
    }

// convert <menu> to items object
    function menuChildren(items, $children, counter) {
        if (!counter) {
            counter = 0;
        }

        $children.each(function () {
            var $node = $(this),
                node = this,
                nodeName = this.nodeName.toLowerCase(),
                label,
                item;

            // extract <label><input>
            if (nodeName === 'label' && $node.find('input, textarea, select').length) {
                label = $node.text();
                $node = $node.children().first();
                node = $node.get(0);
                nodeName = node.nodeName.toLowerCase();
            }

            /*
             * <menu> accepts flow-content as children. that means <embed>, <canvas> and such are valid menu items.
             * Not being the sadistic kind, $.contextMenu only accepts:
             * <command>, <menuitem>, <hr>, <span>, <p> <input [text, radio, checkbox]>, <textarea>, <select> and of course <menu>.
             * Everything else will be imported as an html node, which is not interfaced with contextMenu.
             */

            // http://www.whatwg.org/specs/web-apps/current-work/multipage/commands.html#concept-command
            switch (nodeName) {
                // http://www.whatwg.org/specs/web-apps/current-work/multipage/interactive-elements.html#the-menu-element
                case 'menu':
                    item = {name: $node.attr('label'), items: {}};
                    counter = menuChildren(item.items, $node.children(), counter);
                    break;

                // http://www.whatwg.org/specs/web-apps/current-work/multipage/commands.html#using-the-a-element-to-define-a-command
                case 'a':
                // http://www.whatwg.org/specs/web-apps/current-work/multipage/commands.html#using-the-button-element-to-define-a-command
                case 'button':
                    item = {
                        name: $node.text(),
                        disabled: !!$node.attr('disabled'),
                        callback: (function () {
                            return function () {
                                $node.get(0).click();
                            };
                        })()
                    };
                    break;

                // http://www.whatwg.org/specs/web-apps/current-work/multipage/commands.html#using-the-command-element-to-define-a-command
                case 'menuitem':
                case 'command':
                    switch ($node.attr('type')) {
                        case undefined:
                        case 'command':
                        case 'menuitem':
                            item = {
                                name: $node.attr('label'),
                                disabled: !!$node.attr('disabled'),
                                icon: $node.attr('icon'),
                                callback: (function () {
                                    return function () {
                                        $node.get(0).click();
                                    };
                                })()
                            };
                            break;

                        case 'checkbox':
                            item = {
                                type: 'checkbox',
                                disabled: !!$node.attr('disabled'),
                                name: $node.attr('label'),
                                selected: !!$node.attr('checked')
                            };
                            break;
                        case 'radio':
                            item = {
                                type: 'radio',
                                disabled: !!$node.attr('disabled'),
                                name: $node.attr('label'),
                                radio: $node.attr('radiogroup'),
                                value: $node.attr('id'),
                                selected: !!$node.attr('checked')
                            };
                            break;

                        default:
                            item = undefined;
                    }
                    break;

                case 'hr':
                    item = '-------';
                    break;

                case 'input':
                    switch ($node.attr('type')) {
                        case 'text':
                            item = {
                                type: 'text',
                                name: label || inputLabel(node),
                                disabled: !!$node.attr('disabled'),
                                value: $node.val()
                            };
                            break;

                        case 'checkbox':
                            item = {
                                type: 'checkbox',
                                name: label || inputLabel(node),
                                disabled: !!$node.attr('disabled'),
                                selected: !!$node.attr('checked')
                            };
                            break;

                        case 'radio':
                            item = {
                                type: 'radio',
                                name: label || inputLabel(node),
                                disabled: !!$node.attr('disabled'),
                                radio: !!$node.attr('name'),
                                value: $node.val(),
                                selected: !!$node.attr('checked')
                            };
                            break;

                        default:
                            item = undefined;
                            break;
                    }
                    break;

                case 'select':
                    item = {
                        type: 'select',
                        name: label || inputLabel(node),
                        disabled: !!$node.attr('disabled'),
                        selected: $node.val(),
                        options: {}
                    };
                    $node.children().each(function () {
                        item.options[this.value] = $(this).text();
                    });
                    break;

                case 'textarea':
                    item = {
                        type: 'textarea',
                        name: label || inputLabel(node),
                        disabled: !!$node.attr('disabled'),
                        value: $node.val()
                    };
                    break;

                case 'label':
                    break;

                default:
                    item = {type: 'html', html: $node.clone(true)};
                    break;
            }

            if (item) {
                counter++;
                items['key' + counter] = item;
            }
        });

        return counter;
    }

// convert html5 menu
    $.contextMenu.fromMenu = function (element) {
        var $this = $(element),
            items = {};

        menuChildren(items, $this.children());

        return items;
    };

// make defaults accessible
    $.contextMenu.defaults = defaults;
    $.contextMenu.types = types;
// export internal functions - undocumented, for hacking only!
    $.contextMenu.handle = handle;
    $.contextMenu.op = op;
    $.contextMenu.menus = menus;
});



/***/ }),

/***/ "./node_modules/jquery-contextmenu/dist/jquery.contextMenu.min.css":
/*!*************************************************************************!*\
  !*** ./node_modules/jquery-contextmenu/dist/jquery.contextMenu.min.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/jquery-ui/ui/widget.js":
/*!*********************************************!*\
  !*** ./node_modules/jquery-ui/ui/widget.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

/*** IMPORTS FROM imports-loader ***/
var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Widget
//>>group: Core
//>>description: Provides a factory for creating stateful widgets with a common API.
//>>docs: http://api.jqueryui.com/jQuery.widget/
//>>demos: http://jqueryui.com/widget/

( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "jquery", "./version" ], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}( function( $ ) {

var widgetUuid = 0;
var widgetSlice = Array.prototype.slice;

$.cleanData = ( function( orig ) {
	return function( elems ) {
		var events, elem, i;
		for ( i = 0; ( elem = elems[ i ] ) != null; i++ ) {
			try {

				// Only trigger remove when necessary to save time
				events = $._data( elem, "events" );
				if ( events && events.remove ) {
					$( elem ).triggerHandler( "remove" );
				}

			// Http://bugs.jquery.com/ticket/8235
			} catch ( e ) {}
		}
		orig( elems );
	};
} )( $.cleanData );

$.widget = function( name, base, prototype ) {
	var existingConstructor, constructor, basePrototype;

	// ProxiedPrototype allows the provided prototype to remain unmodified
	// so that it can be used as a mixin for multiple widgets (#8876)
	var proxiedPrototype = {};

	var namespace = name.split( "." )[ 0 ];
	name = name.split( "." )[ 1 ];
	var fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	if ( $.isArray( prototype ) ) {
		prototype = $.extend.apply( null, [ {} ].concat( prototype ) );
	}

	// Create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {

		// Allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// Allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};

	// Extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,

		// Copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),

		// Track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	} );

	basePrototype = new base();

	// We need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = ( function() {
			function _super() {
				return base.prototype[ prop ].apply( this, arguments );
			}

			function _superApply( args ) {
				return base.prototype[ prop ].apply( this, args );
			}

			return function() {
				var __super = this._super;
				var __superApply = this._superApply;
				var returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		} )();
	} );
	constructor.prototype = $.widget.extend( basePrototype, {

		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? ( basePrototype.widgetEventPrefix || name ) : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	} );

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// Redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor,
				child._proto );
		} );

		// Remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );

	return constructor;
};

$.widget.extend = function( target ) {
	var input = widgetSlice.call( arguments, 1 );
	var inputIndex = 0;
	var inputLength = input.length;
	var key;
	var value;

	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {

				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :

						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );

				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string";
		var args = widgetSlice.call( arguments, 1 );
		var returnValue = this;

		if ( isMethodCall ) {

			// If this is an empty collection, we need to have the instance method
			// return undefined instead of the jQuery instance
			if ( !this.length && options === "instance" ) {
				returnValue = undefined;
			} else {
				this.each( function() {
					var methodValue;
					var instance = $.data( this, fullName );

					if ( options === "instance" ) {
						returnValue = instance;
						return false;
					}

					if ( !instance ) {
						return $.error( "cannot call methods on " + name +
							" prior to initialization; " +
							"attempted to call method '" + options + "'" );
					}

					if ( !$.isFunction( instance[ options ] ) || options.charAt( 0 ) === "_" ) {
						return $.error( "no such method '" + options + "' for " + name +
							" widget instance" );
					}

					methodValue = instance[ options ].apply( instance, args );

					if ( methodValue !== instance && methodValue !== undefined ) {
						returnValue = methodValue && methodValue.jquery ?
							returnValue.pushStack( methodValue.get() ) :
							methodValue;
						return false;
					}
				} );
			}
		} else {

			// Allow multiple hashes to be passed on init
			if ( args.length ) {
				options = $.widget.extend.apply( null, [ options ].concat( args ) );
			}

			this.each( function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} );
					if ( instance._init ) {
						instance._init();
					}
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			} );
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",

	options: {
		classes: {},
		disabled: false,

		// Callbacks
		create: null
	},

	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = widgetUuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();
		this.classesElementLookup = {};

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			} );
			this.document = $( element.style ?

				// Element within the document
				element.ownerDocument :

				// Element is window or document
				element.document || element );
			this.window = $( this.document[ 0 ].defaultView || this.document[ 0 ].parentWindow );
		}

		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this._create();

		if ( this.options.disabled ) {
			this._setOptionDisabled( this.options.disabled );
		}

		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},

	_getCreateOptions: function() {
		return {};
	},

	_getCreateEventData: $.noop,

	_create: $.noop,

	_init: $.noop,

	destroy: function() {
		var that = this;

		this._destroy();
		$.each( this.classesElementLookup, function( key, value ) {
			that._removeClass( value, key );
		} );

		// We can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.off( this.eventNamespace )
			.removeData( this.widgetFullName );
		this.widget()
			.off( this.eventNamespace )
			.removeAttr( "aria-disabled" );

		// Clean up events and states
		this.bindings.off( this.eventNamespace );
	},

	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key;
		var parts;
		var curOption;
		var i;

		if ( arguments.length === 0 ) {

			// Don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {

			// Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( arguments.length === 1 ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( arguments.length === 1 ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},

	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},

	_setOption: function( key, value ) {
		if ( key === "classes" ) {
			this._setOptionClasses( value );
		}

		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this._setOptionDisabled( value );
		}

		return this;
	},

	_setOptionClasses: function( value ) {
		var classKey, elements, currentElements;

		for ( classKey in value ) {
			currentElements = this.classesElementLookup[ classKey ];
			if ( value[ classKey ] === this.options.classes[ classKey ] ||
					!currentElements ||
					!currentElements.length ) {
				continue;
			}

			// We are doing this to create a new jQuery object because the _removeClass() call
			// on the next line is going to destroy the reference to the current elements being
			// tracked. We need to save a copy of this collection so that we can add the new classes
			// below.
			elements = $( currentElements.get() );
			this._removeClass( currentElements, classKey );

			// We don't use _addClass() here, because that uses this.options.classes
			// for generating the string of classes. We want to use the value passed in from
			// _setOption(), this is the new value of the classes option which was passed to
			// _setOption(). We pass this value directly to _classes().
			elements.addClass( this._classes( {
				element: elements,
				keys: classKey,
				classes: value,
				add: true
			} ) );
		}
	},

	_setOptionDisabled: function( value ) {
		this._toggleClass( this.widget(), this.widgetFullName + "-disabled", null, !!value );

		// If the widget is becoming disabled, then nothing is interactive
		if ( value ) {
			this._removeClass( this.hoverable, null, "ui-state-hover" );
			this._removeClass( this.focusable, null, "ui-state-focus" );
		}
	},

	enable: function() {
		return this._setOptions( { disabled: false } );
	},

	disable: function() {
		return this._setOptions( { disabled: true } );
	},

	_classes: function( options ) {
		var full = [];
		var that = this;

		options = $.extend( {
			element: this.element,
			classes: this.options.classes || {}
		}, options );

		function processClassString( classes, checkOption ) {
			var current, i;
			for ( i = 0; i < classes.length; i++ ) {
				current = that.classesElementLookup[ classes[ i ] ] || $();
				if ( options.add ) {
					current = $( $.unique( current.get().concat( options.element.get() ) ) );
				} else {
					current = $( current.not( options.element ).get() );
				}
				that.classesElementLookup[ classes[ i ] ] = current;
				full.push( classes[ i ] );
				if ( checkOption && options.classes[ classes[ i ] ] ) {
					full.push( options.classes[ classes[ i ] ] );
				}
			}
		}

		this._on( options.element, {
			"remove": "_untrackClassesElement"
		} );

		if ( options.keys ) {
			processClassString( options.keys.match( /\S+/g ) || [], true );
		}
		if ( options.extra ) {
			processClassString( options.extra.match( /\S+/g ) || [] );
		}

		return full.join( " " );
	},

	_untrackClassesElement: function( event ) {
		var that = this;
		$.each( that.classesElementLookup, function( key, value ) {
			if ( $.inArray( event.target, value ) !== -1 ) {
				that.classesElementLookup[ key ] = $( value.not( event.target ).get() );
			}
		} );
	},

	_removeClass: function( element, keys, extra ) {
		return this._toggleClass( element, keys, extra, false );
	},

	_addClass: function( element, keys, extra ) {
		return this._toggleClass( element, keys, extra, true );
	},

	_toggleClass: function( element, keys, extra, add ) {
		add = ( typeof add === "boolean" ) ? add : extra;
		var shift = ( typeof element === "string" || element === null ),
			options = {
				extra: shift ? keys : extra,
				keys: shift ? element : keys,
				element: shift ? this.element : element,
				add: add
			};
		options.element.toggleClass( this._classes( options ), add );
		return this;
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement;
		var instance = this;

		// No suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// No element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {

				// Allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
						$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// Copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^([\w:-]*)\s*(.*)$/ );
			var eventName = match[ 1 ] + instance.eventNamespace;
			var selector = match[ 2 ];

			if ( selector ) {
				delegateElement.on( eventName, selector, handlerProxy );
			} else {
				element.on( eventName, handlerProxy );
			}
		} );
	},

	_off: function( element, eventName ) {
		eventName = ( eventName || "" ).split( " " ).join( this.eventNamespace + " " ) +
			this.eventNamespace;
		element.off( eventName ).off( eventName );

		// Clear the stack to avoid memory leaks (#10056)
		this.bindings = $( this.bindings.not( element ).get() );
		this.focusable = $( this.focusable.not( element ).get() );
		this.hoverable = $( this.hoverable.not( element ).get() );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				this._addClass( $( event.currentTarget ), null, "ui-state-hover" );
			},
			mouseleave: function( event ) {
				this._removeClass( $( event.currentTarget ), null, "ui-state-hover" );
			}
		} );
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				this._addClass( $( event.currentTarget ), null, "ui-state-focus" );
			},
			focusout: function( event ) {
				this._removeClass( $( event.currentTarget ), null, "ui-state-focus" );
			}
		} );
	},

	_trigger: function( type, event, data ) {
		var prop, orig;
		var callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();

		// The original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// Copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[ 0 ], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}

		var hasOptions;
		var effectName = !options ?
			method :
			options === true || typeof options === "number" ?
				defaultEffect :
				options.effect || defaultEffect;

		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}

		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;

		if ( options.delay ) {
			element.delay( options.delay );
		}

		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue( function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			} );
		}
	};
} );

return $.widget;

} ) );




/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*** IMPORTS FROM imports-loader ***/
var define = false;

/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );



/***/ }),

/***/ "./node_modules/jsviews/jsviews.js":
/*!*****************************************!*\
  !*** ./node_modules/jsviews/jsviews.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var window = {};

/*! jsviews.js v0.9.90 (Beta) single-file version: http://jsviews.com/ */
/*! includes JsRender, JsObservable and JsViews - see: http://jsviews.com/#download */

/* Interactive data-driven views using JsRender templates */

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< JsRender >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/* JsRender:
 * See http://jsviews.com/#jsrender and http://github.com/BorisMoore/jsrender
 * Copyright 2017, Boris Moore
 * Released under the MIT License.
 */

//jshint -W018, -W041, -W120

(function(factory, global) {
	// global var is the this object, which is window when running in the usual browser environment
	var $ = global.jQuery;

	if (true) { // CommonJS e.g. Browserify
		module.exports = $
			? factory(global, $)
			: function($) { // If no global jQuery, take jQuery passed as parameter: require("jsviews")(jQuery)
				return factory(global, $);
			};
	} else {}
} (

// factory (for jsviews.js)
function(global, $) {
"use strict";

//========================== Top-level vars ==========================

// global var is the this object, which is window when running in the usual browser environment
var setGlobals = $ === false; // Only set globals if script block in browser (not AMD and not CommonJS)

$ = $ || global.jQuery; // $ is jQuery passed in by CommonJS loader (Browserify), or global jQuery.

if (!$ || !$.fn) {
	// jQuery is not loaded.
	throw "JsViews requires jQuery"; // We require jQuery
}

var versionNumber = "v0.9.90",

	jsvStoreName, rTag, rTmplString, topView, $views, $observe, $observable, $expando,
	_ocp = "_ocp", // Observable contextual parameter

//TODO	tmplFnsCache = {},
	$isFunction, $isArray, $templates, $converters, $helpers, $tags, $sub, $subSettings, $subSettingsAdvanced, $viewsSettings, delimOpenChar0, delimOpenChar1, delimCloseChar0, delimCloseChar1, linkChar, setting, baseOnError,

	rPath = /^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,
	//        not                               object     helper    view  viewProperty pathTokens      leafToken

	rParams = /(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(!*?[#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=\s*[.^]|\s*$|[^([])|[)\]])([([]?))|(\s+)/g,
	//          lftPrn0        lftPrn        bound            path    operator err                                                eq             path2       prn    comma   lftPrn2   apos quot      rtPrn rtPrnDot                           prn2  space
	// (left paren? followed by (path? followed by operator) or (path followed by left paren?)) or comma or apos or quot or right paren or space

	isRenderCall,
	rNewLine = /[ \t]*(\r\n|\n|\r)/g,
	rUnescapeQuotes = /\\(['"])/g,
	rEscapeQuotes = /['"\\]/g, // Escape quotes and \ character
	rBuildHash = /(?:\x08|^)(onerror:)?(?:(~?)(([\w$_\.]+):)?([^\x08]+))\x08(,)?([^\x08]+)/gi,
	rTestElseIf = /^if\s/,
	rFirstElem = /<(\w+)[>\s]/,
	rAttrEncode = /[\x00`><"'&=]/g, // Includes > encoding since rConvertMarkers in JsViews does not skip > characters in attribute strings
	rIsHtml = /[\x00`><\"'&=]/,
	rHasHandlers = /^on[A-Z]|^convert(Back)?$/,
	rWrappedInViewMarker = /^\#\d+_`[\s\S]*\/\d+_`$/,
	rHtmlEncode = rAttrEncode,
	viewId = 0,
	charEntities = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"\x00": "&#0;",
		"'": "&#39;",
		'"': "&#34;",
		"`": "&#96;",
		"=": "&#61;"
	},
	HTML = "html",
	OBJECT = "object",
	tmplAttr = "data-jsv-tmpl",
	jsvTmpl = "jsvTmpl",
	indexStr = "For #index in nested block use #getIndex().",
	$render = {},

	jsr = global.jsrender,
	jsrToJq = jsr && $ && !$.render, // JsRender already loaded, without jQuery. but we will re-load it now to attach to jQuery

	jsvStores = {
		template: {
			compile: compileTmpl
		},
		tag: {
			compile: compileTag
		},
		viewModel: {
			compile: compileViewModel
		},
		helper: {},
		converter: {}
	};

	// views object ($.views if jQuery is loaded, jsrender.views if no jQuery, e.g. in Node.js)
	$views = {
		jsviews: versionNumber,
		sub: {
			// subscription, e.g. JsViews integration
			View: View,
			Err: JsViewsError,
			tmplFn: tmplFn,
			parse: parseParams,
			extend: $extend,
			extendCtx: extendCtx,
			syntaxErr: syntaxError,
			onStore: {
				template: function(name, item) {
					if (item === null) {
						delete $render[name];
					} else {
						$render[name] = item;
					}
				}
			},
			addSetting: addSetting,
			settings: {
				allowCode: false
			},
			advSet: noop, // Update advanced settings
			_ths: tagHandlersFromProps,
			_gm: getMethod,
			_tg: function() {}, // Constructor for tagDef
			_cnvt: convertVal,
			_tag: renderTag,
			_er: error,
			_err: onRenderError,
			_cp: retVal, // Get observable contextual parameters (or properties) ~foo=expr. In JsRender, simply returns val.
			_sq: function(token) {
				if (token === "constructor") {
					syntaxError("");
				}
				return token;
			}
		},
		settings: {
			delimiters: $viewsDelimiters,
			advanced: function(value) {
				return value
					? (
							$extend($subSettingsAdvanced, value),
							$sub.advSet(),
							$viewsSettings
						)
						: $subSettingsAdvanced;
				}
		},
		map: dataMap    // If jsObservable loaded first, use that definition of dataMap
	};

function getDerivedMethod(baseMethod, method) {
	return function() {
		var ret,
			tag = this,
			prevBase = tag.base;

		tag.base = baseMethod; // Within method call, calling this.base will call the base method
		ret = method.apply(tag, arguments); // Call the method
		tag.base = prevBase; // Replace this.base to be the base method of the previous call, for chained calls
		return ret;
	};
}

function getMethod(baseMethod, method) {
	// For derived methods (or handlers declared declaratively as in {{:foo onChange=~fooChanged}} replace by a derived method, to allow using this.base(...)
	// or this.baseApply(arguments) to call the base implementation. (Equivalent to this._super(...) and this._superApply(arguments) in jQuery UI)
	if ($isFunction(method)) {
		method = getDerivedMethod(
				!baseMethod
					? noop // no base method implementation, so use noop as base method
					: baseMethod._d
						? baseMethod // baseMethod is a derived method, so use it
						: getDerivedMethod(noop, baseMethod), // baseMethod is not derived so make its base method be the noop method
				method
			);
		method._d = 1; // Add flag that this is a derived method
	}
	return method;
}

function tagHandlersFromProps(tag, tagCtx) {
	var prop,
		props = tagCtx.props;
	for (prop in props) {
		if (rHasHandlers.test(prop) && !(tag[prop] && tag[prop].fix)) { // Don't override handlers with fix expando (used in datepicker and spinner)
			tag[prop] = prop !== "convert" ? getMethod(tag.constructor.prototype[prop], props[prop]) : props[prop];
			// Copy over the onFoo props, convert and convertBack from tagCtx.props to tag (overrides values in tagDef).
			// Note: unsupported scenario: if handlers are dynamically added ^onFoo=expression this will work, but dynamically removing will not work.
		}
	}
}

function retVal(val) {
	return val;
}

function noop() {
	return "";
}

function dbgBreak(val) {
	// Usage examples: {{dbg:...}}, {{:~dbg(...)}}, {{dbg .../}}, {^{for ... onAfterLink=~dbg}} etc.
	try {
		console.log("JsRender dbg breakpoint: " + val);
		throw "dbg breakpoint"; // To break here, stop on caught exceptions.
	}
	catch (e) {}
	return this.base ? this.baseApply(arguments) : val;
}

function JsViewsError(message) {
	// Error exception type for JsViews/JsRender
	// Override of $.views.sub.Error is possible
	this.name = ($.link ? "JsViews" : "JsRender") + " Error";
	this.message = message || this.name;
}

function $extend(target, source) {
	if (target) {
		for (var name in source) {
			target[name] = source[name];
		}
		return target;
	}
}

(JsViewsError.prototype = new Error()).constructor = JsViewsError;

//========================== Top-level functions ==========================

//===================
// views.delimiters
//===================

function $viewsDelimiters(openChars, closeChars, link) {
	// Set the tag opening and closing delimiters and 'link' character. Default is "{{", "}}" and "^"
	// openChars, closeChars: opening and closing strings, each with two characters
	if (!openChars) {
		return $subSettings.delimiters;
	}
	if ($isArray(openChars)) {
		return $viewsDelimiters.apply($views, openChars);
	}

	$subSettings.delimiters = [openChars, closeChars, linkChar = link ? link.charAt(0) : linkChar];

	delimOpenChar0 = openChars.charAt(0); // Escape the characters - since they could be regex special characters
	delimOpenChar1 = openChars.charAt(1);
	delimCloseChar0 = closeChars.charAt(0);
	delimCloseChar1 = closeChars.charAt(1);
	openChars = "\\" + delimOpenChar0 + "(\\" + linkChar + ")?\\" + delimOpenChar1; // Default is "{^{"
	closeChars = "\\" + delimCloseChar0 + "\\" + delimCloseChar1;                   // Default is "}}"
	// Build regex with new delimiters
	//          [tag    (followed by / space or })  or cvtr+colon or html or code] followed by space+params then convertBack?
	rTag = "(?:(\\w+(?=[\\/\\s\\" + delimCloseChar0 + "]))|(\\w+)?(:)|(>)|(\\*))\\s*((?:[^\\"
		+ delimCloseChar0 + "]|\\" + delimCloseChar0 + "(?!\\" + delimCloseChar1 + "))*?)";

	// Make rTag available to JsViews (or other components) for parsing binding expressions
	$sub.rTag = "(?:" + rTag + ")";
	//                        { ^? {   tag+params slash?  or closingTag                                                   or comment
	rTag = new RegExp("(?:" + openChars + rTag + "(\\/)?|\\" + delimOpenChar0 + "(\\" + linkChar + ")?\\" + delimOpenChar1 + "(?:(?:\\/(\\w+))\\s*|!--[\\s\\S]*?--))" + closeChars, "g");

	// Default:  bind     tagName         cvt   cln html code    params            slash   bind2         closeBlk  comment
	//      /(?:{(\^)?{(?:(\w+(?=[\/\s}]))|(\w+)?(:)|(>)|(\*))\s*((?:[^}]|}(?!}))*?)(\/)?|{(\^)?{(?:(?:\/(\w+))\s*|!--[\s\S]*?--))}}

	$sub.rTmpl = new RegExp("^\\s|\\s$|<.*>|([^\\\\]|^)[{}]|" + openChars + ".*" + closeChars);
	// $sub.rTmpl looks for initial or final white space, html tags or { or } char not preceded by \\, or JsRender tags {{xxx}}.
	// Each of these strings are considered NOT to be jQuery selectors
	return $viewsSettings;
}

//=========
// View.get
//=========

function getView(inner, type) { //view.get(inner, type)
	if (!type && inner !== true) {
		// view.get(type)
		type = inner;
		inner = undefined;
	}

	var views, i, l, found,
		view = this,
		root = !type || type === "root";
		// If type is undefined, returns root view (view under top view).

	if (inner) {
		// Go through views - this one, and all nested ones, depth-first - and return first one with given type.
		// If type is undefined, i.e. view.get(true), return first child view.
		found = type && view.type === type && view;
		if (!found) {
			views = view.views;
			if (view._.useKey) {
				for (i in views) {
					if (found = type ? views[i].get(inner, type) : views[i]) {
						break;
					}
				}
			} else {
				for (i = 0, l = views.length; !found && i < l; i++) {
					found = type ? views[i].get(inner, type) : views[i];
				}
			}
		}
	} else if (root) {
		// Find root view. (view whose parent is top view)
		found = view.root;
	} else {
		while (view && !found) {
			// Go through views - this one, and all parent ones - and return first one with given type.
			found = view.type === type ? view : undefined;
			view = view.parent;
		}
	}
	return found;
}

function getNestedIndex() {
	var view = this.get("item");
	return view ? view.index : undefined;
}

getNestedIndex.depends = function() {
	return [this.get("item"), "index"];
};

function getIndex() {
	return this.index;
}

getIndex.depends = "index";

//==========
// View.hlp
//==========

function contextParameter(key, value, isContextCb) {
	// Helper method called as view.ctxPrm(key) for helpers or template parameters ~foo - from compiled template or from context callback
	var wrapped, deps, res, obsCtxPrm,
		storeView = this,
		isUpdate = !isRenderCall && value !== undefined,
		store = storeView.ctx;

	if (key in store || key in (store = $helpers)) {
		res = store && store[key];
		if (key === "tag" || key === "root" || key === "parentTags" || storeView._.it === key ) {
			return res;
		}
	} else {
		store = undefined;
	}
	if (!res || !$isFunction(res) && storeView.linked || storeView.tagCtx) { // Data-linked view, or tag instance
		if (!res || !res._cxp) {
			// Not a contextual parameter
			if (store !== $helpers) {
				// Set storeView to tag (if this is a tag.ctxPrm() call) or to root view ("data" view of linked template)
				storeView = storeView.tagCtx
					? storeView // Is a tag, not a view
					: (storeView = storeView.scope || storeView, !storeView.isTop && storeView.ctx.tag || storeView);
				store = storeView._ocps;
				res = store && store[key] || res;
			}
			if (!(res && res._cxp) && (isContextCb || isUpdate)) {
				res = $sub._crcp(key, res, storeView, store); // Create observable contextual parameter
			}
		}
		if (obsCtxPrm = res && res._cxp) {
			if (isUpdate) {
				return $sub._ucp(key, value, storeView, obsCtxPrm); // Update observable contextual parameter
			}
			if (isContextCb) { // If this helper resource is an observable contextual parameter
				// In a context callback for a contextual param, return the [view, dependencies...] array - needed for observe call
				deps = res[1] ? $sub._ceo(res[1].deps) : [_ocp]; // fn deps (with any exprObs cloned using $sub._ceo)
				deps.unshift(res[0]); // view
				deps._cxp = obsCtxPrm;
				return deps;
			}
			res = res[1] // linkFn for compiled expression
				? obsCtxPrm.tag && obsCtxPrm.tag.cvtArgs
					? obsCtxPrm.tag.cvtArgs(true, obsCtxPrm.tagElse)[obsCtxPrm.ind] // = tag.bndArgs() - for tag contextual parameter
					: res[1](res[0].data, res[0], $sub)    // = fn(data, view, $sub) for compiled binding expression
				: res[0]._ocp; // Observable contextual parameter (uninitialized, or initialized as static expression, so no path dependencies)
		}
	}
	if (res && $isFunction(res)) {
		// If a helper is of type function, and not already wrapped, we will wrap it, so if called with no this pointer it will be called with the
		// view as 'this' context. If the helper ~foo() was in a data-link expression, the view will have a 'temporary' linkCtx property too.
		// Note that helper functions on deeper paths will have specific this pointers, from the preceding path.
		// For example, ~util.foo() will have the ~util object as 'this' pointer
		wrapped = function() {
			return res.apply((!this || this === global) ? storeView : this, arguments);
		};
		$extend(wrapped, res); // Attach same expandos (if any) to the wrapped function
		wrapped._vw = storeView;
	}
	return wrapped || res;
}

function getTemplate(tmpl) {
	return tmpl && (tmpl.fn
		? tmpl
		: this.getRsc("templates", tmpl) || $templates(tmpl)); // not yet compiled
}

//==============
// views._cnvt
//==============

function convertVal(converter, view, tagCtx, onError) {
	// Called from compiled template code for {{:}}
	// self is template object or linkCtx object
	var tag, value, argsLen, bindTo,
		// If tagCtx is an integer, then it is the key for the compiled function to return the boundTag tagCtx
		boundTag = typeof tagCtx === "number" && view.tmpl.bnds[tagCtx-1],
		linkCtx = view.linkCtx; // For data-link="{cvt:...}"...

	if (onError === undefined && boundTag && boundTag._lr) { // lateRender
		onError = "";
	}
	if (onError !== undefined) {
		tagCtx = onError = {props: {}, args: [onError]};
	} else if (boundTag) {
		tagCtx = boundTag(view.data, view, $sub);
	}
	boundTag = boundTag._bd && boundTag;
	value = tagCtx.args[0];
	if (converter || boundTag) {
		tag = linkCtx && linkCtx.tag;
		tagCtx.view = view;
		if (!tag) {
			tag = $extend(new $sub._tg(), {
				_: {
					bnd: boundTag,
					unlinked: true
				},
				inline: !linkCtx,
				tagName: ":",
				convert: converter,
				flow: true,
				tagCtx: tagCtx
			});
			argsLen = tagCtx.args.length;
			if (argsLen>1) {
				bindTo = tag.bindTo = [];
				while (argsLen--) {
					bindTo.unshift(argsLen); // Bind to all the arguments - generate bindTo array: [0,1,2...]
				}
			}
			if (linkCtx) {
				linkCtx.tag = tag;
				tag.linkCtx = linkCtx;
			}
			tagCtx.ctx = extendCtx(tagCtx.ctx, (linkCtx ? linkCtx.view : view).ctx);
			tagHandlersFromProps(tag, tagCtx);
		}
		tag._er = onError && value;
		tag.ctx = tagCtx.ctx || tag.ctx || {};
		tagCtx.ctx = undefined;

		value = tag.cvtArgs()[0]; // If there is a convertBack but no convert, converter will be "true"
	}

	// Call onRender (used by JsViews if present, to add binding annotations around rendered content)
	value = boundTag && view._.onRender
		? view._.onRender(value, view, tag)
		: value;
	return value != undefined ? value : "";
}

function convertArgs(bound, tagElse) { // tag.cvtArgs()
	var l, key, boundArgs, args, bindTo, tag, converter,
		tagCtx = this;

	if (tagCtx.tagName) {
		tag = tagCtx;
		tagCtx = tag.tagCtxs ? tag.tagCtxs[tagElse || 0] : tag.tagCtx;
	} else {
		tag = tagCtx.tag;
	}

	bindTo = tag.bindTo;
	args = tagCtx.args;

	if ((converter = tag.convert) && "" + converter === converter) {
		converter = converter === "true"
			? undefined
			: (tagCtx.view.getRsc("converters", converter) || error("Unknown converter: '" + converter + "'"));
	}

	if (bound && bound.length) {
	 args = bound;
	} else {
		if (converter && !bound) { // If there is a converter, use a copy of the tagCtx.args array for rendering, and replace the args[0] in
			args = args.slice(); // the copied array with the converted value. But we do not modify the value of tag.tagCtx.args[0] (the original args array)
		}
		if (bindTo) { // Get the values of the boundArgs
			boundArgs = [];
			l = bindTo.length;
			while (l--) {
				key = bindTo[l];
				boundArgs.unshift(argOrProp(tagCtx, key));
			}
			if (bound) {
				args = boundArgs; // Call to convertBoundArgs() - returns the boundArgs
			}
		}
	}
	if (converter) {
		bindTo = bindTo || [0];
		l = bindTo.length;
		converter = converter.apply(tag, boundArgs || args);
		if (!$isArray(converter) || converter.length !== l) {
			converter = [converter];
			bindTo = [0];
			l = 1;
		}
		if (bound) {        // Call to bndArgs convertBoundArgs() - so apply converter to all boundArgs
			args = converter; // The array of values returned from the converter
		} else {            // Call to cvtArgs()
			while (l--) {
				key = bindTo[l];
				if (+key === key) {
					args[key] = converter[l];
				}
			}
		}
	}
	return args;
}

function argOrProp(context, key) {
	context = context[+key === key ? "args" : "props"];
	return context && context[key];
}

function convertBoundArgs(tagElse) { // tag.bndArgs()
	return this.cvtArgs(true, tagElse);
}

//=============
// views._tag
//=============

function getResource(resourceType, itemName) {
	var res, store,
		view = this;
	if ("" + itemName === itemName) {
		while ((res === undefined) && view) {
			store = view.tmpl && view.tmpl[resourceType];
			res = store && store[itemName];
			view = view.parent;
		}
		return res || $views[resourceType][itemName];
	}
}

function renderTag(tagName, parentView, tmpl, tagCtxs, isUpdate, onError) {
	function makeArray(type) {
		var linkedElement;
		if (linkedElement = tag[type]) {
			tag[type] = linkedElement = $isArray(linkedElement) ? linkedElement: [linkedElement];

			if (bindToLength !== linkedElement.length) {
				error(type + " length not same as bindTo ");
			}
		}
	}

	parentView = parentView || topView;
	var tag, tag_, tagDef, template, tags, attr, parentTag, l, m, n, itemRet, tagCtx, tagCtxCtx, ctxPrm, bindTo,
		content, callInit, mapDef, thisMap, args, props, tagDataMap, contentCtx, key, bindToLength,
		i = 0,
		ret = "",
		linkCtx = parentView.linkCtx || 0,
		ctx = parentView.ctx,
		parentTmpl = tmpl || parentView.tmpl,
		// If tagCtxs is an integer, then it is the key for the compiled function to return the boundTag tagCtxs
		boundTag = typeof tagCtxs === "number" && parentView.tmpl.bnds[tagCtxs-1];

	if (tagName._is === "tag") {
		tag = tagName;
		tagName = tag.tagName;
		tagCtxs = tag.tagCtxs;
		template = tag.template;
	} else {
		tagDef = parentView.getRsc("tags", tagName) || error("Unknown tag: {{" + tagName + "}} ");
		template = tagDef.template;
	}
	if (onError === undefined && boundTag) {
		if (boundTag._lr = (tagDef.lateRender || boundTag._lr) && boundTag._lr !== "false") {
			onError = ""; // If lateRender, set temporary onError, to skip initial rendering (and render just "")
		}
	}
	if (onError !== undefined) {
		ret += onError;
		tagCtxs = onError = [{props: {}, args: [], params: {}}];
	} else if (boundTag) {
		tagCtxs = boundTag(parentView.data, parentView, $sub);
	}

	l = tagCtxs.length;
	for (; i < l; i++) {
		tagCtx = tagCtxs[i];
		content = tagCtx.tmpl;
		if (!linkCtx || !linkCtx.tag || i && !linkCtx.tag.inline || tag._er || content && +content===content) {
			// Initialize tagCtx
			// For block tags, tagCtx.tmpl is an integer > 0
			if (content && parentTmpl.tmpls) {
				tagCtx.tmpl = tagCtx.content = parentTmpl.tmpls[content - 1]; // Set the tmpl property to the content of the block tag
			}
			tagCtx.index = i;
			tagCtx.render = renderContent;
			tagCtx.view = parentView;
			tagCtx.ctx = extendCtx(tagCtx.ctx, ctx); // Clone and extend parentView.ctx
		}
		if (tmpl = tagCtx.props.tmpl) {
			// If the tmpl property is overridden, set the value (when initializing, or, in case of binding: ^tmpl=..., when updating)
			tagCtx.tmpl = parentView.getTmpl(tmpl);
			tagCtx.content = tagCtx.content || tagCtx.tmpl;
		}

		if (!tag) {
			// This will only be hit for initial tagCtx (not for {{else}}) - if the tag instance does not exist yet
			// If the tag has not already been instantiated, we will create a new instance.
			// ~tag will access the tag, even within the rendering of the template content of this tag.
			// From child/descendant tags, can access using ~tag.parent, or ~parentTags.tagName
			tag = new tagDef._ctr();
			callInit = !!tag.init;

			tag.parent = parentTag = ctx && ctx.tag;
			tag.tagCtxs = tagCtxs;
			tagDataMap = tag.dataMap;

			if (linkCtx) {
				tag.inline = false;
				linkCtx.tag = tag;
				tag.linkCtx = linkCtx;
			}
			if (tag._.bnd = boundTag || linkCtx.fn) {
				// Bound if {^{tag...}} or data-link="{tag...}"
				tag._.arrVws = {};
			} else if (tag.dataBoundOnly) {
				error(tagName + " must be data-bound:\n{^{" + tagName + "}}");
			}
			//TODO better perf for childTags() - keep child tag.tags array, (and remove child, when disposed)
			// tag.tags = [];
		}
		tagCtxs = tag.tagCtxs;
		tagDataMap = tag.dataMap;

		tagCtx.tag = tag;
		if (tagDataMap && tagCtxs) {
			tagCtx.map = tagCtxs[i].map; // Copy over the compiled map instance from the previous tagCtxs to the refreshed ones
		}
		if (!tag.flow) {
			tagCtxCtx = tagCtx.ctx = tagCtx.ctx || {};

			// tags hash: tag.ctx.tags, merged with parentView.ctx.tags,
			tags = tag.parents = tagCtxCtx.parentTags = ctx && extendCtx(tagCtxCtx.parentTags, ctx.parentTags) || {};
			if (parentTag) {
				tags[parentTag.tagName] = parentTag;
				//TODO better perf for childTags: parentTag.tags.push(tag);
			}
			tags[tag.tagName] = tagCtxCtx.tag = tag;
		}
	}
	if (!(tag._er = onError)) {
		tagHandlersFromProps(tag, tagCtxs[0]);
		tag.rendering = {}; // Provide object for state during render calls to tag and elses. (Used by {{if}} and {{for}}...)
		for (i = 0; i < l; i++) { // Iterate tagCtx for each {{else}} block
			tagCtx = tag.tagCtx = tagCtxs[i];
			props = tagCtx.props;
			tag.ctx = tagCtx.ctx;

			if (!i) {
				if (callInit) {
					tag.init(tagCtx, linkCtx, tag.ctx);
					callInit = undefined;
				}
				if (!tagCtx.args.length && tag.argDefault !== false) {
					tagCtx.args = args = [tagCtx.view.data]; // Missing first arg defaults to the current data context
					tagCtx.params.args = ["#data"];
				}

				bindTo = tag.bindTo;

				if (bindTo !== undefined) {
					bindTo = tag.bindTo = $isArray(bindTo) ? bindTo : [bindTo];
					m = bindTo.length;
					while (m--) {
						key = bindTo[m];
						if (!isNaN(parseInt(key))) {
							key = parseInt(key); // Convert "0" to 0,  etc.
						}
						bindTo[m] = key;
					}
				}

				bindTo = tag.bindTo || [0];
				bindToLength = bindTo.length;
				if (tag._.bnd){
					makeArray("linkedElement");
					makeArray("linkedCtxParam");
				}

				if (linkCtx) {
					// Set attr on linkCtx to ensure outputting to the correct target attribute.
					// Setting either linkCtx.attr or this.attr in the init() allows per-instance choice of target attrib.
					linkCtx.attr = tag.attr = linkCtx.attr || tag.attr;
				}
				attr = tag.attr;
				tag._.noVws = attr && attr !== HTML;
			}
			args = tag.cvtArgs(undefined, i);
			if (tag.linkedCtxParam) {
				m = bindToLength;
				while (m--) {
					if (ctxPrm = tag.linkedCtxParam[m]) {
						key = bindTo[m];
						// Create tag contextual parameter
						tagCtx.ctx[ctxPrm] = $sub._cp(argOrProp(tagCtx, key), argOrProp(tagCtx.params, key), tagCtx.view, tag._.bnd && {tag: tag, ind: m, tagElse: i});
					}
				}
			}
			if (mapDef = props.dataMap || tagDataMap) {
				if (args.length || props.dataMap) {
					thisMap = tagCtx.map;
					if (!thisMap || thisMap.src !== args[0] || isUpdate) {
						if (thisMap && thisMap.src) {
							thisMap.unmap(); // only called if observable map - not when only used in JsRender, e.g. by {{props}}
						}
						thisMap = tagCtx.map = mapDef.map(args[0], props, undefined, !tag._.bnd);
					}
					args = [thisMap.tgt];
				}
			}

			itemRet = undefined;
			if (tag.render) {
				itemRet = tag.render.apply(tag, args);
				if (parentView.linked && itemRet && !rWrappedInViewMarker.test(itemRet)) {
					// When a tag renders content from the render method, with data linking then we need to wrap with view markers, if absent,
					// to provide a contentView for the tag, which will correctly dispose bindings if deleted. The 'tmpl' for this view will
					// be a dumbed-down template which will always return the  itemRet string (no matter what the data is). The itemRet string
					// is not compiled as template markup, so can include "{{" or "}}" without triggering syntax errors
					tmpl = { // 'Dumbed-down' template which always renders 'static' itemRet string
						links: []
					};
					tmpl.render = tmpl.fn = function() {
						return itemRet;
					};
					itemRet = renderWithViews(tmpl, parentView.data, undefined, true, parentView, undefined, undefined, tag);
				}
			}
			if (!args.length) {
				args = [parentView]; // no arguments - (e.g. {{else}}) get data context from view.
			}
			if (itemRet === undefined) {
				contentCtx = args[0]; // Default data context for wrapped block content is the first argument
				if (tag.contentCtx) { // Set tag.contentCtx to true, to inherit parent context, or to a function to provide alternate context.
					contentCtx = tag.contentCtx === true ? parentView : tag.contentCtx(contentCtx);
				}
				itemRet = tagCtx.render(contentCtx, true) || (isUpdate ? undefined : "");
			}
			// No return value from render, and no template/content tagCtx.render(...), so return undefined
			ret = ret ? ret + (itemRet || "") : itemRet; // If no rendered content, this will be undefined
		}
		tag.rendering = undefined;
	}
	tag.tagCtx = tagCtxs[0];
	tag.ctx = tag.tagCtx.ctx;

	if (tag._.noVws) {
		if (tag.inline) {
			// inline tag with attr set to "text" will insert HTML-encoded content - as if it was element-based innerText
			ret = attr === "text"
				? $converters.html(ret)
				: "";
		}
	}
	return boundTag && parentView._.onRender
		// Call onRender (used by JsViews if present, to add binding annotations around rendered content)
		? parentView._.onRender(ret, parentView, tag)
		: ret;
}

//=================
// View constructor
//=================

function View(context, type, parentView, data, template, key, onRender, contentTmpl) {
	// Constructor for view object in view hierarchy. (Augmented by JsViews if JsViews is loaded)
	var views, parentView_, tag, self_,
		self = this,
		isArray = type === "array";
		// If the data is an array, this is an 'array view' with a views array for each child 'item view'
		// If the data is not an array, this is an 'item view' with a views 'hash' object for any child nested views

	self.content = contentTmpl;
	self.views = isArray ? [] : {};
	self.data = data;
	self.tmpl = template;
	self_ = self._ = {
		key: 0,
		// ._.useKey is non zero if is not an 'array view' (owning a data array). Use this as next key for adding to child views hash
		useKey: isArray ? 0 : 1,
		id: "" + viewId++,
		onRender: onRender,
		bnds: {}
	};
	self.linked = !!onRender;
	self.type = type || "top";
	if (self.parent = parentView) {
		self.root = parentView.root || self; // view whose parent is top view
		views = parentView.views;
		parentView_ = parentView._;
		self.isTop = parentView_.scp; // Is top content view of a link("#container", ...) call
		self.scope = (!context.tag || context.tag === parentView.ctx.tag) && !self.isTop && parentView.scope || self;
		if (parentView_.useKey) {
			// Parent is not an 'array view'. Add this view to its views object
			// self._key = is the key in the parent view hash
			views[self_.key = "_" + parentView_.useKey++] = self;
			self.index = indexStr;
			self.getIndex = getNestedIndex;
		} else if (views.length === (self_.key = self.index = key)) { // Parent is an 'array view'. Add this view to its views array
			views.push(self); // Adding to end of views array. (Using push when possible - better perf than splice)
		} else {
			views.splice(key, 0, self); // Inserting in views array
		}
		// If no context was passed in, use parent context
		// If context was passed in, it should have been merged already with parent context
		self.ctx = context || parentView.ctx;
	} else {
		self.ctx = context || {};
	}
}

View.prototype = {
	get: getView,
	getIndex: getIndex,
	getRsc: getResource,
	getTmpl: getTemplate,
	ctxPrm: contextParameter,
	_is: "view"
};

//====================================================
// Registration
//====================================================

function compileChildResources(parentTmpl) {
	var storeName, storeNames, resources;
	for (storeName in jsvStores) {
		storeNames = storeName + "s";
		if (parentTmpl[storeNames]) {
			resources = parentTmpl[storeNames];    // Resources not yet compiled
			parentTmpl[storeNames] = {};               // Remove uncompiled resources
			$views[storeNames](resources, parentTmpl); // Add back in the compiled resources
		}
	}
}

//===============
// compileTag
//===============

function compileTag(name, tagDef, parentTmpl) {
	var tmpl, baseTag, prop, l, key, bindToLength,
		bindTo = tagDef.bindTo,
		compiledDef = new $sub._tg();

	function Tag() {
		var tag = this;
		tag._ = {
			unlinked: true
		};
		tag.inline = true;
		tag.tagName = name;
	}

	if ($isFunction(tagDef)) {
		// Simple tag declared as function. No presenter instantation.
		tagDef = {
			depends: tagDef.depends,
			render: tagDef
		};
	} else if ("" + tagDef === tagDef) {
		tagDef = {template: tagDef};
	}

	if (baseTag = tagDef.baseTag) {
		tagDef.flow = !!tagDef.flow; // Set flow property, so defaults to false even if baseTag has flow=true
		tagDef.baseTag = baseTag = "" + baseTag === baseTag
			? (parentTmpl && parentTmpl.tags[baseTag] || $tags[baseTag])
			: baseTag;

		compiledDef = $extend(compiledDef, baseTag);

		for (prop in tagDef) {
			compiledDef[prop] = getMethod(baseTag[prop], tagDef[prop]);
		}
	} else {
		compiledDef = $extend(compiledDef, tagDef);
	}

	// Tag declared as object, used as the prototype for tag instantiation (control/presenter)
	if ((tmpl = compiledDef.template) !== undefined) {
		compiledDef.template = "" + tmpl === tmpl ? ($templates[tmpl] || $templates(tmpl)) : tmpl;
	}
	(Tag.prototype = compiledDef).constructor = compiledDef._ctr = Tag;

	if (parentTmpl) {
		compiledDef._parentTmpl = parentTmpl;
	}
	return compiledDef;
}

function baseApply(args) {
	// In derived method (or handler declared declaratively as in {{:foo onChange=~fooChanged}} can call base method,
	// using this.baseApply(arguments) (Equivalent to this._superApply(arguments) in jQuery UI)
	return this.base.apply(this, args);
}

//===============
// compileTmpl
//===============

function compileTmpl(name, tmpl, parentTmpl, options) {
	// tmpl is either a template object, a selector for a template script block, the name of a compiled template, or a template object

	//==== nested functions ====
	function lookupTemplate(value) {
		// If value is of type string - treat as selector, or name of compiled template
		// Return the template object, if already compiled, or the markup string
		var currentName, tmpl;
		if (("" + value === value) || value.nodeType > 0 && (elem = value)) {
			if (!elem) {
				if (/^\.\/[^\\:*?"<>]*$/.test(value)) {
					// tmpl="./some/file.html"
					// If the template is not named, use "./some/file.html" as name.
					if (tmpl = $templates[name = name || value]) {
						value = tmpl;
					} else {
						// BROWSER-SPECIFIC CODE (not on Node.js):
						// Look for server-generated script block with id "./some/file.html"
						elem = document.getElementById(value);
					}
				} else if ($.fn && !$sub.rTmpl.test(value)) {
					try {
						elem = $ (value, document)[0]; // if jQuery is loaded, test for selector returning elements, and get first element
					} catch (e) {}
				}// END BROWSER-SPECIFIC CODE
			} //BROWSER-SPECIFIC CODE
			if (elem) {
				// Generally this is a script element.
				// However we allow it to be any element, so you can for example take the content of a div,
				// use it as a template, and replace it by the same content rendered against data.
				// e.g. for linking the content of a div to a container, and using the initial content as template:
				// $.link("#content", model, {tmpl: "#content"});
				if (options) {
					// We will compile a new template using the markup in the script element
					value = elem.innerHTML;
				} else {
					// We will cache a single copy of the compiled template, and associate it with the name
					// (renaming from a previous name if there was one).
					currentName = elem.getAttribute(tmplAttr);
					if (currentName) {
						if (currentName !== jsvTmpl) {
							value = $templates[currentName];
							delete $templates[currentName];
						} else if ($.fn) {
							value = $.data(elem)[jsvTmpl]; // Get cached compiled template
						}
					}
					if (!currentName || !value) { // Not yet compiled, or cached version lost
						name = name || ($.fn ? jsvTmpl : value);
						value = compileTmpl(name, elem.innerHTML, parentTmpl, options);
					}
					value.tmplName = name = name || currentName;
					if (name !== jsvTmpl) {
						$templates[name] = value;
					}
					elem.setAttribute(tmplAttr, name);
					if ($.fn) {
						$.data(elem, jsvTmpl, value);
					}
				}
			} // END BROWSER-SPECIFIC CODE
			elem = undefined;
		} else if (!value.fn) {
			value = undefined;
			// If value is not a string. HTML element, or compiled template, return undefined
		}
		return value;
	}

	var elem, compiledTmpl,
		tmplOrMarkup = tmpl = tmpl || "";
	$sub._html = $converters.html;

	//==== Compile the template ====
	if (options === 0) {
		options = undefined;
		tmplOrMarkup = lookupTemplate(tmplOrMarkup); // Top-level compile so do a template lookup
	}

	// If options, then this was already compiled from a (script) element template declaration.
	// If not, then if tmpl is a template object, use it for options
	options = options || (tmpl.markup ? tmpl : {});
	options.tmplName = name;
	if (parentTmpl) {
		options._parentTmpl = parentTmpl;
	}
	// If tmpl is not a markup string or a selector string, then it must be a template object
	// In that case, get it from the markup property of the object
	if (!tmplOrMarkup && tmpl.markup && (tmplOrMarkup = lookupTemplate(tmpl.markup))) {
		if (tmplOrMarkup.fn) {
			// If the string references a compiled template object, need to recompile to merge any modified options
			tmplOrMarkup = tmplOrMarkup.markup;
		}
	}
	if (tmplOrMarkup !== undefined) {
		if (tmplOrMarkup.fn || tmpl.fn) {
			// tmpl is already compiled, so use it
			if (tmplOrMarkup.fn) {
				compiledTmpl = tmplOrMarkup;
			}
		} else {
			// tmplOrMarkup is a markup string, not a compiled template
			// Create template object
			tmpl = tmplObject(tmplOrMarkup, options);
			// Compile to AST and then to compiled function
			tmplFn(tmplOrMarkup.replace(rEscapeQuotes, "\\$&"), tmpl);
		}
		if (!compiledTmpl) {
			compiledTmpl = $extend(function() {
				return compiledTmpl.render.apply(compiledTmpl, arguments);
			}, tmpl);

			compileChildResources(compiledTmpl);
		}
		return compiledTmpl;
	}
}

//==== /end of function compileTmpl ====

//=================
// compileViewModel
//=================

function getDefaultVal(defaultVal, data) {
	return $isFunction(defaultVal)
		? defaultVal.call(data)
		: defaultVal;
}

function unmapArray(modelArr) {
		var arr = [],
			i = 0,
			l = modelArr.length;
		for (; i<l; i++) {
			arr.push(modelArr[i].unmap());
		}
		return arr;
}

function compileViewModel(name, type) {
	var i, constructor,
		viewModels = this,
		getters = type.getters,
		extend = type.extend,
		id = type.id,
		proto = $.extend({
			_is: name || "unnamed",
			unmap: unmap,
			merge: merge
		}, extend),
		args = "",
		body = "",
		g = getters ? getters.length : 0,
		$observable = $.observable,
		getterNames = {};

	function GetNew(args) {
		constructor.apply(this, args);
	}

	function vm() {
		return new GetNew(arguments);
	}

	function iterate(data, action) {
		var getterType, defaultVal, prop, ob,
			j = 0;
		for (; j<g; j++) {
			prop = getters[j];
			getterType = undefined;
			if (prop + "" !== prop) {
				getterType = prop;
				prop = getterType.getter;
			}
			if ((ob = data[prop]) === undefined && getterType && (defaultVal = getterType.defaultVal) !== undefined) {
				ob = getDefaultVal(defaultVal, data);
			}
			action(ob, getterType && viewModels[getterType.type], prop);
		}
	}

	function map(data) {
		data = data + "" === data
			? JSON.parse(data) // Accept JSON string
			: data;            // or object/array
		var l, prop,
			j = 0,
			ob = data,
			arr = [];

		if ($isArray(data)) {
			data = data || [];
			l = data.length;
			for (; j<l; j++) {
				arr.push(this.map(data[j]));
			}
			arr._is = name;
			arr.unmap = unmap;
			arr.merge = merge;
			return arr;
		}

		if (data) {
			iterate(data, function(ob, viewModel) {
				if (viewModel) { // Iterate to build getters arg array (value, or mapped value)
					ob = viewModel.map(ob);
				}
				arr.push(ob);
			});

			ob = this.apply(this, arr); // Insantiate this View Model, passing getters args array to constructor
			for (prop in data) { // Copy over any other properties. that are not get/set properties
				if (prop !== $expando && !getterNames[prop]) {
					ob[prop] = data[prop];
				}
			}
		}
		return ob;
	}

	function merge(data) {
		data = data + "" === data
			? JSON.parse(data) // Accept JSON string
			: data;            // or object/array
		var j, l, m, prop, mod, found, assigned, ob, newModArr,
			k = 0,
			model = this;

		if ($isArray(model)) {
			assigned = {};
			newModArr = [];
			l = data.length;
			m = model.length;
			for (; k<l; k++) {
				ob = data[k];
				found = false;
				for (j=0; j<m && !found; j++) {
					if (assigned[j]) {
						continue;
					}
					mod = model[j];

					if (id) {
						assigned[j] = found = id + "" === id
						? (ob[id] && (getterNames[id] ? mod[id]() : mod[id]) === ob[id])
						: id(mod, ob);
					}
				}
				if (found) {
					mod.merge(ob);
					newModArr.push(mod);
				} else {
					newModArr.push(vm.map(ob));
				}
			}
			if ($observable) {
				$observable(model).refresh(newModArr, true);
			} else {
				model.splice.apply(model, [0, model.length].concat(newModArr));
			}
			return;
		}
		iterate(data, function(ob, viewModel, getter) {
			if (viewModel) {
				model[getter]().merge(ob); // Update typed property
			} else {
				model[getter](ob); // Update non-typed property
			}
		});
		for (prop in data) {
			if (prop !== $expando && !getterNames[prop]) {
				model[prop] = data[prop];
			}
		}
	}

	function unmap() {
		var ob, prop, getterType, arr, value,
			k = 0,
			model = this;

		if ($isArray(model)) {
			return unmapArray(model);
		}
		ob = {};
		for (; k<g; k++) {
			prop = getters[k];
			getterType = undefined;
			if (prop + "" !== prop) {
				getterType = prop;
				prop = getterType.getter;
			}
			value = model[prop]();
			ob[prop] = getterType && value && viewModels[getterType.type]
				? $isArray(value)
					? unmapArray(value)
					: value.unmap()
				: value;
		}
		for (prop in model) {
			if (prop !== "_is" && !getterNames[prop] && prop !== $expando  && (prop.charAt(0) !== "_" || !getterNames[prop.slice(1)]) && !$isFunction(model[prop])) {
				ob[prop] = model[prop];
			}
		}
		return ob;
	}

	GetNew.prototype = proto;

	for (i=0; i<g; i++) {
		(function(getter) {
			getter = getter.getter || getter;
			getterNames[getter] = i+1;
			var privField = "_" + getter;

			args += (args ? "," : "") + getter;
			body += "this." + privField + " = " + getter + ";\n";
			proto[getter] = proto[getter] || function(val) {
				if (!arguments.length) {
					return this[privField]; // If there is no argument, use as a getter
				}
				if ($observable) {
					$observable(this).setProperty(getter, val);
				} else {
					this[privField] = val;
				}
			};

			if ($observable) {
				proto[getter].set = proto[getter].set || function(val) {
					this[privField] = val; // Setter called by observable property change
				};
			}
		})(getters[i]);
	}

	constructor = new Function(args, body.slice(0, -1));
	constructor.prototype = proto;
	proto.constructor = constructor;

	vm.map = map;
	vm.getters = getters;
	vm.extend = extend;
	vm.id = id;
	return vm;
}

function tmplObject(markup, options) {
	// Template object constructor
	var htmlTag,
		wrapMap = $subSettingsAdvanced._wm || {}, // Only used in JsViews. Otherwise empty: {}
		tmpl = $extend(
			{
				tmpls: [],
				links: {}, // Compiled functions for link expressions
				bnds: [],
				_is: "template",
				render: renderContent
			},
			options
		);

	tmpl.markup = markup;
	if (!options.htmlTag) {
		// Set tmpl.tag to the top-level HTML tag used in the template, if any...
		htmlTag = rFirstElem.exec(markup);
		tmpl.htmlTag = htmlTag ? htmlTag[1].toLowerCase() : "";
	}
	htmlTag = wrapMap[tmpl.htmlTag];
	if (htmlTag && htmlTag !== wrapMap.div) {
		// When using JsViews, we trim templates which are inserted into HTML contexts where text nodes are not rendered (i.e. not 'Phrasing Content').
		// Currently not trimmed for <li> tag. (Not worth adding perf cost)
		tmpl.markup = $.trim(tmpl.markup);
	}

	return tmpl;
}

//==============
// registerStore
//==============

function registerStore(storeName, storeSettings) {

	function theStore(name, item, parentTmpl) {
		// The store is also the function used to add items to the store. e.g. $.templates, or $.views.tags

		// For store of name 'thing', Call as:
		//    $.views.things(items[, parentTmpl]),
		// or $.views.things(name, item[, parentTmpl])

		var compile, itemName, thisStore, cnt,
			onStore = $sub.onStore[storeName];

		if (name && typeof name === OBJECT && !name.nodeType && !name.markup && !name.getTgt && !(storeName === "viewModel" && name.getters || name.extend)) {
			// Call to $.views.things(items[, parentTmpl]),

			// Adding items to the store
			// If name is a hash, then item is parentTmpl. Iterate over hash and call store for key.
			for (itemName in name) {
				theStore(itemName, name[itemName], item);
			}
			return item || $views;
		}
		// Adding a single unnamed item to the store
		if (item === undefined) {
			item = name;
			name = undefined;
		}
		if (name && "" + name !== name) { // name must be a string
			parentTmpl = item;
			item = name;
			name = undefined;
		}
		thisStore = parentTmpl
			? storeName === "viewModel"
				? parentTmpl
				: (parentTmpl[storeNames] = parentTmpl[storeNames] || {})
			: theStore;
		compile = storeSettings.compile;

		if (item === null) {
			// If item is null, delete this entry
			if (name) {
				delete thisStore[name];
			}
		} else {
			if (compile) {
				item = compile.call(thisStore, name, item, parentTmpl, 0) || {};
				item._is = storeName; // Only do this for compiled objects (tags, templates...)
			}
			if (name) {
				thisStore[name] = item;
			}
		}
		if (onStore) {
			// e.g. JsViews integration
			onStore(name, item, parentTmpl, compile);
		}
		return item;
	}

	var storeNames = storeName + "s";
	$views[storeNames] = theStore;
}

function addSetting(st) {
	$viewsSettings[st] = function(value) {
		return arguments.length
			? ($subSettings[st] = value, $viewsSettings)
			: $subSettings[st];
	};
}

//=========
// dataMap
//=========

function dataMap(mapDef) {
	function Map(source, options) {
		this.tgt = mapDef.getTgt(source, options);
	}

	if ($isFunction(mapDef)) {
		// Simple map declared as function
		mapDef = {
			getTgt: mapDef
		};
	}

	if (mapDef.baseMap) {
		mapDef = $extend($extend({}, mapDef.baseMap), mapDef);
	}

	mapDef.map = function(source, options) {
		return new Map(source, options);
	};
	return mapDef;
}

//==============
// renderContent
//==============

function renderContent(data, context, noIteration, parentView, key, onRender) {
	var i, l, tag, tmpl, tagCtx, isTopRenderCall, prevData, prevIndex,
		view = parentView,
		result = "";

	if (context === true) {
		noIteration = context; // passing boolean as second param - noIteration
		context = undefined;
	} else if (typeof context !== OBJECT) {
		context = undefined; // context must be a boolean (noIteration) or a plain object
	}

	if (tag = this.tag) {
		// This is a call from renderTag or tagCtx.render(...)
		tagCtx = this;
		view = view || tagCtx.view;
		tmpl = view.getTmpl(tag.template || tagCtx.tmpl);
		if (!arguments.length) {
			data = view;
		}
	} else {
		// This is a template.render(...) call
		tmpl = this;
	}

	if (tmpl) {
		if (!parentView && data && data._is === "view") {
			view = data; // When passing in a view to render or link (and not passing in a parent view) use the passed-in view as parentView
		}

		if (view && data === view) {
			// Inherit the data from the parent view.
			data = view.data;
		}

		isTopRenderCall = !view;
		isRenderCall = isRenderCall || isTopRenderCall;
		if (!view) {
			(context = context || {}).root = data; // Provide ~root as shortcut to top-level data.
		}
		if (!isRenderCall || $subSettingsAdvanced.useViews || tmpl.useViews || view && view !== topView) {
			result = renderWithViews(tmpl, data, context, noIteration, view, key, onRender, tag);
		} else {
			if (view) { // In a block
				prevData = view.data;
				prevIndex = view.index;
				view.index = indexStr;
			} else {
				view = topView;
				prevData = view.data;
				view.data = data;
				view.ctx = context;
			}
			if ($isArray(data) && !noIteration) {
				// Create a view for the array, whose child views correspond to each data item. (Note: if key and parentView are passed in
				// along with parent view, treat as insert -e.g. from view.addViews - so parentView is already the view item for array)
				for (i = 0, l = data.length; i < l; i++) {
					view.index = i;
					view.data = data[i];
					result += tmpl.fn(data[i], view, $sub);
				}
			} else {
				view.data = data;
				result += tmpl.fn(data, view, $sub);
			}
			view.data = prevData;
			view.index = prevIndex;
		}
		if (isTopRenderCall) {
			isRenderCall = undefined;
		}
	}
	return result;
}

function renderWithViews(tmpl, data, context, noIteration, view, key, onRender, tag) {
	function setItemVar(item) {
		// When itemVar is specified, set modified ctx with user-named ~item
		newCtx = $extend({}, context);
		newCtx[itemVar] = item;
	}

	// Render template against data as a tree of subviews (nested rendered template instances), or as a string (top-level template).
	// If the data is the parent view, treat as noIteration, re-render with the same data context.
	// tmpl can be a string (e.g. rendered by a tag.render() method), or a compiled template.
	var i, l, newView, childView, itemResult, swapContent, contentTmpl, outerOnRender, tmplName, itemVar, newCtx, tagCtx,
		result = "";

	if (tag) {
		// This is a call from renderTag or tagCtx.render(...)
		tmplName = tag.tagName;
		tagCtx = tag.tagCtx;
		context = context ? extendCtx(context, tag.ctx) : tag.ctx;

		if (tmpl === view.content) { // {{xxx tmpl=#content}}
			contentTmpl = tmpl !== view.ctx._wrp // We are rendering the #content
				? view.ctx._wrp // #content was the tagCtx.props.tmpl wrapper of the block content - so within this view, #content will now be the view.ctx._wrp block content
				: undefined; // #content was the view.ctx._wrp block content - so within this view, there is no longer any #content to wrap.
		} else if (tmpl !== tagCtx.content) {
			if (tmpl === tag.template) { // Rendering {{tag}} tag.template, replacing block content.
				contentTmpl = tagCtx.tmpl; // Set #content to block content (or wrapped block content if tagCtx.props.tmpl is set)
				context._wrp = tagCtx.content; // Pass wrapped block content to nested views
			} else { // Rendering tagCtx.props.tmpl wrapper
				contentTmpl = tagCtx.content || view.content; // Set #content to wrapped block content
			}
		} else {
			contentTmpl = view.content; // Nested views inherit same wrapped #content property
		}

		if (tagCtx.props.link === false) {
			// link=false setting on block tag
			// We will override inherited value of link by the explicit setting link=false taken from props
			// The child views of an unlinked view are also unlinked. So setting child back to true will not have any effect.
			context = context || {};
			context.link = false;
		}

		if (itemVar = tagCtx.props.itemVar) {
			if (itemVar.charAt(0) !== "~") {
				syntaxError("Use itemVar='~myItem'");
			}
			itemVar = itemVar.slice(1);
		}
	}

	if (view) {
		onRender = onRender || view._.onRender;
		context = extendCtx(context, view.ctx);
	}

	if (key === true) {
		swapContent = true;
		key = 0;
	}

	// If link===false, do not call onRender, so no data-linking marker nodes
	if (onRender && (context && context.link === false || tag && tag._.noVws)) {
		onRender = undefined;
	}
	outerOnRender = onRender;
	if (onRender === true) {
		// Used by view.refresh(). Don't create a new wrapper view.
		outerOnRender = undefined;
		onRender = view._.onRender;
	}
	// Set additional context on views created here, (as modified context inherited from the parent, and to be inherited by child views)
	context = tmpl.helpers
		? extendCtx(tmpl.helpers, context)
		: context;

	newCtx = context;
	if ($isArray(data) && !noIteration) {
		// Create a view for the array, whose child views correspond to each data item. (Note: if key and view are passed in
		// along with parent view, treat as insert -e.g. from view.addViews - so view is already the view item for array)
		newView = swapContent
			? view
			: (key !== undefined && view)
				|| new View(context, "array", view, data, tmpl, key, onRender, contentTmpl);
		if (view && view._.useKey) {
			// Parent is not an 'array view'
			newView._.bnd = !tag || tag._.bnd && tag; // For array views that are data bound for collection change events, set the
			// view._.bnd property to true for top-level link() or data-link="{for}", or to the tag instance for a data-bound tag, e.g. {^{for ...}}
		}
		for (i = 0, l = data.length; i < l; i++) {
			// Create a view for each data item.
			if (itemVar) {
				setItemVar(data[i]); // use modified ctx with user-named ~item
			}
			childView = new View(newCtx, "item", newView, data[i], tmpl, (key || 0) + i, onRender, newView.content);
			childView._.it = itemVar;

			itemResult = tmpl.fn(data[i], childView, $sub);
			result += newView._.onRender ? newView._.onRender(itemResult, childView) : itemResult;
		}
	} else {
		// Create a view for singleton data object. The type of the view will be the tag name, e.g. "if" or "mytag" except for
		// "item", "array" and "data" views. A "data" view is from programmatic render(object) against a 'singleton'.
		if (itemVar) {
			setItemVar(data);
		}
		newView = swapContent ? view : new View(newCtx, tmplName || "data", view, data, tmpl, key, onRender, contentTmpl);
		newView._.it = itemVar;
		result += tmpl.fn(data, newView, $sub);
	}
	if (tag) {
		newView.tag = tag;
		newView.tagElse = tagCtx.index;
		tagCtx.contentView = newView;
	}
	return outerOnRender ? outerOnRender(result, newView) : result;
}

//===========================
// Build and compile template
//===========================

// Generate a reusable function that will serve to render a template against data
// (Compile AST then build template function)

function onRenderError(e, view, fallback) {
	var message = fallback !== undefined
		? $isFunction(fallback)
			? fallback.call(view.data, e, view)
			: fallback || ""
		: "{Error: " + (e.message||e) + "}";

	if ($subSettings.onError && (fallback = $subSettings.onError.call(view.data, e, fallback && message, view)) !== undefined) {
		message = fallback; // There is a settings.debugMode(handler) onError override. Call it, and use return value (if any) to replace message
	}

	return view && !view.linkCtx ? $converters.html(message) : message;
}

function error(message) {
	throw new $sub.Err(message);
}

function syntaxError(message) {
	error("Syntax error\n" + message);
}

function tmplFn(markup, tmpl, isLinkExpr, convertBack, hasElse) {
	// Compile markup to AST (abtract syntax tree) then build the template function code from the AST nodes
	// Used for compiling templates, and also by JsViews to build functions for data link expressions

	//==== nested functions ====
	function pushprecedingContent(shift) {
		shift -= loc;
		if (shift) {
			content.push(markup.substr(loc, shift).replace(rNewLine, "\\n"));
		}
	}

	function blockTagCheck(tagName, block) {
		if (tagName) {
			tagName += '}}';
			//			'{{include}} block has {{/for}} with no open {{for}}'
			syntaxError((
				block
					? '{{' + block + '}} block has {{/' + tagName + ' without {{' + tagName
					: 'Unmatched or missing {{/' + tagName) + ', in template:\n' + markup);
		}
	}

	function parseTag(all, bind, tagName, converter, colon, html, codeTag, params, slash, bind2, closeBlock, index) {
/*

     bind     tagName         cvt   cln html code    params            slash   bind2         closeBlk  comment
/(?:{(\^)?{(?:(\w+(?=[\/\s}]))|(\w+)?(:)|(>)|(\*))\s*((?:[^}]|}(?!}))*?)(\/)?|{(\^)?{(?:(?:\/(\w+))\s*|!--[\s\S]*?--))}}/g

(?:
  {(\^)?{            bind
  (?:
    (\w+             tagName
      (?=[\/\s}])
    )
    |
    (\w+)?(:)        converter colon
    |
    (>)              html
    |
    (\*)             codeTag
  )
  \s*
  (                  params
    (?:[^}]|}(?!}))*?
  )
  (\/)?              slash
  |
  {(\^)?{            bind2
  (?:
    (?:\/(\w+))\s*   closeBlock
    |
    !--[\s\S]*?--    comment
  )
)
}}/g

*/
		if (codeTag && bind || slash && !tagName || params && params.slice(-1) === ":" || bind2) {
			syntaxError(all);
		}

		// Build abstract syntax tree (AST): [tagName, converter, params, content, hash, bindings, contentMarkup]
		if (html) {
			colon = ":";
			converter = HTML;
		}
		slash = slash || isLinkExpr && !hasElse;

		var late,
			pathBindings = (bind || isLinkExpr) && [[]], // pathBindings is an array of arrays for arg bindings and a hash of arrays for prop bindings
			props = "",
			args = "",
			ctxProps = "",
			paramsArgs = "",
			paramsProps = "",
			paramsCtxProps = "",
			onError = "",
			useTrigger = "",
			// Block tag if not self-closing and not {{:}} or {{>}} (special case) and not a data-link expression
			block = !slash && !colon;

		//==== nested helper function ====
		tagName = tagName || (params = params || "#data", colon); // {{:}} is equivalent to {{:#data}}
		pushprecedingContent(index);
		loc = index + all.length; // location marker - parsed up to here
		if (codeTag) {
			if (allowCode) {
				content.push(["*", "\n" + params.replace(/^:/, "ret+= ").replace(rUnescapeQuotes, "$1") + ";\n"]);
			}
		} else if (tagName) {
			if (tagName === "else") {
				if (rTestElseIf.test(params)) {
					syntaxError('for "{{else if expr}}" use "{{else expr}}"');
				}
				pathBindings = current[8] && [[]];
				current[9] = markup.substring(current[9], index); // contentMarkup for block tag
				current = stack.pop();
				content = current[2];
				block = true;
			}
			if (params) {
				// remove newlines from the params string, to avoid compiled code errors for unterminated strings
				parseParams(params.replace(rNewLine, " "), pathBindings, tmpl)
					.replace(rBuildHash, function(all, onerror, isCtx, key, keyToken, keyValue, arg, param) {
						key = "'" + keyToken + "':";
						if (arg) {
							args += keyValue + ",";
							paramsArgs += "'" + param + "',";
						} else if (isCtx) {
							ctxProps += key + 'j._cp(' + keyValue + ',"' + param + '",view),';
							// Compiled code for evaluating tagCtx on a tag will have: ctx:{'foo':j._cp(compiledExpr, "expr", view)}
							paramsCtxProps += key + "'" + param + "',";
						} else if (onerror) {
							onError += keyValue;
						} else {
							if (keyToken === "trigger") {
								useTrigger += keyValue;
							}
							if (keyToken === "lateRender") {
								late = param; // Render after first pass
							}
							props += key + keyValue + ",";
							paramsProps += key + "'" + param + "',";
							hasHandlers = hasHandlers || rHasHandlers.test(keyToken);
						}
						return "";
					}).slice(0, -1);
			}

			if (pathBindings && pathBindings[0]) {
				pathBindings.pop(); // Remove the binding that was prepared for next arg. (There is always an extra one ready).
			}

			newNode = [
					tagName,
					converter || !!convertBack || hasHandlers || "",
					block && [],
					parsedParam(paramsArgs || (tagName === ":" ? "'#data'," : ""), paramsProps, paramsCtxProps), // {{:}} equivalent to {{:#data}}
					parsedParam(args || (tagName === ":" ? "data," : ""), props, ctxProps),
					onError,
					useTrigger,
					late,
					pathBindings || 0
				];
			content.push(newNode);
			if (block) {
				stack.push(current);
				current = newNode;
				current[9] = loc; // Store current location of open tag, to be able to add contentMarkup when we reach closing tag
			}
		} else if (closeBlock) {
			blockTagCheck(closeBlock !== current[0] && current[0] !== "else" && closeBlock, current[0]);
			current[9] = markup.substring(current[9], index); // contentMarkup for block tag
			current = stack.pop();
		}
		blockTagCheck(!current && closeBlock);
		content = current[2];
	}
	//==== /end of nested functions ====

	var i, result, newNode, hasHandlers, bindings,
		allowCode = $subSettings.allowCode || tmpl && tmpl.allowCode
			|| $viewsSettings.allowCode === true, // include direct setting of settings.allowCode true for backward compat only
		astTop = [],
		loc = 0,
		stack = [],
		content = astTop,
		current = [,,astTop];

	if (allowCode && tmpl._is) {
		tmpl.allowCode = allowCode;
	}

//TODO	result = tmplFnsCache[markup]; // Only cache if template is not named and markup length < ...,
//and there are no bindings or subtemplates?? Consider standard optimization for data-link="a.b.c"
//		if (result) {
//			tmpl.fn = result;
//		} else {

//		result = markup;
	if (isLinkExpr) {
		if (convertBack !== undefined) {
			markup = markup.slice(0, -convertBack.length - 2) + delimCloseChar0;
		}
		markup = delimOpenChar0 + markup + delimCloseChar1;
	}

	blockTagCheck(stack[0] && stack[0][2].pop()[0]);
	// Build the AST (abstract syntax tree) under astTop
	markup.replace(rTag, parseTag);

	pushprecedingContent(markup.length);

	if (loc = astTop[astTop.length - 1]) {
		blockTagCheck("" + loc !== loc && (+loc[9] === loc[9]) && loc[0]);
	}
//			result = tmplFnsCache[markup] = buildCode(astTop, tmpl);
//		}

	if (isLinkExpr) {
		result = buildCode(astTop, markup, isLinkExpr);
		bindings = [];
		i = astTop.length;
		while (i--) {
			bindings.unshift(astTop[i][8]); // With data-link expressions, pathBindings array for tagCtx[i] is astTop[i][8]
		}
		setPaths(result, bindings);
	} else {
		result = buildCode(astTop, tmpl);
	}
	return result;
}

function setPaths(fn, pathsArr) {
	var key, paths,
		i = 0,
		l = pathsArr.length;
	fn.deps = [];
	fn.paths = []; // The array of path binding (array/dictionary)s for each tag/else block's args and props
	for (; i < l; i++) {
		fn.paths.push(paths = pathsArr[i]);
		for (key in paths) {
			if (key !== "_jsvto" && paths.hasOwnProperty(key) && paths[key].length && !paths[key].skp) {
				fn.deps = fn.deps.concat(paths[key]); // deps is the concatenation of the paths arrays for the different bindings
			}
		}
	}
}

function parsedParam(args, props, ctx) {
	return [args.slice(0, -1), props.slice(0, -1), ctx.slice(0, -1)];
}

function paramStructure(parts, type) {
	return '\n\t'
		+ (type
			? type + ':{'
			: '')
		+ 'args:[' + parts[0] + ']'
		+ (parts[1] || !type
			? ',\n\tprops:{' + parts[1] + '}'
			: "")
		+ (parts[2] ? ',\n\tctx:{' + parts[2] + '}' : "");
}

function parseParams(params, pathBindings, tmpl) {

	function parseTokens(all, lftPrn0, lftPrn, bound, path, operator, err, eq, path2, prn, comma, lftPrn2, apos, quot, rtPrn, rtPrnDot, prn2, space, index, full) {
	// /(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(!*?[#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=\s*[.^]|\s*$|[^([])|[)\]])([([]?))|(\s+)/g,
	//   lftPrn0        lftPrn        bound            path    operator err                                                eq             path2       prn    comma   lftPrn2   apos quot      rtPrn rtPrnDot                        prn2  space
		// (left paren? followed by (path? followed by operator) or (path followed by paren?)) or comma or apos or quot or right paren or space
		function parsePath(allPath, not, object, helper, view, viewProperty, pathTokens, leafToken) {
			//rPath = /^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,
			//          not                               object     helper    view  viewProperty pathTokens      leafToken
			var subPath = object === ".";
			if (object) {
				path = path.slice(not.length);
				if (/^\.?constructor$/.test(leafToken||path)) {
					syntaxError(allPath);
				}
				if (!subPath) {
					allPath = (helper
							? 'view.ctxPrm("' + helper + '")'
							: view
								? "view"
								: "data")
						+ (leafToken
							? (viewProperty
								? "." + viewProperty
								: helper
									? ""
									: (view ? "" : "." + object)
								) + (pathTokens || "")
							: (leafToken = helper ? "" : view ? viewProperty || "" : object, ""));

					allPath = allPath + (leafToken ? "." + leafToken : "");

					allPath = not + (allPath.slice(0, 9) === "view.data"
						? allPath.slice(5) // convert #view.data... to data...
						: allPath);
				}
				if (bindings) {
					binds = named === "linkTo" ? (bindto = pathBindings._jsvto = pathBindings._jsvto || []) : bndCtx.bd;
					if (theOb = subPath && binds[binds.length-1]) {
						if (theOb._cpfn) { // Computed property exprOb
							while (theOb.sb) {
								theOb = theOb.sb;
							}
							if (theOb.bnd) {
								path = "^" + path.slice(1);
							}
							theOb.sb = path;
							theOb.bnd = theOb.bnd || path.charAt(0) === "^";
						}
					} else {
						binds.push(path);
					}
					pathStart[parenDepth] = index + (subPath ? 1 : 0);
				}
			}
			return allPath;
		}

		//bound = bindings && bound;
		if (bound && !eq) {
			path = bound + path; // e.g. some.fn(...)^some.path - so here path is "^some.path"
		}
		operator = operator || "";
		lftPrn = lftPrn || lftPrn0 || lftPrn2;
		path = path || path2;
		// Could do this - but not worth perf cost?? :-
		// if (!path.lastIndexOf("#data.", 0)) { path = path.slice(6); } // If path starts with "#data.", remove that.
		prn = prn || prn2 || "";

		var expr, exprFn, binds, theOb, newOb,
			rtSq = ")";

		if (prn === "[") {
			prn ="[j._sq(";
			rtSq = ")]";
		}

		if (err && !aposed && !quoted) {
			syntaxError(params);
		} else {
			if (bindings && rtPrnDot && !aposed && !quoted) {
				// This is a binding to a path in which an object is returned by a helper/data function/expression, e.g. foo()^x.y or (a?b:c)^x.y
				// We create a compiled function to get the object instance (which will be called when the dependent data of the subexpression changes, to return the new object, and trigger re-binding of the subsequent path)
				if (!named || boundName || bindto) {
					expr = pathStart[parenDepth - 1];
					if (full.length - 1 > index - (expr || 0)) { // We need to compile a subexpression
						expr = full.slice(expr, index + all.length);
						if (exprFn !== true) { // If not reentrant call during compilation
							binds = bindto || bndStack[parenDepth-1].bd;
							// Insert exprOb object, to be used during binding to return the computed object
							theOb = binds[binds.length-1];
							if (theOb && theOb.prm) {
								while (theOb.sb && theOb.sb.prm) {
									theOb = theOb.sb;
								}
								newOb = theOb.sb = {path: theOb.sb, bnd: theOb.bnd};
							} else {
								binds.push(newOb = {path: binds.pop()}); // Insert exprOb object, to be used during binding to return the computed object
							}											 // (e.g. "some.object()" in "some.object().a.b" - to be used as context for binding the following tokens "a.b")
						}
						rtPrnDot = delimOpenChar1 + ":" + expr // The parameter or function subexpression
							+ " onerror=''" // set onerror='' in order to wrap generated code with a try catch - returning '' as object instance if there is an error/missing parent
							+ delimCloseChar0;
						exprFn = tmplLinks[rtPrnDot];
						if (!exprFn) {
							tmplLinks[rtPrnDot] = true; // Flag that this exprFn (for rtPrnDot) is being compiled
							tmplLinks[rtPrnDot] = exprFn = tmplFn(rtPrnDot, tmpl, true); // Compile the expression (or use cached copy already in tmpl.links)
						}
						if (exprFn !== true && newOb) {
							// If not reentrant call during compilation
							newOb._cpfn = exprFn;
							newOb.prm = bndCtx.bd;
							newOb.bnd = newOb.bnd || newOb.path && newOb.path.indexOf("^") >= 0;
						}
					}
				}
			}
			return (aposed
				// within single-quoted string
				? (aposed = !apos, (aposed ? all : lftPrn2 + '"'))
				: quoted
				// within double-quoted string
					? (quoted = !quot, (quoted ? all : lftPrn2 + '"'))
					:
				(
					(lftPrn
						? (pathStart[parenDepth] = index++, bndCtx = bndStack[++parenDepth] = {bd: []}, lftPrn)
						: "")
					+ (space
						? (parenDepth
							? ""
				// New arg or prop - so insert backspace \b (\x08) as separator for named params, used subsequently by rBuildHash, and prepare new bindings array
							: (paramIndex = full.slice(paramIndex, index), named
								? (named = boundName = bindto = false, "\b")
								: "\b,") + paramIndex + (paramIndex = index + all.length, bindings && pathBindings.push(bndCtx.bd = []), "\b")
						)
						: eq
				// named param. Remove bindings for arg and create instead bindings array for prop
							? (parenDepth && syntaxError(params), bindings && pathBindings.pop(), named = path, boundName = bound, paramIndex = index + all.length,
									bindings && ((bindings = bndCtx.bd = pathBindings[named] = []), bindings.skp = !bound), path + ':')
							: path
				// path
								? (path.split("^").join(".").replace(rPath, parsePath)
									+ (prn
				// some.fncall(
										? (bndCtx = bndStack[++parenDepth] = {bd: []}, fnCall[parenDepth] = rtSq, prn)
										: operator)
								)
								: operator
				// operator
									? operator
									: rtPrn
				// function
										? ((rtPrn = fnCall[parenDepth] || rtPrn, fnCall[parenDepth] = false, bndCtx = bndStack[--parenDepth], rtPrn)
											+ (prn // rtPrn and prn, e.g )( in (a)() or a()(), or )[ in a()[]
												? (bndCtx = bndStack[++parenDepth], fnCall[parenDepth] = rtSq, prn)
												: "")
										)
										: comma
											? (fnCall[parenDepth] || syntaxError(params), ",") // We don't allow top-level literal arrays or objects
											: lftPrn0
												? ""
												: (aposed = apos, quoted = quot, '"')
				))
			);
		}
	}

	var named, bindto, boundName,
		quoted, // boolean for string content in double quotes
		aposed, // or in single quotes
		bindings = pathBindings && pathBindings[0], // bindings array for the first arg
		bndCtx = {bd: bindings},
		bndStack = {0: bndCtx},
		paramIndex = 0, // list,
		tmplLinks = (tmpl ? tmpl.links : bindings && (bindings.links = bindings.links || {})) || topView.tmpl.links,
		// The following are used for tracking path parsing including nested paths, such as "a.b(c^d + (e))^f", and chained computed paths such as
		// "a.b().c^d().e.f().g" - which has four chained paths, "a.b()", "^c.d()", ".e.f()" and ".g"
		parenDepth = 0,
		fnCall = {}, // We are in a function call
		pathStart = {}, // tracks the start of the current path such as c^d() in the above example
		result = (params + (tmpl ? " " : "")).replace(rParams, parseTokens);

	return !parenDepth && result || syntaxError(params); // Syntax error if unbalanced parens in params expression
}

function buildCode(ast, tmpl, isLinkExpr) {
	// Build the template function code from the AST nodes, and set as property on the passed-in template object
	// Used for compiling templates, and also by JsViews to build functions for data link expressions
	var i, node, tagName, converter, tagCtx, hasTag, hasEncoder, getsVal, hasCnvt, useCnvt, tmplBindings, pathBindings, params, boundOnErrStart,
		boundOnErrEnd, tagRender, nestedTmpls, tmplName, nestedTmpl, tagAndElses, content, markup, nextIsElse, oldCode, isElse, isGetVal, tagCtxFn,
		onError, tagStart, trigger, lateRender,
		tmplBindingKey = 0,
		useViews = $subSettingsAdvanced.useViews || tmpl.useViews || tmpl.tags || tmpl.templates || tmpl.helpers || tmpl.converters,
		code = "",
		tmplOptions = {},
		l = ast.length;

	if ("" + tmpl === tmpl) {
		tmplName = isLinkExpr ? 'data-link="' + tmpl.replace(rNewLine, " ").slice(1, -1) + '"' : tmpl;
		tmpl = 0;
	} else {
		tmplName = tmpl.tmplName || "unnamed";
		if (tmpl.allowCode) {
			tmplOptions.allowCode = true;
		}
		if (tmpl.debug) {
			tmplOptions.debug = true;
		}
		tmplBindings = tmpl.bnds;
		nestedTmpls = tmpl.tmpls;
	}
	for (i = 0; i < l; i++) {
		// AST nodes: [0: tagName, 1: converter, 2: content, 3: params, 4: code, 5: onError, 6: trigger, 7:pathBindings, 8: contentMarkup]
		node = ast[i];

		// Add newline for each callout to t() c() etc. and each markup string
		if ("" + node === node) {
			// a markup string to be inserted
			code += '\n+"' + node + '"';
		} else {
			// a compiled tag expression to be inserted
			tagName = node[0];
			if (tagName === "*") {
				// Code tag: {{* }}
				code += ";\n" + node[1] + "\nret=ret";
			} else {
				converter = node[1];
				content = !isLinkExpr && node[2];
				tagCtx = paramStructure(node[3], 'params') + '},' + paramStructure(params = node[4]);
				trigger = node[6];
				lateRender = node[7];
				markup = node[9] && node[9].replace(rUnescapeQuotes, "$1");
				if (isElse = tagName === "else") {
					if (pathBindings) {
						pathBindings.push(node[8]);
					}
				} else {
					onError = node[5] || $subSettings.debugMode !== false && "undefined"; // If debugMode not false, set default onError handler on tag to "undefined" (see onRenderError)
					if (tmplBindings && (pathBindings = node[8])) { // Array of paths, or false if not data-bound
						pathBindings = [pathBindings];
						tmplBindingKey = tmplBindings.push(1); // Add placeholder in tmplBindings for compiled function
					}
				}
				useViews = useViews || params[1] || params[2] || pathBindings || /view.(?!index)/.test(params[0]);
				// useViews is for perf optimization. For render() we only use views if necessary - for the more advanced scenarios.
				// We use views if there are props, contextual properties or args with #... (other than #index) - but you can force
				// using the full view infrastructure, (and pay a perf price) by opting in: Set useViews: true on the template, manually...
				if (isGetVal = tagName === ":") {
					if (converter) {
						tagName = converter === HTML ? ">" : converter + tagName;
					}
				} else {
					if (content) { // TODO optimize - if content.length === 0 or if there is a tmpl="..." specified - set content to null / don't run this compilation code - since content won't get used!!
						// Create template object for nested template
						nestedTmpl = tmplObject(markup, tmplOptions);
						nestedTmpl.tmplName = tmplName + "/" + tagName;
						// Compile to AST and then to compiled function
						nestedTmpl.useViews = nestedTmpl.useViews || useViews;
						buildCode(content, nestedTmpl);
						useViews = nestedTmpl.useViews;
						nestedTmpls.push(nestedTmpl);
					}

					if (!isElse) {
						// This is not an else tag.
						tagAndElses = tagName;
						useViews = useViews || tagName && (!$tags[tagName] || !$tags[tagName].flow);
						// Switch to a new code string for this bound tag (and its elses, if it has any) - for returning the tagCtxs array
						oldCode = code;
						code = "";
					}
					nextIsElse = ast[i + 1];
					nextIsElse = nextIsElse && nextIsElse[0] === "else";
				}
				tagStart = onError ? ";\ntry{\nret+=" : "\n+";
				boundOnErrStart = "";
				boundOnErrEnd = "";

				if (isGetVal && (pathBindings || trigger || converter && converter !== HTML || lateRender)) {
					// For convertVal we need a compiled function to return the new tagCtx(s)
					tagCtxFn = new Function("data,view,j,u", "// " + tmplName + " " + (++tmplBindingKey) + " " + tagName
										+ "\nreturn {" + tagCtx + "};");
					tagCtxFn._er = onError;
					tagCtxFn._tag = tagName;
					tagCtxFn._bd = !!pathBindings; // data-linked tag {^{.../}}
					tagCtxFn._lr = lateRender;

					if (isLinkExpr) {
						return tagCtxFn;
					}

					setPaths(tagCtxFn, pathBindings);
					tagRender = 'c("' + converter + '",view,';
					useCnvt = true;
					boundOnErrStart = tagRender + tmplBindingKey + ",";
					boundOnErrEnd = ")";
				}
				code += (isGetVal
					? (isLinkExpr ? (onError ? "try{\n" : "") + "return " : tagStart) + (useCnvt // Call _cnvt if there is a converter: {{cnvt: ... }} or {^{cnvt: ... }}
						? (useCnvt = undefined, useViews = hasCnvt = true, tagRender + (tagCtxFn
							? ((tmplBindings[tmplBindingKey - 1] = tagCtxFn), tmplBindingKey) // Store the compiled tagCtxFn in tmpl.bnds, and pass the key to convertVal()
							: "{" + tagCtx + "}") + ")")
						: tagName === ">"
							? (hasEncoder = true, "h(" + params[0] + ")")
							: (getsVal = true, "((v=" + params[0] + ')!=null?v:' + (isLinkExpr ? 'null)' : '"")'))
							// Non strict equality so data-link="title{:expr}" with expr=null/undefined removes title attribute
					)
					: (hasTag = true, "\n{view:view,tmpl:" // Add this tagCtx to the compiled code for the tagCtxs to be passed to renderTag()
						+ (content ? nestedTmpls.length : "0") + "," // For block tags, pass in the key (nestedTmpls.length) to the nested content template
						+ tagCtx + "},"));

				if (tagAndElses && !nextIsElse) {
					// This is a data-link expression or an inline tag without any elses, or the last {{else}} of an inline tag
					// We complete the code for returning the tagCtxs array
					code = "[" + code.slice(0, -1) + "]";
					tagRender = 't("' + tagAndElses + '",view,this,';
					if (isLinkExpr || pathBindings) {
						// This is a bound tag (data-link expression or inline bound tag {^{tag ...}}) so we store a compiled tagCtxs function in tmp.bnds
						code = new Function("data,view,j,u", " // " + tmplName + " " + tmplBindingKey + " " + tagAndElses + "\nreturn " + code + ";");
						code._er = onError;
						code._tag = tagAndElses;
						if (pathBindings) {
							setPaths(tmplBindings[tmplBindingKey - 1] = code, pathBindings);
						}
						code._lr = lateRender;
						if (isLinkExpr) {
							return code; // For a data-link expression we return the compiled tagCtxs function
						}
						boundOnErrStart = tagRender + tmplBindingKey + ",undefined,";
						boundOnErrEnd = ")";
					}

					// This is the last {{else}} for an inline tag.
					// For a bound tag, pass the tagCtxs fn lookup key to renderTag.
					// For an unbound tag, include the code directly for evaluating tagCtxs array
					code = oldCode + tagStart + tagRender + (code.deps && tmplBindingKey || code) + ")";
					pathBindings = 0;
					tagAndElses = 0;
				}
				if (onError && !nextIsElse) {
					useViews = true;
					code += ';\n}catch(e){ret' + (isLinkExpr ? "urn " : "+=") + boundOnErrStart + 'j._err(e,view,' + onError + ')' + boundOnErrEnd + ';}' + (isLinkExpr ? "" : 'ret=ret');
				}
			}
		}
	}
	// Include only the var references that are needed in the code
	code = "// " + tmplName

		+ "\nvar v"
		+ (hasTag ? ",t=j._tag" : "")                // has tag
		+ (hasCnvt ? ",c=j._cnvt" : "")              // converter
		+ (hasEncoder ? ",h=j._html" : "")           // html converter
		+ (isLinkExpr ? ";\n" : ',ret=""\n')
		+ (tmplOptions.debug ? "debugger;" : "")
		+ code
		+ (isLinkExpr ? "\n" : ";\nreturn ret;");

	try {
		code = new Function("data,view,j,u", code);
	} catch (e) {
		syntaxError("Compiled template code:\n\n" + code + '\n: "' + (e.message||e) + '"');
	}
	if (tmpl) {
		tmpl.fn = code;
		tmpl.useViews = !!useViews;
	}
	return code;
}

//==========
// Utilities
//==========

// Merge objects, in particular contexts which inherit from parent contexts
function extendCtx(context, parentContext) {
	// Return copy of parentContext, unless context is defined and is different, in which case return a new merged context
	// If neither context nor parentContext are defined, return undefined
	return context && context !== parentContext
		? (parentContext
			? $extend($extend({}, parentContext), context)
			: context)
		: parentContext && $extend({}, parentContext);
}

// Get character entity for HTML and Attribute encoding
function getCharEntity(ch) {
	return charEntities[ch] || (charEntities[ch] = "&#" + ch.charCodeAt(0) + ";");
}

function getTargetProps(source) {
	// this pointer is theMap - which has tagCtx.props too
	// arguments: tagCtx.args.
	var key, prop,
		props = [];

	if (typeof source === OBJECT) {
		for (key in source) {
			prop = source[key];
			if (key !== $expando && source.hasOwnProperty(key) && !$isFunction(prop)) {
				props.push({key: key, prop: prop});
			}
		}
	}
	return props;
}

function $fnRender(data, context, noIteration) {
	var tmplElem = this.jquery && (this[0] || error('Unknown template')), // Targeted element not found for jQuery template selector such as "#myTmpl"
		tmpl = tmplElem.getAttribute(tmplAttr);

	return renderContent.call(tmpl && $.data(tmplElem)[jsvTmpl] || $templates(tmplElem),
		data, context, noIteration);
}

//========================== Register converters ==========================

function htmlEncode(text) {
	// HTML encode: Replace < > & ' and " by corresponding entities.
	return text != undefined ? rIsHtml.test(text) && ("" + text).replace(rHtmlEncode, getCharEntity) || text : "";
}

//========================== Initialize ==========================

$sub = $views.sub;
$viewsSettings = $views.settings;

if (!(jsr || $ && $.render)) {
	// JsRender not already loaded, or loaded without jQuery, and we are now moving from jsrender namespace to jQuery namepace
	for (jsvStoreName in jsvStores) {
		registerStore(jsvStoreName, jsvStores[jsvStoreName]);
	}

	$converters = $views.converters;
	$helpers = $views.helpers;
	$tags = $views.tags;

	$sub._tg.prototype = {
		baseApply: baseApply,
		cvtArgs: convertArgs,
		bndArgs: convertBoundArgs,
		ctxPrm: contextParameter
	};

	topView = $sub.topView = new View();

	//BROWSER-SPECIFIC CODE
	if ($) {

		////////////////////////////////////////////////////////////////////////////////////////////////
		// jQuery (= $) is loaded

		$.fn.render = $fnRender;
		$expando = $.expando;
		if ($.observable) {
			$extend($sub, $.views.sub); // jquery.observable.js was loaded before jsrender.js
			$views.map = $.views.map;
		}

	} else {
		////////////////////////////////////////////////////////////////////////////////////////////////
		// jQuery is not loaded.

		$ = {};

		if (setGlobals) {
			global.jsrender = $; // We are loading jsrender.js from a script element, not AMD or CommonJS, so set global
		}

		// Error warning if jsrender.js is used as template engine on Node.js (e.g. Express or Hapi...)
		// Use jsrender-node.js instead...
		$.renderFile = $.__express = $.compile = function() { throw "Node.js: use npm jsrender, or jsrender-node.js"; };

		//END BROWSER-SPECIFIC CODE
		$.isFunction = function(ob) {
			return typeof ob === "function";
		};

		$.isArray = Array.isArray || function(obj) {
			return ({}.toString).call(obj) === "[object Array]";
		};

		$sub._jq = function(jq) { // private method to move from JsRender APIs from jsrender namespace to jQuery namespace
			if (jq !== $) {
				$extend(jq, $); // map over from jsrender namespace to jQuery namespace
				$ = jq;
				$.fn.render = $fnRender;
				delete $.jsrender;
				$expando = $.expando;
			}
		};

		$.jsrender = versionNumber;
	}
	$subSettings = $sub.settings;
	$subSettings.allowCode = false;
	$isFunction = $.isFunction;
	$.render = $render;
	$.views = $views;
	$.templates = $templates = $views.templates;

	for (setting in $subSettings) {
		addSetting(setting);
	}

	($viewsSettings.debugMode = function(debugMode) {
		return debugMode === undefined
			? $subSettings.debugMode
			: (
				$subSettings.debugMode = debugMode,
				$subSettings.onError = debugMode + "" === debugMode
					? new Function("", "return '" + debugMode + "';")
					: $isFunction(debugMode)
						? debugMode
						: undefined,
				$viewsSettings);
	})(false); // jshint ignore:line

	$subSettingsAdvanced = $subSettings.advanced = {
		useViews: false,
		_jsv: false // For global access to JsViews store
	};

	//========================== Register tags ==========================

	$tags({
		"if": {
			render: function(val) {
				// This function is called once for {{if}} and once for each {{else}}.
				// We will use the tag.rendering object for carrying rendering state across the calls.
				// If not done (a previous block has not been rendered), look at expression for this block and render the block if expression is truthy
				// Otherwise return ""
				var self = this,
					tagCtx = self.tagCtx,
					ret = (self.rendering.done || !val && (arguments.length || !tagCtx.index))
						? ""
						: (self.rendering.done = true,
							self.selected = tagCtx.index,
							undefined); // Test is satisfied, so render content on current context
				return ret;
			},
			contentCtx: true, // Inherit parent view data context
			flow: true
		},
		"for": {
			render: function(val) {
				// This function is called once for {{for}} and once for each {{else}}.
				// We will use the tag.rendering object for carrying rendering state across the calls.
				var finalElse = !arguments.length,
					value,
					self = this,
					tagCtx = self.tagCtx,
					result = "",
					done = 0;

				if (!self.rendering.done) {
					value = finalElse ? tagCtx.view.data : val; // For the final else, defaults to current data without iteration.
					if (value !== undefined) {
						result += tagCtx.render(value, finalElse); // Iterates except on final else, if data is an array. (Use {{include}} to compose templates without array iteration)
						done += $isArray(value) ? value.length : 1;
					}
					if (self.rendering.done = done) {
						self.selected = tagCtx.index;
					}
					// If nothing was rendered we will look at the next {{else}}. Otherwise, we are done.
				}
				return result;
			},
			flow: true
		},
		props: {
			baseTag: "for",
			dataMap: dataMap(getTargetProps),
			flow: true
		},
		include: {
			flow: true
		},
		"*": {
			// {{* code... }} - Ignored if template.allowCode and $.views.settings.allowCode are false. Otherwise include code in compiled template
			render: retVal,
			flow: true
		},
		":*": {
			// {{:* returnedExpression }} - Ignored if template.allowCode and $.views.settings.allowCode are false. Otherwise include code in compiled template
			render: retVal,
			flow: true
		},
		dbg: $helpers.dbg = $converters.dbg = dbgBreak // Register {{dbg/}}, {{dbg:...}} and ~dbg() to throw and catch, as breakpoints for debugging.
	});

	$converters({
		html: htmlEncode,
		attr: htmlEncode, // Includes > encoding since rConvertMarkers in JsViews does not skip > characters in attribute strings
		url: function(text) {
			// URL encoding helper.
			return text != undefined ? encodeURI("" + text) : text === null ? text : ""; // null returns null, e.g. to remove attribute. undefined returns ""
		}
	});
}
//========================== Define default delimiters ==========================
$subSettings = $sub.settings;
$isArray = ($||jsr).isArray;
$viewsSettings.delimiters("{{", "}}", "^");


if (jsrToJq) { // Moving from jsrender namespace to jQuery namepace - copy over the stored items (templates, converters, helpers...)
	jsr.views.sub._jq($);
}

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< JsObservable >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/* JsObservable:
 * See http://www.jsviews.com/#jsobservable and http://github.com/borismoore/jsviews
 * Copyright 2017, Boris Moore
 * Released under the MIT License.
 */

//========================== Top-level vars ==========================

$views = $.views;
$sub = $views.sub;
$isFunction = $.isFunction;
$isArray = $.isArray;
$expando = $.expando;
if (!$.observe) {

	var $eventSpecial = $.event.special,
		slice = [].slice,
		splice = [].splice,
		concat = [].concat,
		PARSEINT = parseInt,
		rNotWhite = /\S+/g,
		propertyChangeStr = $sub.propChng = $sub.propChng || "propertyChange",// These two settings can be overridden on settings after loading
		arrayChangeStr = $sub.arrChng = $sub.arrChng || "arrayChange",        // jsRender, and prior to loading jquery.observable.js and/or JsViews
		cbBindingsStore = {},
		observeStr = propertyChangeStr + ".observe",
		observeObjKey = 1,
		observeCbKey = 1,
		observeInnerCbKey = 1,
		$hasData = $.hasData,
		$data = $.data,
		remove = {}, // flag for removeProperty

	//========================== Top-level functions ==========================

	getCbKey = function(cb) {
		return cb._cId = cb._cId || (".obs" + observeCbKey++);
	},

	ObjectObservable = function(ns, data) {
		this._data = data;
		this._ns = ns;
		return this;
	},

	ArrayObservable = function(ns, data) {
		this._data = data;
		this._ns = ns;
		return this;
	},

	wrapArray = function(data) {
		return $isArray(data)
			? [data]
			: data;
	},

	dependsPaths = function(paths, root, callback) {
		// Process depends = ... paths to resolve objects, and recursively process functions.
		paths = paths
			? $isArray(paths)
				? paths
				: [paths]
			: [];

		var i, path, object, rt,
			nextObj = object = root,
			l = paths && paths.length,
			out = [];

		for (i = 0; i < l; i++) {
			path = paths[i];
			if ($isFunction(path)) { // path is a depends function, returning [path1, ...]
				rt = root.tagName
						? root.linkCtx.data // root is tag instance. rt is current data context of tag
						: root; // rt = root = current data context of computed prop
				out = out.concat(dependsPaths(path.call(root, rt, callback), rt, callback));
				continue;
			} else if ("" + path !== path) {
				root = nextObj = path;
				if (nextObj !== object) {
					out.push(object = nextObj);
				}
				continue;
			}
			if (nextObj !== object) {
				out.push(object = nextObj);
			}
			out.push(path);
		}
		if (out.length) {
			out.unshift({_ar: 1}); // Switch on allowArray, for depends paths.
			out.push({_ar: -1});
		}
		return out;
	},

	removeCbBindings = function(cbBindings, cbBindingsId) {
		// If the cbBindings collection is empty we will remove it from the cbBindingsStore
		for (var cb in cbBindings) {
			return;
		}
		delete cbBindingsStore[cbBindingsId]; // This binding collection is empty, so remove from store
	},

	onDataChange = function(ev, eventArgs) {
		function isOb(val) {
			return typeof val === OBJECT && (paths[0] || allowArray && $isArray(val));
		}

		if (!(ev.data && ev.data.off)) {
			// Skip if !!ev.data.off: - a handler that has already been removed (maybe was on handler collection at call time - then removed by another handler)
			var allPath, filter, parentObs,
				oldValue = eventArgs.oldValue,
				value = eventArgs.value,
				ctx = ev.data,
				observeAll = ctx.observeAll,
				cb = ctx.cb,
				allowArray = ctx.arOk,
				paths = ctx.paths,
				ns = ctx.ns;

			if (ev.type === arrayChangeStr) {
				(cb.array || cb).call(ctx, ev, eventArgs); // If there is an arrayHandler expando on the regular handler, use it, otherwise use the regular handler for arrayChange events also - for example: $.observe(array, handler)
				// or observeAll() with an array in the graph. Note that on data-link bindings we ensure always to have an array handler - $.noop if none is specified e.g. on the data-linked tag.
			} else if (ctx.prop === eventArgs.path || ctx.prop === "*") {
				if (observeAll) {
					allPath = observeAll._path + "." + eventArgs.path;
					filter = observeAll.filter;
					parentObs = [ev.target].concat(observeAll.parents());

					if (isOb(oldValue)) {
						observe_apply(undefined, ns, [oldValue], paths, cb, true, filter, [parentObs], allPath); // unobserve
					}
					if (isOb(value)) {
						observe_apply(undefined, ns, [value], paths, cb, undefined, filter, [parentObs], allPath);
					}
				} else {
					if (isOb(oldValue)) { // oldValue is an object, so unobserve
						observe_apply(undefined, ns, [oldValue], paths, cb, true); // unobserve
					}
					if (isOb(value)) { // value is an object, so observe
						observe_apply(undefined, ns, [value], paths, cb);
					}
				}
				ctx.cb(ev, eventArgs);
			}
		}
	},

	observe_apply = function() {
		// $.observe(), but allowing you to include arrays within the arguments - which you want flattened.
		var args = concat.apply([], arguments); // Flatten the arguments
		return $observe.apply(args.shift(), args);
	},

	$observeAll = function(cb, filter, unobserve) {
		observeAll(this._ns, this._data, cb, filter, [], "root", unobserve);
	},

	$unobserveAll = function(cb, filter) {
		$observeAll.call(this, cb, filter, true);
	},

	observeAll = function(namespace, object, cb, filter, parentObs, allPath, unobserve, objMap) {
		function observeArrayItems(arr, unobs) {
			l = arr.length;
			newAllPath = allPath + "[]";
			while (l--) {
				filterAndObserveAll(arr, l, unobs, 1);
			}
		}

		function filterAndObserveAll(obj, prop, unobs, nestedArray) {
			var newObject, newParentObs;
			if (prop !== $expando) {
				if (newObject = $observable._fltr(newAllPath, obj[prop], nextParentObs, filter)) {
					newParentObs = nextParentObs.slice();
					if (nestedArray && updatedTgt && newParentObs[0] !== updatedTgt) {
						newParentObs.unshift(updatedTgt); // For array change events when observing an array which is not the root, need to add updated array to parentObs
					}
					observeAll(namespace, newObject, cb, filter || (nestedArray ? undefined : 0), newParentObs, newAllPath, unobs, objMap);
					// If nested array, need to observe the array too - so set filter to undefined
				}
			}
		}

		function wrappedCb(ev, eventArgs) {
			// This object is changing.
			allPath = ev.data.observeAll._path;
			updatedTgt = ev.target;
			switch (eventArgs.change) { // observeAll/unobserveAll on added or removed objects
				case "insert":
					observeArrayItems(eventArgs.items);
					break;
				case "remove":
					observeArrayItems(eventArgs.items, true); // unobserveAll on removed items
					break;
				case "set":
					newAllPath = allPath + "." + eventArgs.path;
					filterAndObserveAll(eventArgs, "oldValue", true); // unobserve old value
					filterAndObserveAll(eventArgs, "value"); // observe new value
			}
			updatedTgt = undefined;
			cb.apply(this, arguments); // Observe this object (invoke the callback)
		}
		wrappedCb._wrp = 1;

		var l, isObject, newAllPath, nextParentObs, updatedTgt, obId,
			notRemoving = !objMap || objMap.un || !unobserve; // true unless it is an observeAll call (not unobserveAll) and we are removing a listener (not adding one)

		if (object && typeof object === OBJECT) {
			nextParentObs = [object].concat(parentObs); // The parentObs chain for the next depth of observeAll
			isObject = $isArray(object) ? "" : "*";
			if (objMap && notRemoving && $hasData(object) && objMap[obId = $data(object).obId]) {
				objMap[obId]++;
				return; // This object has already being observed/unobserved by this observeAll/unobserveAll call (must be a cyclic object graph) so skip, to avoid
				// stack overflow/multiple instances of listener. See jsviews/pull/305
				// NOTE - WE DO NOT support ObserveAll on data with cyclic graphs which include DUPLICATE REFERENCES TO ARRAY PROPERTIES - such as data.children = data.descendants = []
			}
			if (!objMap) {
				objMap = {un: unobserve}; // Map object to register observed objects for this observeAll
			}

			if (cb) {
				// Observe this object or array - and also listen for changes to object graph, to add or remove observers from the modified object graph
				if (isObject || filter !== 0) {
					// If an object, observe the object. If an array, only add arrayChange binding if has filter or if filter is undefined (!== 0) - which
					// is the case for top-level calls or for nested array (array item of an array - e.g. member of 2-dimensional array).
					// For array properties lower in the tree, with no filter, filter is set to 0 in filterAndObserveAll, so no arrayChange binding here,
					// since they get arrayChange binding added during regular $.observe(array ...) binding.
					wrappedCb._cId = getCbKey(cb); // Identify wrapped callback with unwrapped callback, so unobserveAll will
													// remove previous observeAll wrapped callback, if inner callback was the same;
					if (notRemoving) {
						$observe(namespace, object, isObject, wrappedCb, unobserve, filter, nextParentObs, allPath);
						obId = $data(object).obId;
						objMap[obId] = (objMap[obId] || 0) + 1; // Register on map of objects observed/unobserved by this observeAll/unobserveAll call
							//- or remove from map if we are removing this object from observeAll call. (Avoid dups, for cyclic graphs)
					} else {
						if (--objMap[$data(object).obId]) {
							// Register on map of objects observed/unobserved by this observeAll/unobserveAll call
							//- or remove from map if we are removing this object from observeAll call. (Avoid dups, for cyclic graphs)
							return;
						}
						$observe(namespace, object, isObject, wrappedCb, unobserve, filter, nextParentObs, allPath);
					}
				}
			} else {
				// No callback. Just unobserve if unobserve === true.
				if (objMap) {
					objMap[$data(object).obId] = 1; // Register on map of objects unobserved by this unobserveAll call. (Avoid dups, for cyclic graphs)
				}
				$observe(namespace, object, isObject, undefined, unobserve, filter, nextParentObs, allPath);
			}

			if (isObject) {
				// Continue stepping through object graph, observing object and arrays
				// To override filtering, pass in filter function, or replace $.observable._fltr
				for (l in object) {
					newAllPath = allPath + "." + l;
					filterAndObserveAll(object, l, unobserve);
				}
			} else { // Observe items in Array
				observeArrayItems(object, unobserve);
			}
		}
	},

	shallowFilter = function(allPath /*, object, parentObs*/) {
		return allPath.indexOf(".") < 0 && allPath.indexOf("[") < 0;
	},

	$unobserve = function() {
		[].push.call(arguments, true); // Add true as additional final argument
		return $observe.apply(undefined, arguments);
	};

	$observe = function() {
		// $.observe([namespace, ]root, [1 or more objects, path or path Array params...], callback[, contextCallback][, unobserve])

		function innerObserve() {

			function observeOnOff(namespace, pathStr, isArrayBinding, off) {
				var j, evData,
					obIdExpando = $hasData(object),
					boundObOrArr = wrapArray(object),
					prntObs = parentObs,
					allPth = allPath;

				namespace = initialNs ? namespace + "." + initialNs : namespace;

				if (!unobserve && (off || isArrayBinding)) {
					events = obIdExpando && $._data(object);
					events = events && events.events;
					events = events && events[isArrayBinding ? arrayChangeStr : propertyChangeStr];
					el = events && events.length;
					while (el--) { // Skip duplicates
						data = events[el] && events[el].data;
						if (data && (off && data.ns !== initialNs
							// When observing, don't unbind dups unless they have the same namespace
							|| !off && data.ns === initialNs && data.cb && data.cb._cId === callback._cId && (!callback._wrp || data.cb._wrp)))
							// When observing and doing array binding, don't bind dups if they have the same namespace (Dups can happen e.g. with {^{for people ^~foo=people}})
						{
							return;
						}
					}
				}
				if (unobserve || off) {
					$(boundObOrArr).off(namespace, onDataChange);
				} else {
					evData = isArrayBinding ? {}
						: {
							fullPath: path,
							paths: pathStr ? [pathStr] : [],
							prop: prop,
							arOk: allowArray
						};
					evData.ns = initialNs;
					evData.cb = callback;

					if (allPath) {
						// This is an observeAll call
						evData.observeAll = {
							_path: allPth,
							path: function() { // Step through path and parentObs parent chain, replacing '[]' by '[n]' based on current index of objects in parent arrays.
								j = prntObs.length;
								return allPth.replace(/[[.]/g, function(all) {
									j--;
									return all === "["
										? "[" + $.inArray(prntObs[j - 1], prntObs[j])
										: ".";
								});
							},
							parents: function() {
								return prntObs; // The chain of parents between the modified object and the root object used in the observeAll() call
							},
							filter: filter
						};
					}
					$(boundObOrArr).on(namespace, null, evData, onDataChange);

					if (cbBindings) {
						// Add object to cbBindings
						cbBindings[$data(object).obId || $data(object, "obId", observeObjKey++)] = object;
					}
				}
			}

			function getInnerCb(exprOb) {
				// Returns the innerCb used for updating a computed in a compiled expression (setting the new instance as exprOb.ob, unobserving the previous object,
				// and observing the new one), then calling the outerCB - i.e. the handler for the whole compiled expression.
				// Initialized exprOb.ob to the current object.
				// Uses the contextCb callback to execute the compiled exprOb template in the context of the view/data etc. to get the returned value, typically an object or array.
				// If it is an array, registers array binding
				var origRt = root;
				// Note: For jsviews/issues/292 ctxCb will need var ctxCb = contextCb || function(exprOb, origRt) {return exprOb._cpfn(origRt);};

				exprOb.ob = contextCb(exprOb, origRt); // Initialize object

				return exprOb.cb = function(ev, eventArgs) {
					var obj = exprOb.ob, // The old object
						sub = exprOb.sb,
						newObj = contextCb(exprOb, origRt);

					if (newObj !== obj) {
						if (typeof obj === OBJECT) {
							bindArray(obj, true);
							if (sub || allowArray && $isArray(obj)) {
								innerObserve([obj], sub, callback, contextCb, true); // unobserve on the old object
							}
						}
						exprOb.ob = newObj;
						// Put the updated object instance onto the exprOb in the paths array, so subsequent string paths are relative to this object
						if (typeof newObj === OBJECT) {
							bindArray(newObj);
							if (sub || allowArray && $isArray(newObj)) { // observe on new object
								innerObserve([newObj], sub, callback, contextCb);
							}
						}
					}
					// Call the outerCb - to execute the compiled expression that this computed is part of
					callback(ev, eventArgs);
				};
			}

			function bindArray(arr, unbind, isArray, relPath) {
				if (allowArray) {
					// allowArray is 1 if this is a call to observe that does not come from observeAndBind (tag binding), or is from a 'depends' path,
					// so we allow arrayChange binding. Otherwise allowArray is zero.
					var prevObj = object,
						prevAllPath = allPath;

					object = arr;
					if (relPath) {
						object = arr[relPath];
						allPath += "." + relPath;
					}
					if (filter && object) {
						object = $observable._fltr(allPath, object, relPath ? [arr].concat(parentObs) : parentObs, filter);
					}
					if (object && (isArray || $isArray(object))) {
						observeOnOff(arrayChangeStr + ".observe" + (callback ? getCbKey(callback) : ""), undefined, true, unbind);
					}
					object = prevObj;
					allPath = prevAllPath;
				}
			}

			var i, p, skip, parts, prop, path, dep, unobserve, callback, cbId, inId, el, data, events, contextCb, innerContextCb,
				items, cbBindings, depth, innerCb, parentObs, allPath, filter, initNsArr, initNsArrLen, view, cbItemCount,
				ns = observeStr,
				paths = this != 1 // Using != for IE<10 bug- see jsviews/issues/237
					? concat.apply([], arguments) // Flatten the arguments - this is a 'recursive call' with params using the 'wrapped array'
													// style - such as innerObserve([object], path.path, [origRoot], path.prm, innerCb, ...);
					: slice.call(arguments), // Don't flatten - this is the first 'top-level call, to innerObserve.apply(1, paths)
				lastArg = paths.pop() || false,
				root = paths.shift(),
				object = root,
				l = paths.length;

			if (lastArg + "" === lastArg) { // If last arg is a string then this observe call is part of an observeAll call,
				allPath = lastArg;          // and the last three args are the parentObs array, the filter, and the allPath string.
				parentObs = paths.pop();
				filter = paths.pop();
				lastArg = !!paths.pop(); // unobserve
				l -= 3;
			}
			if (lastArg === !!lastArg) {
				unobserve = lastArg;
				lastArg = paths[l-1];
				lastArg = l && lastArg + "" !== lastArg && (!lastArg || $isFunction(lastArg)) ? (l--, paths.pop()) : undefined;
				if (unobserve && !l && $isFunction(root)) {
					lastArg = root;
					root = undefined;
				}
			}
			callback = lastArg;
			if (l && $isFunction(paths[l - 1])) {
				innerContextCb = contextCb = callback;
				callback = paths.pop();
				l--;
			}

			if (unobserve && callback && !callback._cId) {
				return;
			}

			// Use a unique namespace (e.g. obs7) associated with each observe() callback to allow unobserve to remove handlers
			ns += callback
				? ((inId = callback._inId || ""), unobserve)
					? callback._cId + inId
					: (cbId = getCbKey(callback)) + inId
				: "";

			if (cbId && !unobserve) {
				cbBindings = cbBindingsStore[cbId] = cbBindingsStore[cbId] || {};
			}

			initNsArr = initialNs && initialNs.match(rNotWhite) || [""];
			initNsArrLen = initNsArr.length;

			while (initNsArrLen--) {
				initialNs = initNsArr[initNsArrLen];
				if (root && !paths[0]) {
					if ($isArray(root)) {
						bindArray(root, unobserve, true); // observe(array, handler)
					}
					if (unobserve) {
						observeOnOff(ns, ""); // unobserve(objectOrArray[, handler])
					}
				}
				if (unobserve && !l && !root) { // unobserve() - unobserves all
					for (p in cbBindingsStore) {
						p = cbBindingsStore[p];
						for (data in p) {
							object = p[data];
							if ($isArray(object)) {
								bindArray(object, unobserve, unobserve);
							} else {
								observeOnOff(ns, "");
							}
						}
					}
				}
				depth = 0;
				cbItemCount = 0;
				for (i = 0; i < l; i++) {
					if (cbItemCount) {
						cbItemCount--; // contextCb was moved to a contextual parameter outer context. Needs to revert after cbItemCount
					} else {
						contextCb = innerContextCb;
					}

					path = paths[i];
					if (path === "" || path === root) {
						continue;
					}
					if (path && path._ar) {
						allowArray += path._ar; // Switch on allowArray for depends paths, and off, afterwards.
						continue;
					}
					object = root;
					if ("" + path === path) {
						// Consider support for computed paths: jsviews/issues/292
						//if (/[\(\[\+]/.test(path)) {
						//	var b={links:{}}, t = $sub.tmplFn("{:"+path+"}", b, true), items = t.paths[0];
						//	l += items.length - 1;
						//	splice.apply(paths, [i--, 1].concat(items));
						//	continue;
						//}
						parts = path.split("^");
						if (parts[1]) {
							// We bind the leaf, plus additional nodes based on depth.
							// "a.b.c^d.e" is depth 2, so listens to changes of e, plus changes of d and of c
							depth = parts[0].split(".").length;
							path = parts.join(".");
							depth = path.split(".").length - depth;
							// if more than one ^ in the path, the first one determines depth
						}
						if (contextCb) {
							items = contextCb(path, root, depth);
						}
						contextCb = innerContextCb;
						parts = path.split(".");
					} else if (path && path._cxp) { // contextual parameter
						view = path.shift();  // Contextual data
						if (_ocp in view) {
							root = view; // observable contextual parameter
							contextCb = 0;
						} else {
							contextCb = $sub._gccb(view); // getContextCb: Get context callback for the contextual view (where contextual param evaluated/assigned)
							root = view.data;
						}
						items = path;
						items.push(origRoot);
						cbItemCount = items.length;
					} else {
						if (!$isFunction(path)) {
							if (path && path._cpfn) {
								// Path is an exprOb returned by a computed property - helper/data function (compiled expr function).
								// Set current object on exprOb.ob, and get innerCb for updating the object
								innerCb = unobserve ? path.cb : getInnerCb(path);
								// innerCb._ctx = callback._ctx; Could pass context (e.g. linkCtx) for use in a depends = function() {} call, so depends is different for different linkCtx's
								innerCb._cId = callback._cId;
								// Set the same cbBindingsStore key as for callback, so when callback is disposed, disposal of innerCb happens too.
								innerCb._inId = innerCb._inId || ".obIn" + observeInnerCbKey++;
								if (path.bnd || path.prm && path.prm.length || !path.sb) {
									// If the exprOb is bound e.g. foo()^sub.path, or has parameters e.g. foo(bar) or is a leaf object (so no sub path) e.g. foo()
									// then observe changes on the object, or its parameters and sub-path
									innerObserve([object], path.path, [path.root||root], path.prm, innerCb, contextCb, unobserve);
								}
								if (path.sb) { // subPath
									if (path.sb.prm) {
										path.sb.root = root;
									}
									innerObserve([path.ob], path.sb, callback, contextCb, unobserve);
								}
								path = origRoot;
								object = undefined;
							}
						}
						parts = [root = path];
					}
					if (items) {
						// If the array of objects and paths returned by contextCb is non empty, insert them
						// into the sequence, replacing the current item (path). Otherwise simply remove current item (path)
						l += items.length - 1;
						splice.apply(paths, [i--, 1].concat(items));
						items = undefined;
						continue;
					}
					while (object && (prop = parts.shift()) !== undefined) {
						if (typeof object === OBJECT) {
							if ("" + prop === prop) {
								if (prop === "") {
									continue;
								}
								if ((parts.length < depth + 1) && !object.nodeType) {
									// Add observer for each token in path starting at depth, and on to the leaf
									if (!unobserve && (events = $hasData(object) && $._data(object))) {
										events = events.events;
										events = events && events[propertyChangeStr];
										el = events && events.length;
										skip = 0;
										while (el--) { // Skip duplicates
											data = events[el].data;
											if (data
												&& data.ns === initialNs
												&& data.cb._cId === callback._cId
												&& data.cb._inId === callback._inId
												&& (data.prop === prop || data.prop === "*" || data.prop === "**")) {
												if (p = parts.join(".")) {
													data.paths.push(p); // We will skip this binding, but if it is not a leaf binding,
													// need to keep bindings for rest of path, ready for if the object gets swapped.
												}
												skip++;
											}
										}
										if (skip) {
											// Duplicate binding(s) found, so move on
											object = object[prop];
											continue;
										}
									}
									if (prop === "*" || prop === "**") { // "*" => all properties. "**" => all properties and sub-properties (i.e. deep observeAll behavior)
										if (!unobserve && events && events.length) {
											// Remove existing bindings, since they will be duplicates with "*" or "**"
											observeOnOff(ns, "", false, true);
										}
										if (prop === "*") {
											observeOnOff(ns, ""); // observe the object for any property change
											for (p in object) {
												// observing "*": So (in addition to listening to prop change, above) listen to arraychange on props of type array
												if (p !== $expando) {
													bindArray(object, unobserve, undefined, p);
												}
											}
										} else {
											$.observable(initialNs, object)[(unobserve ? "un" : "") + "observeAll"](callback); // observe or unobserve the object for any property change
										}
										break;
									} else if (prop) {
										observeOnOff(ns + ".p_" + prop, parts.join("^")); // By using "^" rather than "." we ensure that deep binding will be used on newly inserted object graphs
									}
								}
								if (allPath) {
									allPath += "." + prop;
								}
								prop = object[prop];
								if (!parts[0]) {
									bindArray(prop, unobserve); // [un]observe(object, "arrayProperty") observes array changes on property of type array
								}
							}
							if ($isFunction(prop)) {
								if (dep = prop.depends) {
									// This is a computed observable. We will observe any declared dependencies.
									// Pass {_ar: ...} objects to switch on allowArray, for depends paths, then return to contextual allowArray value
									innerObserve([object], dependsPaths(dep, object, callback), callback, contextCb, unobserve);
								}
								break;
							}
							object = prop;
						}
					}
				}
			}
			if (cbId) {
				removeCbBindings(cbBindings, cbId);
			}

			// Return the cbBindings to the top-level caller, along with the cbId
			return {cbId: cbId, bnd: cbBindings};
		}

		var initialNs,
			allowArray = this == 1 ? 0 : 1, // If this == 1, this is a call from observeAndBind - doing binding of datalink expressions. We don't bind
			// arrayChange events in this scenario. Instead, {^{for}} and similar do specific arrayChange binding to the tagCtx.args[0] value, in onAfterLink.
			// Note deliberately using this == 1, rather than this === 1 because of IE<10 bug- see jsviews/issues/237
			paths = slice.call(arguments),
			origRoot = paths[0];

		if (origRoot + "" === origRoot && allowArray) {
			initialNs = origRoot; // The first arg is a namespace, since it is a string, and this call is not from observeAndBind
			paths.shift();
			origRoot = paths[0];
		}
		return innerObserve.apply(1, paths);
	};

	$observable = function(ns, data) {
		if (arguments.length === 1) {
			data = ns;
			ns = "";
		}
		return $isArray(data)
			? new ArrayObservable(ns, data)
			: new ObjectObservable(ns, data);
	};

	//========================== Initialize ==========================

	$.observable = $observable;
	$observable._fltr = function(allPath, object, parentObs, filter) {
		if (filter && $isFunction(filter)
			? filter(allPath, object, parentObs)
			: true // TODO Consider supporting filter being a string or strings to do RegEx filtering based on key and/or allPath
		) {
			object = $isFunction(object)
				? object.set && object.call(parentObs[0]) // It is a getter/setter
				: object;
			return typeof object === OBJECT && object;
		}
	};

	$observable.Object = ObjectObservable;
	$observable.Array = ArrayObservable;
	$.observe = $observable.observe = $observe;
	$.unobserve = $observable.unobserve = $unobserve;
	$observable._apply = observe_apply;

	ObjectObservable.prototype = {
		_data: null,

		observeAll: $observeAll,
		unobserveAll: $unobserveAll,

		data: function() {
			return this._data;
		},

		setProperty: function(path, value, nonStrict) {
			path = path || "";
			var key, pair, parts,
				multi = path + "" !== path && !path._is, // Hash of paths, not view object
				self = this,
				object = self._data;

			if (object) {
				if (multi) {
					nonStrict = value;
					if ($isArray(path)) {
						// This is the array format generated by serializeArray. However, this has the problem that it coerces types to string,
						// and does not provide simple support of convertTo and convertFrom functions.
						key = path.length;
						while (key--) {
							pair = path[key];
							self.setProperty(pair.name, pair.value, nonStrict === undefined || nonStrict); //If nonStrict not specified, default to true;
						}
					} else {
						// Object representation where property name is path and property value is value.
						for (key in path) {
							self.setProperty(key, path[key], nonStrict);
						}
					}
				} else if (path !== $expando) {
					// Simple single property case.
					if (path._is) {
						parts = [path];
					} else {
						parts = path.split(/[.^]/);
						while (object && parts.length > 1) {
							object = object[parts.shift()];
						}
					}
					if (object) {
						self._setProperty(object, parts[0], value, nonStrict);
					}
				}
			}
			return self;
		},

		removeProperty: function(path) {
			this.setProperty(path, remove);
			return this;
		},

		_setProperty: function(leaf, path, value, nonStrict) {
			var setter, getter, removeProp,
				property = path ? leaf[path] : leaf;

			if ($isFunction(property)) {
				if (property.set) {
					// Case of property setter/getter - with convention that property is getter and property.set is setter
					leaf = leaf._vw // Case of JsViews 2-way data-linking to an observable context parameter, with a setter.
						// The view will be the this pointer for getter and setter. Note: this is the one scenario where path is "".
					 || leaf;
					getter = property;
					setter = getter.set === true ? getter : getter.set;
					property = getter.call(leaf); // get - only treated as getter if also a setter. Otherwise it is simply a property of type function.
					// See unit tests 'Can observe properties of type function'.
				}
			}

			if ((property !== value || nonStrict && property != value)
				// Optional non-strict equality, since serializeArray, and form-based editors can map numbers to strings, etc.
				// Date objects don't support != comparison. Treat as special case.
				&& (!(property instanceof Date && value instanceof Date) || property > value || property < value)) {
				if (setter) {
					setter.call(leaf, value);   //set
					value = getter.call(leaf);  //get updated value
				} else if (removeProp = value === remove) {
					if (property !== undefined) {
						delete leaf[path];
						value = undefined;
					} else {
						path = undefined; // If value was already undefined, don't trigger handler for removeProp
					}
				} else if (path) {
					leaf[path] = value;
				}
				if (path) {
					this._trigger(leaf, {change: "set", path: path, value: value, oldValue: property, remove: removeProp});
				}
			}
		},

		_trigger: function(target, eventArgs) {
			$(target).triggerHandler(propertyChangeStr + (this._ns ? "." + /^\S+/.exec(this._ns)[0] : ""), eventArgs); // If white-space separated namespaces, use first one only
		}
	};

	ArrayObservable.prototype = {
		_data: null,

		observeAll: $observeAll,
		unobserveAll: $unobserveAll,

		data: function() {
			return this._data;
		},

		insert: function(index, data) {
			var _data = this._data;
			if (arguments.length === 1) {
				data = index;
				index = _data.length;
			}
			index = PARSEINT(index);
			if (index > -1) {
				data = $isArray(data) ? data : [data];
				// data can be a single item (including a null/undefined value) or an array of items.
				// Note the provided items are inserted without being cloned, as direct references to the provided objects

				if (data.length) {
					this._insert(index, data);
				}
			}
			return this;
		},

		_insert: function(index, data) {
			var _data = this._data,
				oldLength = _data.length;
			if (index > oldLength) {
				index = oldLength;
			}
			splice.apply(_data, [index, 0].concat(data));
			this._trigger({change: "insert", index: index, items: data}, oldLength);
		},

		remove: function(index, numToRemove) {
			var items,
				_data = this._data;

			if (index === undefined) {
				index = _data.length - 1;
			}

			index = PARSEINT(index);
			numToRemove = numToRemove ? PARSEINT(numToRemove) : numToRemove === 0 ? 0 : 1; // if null or undefined: remove 1
			if (numToRemove > 0 && index > -1) {
				items = _data.slice(index, index + numToRemove);
				if (numToRemove = items.length) {
					this._remove(index, numToRemove, items);
				}
			}
			return this;
		},

		_remove: function(index, numToRemove, items) {
			var _data = this._data,
				oldLength = _data.length;

			_data.splice(index, numToRemove);
			this._trigger({change: "remove", index: index, items: items}, oldLength);
		},

		move: function(oldIndex, newIndex, numToMove) {
			numToMove = numToMove ? PARSEINT(numToMove) : numToMove === 0 ? 0 : 1; // if null or undefined: move 1
			oldIndex = PARSEINT(oldIndex);
			newIndex = PARSEINT(newIndex);

			if (numToMove > 0 && oldIndex > -1 && newIndex > -1 && oldIndex !== newIndex) {
				this._move(oldIndex, newIndex, numToMove);
			}
			return this;
		},

		_move: function(oldIndex, newIndex, numToMove) {
			var items,
				_data = this._data,
				oldLength = _data.length,
				excess = oldIndex + numToMove - oldLength;
			if (excess > 0) {
				numToMove -= excess;
			}
			if (numToMove) {
				items = _data.splice(oldIndex, numToMove); // remove
				if (newIndex > _data.length) {
					newIndex = _data.length;
				}
				splice.apply(_data, [newIndex, 0].concat(items)); //re-insert
				if (newIndex !== oldIndex) {
					this._trigger({change: "move", oldIndex: oldIndex, index: newIndex, items: items}, oldLength);
				}
			}
		},

		refresh: function(newItems) {
			function insertAdded() {
				if (k) {
					self.insert(j-k, addedItems); // Not found in original array - so insert
					dataLength += k;
					i += k;
					k = 0;
					addedItems = [];
				}
			}

			// For refresh operation we iteratively step through the target array and sort by move/add/remove operations on the source array until they match
			var i, j, k, newItem, num,
				self = this,
				addedItems = [],
				data = self._data,
				oldItems = data.slice(),
				oldLength = data.length,
				dataLength = oldLength,
				newLength = newItems.length;
			self._srt = true; // Flag for sorting during refresh
			for (j=k=0; j<newLength; j++) {
				if ((newItem = newItems[j]) === data[j-k]) {
						insertAdded();
				} else {
					for (i=j-k; i<dataLength; i++) {
						if (newItem === data[i]) {
							break;
						}
					}
					if (i<dataLength) {
						insertAdded();
						num = 0;
						while (num++ < newLength-i && newItems[j+num] === data[i+num]);
						self.move(i, j, num); // Found newItem in original array - so move it to new position
						j += num - 1;
					} else {
						k++;
						addedItems.push(newItem); // Not found in original array - so insert
					}
				}
			}
			insertAdded();
			if (dataLength > j) {
				self.remove(j, dataLength - j);
			}
			self._srt = undefined; // We have finished sort operations during refresh
			self._trigger({change: "refresh", oldItems: oldItems}, oldLength);
			return self;
		},

		_trigger: function(eventArgs, oldLength) {
			var self = this,
				_data = self._data,
				length = _data.length,
				$_data = $([_data]);
			if (self._srt) {
				eventArgs.refresh = true; // We are sorting during refresh
			} else if (length !== oldLength) { // We have finished sort operations during refresh
				$_data.triggerHandler(propertyChangeStr, {change: "set", path: "length", value: length, oldValue: oldLength});
			}
			$_data.triggerHandler(arrayChangeStr + (self._ns ? "." + /^\S+/.exec(self._ns)[0] : ""), eventArgs); // If white-space separated namespaces, use first one only
		}
	};

	$eventSpecial[propertyChangeStr] = $eventSpecial[arrayChangeStr] = {
		// Register a jQuery special 'remove' event, to access the data associated with handlers being removed by jQuery.off().
		// We get data.cb._cId from the event handleObj and get the corresponding cbBindings hash from the cbBindingsStore,
		// then remove this object from that bindings hash - if the object does not have any other handlers associated with the same callback.
		remove: function (handleObj) {
			var cbBindings, found, events, l, data,
				evData = handleObj.data;
			if ((evData) && (evData.off = true, evData = evData.cb)) { //Set off = true as marker for disposed event
				// Get the cb._cId from handleObj.data.cb._cId
				if (cbBindings = cbBindingsStore[evData._cId]) {
					// There were bindings for this callback. If this was the last one, we'll remove it.
					events = $._data(this).events[handleObj.type];
					l = events.length;
					while (l-- && !found) {
						found = (data = events[l].data) && data.cb && data.cb._cId === evData._cId;
						// Found another one with same callback (though may be a different innerCallback)
					}
					if (!found) {
						// This was the last handler for this callback and object, so remove the binding entry
						delete cbBindings[$data(this).obId];
						removeCbBindings(cbBindings, evData._cId);
					}
				}
			}
		}
	};

	$views.map = function(mapDef) {
		function Map(source, options, target, unbound) {
			var changing,
				map = this;
			if (this.src) {
				this.unmap(); // We are re-mapping a new source
			}
			if (typeof source === OBJECT) {
				map.src = source;
				map.tgt = target || map.tgt || [];
				map.options = options || map.options;
				map.update();
				if (!unbound) {
					if (mapDef.obsSrc) {
						$observable(map.src).observeAll(map.obs = function(ev, eventArgs) {
							if (!changing) {
								changing = true;
								mapDef.obsSrc(map, ev, eventArgs);
								changing = undefined;
							}
						}, map.srcFlt);
					}
					if (mapDef.obsTgt) {
						$observable(map.tgt).observeAll(map.obt = function(ev, eventArgs) {
						if (!changing) {
							changing = true;
							mapDef.obsTgt(map, ev, eventArgs);
							changing = undefined;
						}
						}, map.tgtFlt);
					}
				}
			}
		}

		if ($isFunction(mapDef)) {
			// Simple map declared as function
			mapDef = {
				getTgt: mapDef
			};
		}

		if (mapDef.baseMap) {
			mapDef = $.extend({}, mapDef.baseMap, mapDef);
		}

		mapDef.map = function(source, options, target, unbound) {
			return new Map(source, options, target, unbound);
		};

		(Map.prototype = {
			srcFlt: mapDef.srcFlt || shallowFilter, // default to shallowFilter
			tgtFlt: mapDef.tgtFlt || shallowFilter,
			update: function(options) {
				var map = this;
				$observable(map.tgt).refresh(mapDef.getTgt(map.src, map.options = options || map.options));
			},
			unmap: function() {
				var map = this;
				if (map.src) {
					if (map.obs) {
						$observable(map.src).unobserveAll(map.obs, map.srcFlt);
					}
					if (map.obt) {
						$observable(map.tgt).unobserveAll(map.obt, map.tgtFlt);
					}
					map.src = undefined;
				}
			},
			map: Map,
			_def: mapDef
		}).constructor = Map;

		return mapDef;
	};

	$sub.advSet = function() { // refresh advanced settings
		$sub._gccb = this._gccb; // getContextCallback method
		global._jsv = $subSettings.advanced._jsv
			? { // create global _jsv, for accessing views, etc
					cbBindings: cbBindingsStore
				}
			: undefined; // In IE8 cannot do delete global._jsv
	};
	$sub._dp = dependsPaths;
}

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< JsViews >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/* JsViews:
 * Interactive data-driven views using templates and data-linking.
 * See http://www.jsviews.com/#jsviews and http://github.com/BorisMoore/jsviews
 * Copyright 2017, Boris Moore
 * Released under the MIT License.
 */

//========================== Top-level vars ==========================

$viewsSettings = $views.settings;
$subSettings = $sub.settings;
$subSettingsAdvanced = $subSettings.advanced;
$converters = $views.converters;
$.templates = $templates = $views.templates;
$tags = $views.tags;
rFirstElem = /<(?!script)(\w+)[>\s]/;

if ($.link) { return $; } // JsViews is already loaded

$subSettings.trigger = true;
var activeBody, rTagDatalink, $view, $viewsLinkAttr, linkViewsSel, wrapMap, viewStore, oldAdvSet, useInput,
	jsvAttrStr = "data-jsv",
	elementChangeStr = "change.jsv",
	onBeforeChangeStr = "onBeforeChange",
	onAfterChangeStr = "onAfterChange",
	onAfterCreateStr = "onAfterCreate",
	CHECKED = "checked",
	CHECKBOX = "checkbox",
	RADIO = "radio",
	NONE = "none",
	VALUE = "value",
	SCRIPT = "SCRIPT",
	TRUE = "true",
	closeScript = '"></script>',
	openScript = '<script type="jsv',
	deferAttr = jsvAttrStr + "-df",
	bindElsSel = "script,[" + jsvAttrStr + "]",
	fnSetters = {
		value: "val",
		input: "val",
		html: HTML,
		text: "text"
	},
	valueBinding = {from: VALUE, to: VALUE},
	isCleanCall = 0,
	oldCleanData = $.cleanData,
	oldJsvDelimiters = $viewsSettings.delimiters,
	safeFragment = document.createDocumentFragment(),
	qsa = document.querySelector,

	// elContent maps tagNames which have only element content, so may not support script nodes.
	elContent = {ol: 1, ul: 1, table: 1, tbody: 1, thead: 1, tfoot: 1, tr: 1, colgroup: 1, dl: 1, select: 1, optgroup: 1, svg: 1, svg_ns: 1},
	badParent = {tr: "table"},
	voidElems = {br: 1, img: 1, input: 1, hr: 1, area: 1, base: 1, col: 1, link: 1, meta: 1,
		command: 1, embed: 1, keygen: 1, param: 1, source: 1, track: 1, wbr: 1},
	displayStyles = {},
	bindingStore = {},
	bindingKey = 1,
	rViewPath = /^#(view\.?)?/,
	rConvertMarkers = /((\/>)|<\/(\w+)>|)(\s*)([#\/]\d+(?:_|(\^)))`(\s*)(<\w+(?=[\s\/>]))?|\s*(?:(<\w+(?=[\s\/>]))|<\/(\w+)>(\s*)|(\/>)\s*|(>)|$)/g,
	rOpenViewMarkers = /(#)()(\d+)(_)/g,
	rOpenMarkers = /(#)()(\d+)([_^])/g,
	rViewMarkers = /(?:(#)|(\/))(\d+)(_)/g,
	rOpenTagMarkers = /(#)()(\d+)(\^)/g,
	rMarkerTokens = /(?:(#)|(\/))(\d+)([_^])([-+@\d]+)?/g,
	rSplitBindings = /&(\d+)\+?/g,
	getComputedStyle = global.getComputedStyle;

$observable = $.observable;

if (!$observable) {
	// JsObservable is not loaded.
	throw requiresStr + "JsObservable"; // jquery.observable.js must be loaded before JsViews
}

$observe = $observable.observe;

//========================== Top-level functions ==========================

//===============
// Event handlers
//===============

function updateValues(sourceValues, tagElse, bindId, ev) {
// Observably update data values targeted by bindTo
// Called when linkedElem changes: called as updateValues(sourceValues, tagElse, bindId, ev) - this: undefined
// Called directly as tag.updateValues(val1, val2, val3, ...) - this: tag
	var linkCtx, cvtBack, cnvtName, target, view, binding, sourceValue, origVals, sourceElem, sourceEl,
		oldLinkCtx, tos, to, tcpTag, exprOb, contextCb, l, tag;

	if (bindId && bindId._tgId) {
		tag = bindId;
		bindId = tag._tgId;
	}
	if (binding = bindingStore[bindId]) {
		if (tos = binding.to) {
			tos = tos[tagElse||0];
			// The binding has a 'to' field, which is of the form [tosForElse0, tosForElse1, ...]
			// where tosForElseX is of the form [[[targetObject, toPath], [targetObject, toPath], ...], cvtBack]
			linkCtx = binding.linkCtx;
			sourceElem = linkCtx.elem;
			view = linkCtx.view;
			tag = linkCtx.tag;
			if (!tag && tos._cxp) {
				tag = tos._cxp.path !== _ocp && tos._cxp.tag;
				sourceValue = sourceValues[0];
				sourceValues = [];
				sourceValues[tos._cxp.ind] = sourceValue;
			}

			if (tag) {
				tag._.chg = 1; // Set 'changing' marker to prevent tag update from updating itself
				if (cnvtName = tag.convertBack) {
					if ($isFunction(cnvtName)) {
						cvtBack = cnvtName;
					} else {
						cvtBack = view.getRsc("converters", cnvtName);
					}
				}
			}

			if (sourceElem.nodeName === "SELECT") {
				// data-link <select> to string or (multiselect) array of strings
				if (sourceElem.multiple && sourceValues[0] === null) {
					// Case where sourceValues was undefined, and set to [null] by $source[setter]() above
					sourceValues = [[]];
				}
				sourceElem._jsvSel = sourceValues;
			}
			origVals = sourceValues;
			if (cvtBack) {
				sourceValues = cvtBack.apply(tag, sourceValues);
				if (sourceValues === undefined) {
					tos = []; // If cvtBack does not return anything, do not update target.
					//(But cvtBack may be designed to modify observable values from code as a side effect)
				}
				sourceValues = $isArray(sourceValues) ? sourceValues : [sourceValues];
				// If there are multiple tos (e.g. multiple args on data-linked input) then cvtBack can update not only
				// the first arg, but all of them by returning an array.
			}

			// Set linkCtx on view, dynamically, just during this handler call
			oldLinkCtx = view.linkCtx;
			view.linkCtx = linkCtx;
			l = tos.length;
			while (l--) {
				if (to = tos[l]) {
					to = to + "" === to ? [linkCtx.data, to] : to; // [object, path]
					target = to[0];
					tcpTag = to.tag; // If this is a tag contextual parameter - the owner tag
					sourceValue = (to[1] === _ocp
						? origVals  // If to target is for tag contextual parameter set to static expression (or uninitialized) - we are
						// binding to tag.ctx.foo._ocp - and we use original values, without applying cvtBack converter
						: sourceValues // Otherwise use the converted value
					)[l];
					if (sourceValue !== undefined && (!tag || !tag.onBeforeUpdateVal || tag.onBeforeUpdateVal(ev, {
							change: "change",
							data: target,
							path: to[1],
							index: l,
							tagElse: tagElse,
							value: sourceValue
						}) !== false)) {
						if (tcpTag) { // We are modifying a tag contextual parameter ~foo (e.g. from within block) so update 'owner' tag: tcpTag
							tcpTag.updateValue(sourceValue, to.ind, to.tagElse, undefined, ev);
							if (tcpTag.setValue) {
								tcpTag.setValue(sourceValue, to.ind, to.tagElse);
							}
						} else if (sourceValue !== undefined && target) {
							if (tcpTag = ev && (sourceEl = ev.target)._jsvInd === l && sourceEl._jsvLkEl) {
								// The source is a tag linkedElem (linkedElement: [..., "elemSelector", ...], which is updating
								tcpTag.setValue(origVals[l], l, sourceEl._jsvElse);
							}
							if (target._cpfn) {
								contextCb = linkCtx._ctxCb; // This is the exprOb for a computed property
								exprOb = target;
								target = linkCtx.data;
								if (exprOb._cpCtx) { // Computed value for a contextual parameter
									target = exprOb.data; // The data for the contextual view (where contextual param expression evaluated/assigned)
									contextCb = exprOb._cpCtx; // Context callback for contextual view
								}
								while (exprOb && exprOb.sb) { // Step through chained computed values to leaf one...
									target = contextCb(exprOb, target);
									exprOb = exprOb.sb;
								}
							}
							$observable(target).setProperty(to[1], sourceValue); // 2way binding change event - observably updating bound object
						}
					}
				}
			}
			view.linkCtx = oldLinkCtx;
		}
	}
	if (tag) {
		tag._.chg = undefined; // Clear marker
		return tag;
	}
}

function onElemChange(ev) {
	var bindId, val,
		source = ev.target,
		fromAttr = defaultAttr(source),
		setter = fnSetters[fromAttr];

	if (!source._jsvTr || ev.delegateTarget !== activeBody && ev.target.type !== "number" || ev.type === "input") {
		// If this is an element using trigger, ignore event delegated (bubbled) to activeBody
		val = $isFunction(fromAttr)
			? fromAttr(source)
			: (source = $(source), setter
				? source[setter]()
				: source.attr(fromAttr));

		ev.target._jsvChg = 1; // // Set 'changing' marker to prevent linkedElem change event triggering its own refresh
		rSplitBindings.lastIndex = 0; // Ensure starts at zero
		while (bindId = rSplitBindings.exec(ev.target._jsvBnd)) {
			// _jsvBnd is a string with the syntax: "&bindingId1&bindingId2"
			updateValue(val, source._jsvInd, source._jsvElse, bindId[1], ev);
		}
		ev.target._jsvChg = undefined; // Clear marker
	}
}

function onDataLinkedTagChange(ev, eventArgs) {
	// Update or initial rendering of any tag (including {{:}}) whether inline or data-linked element.
	var attr, sourceValue, noUpdate, forceUpdate, hasError, onError, bindEarly,
		linkCtx = this,
		linkFn = linkCtx.fn,
		tag = linkCtx.tag,
		source = linkCtx.data,
		target = linkCtx.elem,
		cvt = linkCtx.convert,
		parentElem = target.parentNode,
		view = linkCtx.view,
		oldLinkCtx = view.linkCtx,
		onEvent = eventArgs && changeHandler(view, onBeforeChangeStr, tag);

	// Set linkCtx on view, dynamically, just during this handler call
	view.linkCtx = linkCtx;
	if (parentElem && (!onEvent || onEvent.call(tag || linkCtx, ev, eventArgs) !== false)
			// If data changed, the ev.data is set to be the path. Use that to filter the handler action...
			&& (!eventArgs || ev.data.prop === "*" || ev.data.prop === eventArgs.path)) {

		if (eventArgs) {
			linkCtx.eventArgs = eventArgs;
		}
		if (eventArgs || linkCtx._toLk) {
			// If eventArgs are defined, this is a data update
			// Otherwise this is the initial data-link rendering call. Bind on this the first time it gets called
			linkCtx._toLk = 0; // Remove flag to skip unneccessary rebinding next time
			if (linkFn._er) {
				// data-link="exprUsingTagOrCvt with onerror=..." - e.g. {tag ... {cvt:... {:... convert='cvt'
				try {
					sourceValue = linkFn(source, view, $sub); // Compiled link expression
					// For data-link="{:xxx}" with no cvt or cvtBk returns value. Otherwise returns tagCtxs
				} catch (e) {
					hasError = linkFn._er;
					onError = onRenderError(e,view,(new Function("data,view", "return " + hasError + ";"))(source, view));
					sourceValue = [{props: {}, args: [onError], tag: tag}];
				}
			} else {
				sourceValue = linkFn(source, view, $sub); // Compiled link expression
				// For data-link="{:xxx}" with no cvt or cvtBk returns value. Otherwise returns tagCtxs
			}
			// Compiled link expression for linkTag: return value for data-link="{:xxx}" with no cvt or cvtBk, otherwise tagCtx or tagCtxs
			attr = tag && tag.attr || linkCtx.attr || defaultAttr(target, true, cvt !== undefined);
			if (attr === VALUE && (tag && tag.parentElem || linkCtx.elem).type === CHECKBOX) {
				attr = CHECKED;
			}
			// For {{: ...}} without a convert or convertBack, (tag and linkFn._tag undefined) we already have the sourceValue, and we are done
			if (tag) {
				// Existing tag instance
				forceUpdate = hasError || tag._er;
				// If the new tagCtxs hasError or the previous tagCtxs had error, then force update
				sourceValue = sourceValue[0] ? sourceValue : [sourceValue];

				// Tag will update unless tag.onUpdate is false or is a function which returns false
				noUpdate = !forceUpdate && (tag.onUpdate === false || eventArgs && $isFunction(tag.onUpdate) && tag.onUpdate(ev, eventArgs, sourceValue) === false);

				mergeCtxs(tag, sourceValue, forceUpdate); // Merge new tagCtxs (in sourceValue var) with current tagCtxs on tag instance

				if (tag._.chg && (attr === HTML || attr === VALUE) || noUpdate || attr === NONE) {
					// This is an update coming from the tag itself (linkedElem change), or else onUpdate returned false, or attr === "none"
					callAfterLink(tag, ev, eventArgs);
					if (!tag._.chg) {
						// onUpdate returned false, or attr === "none" - so don't refresh the tag: we just use the new tagCtxs merged
						// from the sourceValue (which may optionally have been modifed in onUpdate()...) and then bind, and we are done
						observeAndBind(linkCtx, source, target);
					}
					view.linkCtx = oldLinkCtx;
					if (eventArgs && (onEvent = changeHandler(view, onAfterChangeStr, tag))) {
						onEvent.call(tag || linkCtx, ev, eventArgs);
					}
					return;
				}

				if (tag.onUnbind) {
					tag.onUnbind(tag.tagCtx, linkCtx, tag.ctx, ev, eventArgs);
				}

				sourceValue = tag.tagName === ":" // Call convertVal if it is a {{cvt:...}} - otherwise call renderTag
					? $sub._cnvt(tag.convert, view, sourceValue[0]) // convertVal()    // convertVal(converter, view, tagCtx, onError)
					: $sub._tag(tag, view, view.tmpl, sourceValue, true, onError); // renderTag(tagName, parentView, tmpl, tagCtxs, isUpdate, onError)
			} else if (linkFn._tag) {
				// For {{: ...}} with either cvt or cvtBack we call convertVal to get the sourceValue and instantiate the tag
				// If cvt is undefined then this is a tag, and we call renderTag to get the rendered content and instantiate the tag
				cvt = cvt === "" ? TRUE : cvt; // If there is a cvtBack but no cvt, set cvt to "true"
				sourceValue = cvt // Call convertVal if it is a {{cvt:...}} - otherwise call renderTag
					? $sub._cnvt(cvt, view, sourceValue[0] || sourceValue)                 // convertVal(converter, view, tagCtx, onError)
					: $sub._tag(linkFn._tag, view, view.tmpl, sourceValue, true, onError); // renderTag(tagName, parentView, tmpl, tagCtxs, isUpdate, onError)

				addLinkMethods(tag = linkCtx.tag); // In both convertVal and renderTag we have instantiated a tag
				attr = linkCtx.attr || attr; // linkCtx.attr may have been set to tag.attr during tag instantiation in renderTag
			}
			if (bindEarly = tag && !tag.inline && tag.template) {
				// Data-linked tags with templated contents need to be data-linked before their contents, so that observable updates
				// will trigger the parent tags before the child tags.
				observeAndBind(linkCtx, source, target);
			}
			updateContent(sourceValue, linkCtx, attr, tag);
			linkCtx._noUpd = 0; // For data-link="^{...}" remove _noUpd flag so updates on subsequent calls

			if (tag) {
				tag._er = hasError;
				callAfterLink(tag, ev, eventArgs);
			}
		}

		if (!bindEarly) {
			observeAndBind(linkCtx, source, target);
		}

		if (eventArgs && (onEvent = changeHandler(view, onAfterChangeStr, tag))) {
			onEvent.call(tag || linkCtx, ev, eventArgs);
		}
		// Remove dynamically added linkCtx from view
		view.linkCtx = oldLinkCtx;
	}
}

function setDefer(elem, value) {
	elem._df = value; // Use both an expando and an attribute to track deferred tokens. Attribute is needed for querySelectorAll for getViewInfos (childTags)
	elem[(value ? "set" : "remove") + "Attribute"](deferAttr, "");
}

function updateContent(sourceValue, linkCtx, attr, tag) {
	// When called for a tag, either in tag.refresh() or onDataLinkedTagChange(), returns tag
	// When called (in onDataLinkedTagChange) for target HTML returns true
	// When called (in onDataLinkedTagChange) for other targets returns boolean for "changed"
	var setter, prevNode, nextNode, late, nodesToRemove, useProp, tokens, id, openIndex, closeIndex, testElem, nodeName, cStyle, jsvSel,
		renders = attr !== NONE && sourceValue !== undefined && !linkCtx._noUpd && !((attr === VALUE || attr === HTML) && (tag ? tag._.chg : linkCtx.elem._jsvChg)),
		// For data-link="^{...}", don't update the first time (no initial render) - e.g. to leave server rendered values.
		source = linkCtx.data,
		target = tag && tag.parentElem || linkCtx.elem,
		targetParent = target.parentNode,
		$target = $(target),
		view = linkCtx.view,
		targetVal = linkCtx._val,
		oldLinkCtx = view.linkCtx,
		change = tag;

	if (tag) {
		// Initialize the tag with element references
		tag._.unlinked = true; // Set to unlinked, so initialization is triggered after re-rendering, e.g. for setting linkedElem, and calling onBind
		tag.parentElem = tag.parentElem || (linkCtx.expr || tag._elCnt) ? target : targetParent;
		prevNode = tag._prv;
		nextNode = tag._nxt;
	}
	if (!renders) {
		linkCtx._val = sourceValue;
		return;
	}

	if (attr === "visible") {
		attr = "css-display";
	}
	if (/^css-/.test(attr)) {
		if (linkCtx.attr === "visible") {
			// Get the current display style
			cStyle = (target.currentStyle || getComputedStyle.call(global, target, "")).display;

			if (sourceValue) {
				// We are showing the element.
				// Get the cached 'visible' display value from the -jsvd expando
				sourceValue = target._jsvd
					// Or, if not yet cached, get the current display value
					|| cStyle;
				if (sourceValue === NONE && !(sourceValue = displayStyles[nodeName = target.nodeName])) {
					// Currently display value is 'none', and the 'visible' style has not been cached.
					// We create an element to find the correct 'visible' display style for this nodeName
					testElem = document.createElement(nodeName);
					document.body.appendChild(testElem);

					// Get the default style for this HTML tag to use as 'visible' style
					sourceValue
						// and cache it as a hash against nodeName
						= displayStyles[nodeName]
						= (testElem.currentStyle || getComputedStyle.call(global, testElem, "")).display;
					document.body.removeChild(testElem);
				}
			} else {
				// We are hiding the element.
				// Cache the current display value as 'visible' style, on _jsvd expando, for when we show the element again
				target._jsvd = cStyle;
				sourceValue = NONE; // Hide the element
			}
		}
		if (change = change || targetVal !== sourceValue) {
			$.style(target, attr.slice(4), sourceValue);
		}
	} else if (attr !== "link") { // attr === "link" is for tag controls which do data binding but have no rendered output or target
		if (/^data-/.test(attr)) {
			$.data(target, attr.slice(5), sourceValue); // Support for binding to data attributes: data-foo{:expr}: data-foo attribute will be
			// expr.toString(), but $.data(element, "foo") and $(element).data("foo") will actually return value of expr, even if of type object
		} else if (/^prop-/.test(attr)) {
			useProp = true;
			attr = attr.slice(5);
		} else if (attr === CHECKED) {
			useProp = true;
			sourceValue = sourceValue && sourceValue !== "false";
			// The string value "false" can occur with data-link="checked{attr:expr}" - as a result of attr, and hence using convertVal()
			// We will set the "checked" property
			// We will compare this with the current value
		} else if (attr === RADIO) {
			// This is a special binding attribute for radio buttons, which corresponds to the default 'to' binding.
			// This allows binding both to value (for each input) and to the default checked radio button (for each input in named group,
			// e.g. binding to parent data).
			// Place value binding first: <input type="radio" data-link="value{:name} {:#get('data').data.currency:} " .../>
			// or (allowing any order for the binding expressions):
			// <input type="radio" value="{{:name}}" data-link="{:#get('data').data.currency:} value^{:name}" .../>
			useProp = true;
			attr = CHECKED;
			sourceValue = target.value === sourceValue;
			// If the data value corresponds to the value attribute of this radio button input, set the checked property to true
			// Otherwise set the checked property to false
		} else if (attr === "selected" || attr === "disabled" || attr === "multiple" || attr === "readonly") {
			sourceValue = (sourceValue && sourceValue !== "false") ? attr : null;
			// Use attr, not prop, so when the options (for example) are changed dynamically, but include the previously selected value,
			// they will still be selected after the change
		} else if (attr === VALUE && target.nodeName === "SELECT") {
			target._jsvSel = $isArray(sourceValue)
				? sourceValue
				: "" + sourceValue; // If not array, coerce to string
		}

		if (setter = fnSetters[attr]) {
			if (attr === HTML) {
				// Set linkCtx on view, dynamically, just during this handler call
				view.linkCtx = linkCtx;
				if (tag && tag.inline) {
					nodesToRemove = tag.nodes(true);
					if (tag._elCnt) {
						if (prevNode && prevNode !== nextNode) {
							// This prevNode will be removed from the DOM, so transfer the view tokens on prevNode to nextNode of this 'viewToRefresh'
							transferViewTokens(prevNode, nextNode, target, tag._tgId, "^", true);
						} else if (tokens = target._df) { // This occurs when there is no nextNode, and so the target._df may include tokens referencing
							// view and tag bindings contained within the open and close tokens of the updated tag control. They need to be processed (disposed)
							id = tag._tgId + "^";
							openIndex = tokens.indexOf("#" + id) + 1;
							closeIndex = tokens.indexOf("/" + id);

							if (openIndex && closeIndex > 0) {
								openIndex += id.length;
								if (closeIndex > openIndex) {
									setDefer(target, tokens.slice(0, openIndex) + tokens.slice(closeIndex));
									disposeTokens(tokens.slice(openIndex, closeIndex));
								}
							}
						}
						prevNode = prevNode
							? prevNode.previousSibling
							: nextNode
								? nextNode.previousSibling
								: target.lastChild;
					}
					// Remove HTML nodes
					$(nodesToRemove).remove(); // Note if !tag._elCnt removing the nodesToRemove will process and dispose view and tag bindings contained within the updated tag control

					// Insert and link new content
					late = view.link(view.data, target, prevNode, nextNode, sourceValue, tag && {tag: tag._tgId});
				} else {
					// data-linked value targeting innerHTML: data-link="html{:expr}" or contenteditable="true"
					renders = renders && targetVal !== sourceValue;
					if (renders) {
						$target.empty();
						late = view.link(source, target, prevNode, nextNode, sourceValue, tag && {tag: tag._tgId});
					}
				}
				// Remove dynamically added linkCtx and ctx from view
				view.linkCtx = oldLinkCtx;
			} else {
				if (change = change || targetVal !== sourceValue) {
					if (attr === "text" && target.children && !target.children[0]) {
						// This code is faster then $target.text()
						if (target.textContent !== undefined) {
							target.textContent = sourceValue;
						} else {
							target.innerText = sourceValue === null ? "" : sourceValue;
						}
					} else {
						$target[setter](sourceValue);
					}
				}
				if ((jsvSel = targetParent._jsvSel)
					// Setting value of <option> element
					&& (attr === VALUE || !$target.attr(VALUE))) { // Setting value attribute, or setting textContent if attribute is null
					// Set/unselect selection based on value set on parent <select>. Works for multiselect too
					target.selected = $.inArray("" + sourceValue, $isArray(jsvSel) ? jsvSel : [jsvSel]) > -1;
				}
			}
		} else if (change = change || targetVal !== sourceValue) {
			// Setting an attribute to undefined should remove the attribute
			$target[useProp ? "prop" : "attr"](attr, sourceValue === undefined && !useProp ? null : sourceValue);
		}
	}
	linkCtx._val = sourceValue;
	lateLink(late); // Do any deferred linking (lateRender)
	return change;
}

function arrayChangeHandler(ev, eventArgs) {
	var self = this,
		onBeforeChange = changeHandler(self, onBeforeChangeStr, self.tag),
		onAfterChange = changeHandler(self, onAfterChangeStr, self.tag);
	if (!onBeforeChange || onBeforeChange.call(self, ev, eventArgs) !== false) {
		if (eventArgs) {
			// This is an observable action (not a trigger/handler call from pushValues, or similar, for which eventArgs will be null)
			var action = eventArgs.change,
				index = eventArgs.index,
				items = eventArgs.items;
			self._.srt = eventArgs.refresh; // true if part of a 'sort' on refresh
			switch (action) {
				case "insert":
					self.addViews(index, items);
					break;
				case "remove":
					self.removeViews(index, items.length);
					break;
				case "move":
						self.moveViews(eventArgs.oldIndex, index, items.length);
					break;
				case "refresh":
					self._.srt = undefined;
					self.fixIndex(0);
					// Other cases: (e.g.undefined, for setProperty on observable object) etc. do nothing
			}
		}
		if (onAfterChange) {
			onAfterChange.call(self, ev, eventArgs);
		}
	}
}

//=============================
// Utilities for event handlers
//=============================

function setArrayChangeLink(view) {
	// Add/remove arrayChange handler on view
	var handler, arrayBinding,
		type = view.type, // undefined if view is being removed
		data = view.data,
		bound = view._.bnd; // true for top-level link() or data-link="{for}", or the for tag instance for {^{for}} (or for any custom tag that has an onArrayChange handler)

	if (!view._.useKey && bound) {
		// This is an array view. (view._.useKey not defined => data is array), and is data-bound to collection change events

		if (arrayBinding = view._.bndArr) {
			// First remove the current handler if there is one
			$([arrayBinding[1]]).off(arrayChangeStr, arrayBinding[0]);
			view._.bndArr = undefined;
		}
		if (bound !== !!bound) {
			// bound is not a boolean, so it is the data-linked tag that 'owns' this array binding - e.g. {^{for...}}
			if (type) {
				bound._.arrVws[view._.id] = view;
			} else {
				delete bound._.arrVws[view._.id]; // if view.type is undefined, view is being removed
			}
		} else if (type && data) {
			// If this view is not being removed, but the data array has been replaced, then bind to the new data array
			handler = function(ev) {
				if (!(ev.data && ev.data.off)) {
					// Skip if !!ev.data.off: - a handler that has already been removed (maybe was on handler collection at call time - then removed by another handler)
					// If view.type is undefined, do nothing. (Corresponds to case where there is another handler on the same data whose
					// effect was to remove this view, and which happened to precede this event in the trigger sequence. So although this
					// event has been removed now, it is still called since already on the trigger sequence)
					arrayChangeHandler.apply(view, arguments);
				}
			};
			$([data]).on(arrayChangeStr, handler);
			view._.bndArr = [handler, data];
		}
	}
}

function defaultAttr(elem, to, linkGetVal) {
	// to: true - default attribute for setting data value on HTML element; false: default attribute for getting value from HTML element
	// Merge in the default attribute bindings for this target element
	var nodeName = elem.nodeName.toLowerCase(),
		attr =
			$subSettingsAdvanced._fe[nodeName] // get form element binding settings for input textarea select or optgroup
			|| elem.contentEditable === TRUE && {to: HTML, from: HTML}; // Or if contentEditable set to "true" set attr to "html"
	return attr
		? (to
			? ((nodeName === "input" && elem.type === RADIO) // For radio buttons, bind from value, but bind to 'radio' - special value.
				? RADIO
				: attr.to)
			: attr.from)
		: to
			? linkGetVal ? "text" : HTML // Default innerText for data-link="a.b.c" or data-link="{:a.b.c}" (with or without converters)- otherwise innerHTML
			: ""; // Default is not to bind from
}

//==============================
// Rendering and DOM insertion
//==============================

function renderAndLink(view, index, tmpl, views, data, context, refresh) {
	var html, linkToNode, prevView, nodesToRemove, bindId,
		parentNode = view.parentElem,
		prevNode = view._prv,
		nextNode = view._nxt,
		elCnt = view._elCnt;

	if (prevNode && prevNode.parentNode !== parentNode) {
		error("Missing parentNode");
		// Abandon, since node has already been removed, or wrapper element has been inserted between prevNode and parentNode
	}

	if (refresh) {
		nodesToRemove = view.nodes();
		if (elCnt && prevNode && prevNode !== nextNode) {
			// This prevNode will be removed from the DOM, so transfer the view tokens on prevNode to nextNode of this 'viewToRefresh'
			transferViewTokens(prevNode, nextNode, parentNode, view._.id, "_", true);
		}
		// Remove child views
		view.removeViews(undefined, undefined, true);
		linkToNode = nextNode;

		if (elCnt) {
			prevNode = prevNode
				? prevNode.previousSibling
				: nextNode
					? nextNode.previousSibling
					: parentNode.lastChild;
		}

		// Remove HTML nodes
		$(nodesToRemove).remove();

		for (bindId in view._.bnds) {
			// The view bindings may have already been removed above in: $(nodesToRemove).remove();
			// If not, remove them here:
			removeViewBinding(bindId);
		}
	} else {
		// addViews. Only called if view is of type "array"
		if (index) {
			// index is a number, so indexed view in view array
			prevView = views[index - 1];
			if (!prevView) {
				return false; // If subview for provided index does not exist, do nothing
			}
			prevNode = prevView._nxt;
		}
		if (elCnt) {
			linkToNode = prevNode;
			prevNode = linkToNode
				? linkToNode.previousSibling         // There is a linkToNode, so insert after previousSibling, or at the beginning
				: parentNode.lastChild;              // If no prevView and no prevNode, index is 0 and the container is empty,
				// so prevNode = linkToNode = null. But if prevView._nxt is null then we set prevNode to parentNode.lastChild
				// (which must be before the prevView) so we insert after that node - and only link the inserted nodes
		} else {
			linkToNode = prevNode.nextSibling;
		}
	}
	html = tmpl.render(data, context, view._.useKey && refresh, view, refresh || index, true);
	// Pass in view._.useKey as test for noIteration (which corresponds to when self._.useKey > 0 and self.data is an array)

	// Link the new HTML nodes to the data
	lateLink(view.link(data, parentNode, prevNode, linkToNode, html, prevView));
}

//=====================
// addBindingMarkers
//=====================

function addBindingMarkers(value, view, tag) {
	// Insert binding markers into the rendered template output, which will get converted to appropriate
	// data-jsv attributes (element-only content) or script marker nodes (phrasing or flow content), in convertMarkers,
	// within view.link, prior to inserting into the DOM. Linking will then bind based on these markers in the DOM.
	// Added view markers: #m_...VIEW.../m_
	// Added tag markers: #m^...TAG..../m^
	var id, end;
	if (tag) {
		// This is a binding marker for a data-linked tag {^{...}}
		end = "^`";
		addLinkMethods(tag); // This is {^{>...}} or {^{tag ...}}, {{cvt:...} or {^{:...}}, and tag was defined in convertVal or renderTag
		id = tag._tgId;
		if (!id) {
			bindingStore[id = bindingKey++] = tag; // Store the tag temporarily, ready for databinding.
			// During linking, in addDataBinding, the tag will be attached to the linkCtx,
			// and then in observeAndBind, bindingStore[bindId] will be replaced by binding info.
			tag._tgId = "" + id;
		}
	} else {
		// This is a binding marker for a view
		// Add the view to the store of current linked views
		end = "_`";
		viewStore[id = view._.id] = view;
	}
	// Example: "#23^TheValue/23^"
	return "#" + id + end
		+ (value != undefined ? value : "") // For {^{:name}} this gives the equivalent semantics to compiled
											// (v=data.name)!=null?v:""; used in {{:name}} or data-link="name"
		+ "/" + id + end;
}

//==============================
// Data-linking and data binding
//==============================

//---------------
// observeAndBind
//---------------

function observeAndBind(linkCtx, source, target) {
	var binding, l, k, linkedElem, exprFnDeps, exprOb, prop, propDeps, depends, tagDepends, bindId, linkedElems,
		tag = linkCtx.tag,
		cvtBk = linkCtx.convertBack,
		handler = linkCtx._hdl;
	source = typeof source === "object" && source; // If not an object set to false

	if (tag) {
		// Use the 'depends' paths set on linkCtx.tag, or on the converter
		// - which may have been set on declaration or in events: init, render, onAfterLink etc.
		if (depends = tag.convert) {
			depends = depends === TRUE ? tag.tagCtx.props.convert : depends;
			depends = linkCtx.view.getRsc("converters", depends) || depends;
			depends = depends && depends.depends;
			depends = depends && $sub._dp(depends, source, handler); // dependsPaths
		}
		if (tagDepends = tag.depends) {
			tagDepends = $sub._dp(tagDepends, tag, handler);
			depends = depends ? depends.concat(tagDepends) : tagDepends;
		}
		linkedElems = tag.linkedElems;
	}
	depends = depends || [];
	if (!linkCtx._depends || ("" + linkCtx._depends !== "" + depends)) {
		// Only bind the first time, or if the new depends (toString) has changed from when last bound

		exprFnDeps = linkCtx.fn.deps.slice(); // Make a copy of the dependency paths for the compiled linkCtx expression - to pass to observe(). In getInnerCb(),
		// (and whenever the object is updated, in innerCb), we will set exprOb.ob to the current object returned by that computed expression, for this view.

		if (linkCtx._depends) {
			bindId = linkCtx._depends.bdId;
			// Unobserve previous binding
			$observable._apply(1, [source], exprFnDeps, linkCtx._depends, handler, linkCtx._ctxCb, true);
		}

		if (tag && tag.boundProps) {
			// Add dependency paths for declared boundProps (so no need to write ^myprop=... to get binding) and for linkedProp too if there is one
			l = tag.boundProps.length;
			while (l--) {
				prop = tag.boundProps[l];
				k = tag._.bnd.paths.length;
				while (k--) {
					propDeps = tag._.bnd.paths[k][prop];
					if (propDeps && propDeps.skp) { // Not already a bound prop ^prop=expression;
						exprFnDeps = exprFnDeps.concat(propDeps); // Add dependencies for this prop expression
					}
				}
			}
		}

		l = exprFnDeps.length;
		while (l--) {
			exprOb = exprFnDeps[l];
			if (exprOb._cpfn) {
				// This path is an 'exprOb', corresponding to a computed property returning an object. We replace the exprOb by
				// a view-binding-specific exprOb instance. The current object will be stored as exprOb.ob.
				exprFnDeps[l] = $extend({}, exprOb);
			}
		}
		binding = $observable._apply(
			1,
			[source],
			exprFnDeps, // flatten the paths - to gather all the dependencies across args and bound params
			depends,
			handler,
			linkCtx._ctxCb);
		// The binding returned by $observe has a bnd array with the source objects of the individual bindings.

		if (!bindId) {
			bindId = linkCtx._bndId || "" + bindingKey++;
			linkCtx._bndId = undefined;
			// Store the binding key on the view and on the element, for disposal when the view is removed
			target._jsvBnd = (target._jsvBnd || "") + "&" + bindId;
			linkCtx.view._.bnds[bindId] = bindId;
		}

		binding.elem = target; // The target of all the individual bindings
		binding.linkCtx = linkCtx;
		binding._tgId = bindId;

		depends.bdId = bindId;
		linkCtx._depends = depends;
		// Store the binding.
		bindingStore[bindId] = binding; // Note: If this corresponds to a data-linked tag, we are replacing the
		// temporarily stored tag by the stored binding. The tag will now be at binding.linkCtx.tag

		if (linkedElems || cvtBk !== undefined || tag && (tag.bindTo || tag.linkedElement || tag.linkedCtxParam)) {
			defineBindToDataTargets(binding, tag, cvtBk);
		}
		if (linkedElems) {
			l = linkedElems.length;
			while (l--) {
				linkedElem = linkedElems[l];
				k = linkedElem && linkedElem.length;
				while (k--) {
					linkedElem[k]._jsvLkEl = tag;
					bindLinkedElChange(tag, linkedElem[k]);
					linkedElem[k]._jsvBnd = "&" + bindId + "+"; // Add a "+" for cloned binding - so removing
					// elems with cloned bindings will not remove the 'parent' binding from the bindingStore.
				}
			}
		} else if (cvtBk !== undefined) {
			bindLinkedElChange(tag, target);
		}

		if (tag) {
			if (!tag.flow && !tag.inline) {
				target.setAttribute(jsvAttrStr, (target.getAttribute(jsvAttrStr)||"") + "#" + bindId + "^/" + bindId + "^");
				tag._tgId = "" + bindId;
			}
		}
	}
}

//-------
// $.link
//-------

function lateLink(late) {
	// Do any deferred linking (lateRender)
	var lnkCtx;
	if (late) {
		while (lnkCtx = late.pop()) {
			lnkCtx._hdl();
		}
	}
}

function tmplLink(to, from, context, noIteration, parentView, prevNode, nextNode) {
	return $link(this, to, from, context, noIteration, parentView, prevNode, nextNode);
}

function $link(tmplOrLinkExpr, to, from, context, noIteration, parentView, prevNode, nextNode) {
	// When linking from a template, prevNode and nextNode parameters are ignored
	if (context === true) {
		noIteration = context; // passing boolean as third param - noIteration
		context = undefined;
	} else if (typeof context !== "object") {
		context = undefined; // context must be a boolean (noIteration) or a plain object
	} else {
		context = $extend({}, context);
	}
	if (tmplOrLinkExpr && to) {
		to = to.jquery ? to : $(to); // to is a jquery object or an element or selector

		if (!activeBody) {
			activeBody = document.body;
			useInput = "oninput" in activeBody;
			$(activeBody)
				.on(elementChangeStr, onElemChange)
				.on('blur.jsv', '[contenteditable]', onElemChange);
		}

		var i, k, html, vwInfos, view, placeholderParent, targetEl, refresh, topLevelCall, late,
			onRender = addBindingMarkers,
			replaceMode = context && context.target === "replace",
			l = to.length;

		while (l--) { // iterate over 'to' targets. (Usually one, but can be multiple)
			targetEl = to[l];

			parentView = parentView || $view(targetEl);
			if (topLevelCall = parentView === topView) {
				topView.data = (topView.ctx = context || {}).root = from;
			}
			if ("" + tmplOrLinkExpr === tmplOrLinkExpr) {
				// tmplOrLinkExpr is a string: treat as data-link expression.
				addDataBinding(late = [], tmplOrLinkExpr, targetEl, parentView, undefined, true, from, context);
			} else {
				if (tmplOrLinkExpr.markup !== undefined) {
					// This is a call to template.link()
					if (replaceMode) {
						placeholderParent = targetEl.parentNode;
					}
					parentView._.scp = true; // Set scope flag on parentView for link() call - used to set view.isTop for outermost view of created linked content
					html = tmplOrLinkExpr.render(from, context, noIteration, parentView, undefined, onRender, true);
					parentView._.scp = undefined;
					// TODO Consider finding a way to bind data (link) within template without html being different for each view, the HTML can
					// be evaluated once outside the while (l--), and pushed into a document fragment, then cloned and inserted at each target.

					if (placeholderParent) {
						// This is target="replace" mode
						prevNode = targetEl.previousSibling;
						nextNode = targetEl.nextSibling;
						$.cleanData([targetEl], true);
						placeholderParent.removeChild(targetEl);

						targetEl = placeholderParent;
					} else {
						prevNode = nextNode = undefined; // When linking from a template, prevNode and nextNode parameters are ignored
						$(targetEl).empty();
					}
				} else if (tmplOrLinkExpr === true && parentView === topView) {
					// $.link(true, selector, data, ctx) - where selector points to elem in top-level content. (If not top-level content, no-op)
					refresh = {lnk: 1};
				} else {
					break; // no-op - $.link(true, selector, data, ctx) targeting within previously linked rendered template
				}

// TODO Consider deferred linking API feature on per-template basis - {@{ instead of {^{ which allows the user to see the rendered content
// before that content is linked, with better perceived perf. Have view.link return a deferred, and pass that to onAfterLink...
// or something along those lines.
// setTimeout(function() {

				if (targetEl._df && !nextNode) {
					// We are inserting new content and the target element has some deferred binding annotations,and there is no nextNode.
					// Those views may be stale views (that will be recreated in this new linking action) so we will first remove them
					// (if not already removed).
					vwInfos = viewInfos(targetEl._df, true, rOpenViewMarkers);

					for (i = 0, k = vwInfos.length; i < k; i++) {
						view = vwInfos[i];
						if ((view = viewStore[view.id]) && view.data !== undefined) {
							// If this is the _prv (prevNode) for a view, remove the view
							// - unless view.data is undefined, in which case it is already being removed
							view.parent.removeViews(view._.key, undefined, true);
						}
					}
					setDefer(targetEl); // remove defer tokens
				}

				// Link the content of the element, since this is a call to template.link(), or to $(el).link(true, ...),
				late = parentView.link(from, targetEl, prevNode, nextNode, html, refresh, context);
//});
			}
			lateLink(late); // Do any deferred linking (lateRender)
		}
	}
	return to; // Allow chaining, to attach event handlers, etc.
}

//----------
// view.link
//----------

function viewLink(outerData, parentNode, prevNode, nextNode, html, refresh, context, validateOnly) {
	// Optionally insert HTML into DOM using documentFragments (and wrapping HTML appropriately).
	// Data-link existing contents of parentNode, or the inserted HTML, if provided

	// Depending on the content model for the HTML elements, the standard data-linking markers inserted in the HTML by addBindingMarkers during
	// template rendering will be converted either to script marker nodes or, for element-only content sections, to data-jsv element annotations.

	// Data-linking will then add _prv and _nxt to views, where:
	//     _prv: References the previous node (script element of type "jsv123"), or (for elCnt=true), the first element node in the view (or if none, set _prv = _nxt)
	//     _nxt: References the last node (script element of type "jsv/123"), or (for elCnt=true), the next element node after the view.

	//==== nested functions ====
	function convertMarkers(all, preceding, selfClose, closeTag, spaceBefore, id, boundId, spaceAfter, tag1, tag2, closeTag2, spaceAfterClose, selfClose2, endOpenTag) {
		// rConvertMarkers = /(^|(\/>)|<\/(\w+)>|)(\s*)([#\/]\d+(?:_|(\^)))`(\s*)(<\w+(?=[\s\/>]))?|\s*(?:(<\w+(?=[\s\/>]))|<\/(\w+)>(\s*)|(\/>)\s*|(>))/g,
		//                 prec, slfCl, clsTag,  spBefore, id,      bndId  spAfter,tag1,                   tag2,               clTag2,sac  slfCl2, endOpenTag
		// Convert the markers that were included by addBindingMarkers in template output, to appropriate DOM annotations:
		// data-jsv attributes (for element-only content) or script marker nodes (within phrasing or flow content).

// TODO consider detecting 'quoted' contexts (attribute strings) so that attribute encoding does not need to encode >
// Currently rAttrEncode = /[><"'&]/g includes '>' encoding in order to avoid erroneous parsing of <span title="&lt;a/>"></span>">
		var errorMsg, bndId,
			endOfElCnt = "";
		if (endOpenTag) {
			inTag = 0;
			return all;
		}
		tag = tag1 || tag2 || "";
		closeTag = closeTag || closeTag2;
		selfClose = selfClose || selfClose2;
		if (isVoid && !selfClose && (!all || closeTag || tag || id && !inTag)) { // !all = end of string
			isVoid = undefined;
			parentTag = tagStack.shift(); // preceding tag was a void element, with no closing slash, such as <br>.
		}
		closeTag = closeTag || selfClose;
		if (closeTag) {
			inTag = 0;
			isVoid = undefined;
			// TODO: smart insertion of <tbody> - to be completed for robust insertion of deferred bindings etc.
			//if (closeTag === "table" && parentTag === "tbody") {
			//	preceding = "</tbody>" + preceding;
			//	parentTag = "table";
			//	tagStack.shift();
			//}
			if (validate) {
				if (selfClose || selfClose2) {
					if (!voidElems[parentTag] && !/;svg;|;math;/.test(";" + tagStack.join(";") + ";")) {
						// Only self-closing elements must be legitimate void elements, such as <br/>, per HTML schema,
						// or under svg or math foreign namespace elements.
						errorMsg = "'<" + parentTag + ".../";
					}
				} else if (voidElems[closeTag]) {
					errorMsg = "'</" + closeTag; // closing tag such as </input>
				} else if (!tagStack.length || closeTag !== parentTag) {
					errorMsg = "Mismatch: '</" + closeTag;
				}
				if (errorMsg) {
					syntaxError(errorMsg + ">' in:\n" + html);
				}
			}
			prevElCnt = elCnt;
			parentTag = tagStack.shift();
			elCnt = elContent[parentTag];
			closeTag2 = closeTag2 ? ("</" + closeTag2 + ">") : "";
			if (prevElCnt) {
				// If there are ids (markers since the last tag), move them to the defer string
				defer += ids;
				ids = "";
				if (!elCnt) {
					endOfElCnt = closeTag2 + openScript + "@" + defer + closeScript + (spaceAfterClose || "");
					defer = deferStack.shift();
				} else {
					defer += "-"; // Will be used for stepping back through deferred tokens
				}
			}
		}
		if (elCnt) {
			// elContent maps tagNames which have only element content, so may not support script nodes.
			// We are in element-only content, can remove white space, and use data-jsv attributes on elements as markers
			// Example: <tr data-jsv="/2_#6_"> - close marker for view 2 and open marker for view 6

			if (id) {
				// append marker for this id, to ids string
				ids += id;
			} else {
				preceding = (closeTag2 || selfClose2 || "");
			}
			if (tag) {
				// TODO: smart insertion of <tbody> - to be completed for robust insertion of deferred bindings etc.
				//if (tag === "<tr" && parentTag === "table") {
				//	tagStack.unshift(parentTag);
				//	parentTag = "tbody";
				//	preceding += "<" + parentTag + ">";
				//	if (defer) {
				//		defer += "+"; // Will be used for stepping back through deferred tokens
				//	}
				//	// TODO: move this to design-time validation check
				//	//	error('"' + parentTag + '" has incorrect parent tag');
				//}
				preceding += tag;
				if (ids) {
					preceding += ' ' + jsvAttrStr + '="' + ids + '"';
					ids = "";
				}
			}
		} else {
			// We are in phrasing or flow content, so use script marker nodes
			// Example: <script type="jsv3/"></script> - data-linked tag, close marker
			// We validate with inTag so no script markers are inserted in attribute context e.g. for:
			// "<table {{if ...}}...{{/if}}... >" or "<table {{if ...}}...> ...{{/if}}..."
			preceding = id
				? (preceding + endOfElCnt + spaceBefore + (inTag ? "" : openScript + id + closeScript)+ spaceAfter + tag)
				: endOfElCnt || all;
		}

		if (validate && boundId) {
			if (inTag) {
				// JsViews data-linking tags are not allowed within element markup.
				// See jsviews/issues/303
				syntaxError('{^{ within elem markup (' + inTag + ' ). Use data-link="..."');
			}
			if (id.charAt(0) === "#") {
				tagStack.unshift(id.slice(1));
			} else if (id.slice(1) !== (bndId = tagStack.shift())) {
				// See jsviews/issues/213
				syntaxError('Closing tag for {^{...}} under different elem: <' + bndId + '>');
			}
		}
		if (tag) {
			inTag = tag;
			// If there are ids (markers since the last tag), move them to the defer string
			tagStack.unshift(parentTag);
			parentTag = tag.slice(1);
			if (validate && tagStack[0] && tagStack[0] === badParent[parentTag]) {
				// Missing <tbody>
				// TODO: replace this by smart insertion of <tbody> tags
				error('Parent of <tr> must be <tbody>');
			}
			isVoid = voidElems[parentTag];
			if ((elCnt = elContent[parentTag]) && !prevElCnt) {
				deferStack.unshift(defer);
				defer = "";
			}
			prevElCnt = elCnt;
//TODO Consider providing validation which throws if you place <span> as child of <tr>, etc. - since if not caught,
//this can cause errors subsequently which are difficult to debug.
//				if (elContent[tagStack[0]]>2 && !elCnt) {
//					error(parentTag + " in " + tagStack[0]);
//				}
			if (defer && elCnt) {
				defer += "+"; // Will be used for stepping back through deferred tokens
			}
		}
		return preceding;
	}

	function processViewInfos(vwInfos, targetParent) {
		// If targetParent, we are processing viewInfos (which may include navigation through '+-' paths) and hooking up to the right parentElem etc.
		// (and elem may also be defined - the next node)
		// If no targetParent, then we are processing viewInfos on newly inserted content
		var deferPath, deferChar, bindChar, parentElem, id, onAftCr, deep,
			addedBindEls = [];

		// In elCnt context (element-only content model), prevNode is the first node after the open, nextNode is the first node after the close.
		// If both are null/undefined, then open and close are at end of parent content, so the view is empty, and its placeholder is the
		// 'lastChild' of the parentNode. If there is a prevNode, then it is either the first node in the view, or the view is empty and
		// its placeholder is the 'previousSibling' of the prevNode, which is also the nextNode.
		if (vwInfos) {
			if (vwInfos._tkns.charAt(0) === "@") {
				// We are processing newly inserted content. This is a special script element that was created in convertMarkers() to process deferred bindings,
				// and inserted following the target parent element - because no element tags (outside elCnt) were encountered to carry those binding tokens.
				// We will step back from the preceding sibling of this element, looking at targetParent elements until we find the one that the current binding
				// token belongs to. Set elem to null (the special script element), and remove it from the DOM.
				targetParent = elem.previousSibling;
				elem.parentNode.removeChild(elem);
				elem = undefined;
			}
			len = vwInfos.length;
			while (len--) {
				vwInfo = vwInfos[len];
//if (prevIds.indexOf(vwInfo.token) < 0) { // This token is a newly created view or tag binding
				bindChar = vwInfo.ch;
				if (deferPath = vwInfo.path) {
					// We have a 'deferred path'
					j = deferPath.length - 1;
					while (deferChar = deferPath.charAt(j--)) {
						// Use the "+" and"-" characters to navigate the path back to the original parent node where the deferred bindings ocurred
						if (deferChar === "+") {
							if (deferPath.charAt(j) === "-") {
								j--;
								targetParent = targetParent.previousSibling;
							} else {
								targetParent = targetParent.parentNode;
							}
						} else {
							targetParent = targetParent.lastChild;
						}
						// Note: Can use previousSibling and lastChild, not previousElementSibling and lastElementChild,
						// since we have removed white space within elCnt. Hence support IE < 9
					}
				}
				if (bindChar === "^") {
					if (tag = bindingStore[id = vwInfo.id]) {
						// The binding may have been deleted, for example in a different handler to an array collectionChange event
						// This is a tag binding
						deep = targetParent && (!elem || elem.parentNode !== targetParent); // We are stepping back looking for the right targetParent,
						// or we are linking existing content and this element is in elCnt, not an immediate child of the targetParent.
						if (!elem || deep) {
							tag.parentElem = targetParent;
						}
						if (vwInfo.elCnt && deep) {
							// With element only content, if there is no following element, or if the binding is deeper than the following element
							// then we need to set the open or close token as a deferred binding annotation on the parent
							setDefer(targetParent, (vwInfo.open ? "#" : "/") + id + bindChar + (targetParent._df || ""));
						}
						// This is an open or close marker for a data-linked tag {^{...}}. Add it to bindEls.
						addedBindEls.push([deep ? null : elem, vwInfo]);
					}
				} else if (view = viewStore[id = vwInfo.id]) {
					// The view may have been deleted, for example in a different handler to an array collectionChange event
					if (!view.parentElem) {
						// If view is not already extended for JsViews, extend and initialize the view object created in JsRender, as a JsViews view
						view.parentElem = targetParent || elem && elem.parentNode || parentNode;
						view._.onRender = addBindingMarkers;
						view._.onArrayChange = arrayChangeHandler;
						setArrayChangeLink(view);
					}
					parentElem = view.parentElem;
					if (vwInfo.open) {
						// This is an 'open view' node (preceding script marker node,
						// or if elCnt, the first element in the view, with a data-jsv annotation) for binding
						view._elCnt = vwInfo.elCnt;
						if (targetParent && !elem) {
							setDefer(targetParent, "#" + id + bindChar + (targetParent._df || ""));
						} else {
							// No targetParent, so there is a ._nxt elem (and this is processing tokens on the elem)
							if (!view._prv) {
								setDefer(parentElem, removeSubStr(parentElem._df, "#" + id + bindChar));
							}
							view._prv = elem;
						}
					} else {
						// This is a 'close view' marker node for binding
						if (targetParent && (!elem || elem.parentNode !== targetParent)) {
							// There is no ._nxt so add token to _df. It is deferred.
							setDefer(targetParent, "/" + id + bindChar + (targetParent._df || ""));
							view._nxt = undefined;
						} else if (elem) {
							// This view did not have a ._nxt, but has one now, so token may be in _df, and must be removed. (No longer deferred)
							if (!view._nxt) {
								setDefer(parentElem, removeSubStr(parentElem._df, "/" + id + bindChar));
							}
							view._nxt = elem;
						}
						if (onAftCr = view.ctx && view.ctx[onAfterCreateStr] || onAfterCreate) {
							onAftCr.call(view.ctx.tag, view);
						}
					}
//}
				}
			}
			len = addedBindEls.length;
			while (len--) {
				// These were added in reverse order to addedBindEls. We push them in BindEls in the correct order.
				bindEls.push(addedBindEls[len]);
			}
		}
		return !vwInfos || vwInfos.elCnt;
	}

	function getViewInfos(vwInfos) {
		// Used by view.childTags() and tag.childTags()
		// Similar to processViewInfos in how it steps through bindings to find tags. Only finds data-linked tags.
		var level, parentTag, named;

		if (vwInfos) {
			len = vwInfos.length;
			for (j = 0; j < len; j++) {
				vwInfo = vwInfos[j];
				// This is an open marker for a data-linked tag {^{...}}, within the content of the tag whose id is get.id. Add it to bindEls.
				// Note - if bindingStore[vwInfo.id]._is === "tag" then getViewInfos is being called too soon - during first linking pass
				tag = bindingStore[vwInfo.id];
				if (!tag._is && tag.linkCtx) {
					parentTag = tag = tag.linkCtx.tag;
					named = tag.tagName === tagName;
					if (!tag.flow || named) {
						if (!deep) {
							level = 1;
							while (parentTag = parentTag.parent) {
								level++;
							}
							tagDepth = tagDepth || level; // The level of the first tag encountered.
						}
						if ((deep || level === tagDepth) && (!tagName || named)) {
							// Filter on top-level or tagName as appropriate
							tags.push(tag);
						}
					}
				}
			}
		}
	}

	function dataLink() {
		//================ Data-link and fixup of data-jsv annotations ================
		var j, index,
			tokens = "",
			wrap = {},
			selector = linkViewsSel + (get ? ",[" + deferAttr + "]" : "");
			// If a childTags() call, get = ",[" + deferAttr + "]" - since we need to include elements that have a ._df expando for deferred tokens

		elems = qsa ? parentNode.querySelectorAll(selector) : $(selector, parentNode).get();
		l = elems.length;

		// The prevNode will be in the returned query, since we called markPrevOrNextNode() on it.
		// But it may have contained nodes that satisfy the selector also.
		if (prevNode && prevNode.innerHTML) {
			// Find the last contained node of prevNode, to use as the prevNode - so we only link subsequent elems in the query
			prevNodes = qsa ? prevNode.querySelectorAll(selector) : $(selector, prevNode).get();
			prevNode = prevNodes.length ? prevNodes[prevNodes.length - 1] : prevNode;
		}

		tagDepth = 0;
		for (i = 0; i < l; i++) {
			elem = elems[i];
			if (prevNode && !found) {
				// If prevNode is set, not false, skip linking. If this element is the prevNode, set to false so subsequent elements will link.
				found = (elem === prevNode);
			} else if (nextNode && elem === nextNode) {
				// If nextNode is set then break when we get to nextNode
				if (get) {
					tokens += markerNodeInfo(elem);
				}
				break;
			} else if (elem.parentNode) {
				// elem has not been removed from DOM
				if (get) {
					tokens += markerNodeInfo(elem);
					if (elem._df) {
						j = i + 1;
						while (j < l && elem.contains(elems[j])) {
							j++;
						}
						// Add deferred tokens after any tokens on descendant elements of this one
						wrap[j-1] = elem._df;
					}
					if (wrap[i]) {
						tokens += wrap[i] || "";
					}
				} else {
					if (isLink && (vwInfo = viewInfos(elem, undefined, rViewMarkers)) && (vwInfo = vwInfo[0])) {
						// If this is a link(trueOrString ...) call we will avoid re-binding to elems that are within template-rendered views
						skip = skip ? (vwInfo.id !== skip && skip) : vwInfo.open && vwInfo.id;
					}
					if (!skip && processInfos(viewInfos(elem))
						// If a link() call, processViewInfos() adds bindings to bindEls, and returns true for non-script nodes, for adding data-link bindings
						// If a childTags() call, getViewInfos returns array of tag bindings.
							&& elem.getAttribute($viewsLinkAttr)) {
						bindEls.push([elem]); // A data-linked element so add to bindEls too
					}
				}
			}
		}

		if (get) {
			tokens += parentNode._df || "";
			if (index = tokens.indexOf("#" + get.id) + 1) {
				// We are looking for view.childTags() or tag.childTags() - so start after the open token of the parent view or tag.
				tokens = tokens.slice(index + get.id.length);
			}
			index = tokens.indexOf("/" + get.id);
			if (index + 1) {
				// We are looking for view.childTags() or tag.childTags() - so don't look beyond the close token of the parent view or tag.
				tokens = tokens.slice(0, index);
			}
			// Call getViewInfos to add the found childTags to the tags array
			getViewInfos(viewInfos(tokens, undefined, rOpenTagMarkers));
		}

		if (html === undefined && parentNode.getAttribute($viewsLinkAttr)) {
			bindEls.push([parentNode]); // Support data-linking top-level element directly (not within a data-linked container)
		}

		// Remove temporary marker script nodes they were added by markPrevOrNextNode
		unmarkPrevOrNextNode(prevNode, elCnt);
		unmarkPrevOrNextNode(nextNode, elCnt);

		if (get) {
			return; // We have added childTags to the tags array, so we are done
		}

		if (elCnt && defer + ids) {
			// There are some views with elCnt, for which the open or close did not precede any HTML tag - so they have not been processed yet
			elem = nextNode;
			if (defer) {
				if (nextNode) {
					processViewInfos(viewInfos(defer + "+", true), nextNode);
				} else {
					processViewInfos(viewInfos(defer, true), parentNode);
				}
			}
			processViewInfos(viewInfos(ids, true), parentNode);
			// If there were any tokens on nextNode which have now been associated with inserted HTML tags, remove them from nextNode
			if (nextNode) {
				tokens = nextNode.getAttribute(jsvAttrStr);
				if (l = tokens.indexOf(prevIds) + 1) {
					tokens = tokens.slice(l + prevIds.length - 1);
				}
				nextNode.setAttribute(jsvAttrStr, ids + tokens);
			}
		}

// if (context.lazyLink) {
// setTimeout(doLinking) (doLinking is function wrapper of following lines)
// See Future tasks, and https://github.com/BorisMoore/jsviews/issues/368.
// Could call context.lazyLink as callback, on async completion - or return promise.
		//================ Bind the data-linked elements and tags ================
		l = bindEls.length;
		for (i = 0; i < l; i++) {
			elem = bindEls[i];
			linkInfo = elem[1];
			elem = elem[0];
			if (linkInfo) {
				if (tag = bindingStore[linkInfo.id]) {
					if (linkCtx = tag.linkCtx) {
						// The tag may have been stored temporarily on the bindingStore - or may have already been replaced by the actual binding
						tag = linkCtx.tag;
						tag.linkCtx = linkCtx;
					}
					if (linkInfo.open) {
						// This is an 'open linked tag' binding annotation for a data-linked tag {^{...}}
						if (elem) {
							tag.parentElem = elem.parentNode;
							tag._prv = elem;
						}
						tag._elCnt = linkInfo.elCnt;
						// We data-link depth-first ("on the way in"), which is better for perf - and allows setting parent tags etc.
						view = tag.tagCtx.view;

						// Add data binding (unless skipped due to lateRender)
						addDataBinding(late, undefined, tag._prv, view, linkInfo.id);
					} else {
						tag._nxt = elem;
						if (tag._.unlinked && !tag._toLk) {
							// This is a 'close linked tag' binding annotation (and data-binding was not skipped due to lateRender)
							tagCtx = tag.tagCtx;
							view = tagCtx.view;
							callAfterLink(tag);
						}
					}
				}
			} else {
				// Add data binding for a data-linked element (with data-link attribute)
				addDataBinding(late, elem.getAttribute($viewsLinkAttr), elem, $view(elem), undefined, isLink, outerData, context);
			}
		}
//});
	}
	//==== /end of nested functions ====

	var inTag, linkCtx, tag, i, l, j, len, elems, elem, view, vwInfo, linkInfo, prevNodes, token, prevView, nextView,
		node, tags, deep, tagName, tagCtx, validate, tagDepth, depth, fragment, copiedNode, firstTag, parentTag,
		isVoid, wrapper, div, tokens, elCnt, prevElCnt, htmlTag, ids, prevIds, found, skip, isLink, get,
		self = this,
		thisId = self._.id + "_",
		defer = "",
		// The marker ids for which no tag was encountered (empty views or final closing markers) which we carry over to container tag
		bindEls = [],
		tagStack = [],
		deferStack = [],
		late = [],
		onAfterCreate = changeHandler(self, onAfterCreateStr),
		processInfos = processViewInfos;

	if (refresh) {
		if (refresh.tmpl) {
			// refresh is the prevView, passed in from addViews()
			prevView = "/" + refresh._.id + "_";
		} else {
			isLink = refresh.lnk; // Top-level linking
			if (refresh.tag) {
				thisId = refresh.tag + "^";
				refresh = true;
			}
			if (get = refresh.get) {
				processInfos = getViewInfos;
				tags = get.tags;
				deep = get.deep;
				tagName = get.name;
			}
		}
		refresh = refresh === true;
	}

	parentNode = parentNode
		? ("" + parentNode === parentNode
			? $(parentNode)[0]  // It is a string, so treat as selector
			: parentNode.jquery
				? parentNode[0]   // A jQuery object - take first element.
				: parentNode)
		: (self.parentElem    // view.link()
			|| document.body);  // link(null, data) to link the whole document

	validate = !$subSettingsAdvanced.noValidate && parentNode.contentEditable !== TRUE;
	parentTag = parentNode.tagName.toLowerCase();
	elCnt = !!elContent[parentTag];

	prevNode = prevNode && markPrevOrNextNode(prevNode, elCnt);
	nextNode = nextNode && markPrevOrNextNode(nextNode, elCnt) || null;

	if (html != undefined) {
		//================ Insert html into DOM using documentFragments (and wrapping HTML appropriately). ================
		// Also convert markers to DOM annotations, based on content model.
		// Corresponds to nextNode ? $(nextNode).before(html) : $(parentNode).html(html);
		// but allows insertion to wrap correctly even with inserted script nodes. jQuery version will fail e.g. under tbody or select.
		// This version should also be slightly faster
		div = document.createElement("div");
		wrapper = div;
		prevIds = ids = "";
		htmlTag = parentNode.namespaceURI === "http://www.w3.org/2000/svg" ? "svg_ns" : (firstTag = rFirstElem.exec(html)) && firstTag[1] || "";
		if (elCnt) {
			// Now look for following view, and find its tokens, or if not found, get the parentNode._df tokens
			node = nextNode;
			while (node && !(nextView = viewInfos(node))) {
				node = node.nextSibling;
			}
			if (tokens = nextView ? nextView._tkns : parentNode._df) {
				token = prevView || "";
				if (refresh || !prevView) {
					token += "#" + thisId;
				}
				j = tokens.indexOf(token);
				if (j + 1) {
					j += token.length;
					// Transfer the initial tokens to inserted nodes, by setting them as the ids variable, picked up in convertMarkers
					prevIds = ids = tokens.slice(0, j);
					tokens = tokens.slice(j);
					if (nextView) {
						node.setAttribute(jsvAttrStr, tokens);
					} else {
						setDefer(parentNode, tokens);
					}
				}
			}
		}

		//================ Convert the markers to DOM annotations, based on content model. ================
//			oldElCnt = elCnt;
		isVoid = undefined;
		html = ("" + html).replace(rConvertMarkers, convertMarkers);
//			if (!!oldElCnt !== !!elCnt) {
//				error("Parse: " + html); // Parse error. Content not well-formed?
//			}
		if (validate && tagStack.length) {
			syntaxError("Mismatched '<" + parentTag + "...>' in:\n" + html); // Unmatched tag
		}
		if (validateOnly) {
			return;
		}
		// Append wrapper element to doc fragment
		safeFragment.appendChild(div);

		// Go to html and back, then peel off extra wrappers
		// Corresponds to jQuery $(nextNode).before(html) or $(parentNode).html(html);
		// but supports svg elements, and other features missing from jQuery version (and this version should also be slightly faster)
		htmlTag = wrapMap[htmlTag] || wrapMap.div;
		depth = htmlTag[0];
		wrapper.innerHTML = htmlTag[1] + html + htmlTag[2];
		while (depth--) {
			wrapper = wrapper.lastChild;
		}
		safeFragment.removeChild(div);
		fragment = document.createDocumentFragment();
		while (copiedNode = wrapper.firstChild) {
			fragment.appendChild(copiedNode);
		}
		// Insert into the DOM
		parentNode.insertBefore(fragment, nextNode);
	}
	dataLink();

	return late;
}

function addDataBinding(late, linkMarkup, node, currentView, boundTagId, isLink, data, context) {
	// Add data binding for data-linked elements or {^{...}} data-linked tags
	var tmpl, tokens, attr, convertBack, tagExpr, linkFn, linkCtx, tag, rTagIndex, hasElse, lastIndex,
		linkExpressions = [];

	if (boundTagId) {
		// boundTagId is a string for {^{...}} data-linked tag. So only one linkTag in linkMarkup
		// data and context arguments are undefined
		tag = bindingStore[boundTagId];
		tag = tag.linkCtx ? tag.linkCtx.tag : tag;

		linkCtx = tag.linkCtx || {
			type: "inline",
			data: currentView.data,                   // source
			elem: tag._elCnt ? tag.parentElem : node, // target
			view: currentView,
			ctx: currentView.ctx,
			attr: HTML, // Script marker nodes are associated with {^{ and always target HTML.
			fn: tag._.bnd,
			tag: tag,
			// Pass the boundTagId in the linkCtx, so that it can be picked up in observeAndBind
			_bndId: boundTagId
		};
		tag.linkCtx = linkCtx;
		bindDataLinkTarget(linkCtx, late);
		tag._toLk = linkCtx._bndId; // If data binding happened, remove _toLk flag from tag
	} else if (linkMarkup && node) {
		// Data-linked element

		// If isLink then this is a top-level linking: .link(expression, target, data, ....) or
		// .link(true, target, data, ....) scenario - and data and context are passed in separately from the view
		data = isLink ? data : currentView.data;

		// Compiled linkFn expressions could be stored in the tmpl.links array of the template
		// TODO - consider also caching globally so that if {{:foo}} or data-link="foo" occurs in different places,
		// the compiled template for this is cached and only compiled once...
		//links = currentView.links || currentView.tmpl.links;

		tmpl = currentView.tmpl;

//			if (!(linkTags = links[linkMarkup])) {
		// This is the first time this view template has been linked, so we compile the data-link expressions, and store them on the template.

		linkMarkup = normalizeLinkTag(linkMarkup, defaultAttr(node));
		lastIndex = rTagDatalink.lastIndex = 0;
		while (tokens = rTagDatalink.exec(linkMarkup)) { // TODO require } to be followed by whitespace or $, and remove the \}(!\}) option.
			linkExpressions.push(tokens);
			lastIndex = rTagDatalink.lastIndex;
		}
		if (lastIndex < linkMarkup.length) {
			syntaxError(linkMarkup);
		}
		while (tokens = linkExpressions.shift()) {
			// Iterate over the data-link expressions, for different target attrs,
			// e.g. <input data-link="{:firstName:} title{>~description(firstName, lastName)}"
			// tokens: [all, attr, bindOnly, tagExpr, tagName, converter, colon, html, comment, code, params]
			rTagIndex = rTagDatalink.lastIndex;
			attr = tokens[1];
			tagExpr = tokens[3];
			while (linkExpressions[0] && linkExpressions[0][4] === "else") { // If this is {sometag...} and is followed by an {else...} add to tagExpr
				tagExpr += delimCloseChar1 + delimOpenChar0 + linkExpressions.shift()[3];
				hasElse = true;
			}
			if (hasElse) { // If an {else} has been added, need also to add closing {{/sometag}}
				tagExpr += delimCloseChar1 + delimOpenChar0 + delimOpenChar1 + "/" + tokens[4] + delimCloseChar0;
			}
			linkCtx = {
				type: isLink ? "top" : "link",
				data: data, // source
				elem: node, // target
				view: currentView,
				ctx: context,
				attr: attr,
				isLk: isLink, // top-level linking?
				_toLk : 1, // Flag to data-link on initial data-link call rendering call
				_noUpd : tokens[2] // Flag for data-link="^{...}" so on initial data-link call will bind, but not render)
			};

			convertBack = undefined;
			if (tokens[6]) {
				convertBack = tokens[10] || undefined;
				linkCtx.convert = tokens[5] || "";
				if (convertBack !== undefined && defaultAttr(node)) {
					if (attr) {
						syntaxError(tagExpr + "- Remove target: " + attr);
					}
					// Default target, so allow 2 way binding
					linkCtx.convertBack = convertBack = convertBack.slice(1);
				}
			}
			// Compile the linkFn expression which evaluates and binds a data-link expression
			// TODO - optimize for the case of simple data path with no conversion, helpers, etc.:
			//     i.e. data-link="a.b.c". Avoid creating new instances of Function every time. Can use a default function for all of these...

			linkCtx.expr = attr + tagExpr;
			linkFn = tmpl.links[tagExpr];
			if (!linkFn) {
				tmpl.links[tagExpr] = linkFn = $sub.tmplFn(tagExpr, tmpl, true, convertBack, hasElse);
			}
			linkCtx.fn = linkFn;
			bindDataLinkTarget(linkCtx, late);
			// We store rTagIndex in local scope, since this addDataBinding method can sometimes be called recursively,
			// and each is using the same rTagDatalink instance.
			rTagDatalink.lastIndex = rTagIndex;
		}
//		}
	}
}

function bindDataLinkTarget(linkCtx, late) {
	// Add data link bindings for a link expression in data-link attribute markup
	function handler(ev, eventArgs) {
		onDataLinkedTagChange.call(linkCtx, ev, eventArgs);
		// If the link expression uses a custom tag, the onDataLinkedTagChange call will call renderTag, which will set tagCtx on linkCtx
	}
	if (linkCtx.isLk) {
		// Top-level linking: .link(expressionOrTrue, data, context) - so we need to create a view for the linking, with the data and ctx
		// which may be different than the current context of the target. Note that this view is not a standard data-linked view, so it will
		// be disposed only when its parent view is disposed.
		linkCtx.view = new $sub.View(
			$sub.extendCtx(linkCtx.ctx, linkCtx.view.ctx),
			"link", linkCtx.view, linkCtx.data, linkCtx.expr, undefined, addBindingMarkers);
	}
	linkCtx._ctxCb = $sub._gccb(linkCtx.view); // getContextCallback: _ctxCb, for filtering/appending to dependency paths: function(path, object) { return [(object|path)*]}
	linkCtx._hdl = handler;
	// handler._ctx = linkCtx; Could pass linkCtx for use in a depends = function() {} call, so depends is different for different linkCtx's
	if (linkCtx.fn._lr) {
		linkCtx._toLk = 1;
		late.push(linkCtx); // lateRender - defer rendering and linking (sync but after first linking pass)
	} else {
		handler(true);
	}
}

//=====================
// Data-linking helpers
//=====================

function removeSubStr(str, substr) {
	var k;
	return str
		? (k = str.indexOf(substr),
			(k + 1
				? str.slice(0, k) + str.slice(k + substr.length)
				: str))
		: "";
}

function markerNodeInfo(node) {
	return node &&
		("" + node === node
			? node
			: node.tagName === SCRIPT
				? node.type.slice(3)
				: node.nodeType === 1 && node.getAttribute(jsvAttrStr) || "");
}

function viewInfos(node, isVal, rBinding) {
	// Test whether node is a script marker node, and if so, return metadata
	function getInfos(all, open, close, id, ch, elPath) {
		infos.push({
			elCnt: elCnt,
			id: id,
			ch: ch,
			open: open,
			close: close,
			path: elPath,
			token: all
		});
	}
	var elCnt, tokens,
		infos = [];
	if (tokens = isVal ? node : markerNodeInfo(node)) {
		elCnt = infos.elCnt = node.tagName !== SCRIPT;
		elCnt = tokens.charAt(0) === "@" || elCnt;
		infos._tkns = tokens;
		// rMarkerTokens = /(?:(#)|(\/))(\d+)([_^])([-+@\d]+)?/g;
		tokens.replace(rBinding || rMarkerTokens, getInfos);
		return infos;
	}
}

function unmarkPrevOrNextNode(node, elCnt) {
	if (node) {
		if (node.type === "jsv") {
			node.parentNode.removeChild(node);
		} else if (elCnt && node.getAttribute($viewsLinkAttr) === "") {
			node.removeAttribute($viewsLinkAttr);
		}
	}
}

function markPrevOrNextNode(node, elCnt) {
	var marker = node;
	while (elCnt && marker && marker.nodeType !== 1) {
		marker = marker.previousSibling;
	}
	if (marker) {
		if (marker.nodeType !== 1) {
			// For text nodes, we will add a script node before
			marker = document.createElement(SCRIPT);
			marker.type = "jsv";
			node.parentNode.insertBefore(marker, node);
		} else if (!markerNodeInfo(marker) && !marker.getAttribute($viewsLinkAttr)) {
			// For element nodes, we will add a data-link attribute (unless there is already one)
			// so that this node gets included in the node linking process.
			marker.setAttribute($viewsLinkAttr, "");
		}
	}
	return marker;
}

function normalizeLinkTag(linkMarkup, twoway) {
	linkMarkup = $.trim(linkMarkup).replace(rEscapeQuotes, "\\$&");
	return linkMarkup.slice(-1) !== delimCloseChar0
	// If simplified syntax is used: data-link="expression", convert to data-link="{:expression}",
	// or for inputs, data-link="{:expression:}" for (default) two-way binding
		? linkMarkup = delimOpenChar1 + ":" + linkMarkup + (twoway ? ":" : "") + delimCloseChar0
		: linkMarkup;
}

//===========================
// Methods for views and tags
//===========================

function callAfterLink(tag, ev, eventArgs) {
	function copyFromTagCtxToTag() {
		linkedElems = tagCtx.linkedElems || tag.linkedElems || tag.linkedElem && [tag.linkedElem];
		if (linkedElems) {
			tag.linkedElems = tagCtx.linkedElems = linkedElems;
			tag.linkedElem = linkedElems[0] = tag.linkedElem || linkedElems[0];
		}
		if (linkedElem = tagCtx.mainElem || tag.mainElem) {
			tagCtx.mainElem = tag.mainElem = linkedElem;
		}
		if (linkedElem = tagCtx.displayElem || tag.displayElem) {
			tagCtx.displayElem = tag.displayElem = linkedElem;
		}
	}

	var linkedElems, linkedElements, linkedElem, l, m, $linkCtxElem, linkCtxElem, tagCtxElse, props, val, oldVal,
		tagCtx = tag.tagCtx,
		tagCtxs = tag.tagCtxs,
		tagCtxslength = tagCtxs && tagCtxs.length,
		linkCtx = tag.linkCtx,
		bindTo = tag.bindTo || {};

	if (tag._.unlinked) { // First call to onAfterLink, or first call after onUpdate: updateContent. Initialize and call onBind and set properties
		$linkCtxElem = $(linkCtx.elem);
		if (tag.linkedElement || tag.mainElement || tag.displayElement) {
			if (linkedElements = tag.linkedElement) {
				// tag.linkedElement: - selector, or array of selectors, for identifying linked elements in template/rendered content.
				// (But for tag bindings on data-linked elements, defaults to data-linked element)
				tag.linkedElem = undefined;
				l = linkedElements.length;
				while (l--) {
					if (linkedElements[l]) {
						m = tagCtxslength;
						while (m--) {
							linkCtxElem = !m && !tag.inline && $linkCtxElem.filter(linkedElements[l]);
							tagCtxElse = tagCtxs[m];
							linkedElems = tagCtxElse.linkedElems = tagCtxElse.linkedElems || new Array(l);
							linkedElem = linkCtxElem[0] ? linkCtxElem : tagCtxElse.contents(true, linkedElements[l]);
							if (linkedElem[0] && linkedElem[0].type !== RADIO) {
								linkedElems[l] = linkedElem.eq(0);
							}
						}
					}
				}
			}
			if (linkedElements = tag.mainElement) {
				// tag.mainElement: - selector for identifying mainElem in template/rendered content
				// (But for tag bindings on data-linked elements, defaults to data-linked element)
				m = tagCtxslength;
				while (m--) {
					linkCtxElem = !m && !tag.inline && $linkCtxElem.filter(linkedElements);
					tagCtxElse = tagCtxs[m];
					linkedElem = linkCtxElem[0] ? linkCtxElem : tagCtxElse.contents(true, linkedElements).eq(0);
					if (linkedElem[0]) {
						tagCtxElse.mainElem = linkedElem;
					}
				}
			}
			if (linkedElements = tag.displayElement) {
				// tag.mainElement: - selector for identifying mainElem in template/rendered content
				// (But for tag bindings on data-linked elements, defaults to data-linked element)
				m = tagCtxslength;
				while (m--) {
					linkCtxElem = !m && !tag.inline && $linkCtxElem.filter(linkedElements);
					tagCtxElse = tagCtxs[m];
					linkedElem = linkCtxElem[0] ? linkCtxElem : tagCtxElse.contents(true, linkedElements).eq(0);
					if (linkedElem[0]) {
						tagCtxElse.displayElem = linkedElem;
						if (!m) {
							tag.displayElem = linkedElem;
						}
					}
				}
			}
			copyFromTagCtxToTag();
		}
		if (tag.onBind) {
			tag.onBind(tagCtx, linkCtx, tag.ctx, ev, eventArgs);
			copyFromTagCtxToTag();
		}
	}

	m = tagCtxslength;
	while (m--) {
		tagCtxElse = tagCtxs[m];
		props = tagCtxElse.props;

		if (linkedElem = tagCtxElse.mainElem || !tag.mainElement && tagCtxElse.linkedElems && tagCtxElse.linkedElems[0]) {
			// linkedElem is the mainElem (defaulting to linkedElem)
			if (linkedElem[0] && props.id && !linkedElem[0].id) {
				linkedElem[0].id = props.id;
			}
			if (tag.setSize) {
				if (val = !bindTo.height && props.height || tag.height) {
					linkedElem.height(val);
				}
				if (val = !bindTo.width && props.width || tag.width) {
					linkedElem.width(val);
				}
			}
		}

		if (val = (linkedElem = tagCtxElse.displayElem || linkedElem) && (!bindTo["class"] && props["class"] || tag.className)) {
			// This code supports dynamic binding to class - where it adds the class if absent, and removes/adds if a previous value is present
			oldVal = linkedElem[0]._jsvCl;
			if (val !== oldVal) {
				if (linkedElem.hasClass(oldVal)) {
					linkedElem.removeClass(oldVal);
				}
				linkedElem.addClass(val);
				linkedElem[0]._jsvCl = val;
			}
		}
	}

	if (tag.onAfterLink) {
		tag.onAfterLink(tagCtx, linkCtx, tag.ctx, ev, eventArgs);
		copyFromTagCtxToTag();
	}

	if (!tag.flow && !tag._.chg) {
		if (tag.inline && tag._.unlinked && (tag.linkedElems || bindTo)) {
			defineBindToDataTargets(bindingStore[tag._tgId], tag);
		}
		tag.setValue();
	}
	tag._.unlinked = undefined;
}

function asyncOnElemChange(ev) {
	var which = ev.which;
	if (!(which > 15 && which < 21 || which > 32 && which < 41 || which > 111 && which < 131 || which === 27 || which === 144)) {
		// Shift, Ctrl, Alt, Pause, Caplock, Page up/down End, Home, Left, Up, Right, Down, Function keys, Escape, Numlock
		setTimeout(function() {
			onElemChange(ev);
		});
	}
}

function bindTriggerEvent($elem, trig, onoff) {
	// Bind keydown, or other trigger - (rather than use the default change event bubbled to activeBody)
	if (trig === true && useInput) {
		$elem[onoff]("input.jsv", onElemChange); // For HTML5 browser with "oninput" support - for mouse editing of text
	} else {
		trig = "" + trig === trig ? trig : "keydown.jsv"; // Set trigger to (true || truey non-string (e.g. 1) || 'keydown')
		$elem[onoff](trig, trig.indexOf("keydown") >= 0 ? asyncOnElemChange : onElemChange); // Get 'keydown' with async
	}
}

function bindLinkedElChange(tag, linkedElem) {
	// Two-way binding for linkedElem - in the case of input, textarea or contentEditable elements.
	// Trigger setting may have changed. Unbind previous trigger binding (if any) and bind new one.

	var $linkedElem, newTrig,
		oldTrig = linkedElem._jsvTr || false;

	if (tag) {
		newTrig = tag.tagCtx.props.trigger;
		if (newTrig === undefined) {
			newTrig = tag.trigger;
		}
	}
	if (newTrig === undefined) {
		newTrig = $subSettings.trigger;
	}
	// Trigger is noop except for text box, textarea, contenteditable...
	newTrig = newTrig && (linkedElem.tagName === "INPUT" && linkedElem.type !== CHECKBOX && linkedElem.type !== RADIO
		|| linkedElem.type === "textarea" || linkedElem.contentEditable === TRUE) && newTrig || false;

	if (oldTrig !== newTrig) {
		$linkedElem = $(linkedElem);
		bindTriggerEvent($linkedElem, oldTrig, "off");
		bindTriggerEvent($linkedElem, linkedElem._jsvTr = newTrig, "on");
	}
}

function defineBindToDataTargets(binding, tag, cvtBk) {
	// Two-way binding.
	// We set the binding.to[1] to be the cvtBack, and binding.to[0] to be either the path to the target, or [object, path] where the target is the
	// path on the provided object. So for a computed path with an object call: a.b.getObject().d.e, we set to[0] to be [exprOb, "d.e"], and
	// we bind to the path on the returned object, exprOb.ob, as target. Otherwise our target is the first path, paths[0], which we will convert
	// with contextCb() for paths like ~a.b.c or #x.y.z

	var pathIndex, path, lastPath, bindtoOb, to, bindTo, paths, k, l, obsCtxPrm, linkedCtxParam, contextCb, targetPaths, bindTos,
		tagElse = 1,
		tos = [],
		linkCtx = binding.linkCtx,
		source = linkCtx.data,
		targetPathsElses = linkCtx.fn.paths;

	if (binding && !binding.to) {
		if (tag) {
			tag.convertBack = tag.convertBack || cvtBk;
			bindTo = tag.bindTo;
			tagElse = tag.tagCtxs ? tag.tagCtxs.length : 1;
		}
		while (tagElse--) {
			bindTos = [];
			if (targetPaths = targetPathsElses[tagElse]) {
				bindTo = targetPaths._jsvto ? ["_jsvto"] : (bindTo || [0]);
				k = bindTo.length;
				while (k--) {
					path = "";
					contextCb = linkCtx._ctxCb;
					paths = targetPaths[bindTo[k]];
					if (pathIndex = paths && paths.length) {
						lastPath = paths[pathIndex - 1];
						if (lastPath._cpfn) { // Computed property exprOb

							bindtoOb = lastPath;
							while (lastPath.sb && lastPath.sb._cpfn) {
								path = lastPath = lastPath.sb;
							}
							path = lastPath.sb || path && path.path;
							lastPath = path ? path.slice(1) : bindtoOb.path;
						}
						to = path
							? [bindtoOb, // 'exprOb' for this expression and view-binding. So bindtoOb.ob is current object returned by expression.
									lastPath]
							: resolveDataTargetPath(lastPath, source, contextCb); // Get 'to' for target path: lastPath
					} else {
						// Contextual parameter ~foo with no external binding - has ctx.foo = [{_ocp: xxx}] and binds to ctx.foo._ocp
						linkedCtxParam = tag.linkedCtxParam;
						to = [];
						if (linkedCtxParam && linkedCtxParam[k]) {
							// This is a tag binding, with linked tag contextual parameters
							to = [tag.tagCtxs[tagElse].ctx[linkedCtxParam[k]][0], _ocp];
						}
					}
					if ((obsCtxPrm = to._cxp) && obsCtxPrm.tag && lastPath.indexOf(".")<0) {
						// This is a binding for a tag contextual parameter (e.g. <input data-link="~wd"/> within a tag block content
						to = obsCtxPrm;
					}
					bindTos.unshift(to);
				}
			}
			tos.unshift(bindTos);
		}
		binding.to = tos;
	}
}

function resolveDataTargetPath(targetPath, source, contextCb) {
	// Iteratively process targetPath, resolving ~a.b.c paths for contextual parameters
	var path, bindtoOb, to, l, obsCtxPrm, view, topCp, data;

	while (targetPath && targetPath !== _ocp && (to = contextCb(path = targetPath.split("^").join("."), source)) && (l = to.length)) {
		if (obsCtxPrm = to[0]._cxp) { // Two-way binding to a contextual parameter reference, ~foo (declared as ~foo=expr on a parent tag)
			topCp = topCp || obsCtxPrm;
			view = to[0][0];
			if (_ocp in view) {
				data = view;
				view = view._vw;
			} else {
				data = view.data;
			}
			topCp.path = targetPath = to[0][1];
			to = [topCp.data = data, targetPath];
				contextCb = $sub._gccb(view);
				if (targetPath._cpfn) { // computed property
					bindtoOb = targetPath;
					bindtoOb.data = to[0];
					bindtoOb._cpCtx = contextCb;
					while (targetPath.sb && targetPath.sb._cpfn) {
						path = targetPath = targetPath.sb;
					}
					path = targetPath.sb || path && path.path;
					targetPath = path ? path.slice(1) : bindtoOb.path;
					to = [
						bindtoOb, // 'exprOb' for this expression and view-binding. So bindtoOb.ob is current object returned by expression.
						targetPath
					];
				} else if (obsCtxPrm.tag && obsCtxPrm.path === _ocp) {
					to = obsCtxPrm;
				}
		} else { // Two-way binding to a helper - e.g. ~address.street, or computed, e.g. ~fullName(), or view property e.g. #data.foo
			to = l>2
				? [to[l-3], to[l-2]] // With path: [object, path]
				: [to[l-2]];         // No path, (e.g. [function] for computed with setter)
		}
		source = to[0];
		targetPath = to[1];
	}
	to = to || [source, path];
	to._cxp = topCp;
	return to;
}

function mergeCtxs(tag, newCtxs, replace) { // Merge updated tagCtxs into tag.tagCtxs
	var tagCtx, newTagCtx,
		view = tag.tagCtx.view,
		tagCtxs = tag.tagCtxs || [tag.tagCtx],
		l = tagCtxs.length,
		refresh = !newCtxs;

	newCtxs = newCtxs || tag._.bnd.call(view.tmpl, (tag.linkCtx || view).data, view, $sub);

	if (replace) {
		// Replace previous tagCtxs by new ones, rather than merging
		tagCtxs = tag.tagCtxs = newCtxs;
		tag.tagCtx = tagCtxs[0];
		addLinkMethods(tag);
	} else {
		while (l--) {
			tagCtx = tagCtxs[l];
			newTagCtx = newCtxs[l];
			$observable(tagCtx.props).setProperty(newTagCtx.props);
			$extend(tagCtx.ctx, newTagCtx.ctx); // We don't support propagating ctx variables, ~foo, observably, to nested views. So extend, not setProperty...
			tagCtx.args = newTagCtx.args;
			if (refresh) {
				tagCtx.tmpl = newTagCtx.tmpl;
			}
		}
	}
	$sub._ths(tag, tagCtxs[0]); // tagHandlersFromProps
	return tagCtxs;
}

//=========
// Disposal
//=========

function clean(elems) {
	// Remove data-link bindings, or contained views
	var l, elem, bindings,
		elemArray = [],
		len = elems.length,
		i = len;
	while (i--) {
		// Copy into an array, so that deletion of nodes from DOM will not cause our 'i' counter to get shifted
		// (Note: This seems as fast or faster than elemArray = [].slice.call(elems); ...)
		elemArray.push(elems[i]);
	}
	i = len;
	while (i--) {
		elem = elemArray[i];
		if (elem.parentNode) {
			// Has not already been removed from the DOM
			if (bindings = elem._jsvBnd) {
				// Get propertyChange bindings for this element
				// This may be an element with data-link, or the opening script marker node for a data-linked tag {^{...}}
				// bindings is a string with the syntax: "(&bindingId)*"
				bindings = bindings.slice(1).split("&");
				elem._jsvBnd = "";
				l = bindings.length;
				while (l--) {
					// Remove associated bindings
					removeViewBinding(bindings[l], elem._jsvLkEl, elem); // unbind bindings with this bindingId on this view
				}
			}
			disposeTokens(markerNodeInfo(elem) + (elem._df || ""), elem);
		}
	}
}

function removeViewBinding(bindId, linkedElemTag, elem) {
	// Unbind
	var objId, linkCtx, tag, object, obsId, tagCtxs, l, map, linkedElem, trigger, view, tagCtx, linkedElems, allLinkedElems,
		binding = bindingStore[bindId];

	if (linkedElemTag) {
		elem._jsvLkEl = undefined;
	} else if (binding && (!elem || elem === binding.elem)) { // Test that elem is actually binding.elem, since cloned elements can have inappropriate markerNode info
		delete bindingStore[bindId]; // Delete already, so call to onDispose handler below cannot trigger recursive deletion (through recursive call to jQuery cleanData)
		for (objId in binding.bnd) {
			object = binding.bnd[objId];
			obsId = binding.cbId;
			if ($isArray(object)) {
				$([object]).off(arrayChangeStr + obsId).off(propertyChangeStr + obsId); // There may be either or both of arrayChange and propertyChange
			} else {
				$(object).off(propertyChangeStr + obsId);
			}
			delete binding.bnd[objId];
		}

		if (linkCtx = binding.linkCtx) {
			if (tag = linkCtx.tag) {
				if (tagCtxs = tag.tagCtxs) {
					l = tagCtxs.length;
					while (l--) {
						tagCtx = tagCtxs[l];
						if (map = tagCtx.map) {
							map.unmap(); //unobserve
						}
						// Copy linkedElems in case tag.linkedElem or tag.linkedElems are undefined in onUnbind
						if (linkedElems = tagCtx.linkedElems) {
							allLinkedElems = (allLinkedElems || []).concat(linkedElems);
						}
					}
				}

				if (tag.onUnbind) {
					tag.onUnbind(tag.tagCtx, linkCtx, tag.ctx, true);
				}
				if (tag.onDispose) {
					tag.onDispose();
				}

				if (!tag._elCnt) {
					if (tag._prv) {
						tag._prv.parentNode.removeChild(tag._prv);
					}
					if (tag._nxt) {
						tag._nxt.parentNode.removeChild(tag._nxt);
					}
				}
			}

			linkedElems = allLinkedElems || [$(linkCtx.elem)];
			l = linkedElems.length;
			while (l--) {
				linkedElem = linkedElems[l];
				if (trigger = linkedElem && linkedElem[0] && linkedElem[0]._jsvTr) {
					bindTriggerEvent(linkedElem, trigger, "off");
					linkedElem[0]._jsvTr = undefined;
				}
			}

			view = linkCtx.view;
			if (view.type === "link") {
				view.parent.removeViews(view._.key, undefined, true); // A "link" view is associated with the binding, so should be disposed with binding.
			} else {
				delete view._.bnds[bindId];
			}
		}
		delete cbBindingsStore[binding.cbId];
	}
}

function $unlink(to) {
	if (to) {
		to = to.jquery ? to : $(to);
		to.each(function() {
			var innerView;
			//TODO fix this for better perf. Rather that calling inner view multiple times which does querySelectorAll each time, consider a single querySelectorAll
			// or simply call view.removeViews() on the top-level views under the target 'to' node, then clean(...)
			while ((innerView = $view(this, true)) && innerView.parent) {
				innerView.parent.removeViews(innerView._.key, undefined, true);
			}
			clean(this.getElementsByTagName("*"));
		});
		clean(to);
	} else {
		// Call to $.unlink() is equivalent to $.unlink(true, "body")
		if (activeBody) {
			$(activeBody)
				.off(elementChangeStr, onElemChange)
				.off('blur.jsv', '[contenteditable]', onElemChange);
			activeBody = undefined;
		}
		topView.removeViews();
		clean(document.body.getElementsByTagName("*"));
	}
}

//========
// Helpers
//========

function inputAttrib(elem) {
	return elem.type === CHECKBOX ? elem[CHECKED] : elem.value;
}

function changeHandler(view, name, tag) {
	// Get onBeforeChange, onAfterChange, onAfterCreate handler - if there is one;
	return tag && tag[name] || view.ctx[name] && view.ctxPrm(name) || $views.helpers[name];
}

//========================== Initialize ==========================

//=====================
// JsRender integration
//=====================

addLinkMethods($sub.View.prototype); // Modify the View prototype to include link methods

$sub.onStore.template = function(name, item, parentTmpl) {
	if (item === null) {
		delete $.link[name];
		delete $.render[name];
	} else {
		item.link = tmplLink;

		if (name && !parentTmpl && name !== "jsvTmpl") {
			$.render[name] = item;
			$.link[name] = function() {
				return tmplLink.apply(item, arguments);
			};
		}
	}
};

$sub.viewInfos = viewInfos; // Expose viewInfos() as public helper method

// Define JsViews version of delimiters(), and initialize
($viewsSettings.delimiters = function() {
	// Run delimiters initialization in context of jsrender.js
	var ret = oldJsvDelimiters.apply(0, arguments);

	if (oldJsvDelimiters !== $viewsDelimiters) {
		// If JsRender was loaded before JsViews, then need also to initialize and set globals in that JsRender instance
		ret = $viewsDelimiters.apply(0, arguments);
	}

	// Data-linking must use new delimiters
	rTagDatalink = new RegExp("(?:^|\\s*)([\\w-]*)(\\" + linkChar + ")?(\\" + delimOpenChar1 + $sub.rTag + "(:\\w*)?\\" + delimCloseChar0 + ")", "g");
	return ret;
})(); // jshint ignore:line

$sub.addSetting("trigger");

//====================================
// Additional members for linked views
//====================================

function transferViewTokens(prevNode, nextNode, parentElem, id, viewOrTagChar, refresh) {
	// Transfer tokens on prevNode of viewToRemove/viewToRefresh to nextNode or parentElem._df
	// view marker tokens: #m_...VIEW.../m_
	// tag marker tokens: #m^...TAG..../m^

	var i, l, vwInfos, vwInfo, viewOrTag, viewId, tokens,
		precedingLength = 0,
		emptyView = prevNode === nextNode;

	if (prevNode) {
		// prevNode is either the first node in the viewOrTag, or has been replaced by the vwInfos tokens string
		vwInfos = viewInfos(prevNode) || [];
		for (i = 0, l = vwInfos.length; i < l; i++) {
			// Step through views or tags on the prevNode
			vwInfo = vwInfos[i];
			viewId = vwInfo.id;
			if (viewId === id && vwInfo.ch === viewOrTagChar) {
				if (refresh) {
					// This is viewOrTagToRefresh, this is the last viewOrTag to process...
					l = 0;
				} else {
					// This is viewOrTagToRemove, so we are done...
					break;
				}
			}
			if (!emptyView) {
				viewOrTag = vwInfo.ch === "_"
					? viewStore[viewId]                 // A view: "#m_" or "/m_"
					: bindingStore[viewId].linkCtx.tag; // A tag   "#m^" or "/m^"
				if (vwInfo.open) {                    // A "#m_" or "#m^" token
					viewOrTag._prv = nextNode;
				} else if (vwInfo.close) {            // A "/m_" or "/m^" token
					viewOrTag._nxt = nextNode;
				}
			}
			precedingLength += viewId.length + 2;
		}

		if (precedingLength) {
			prevNode.setAttribute(jsvAttrStr, prevNode.getAttribute(jsvAttrStr).slice(precedingLength));
		}
		tokens = nextNode ? nextNode.getAttribute(jsvAttrStr) : parentElem._df;
		if (l = tokens.indexOf("/" + id + viewOrTagChar) + 1) {
			tokens = vwInfos._tkns.slice(0, precedingLength) + tokens.slice(l + (refresh ? -1 : id.length + 1));
		}
		if (tokens) {
			if (nextNode) {
				// If viewOrTagToRemove was an empty viewOrTag, we will remove both #n and /n
				// (and any intervening tokens) from the nextNode (=== prevNode)
				// If viewOrTagToRemove was not empty, we will take tokens preceding #n from prevNode,
				// and concatenate with tokens following /n on nextNode
				nextNode.setAttribute(jsvAttrStr, tokens);
			} else {
				setDefer(parentElem, tokens);
			}
		}
	} else {
		// !prevNode, so there may be a deferred nodes token on the parentElem. Remove it.
		setDefer(parentElem, removeSubStr(parentElem._df, "#" + id + viewOrTagChar));
		if (!refresh && !nextNode) {
			// If this viewOrTag is being removed, and there was no .nxt, remove closing token from deferred tokens
			setDefer(parentElem, removeSubStr(parentElem._df, "/" + id + viewOrTagChar));
		}
	}
}

function disposeTokens(tokens, elem) {
	var i, l, vwItem, vwInfos;
	if (vwInfos = viewInfos(tokens, true, rOpenMarkers)) {
		for (i = 0, l = vwInfos.length; i < l; i++) {
			vwItem = vwInfos[i];
			if (vwItem.ch === "_") {
				if ((vwItem = viewStore[vwItem.id]) && vwItem.type && (!elem || vwItem._prv === elem || vwItem.parentElem === elem )) {
					// If this is the _prv (prevNode) for a view, remove the view
					// - unless view.type is undefined, in which case it is already being removed
					// (or unless the elem is not related - e.g. a cloned element which 'accidentally' picked up the data-jsv atttribute of the ._df expando)
					vwItem.parent.removeViews(vwItem._.key, undefined, true);
				}
			} else {
				removeViewBinding(vwItem.id, undefined, elem); // unbind bindings with this bindingId on this view
			}
		}
	}
}

//============================================
// Add link methods to data-linked view or tag
//============================================

function updateValue(val, index, tagElse, bindId, ev) {
// Observably update a data value targeted by bindTo
// Called when linkedElem changes: called as updateValue(val, index, tagElse, bindId, ev) - this: undefined
// Called directly as tag.updateValue(val, index, tagElse) - this: tag
	var values = [];
	if (this && this._tgId) {
		bindId = this;
	}
	values[index||0] = val;
	updateValues(values, tagElse, bindId, ev);
	return this;
}

function setValues() {
	var args = arguments,
		m = args.length;

	if (!m) {
		args = this.tag.cvtArgs(true, this.index); // setValues() with no arguments calls setValue with boundArgs values
		m = args.length;
	}
	while (m--) {
		this.tag.setValue(args[m], m, this.index);
	}
}

function addLinkMethods(tagOrView) { // tagOrView is View prototype or tag instance

	var l, m, tagCtx, boundProps, bindTo, key, theTag, theView;

	tagOrView.contents = function(deep, select) {
		// For a view, a tag or a tagCtx, return jQuery object with the content nodes,
		if (deep !== !!deep) {
			// deep not boolean, so this is contents(selector)
			select = deep;
			deep = undefined;
		}
		var filtered,
			nodes = $(this.nodes());
		if (nodes[0]) {
			filtered = select ? nodes.filter(select) : nodes;
			nodes = deep && select ? filtered.add(nodes.find(select)) : filtered;
		}
		return nodes;
	};

	tagOrView.nodes = function(withMarkers, prevNode, nextNode) {
		// For a view, a tag or a tagCtx, return top-level nodes
		// Do not return any script marker nodes, unless withMarkers is true
		// Optionally limit range, by passing in prevNode or nextNode parameters

		var node,
			self = this.contentView || this, // If tagCtx, use tagCtx.contentView
			elCnt = self._elCnt,
			prevIsFirstNode = !prevNode && elCnt,
			nodes = [];

		if (!self.args) { // If tagCtx with no content (so no contentView) self is tagCtx: return empty [];
			prevNode = prevNode || self._prv;
			nextNode = nextNode || self._nxt;

			node = prevIsFirstNode
				? (prevNode === self._nxt
					? self.parentElem.lastSibling
					: prevNode)
				: (self.inline === false
					? prevNode || self.linkCtx.elem.firstChild
					: prevNode && prevNode.nextSibling);

			while (node && (!nextNode || node !== nextNode)) {
				if (withMarkers || elCnt || node.tagName !== SCRIPT) {
					// All the top-level nodes in the view
					// (except script marker nodes, unless withMarkers = true)
					// (Note: If a script marker node, viewInfo.elCnt undefined)
					nodes.push(node);
				}
				node = node.nextSibling;
			}
		}
		return nodes;
	};

	tagOrView.childTags = function(deep, tagName) {
		// For a view, a tagor a tagCtx, return child tags - at any depth, or as immediate children only.
		if (deep !== !!deep) {
			// deep not boolean, so this is childTags(tagName) - which looks for top-level tags of given tagName
			tagName = deep;
			deep = undefined;
		}

		var self = this.contentView || this, // If tagCtx, use tagCtx.contentView
			view = self.link ? self : self.tagCtx.view, // This may be a view or a tag. If a tag, get the view from tag.tagCtx.view
			prevNode = self._prv,
			elCnt = self._elCnt,
			tags = [];

		if (!self.args) { // If tagCtx with no content (so no contentView) self is tagCtx: return empty [];
			view.link(
				undefined,
				self.parentElem,
				elCnt ? prevNode && prevNode.previousSibling : prevNode,
				self._nxt,
				undefined,
				{get:{
					tags: tags,
					deep: deep,
					name: tagName,
					id: self.link ? self._.id + "_" : self._tgId + "^"
				}}
			);
		}
		return tags;
	};

	if (tagOrView._is === "tag") {
		//=======================
		// This is a TAG instance
		//=======================

		theTag = tagOrView;

		m = theTag.tagCtxs.length;
		while (m--) {
			tagCtx = theTag.tagCtxs[m];

			tagCtx.setValues = setValues;
			tagCtx.cvtArgs = convertArgs;
			tagCtx.bndArgs = convertBoundArgs;
			tagCtx.contents = tagOrView.contents;
			tagCtx.childTags = tagOrView.childTags;
			tagCtx.nodes = tagOrView.nodes;
		}

		boundProps = theTag.boundProps = theTag.boundProps || [];
		if (bindTo = theTag.linkTo ? ["linkTo"] : theTag.bindTo) {
			l = bindTo.length;
			while (l--) {
				key = bindTo[l];
				if (key + "" === key) {
					bindTo[key] = 1;
					if ($.inArray(key, boundProps) < 0) {
						boundProps.push(key); // Add any 'bindTo' props to boundProps array. (So two-way binding works without writing ^foo=expression)
					}
				}
			}
		}

		theTag.setValue = $sub._gm(theTag.constructor.prototype.setValue, function(val, index, tagElse) {
			if (!arguments.length) { // tag.setValue() calls setValue(val, index) for each parameter in bindTo array
				theTag.setValues(); // = theTag.bndArgs()
				return theTag;
			}
			var linkedElem, linkedEl, linkedTag,
				linkedCtxParam = theTag.linkedCtxParam,
				tagCtx = theTag.tagCtxs[tagElse || 0],
				props = tagCtx.props,
				linkCtx = theTag.linkCtx,
				linkedElems = tagCtx.linkedElems || theTag.linkedElem && [theTag.linkedElem];

			if (val !== undefined) {
				theTag.base.call(theTag , val, index, tagElse);
			} else if (theTag.getValue && (val = theTag.getValue(tagElse)) && val !== undefined) {
				// If bound args are not initialized, and getValue is defined, use getValue to initialize
				if (theTag.bindTo.length > 1) {
					val = val[index]; // getVal returns value if tag.bndArgs() (and bindTo) length is 1, or array of values if bindTo.length > 1
				}
				if (linkedCtxParam && linkedCtxParam[index]) {
					// Values of tag contextual param were already intialized (during rendering) so need to observably update to values from tag.getValue()
					$.observable(tagCtx.ctx[linkedCtxParam[index]][0]).setProperty(_ocp, val);
				}
			}
			if ((linkedElem = linkedElems && linkedElems[index]) && linkedElem[0]) {
				l = linkedElem.length;
				while (l--) {
					linkedEl = linkedElem[l];
					if (theTag._.unlinked) {
						linkedTag = linkedEl._jsvLkEl;
						if (!linkedTag || linkedTag !== theTag) {
							if (linkedTag) {
								val = linkedTag.cvtArgs(true, tagElse)[index]; // Need to use converter of linked tag
							}
							// For data-linked tags, identify the linkedEl with the tag, for "to" binding
							// (For data-linked elements, if not yet bound, we identify later when the linkCtx.elem is bound)
							linkedEl._jsvLkEl = theTag;
							linkedEl._jsvInd = index;
							linkedEl._jsvElse = tagElse;
							bindLinkedElChange(theTag, linkedEl);
							linkedEl._jsvBnd = "&" + theTag._tgId + "+"; // Add a "+" for cloned binding - so removing
							// elems with cloned bindings will not remove the 'parent' binding from the bindingStore.
						}
					}
					if (val !== undefined && !linkedEl._jsvChg && linkCtx._val !== val) {
						if (linkedEl.value !== undefined) {
							if (linkedEl.type === CHECKBOX) {
								linkedEl[CHECKED] = val && val !== "false";
							} else if (linkedEl.type === RADIO) {
								linkedEl[CHECKED] = (linkedEl.value === val);
							} else if ($isArray(val)) {
								linkedEl.value = val; // Don't use jQuery since it replaces array by mapped clone
							} else {
								$(linkedEl).val(val); // Use jQuery for attrHooks - can't just set value (on select, for example)
							}
						} else if (linkedEl.contentEditable === TRUE) {
							linkedEl.innerHTML = val;
						}
					}
					if (props.name) {
						linkedEl.name = linkedEl.name || props.name;
					}
				}
			}
			return theTag;
		});

		theTag.updateValue = updateValue;

		theTag.updateValues = function() {
			return updateValues(arguments, undefined, this);
		};

		theTag.setValues = function() {
			var m = arguments.length ? 1 : theTag.tagCtxs.length;
			while (m--) {
				setValues.apply(theTag.tagCtxs[m], arguments);
			}
		};

		theTag.refresh = function(sourceValue) {
			var attr,
				linkCtx = theTag.linkCtx,
				view = theTag.tagCtx.view;

			if (theTag.onUnbind) {
				theTag.onUnbind(theTag.tagCtx, linkCtx, theTag.ctx);
			}
			attr = theTag.inline ? HTML : (linkCtx.attr || defaultAttr(theTag.parentElem, true));
			sourceValue = $sub._tag(theTag, view, view.tmpl, mergeCtxs(theTag), true); // Get rendered HTML for tag, based on refreshed tagCtxs
			updateContent(sourceValue, linkCtx, attr, theTag);
			callAfterLink(theTag);
			return theTag;
		};

		theTag.domChange = function() { // domChange notification support
			var elem = this.parentElem,
				hasListener = $.hasData(elem) && $._data(elem).events,
				domChangeNotification = "jsv-domchange";

			if (hasListener && hasListener[domChangeNotification]) {
				// Only trigger handler if there is a handler listening for this event. (Note using triggerHandler - so no event bubbling.)
				$(elem).triggerHandler(domChangeNotification, arguments);
			}
		};

		//====================================
		// End of added link methods for TAG
		//====================================
	} else {
		//=========================
		// This is a VIEW prototype
		//=========================

		theView = tagOrView;

		// Note: a linked view will also, after linking have nodes[], _prv (prevNode), _nxt (nextNode) ...
		theView.addViews = function(index, dataItems) {
			// if view is not an array view, do nothing
			var i, viewsCount,
				view = this,
				itemsCount = dataItems.length,
				views = view.views;

			if (!view._.useKey && itemsCount) {
				// view is of type "array"
				viewsCount = views.length + itemsCount;

				if (viewsCount === view.data.length // If views not already synced to array (e.g. triggered by array.length propertyChange - jsviews/issues/301)
						&& renderAndLink(view, index, view.tmpl, views, dataItems, view.ctx) !== false) {
					if (!view._.srt) { // Not part of a 'sort' on refresh
						view.fixIndex(index + itemsCount);
					}
				}
			}
		};

		theView.removeViews = function(index, itemsCount, keepNodes, isMove) {
			// view.removeViews() removes all the child views
			// view.removeViews(index) removes the child view with specified index or key
			// view.removeViews(index, count) removes the specified nummber of child views, starting with the specified index
			function removeView(index) {
				var id, bindId, parentElem, prevNode, nextNode, nodesToRemove,
					viewToRemove = views[index];

				if (viewToRemove && viewToRemove.link) {
					id = viewToRemove._.id;
					if (!keepNodes) {
						// Remove the HTML nodes from the DOM, unless they have already been removed, including nodes of child views
						nodesToRemove = viewToRemove.nodes();
					}

					// Remove child views, without removing nodes
					viewToRemove.removeViews(undefined, undefined, true);

					viewToRemove.type = undefined; // Set type to undefined: used as a flag that this view is being removed
					prevNode = viewToRemove._prv;
					nextNode = viewToRemove._nxt;
					parentElem = viewToRemove.parentElem;
					// If prevNode and nextNode are the same, the view is empty
					if (!keepNodes) {
						// Remove the HTML nodes from the DOM, unless they have already been removed, including nodes of child views
						if (viewToRemove._elCnt) {
							// if keepNodes is false (and transferring of tokens has not already been done at a higher level)
							// then transfer tokens from prevNode which is being removed, to nextNode.
							transferViewTokens(prevNode, nextNode, parentElem, id, "_");
						}
						$(nodesToRemove).remove();
					}
					if (!viewToRemove._elCnt) {
						try {
							prevNode.parentNode.removeChild(prevNode); // (prevNode.parentNode is parentElem, except if jQuery Mobile or similar has inserted an intermediate wrapper
							nextNode.parentNode.removeChild(nextNode);
						} catch (e) {}
					}
					setArrayChangeLink(viewToRemove);
					for (bindId in viewToRemove._.bnds) {
						removeViewBinding(bindId);
					}
					delete viewStore[id];
				}
			}

			var current, childView, viewsCount,
				view = this,
				isArray = !view._.useKey,
				views = view.views;

			if (isArray) {
				viewsCount = views.length;
			}
			if (index === undefined) {
				// Remove all child views
				if (isArray) {
					// views and data are arrays
					current = viewsCount;
					while (current--) {
						removeView(current);
					}
					view.views = [];
				} else {
					// views and data are objects
					for (childView in views) {
						// Remove by key
						removeView(childView);
					}
					view.views = {};
				}
			} else {
				if (itemsCount === undefined) {
					if (isArray) {
						// The parentView is data array view.
						// Set itemsCount to 1, to remove this item
						itemsCount = 1;
					} else {
						// Remove child view with key 'index'
						removeView(index);
						delete views[index];
					}
				}
				if (isArray && itemsCount
					&& (isMove || viewsCount - itemsCount === view.data.length)) { // If views not already synced to array (e.g. triggered by array.length propertyChange - jsviews/issues/301)
					current = index + itemsCount;
					// Remove indexed items (parentView is data array view);
					while (current-- > index) {
						removeView(current);
					}
					views.splice(index, itemsCount);
					if (!view._.srt) {
						view.fixIndex(index);
					}
				}
			}
		};

		theView.moveViews = function(oldIndex, index, itemsCount) {
			function parts(itemView, str) {
				return RegExp("^(.*)(" + (str ? "\\/" : "#") + itemView._.id + "_.*)$").exec(str || itemView._prv.getAttribute(jsvAttrStr));
			}
			function setPrv(itemView, tokens) {
				itemView._prv.setAttribute(jsvAttrStr, tokens);
			}
			var nodes, childView, nxtView, insertBefore, viewId,
				view = this,
				selfNxt = view._nxt,
				views = view.views,
				backwards = index < oldIndex,
				firstChange = backwards ? index : oldIndex,
				lastChange = backwards ? oldIndex : index,
				i = index,
				movedNodes = [],

				viewsToMove = views.splice(oldIndex, itemsCount); // remove

			if (index > views.length) {
				index = views.length;
			}
			views.splice.apply(views, [index, 0].concat(viewsToMove)); //re-insert

			itemsCount = viewsToMove.length;
			insertBefore = index + itemsCount;
			lastChange += itemsCount;

			for (i; i < insertBefore; i++) {
				childView = views[i];
				nodes = childView.nodes(true);
				movedNodes = view._elCnt ? movedNodes.concat(nodes) : movedNodes.concat(childView._prv, nodes, childView._nxt);
			}
			movedNodes = $(movedNodes);

			if (insertBefore < views.length) {
				movedNodes.insertBefore(views[insertBefore]._prv);
			} else if (selfNxt) {
				movedNodes.insertBefore(selfNxt);
			} else {
				movedNodes.appendTo(view.parentElem);
			}

			if (view._elCnt) {
				var afterParts,
					endChange = backwards ? firstChange + itemsCount : lastChange - itemsCount,
					beforeView = views[firstChange-1],
					startView = views[firstChange],
					endView = views[endChange],
					afterView = views[lastChange],
					startParts = parts(startView),
					endParts = parts(endView);

				setPrv(startView, endParts[1] + startParts[2]);
				if (afterView) {
					afterParts = parts(afterView);
					setPrv(afterView, startParts[1] + afterParts[2]);
				} else {
					if (selfNxt) {
						afterParts = parts(view, selfNxt.getAttribute(jsvAttrStr));
						selfNxt.setAttribute(jsvAttrStr, startParts[1] + afterParts[2]);
					} else {
						afterParts = parts(view, view.parentElem._df);
						setDefer(view.parentElem, startParts[1] + afterParts[2]);
					}
				}
				setPrv(endView, afterParts[1] + endParts[2]);
				if (beforeView) {
					beforeView._nxt = startView._prv;
				} else {
					view._prv = startView._prv;
				}
				views[endChange-1]._nxt = endView._prv;
				views[lastChange-1]._nxt = afterView ? afterView._prv : selfNxt;
			}
			view.fixIndex(firstChange);
		};

		theView.refresh = function() {
			var view = this,
				parent = view.parent;

			if (parent) {
				renderAndLink(view, view.index, view.tmpl, parent.views, view.data, undefined, true);
				setArrayChangeLink(view);
			}
		};

		theView.fixIndex = function(fromIndex) {
			// Fixup index on following view items...
			var views = this.views,
				index = views.length;
			while (fromIndex < index--) {
				if (views[index].index !== index) {
					$observable(views[index]).setProperty("index", index);
					// This is fixing up index, but not key, and not index on child views. From child views, use view.getIndex()
				}
			}
		};

		theView.link = viewLink;

		//====================================
		// End of added link methods for VIEW
		//====================================
	}
}

//========================
// JsViews-specific converters
//========================

$converters.merge = function(val) {
	// Special converter used in data-linking to space-separated lists, such as className:
	// Currently only supports toggle semantics - and has no effect if toggle string is not specified
	// data-link="class{merge:boolExpr toggle=className}"
	var regularExpression,
		currentValue = this.linkCtx.elem.className,
		toggle = this.tagCtx.props.toggle;

	if (toggle) {
		// We are toggling the class specified by the toggle property,
		// and the boolean val binding is driving the insert/remove toggle

		regularExpression = toggle.replace(/[\\^$.|?*+()[{]/g, "\\$&");
		// Escape any regular expression special characters (metacharacters) within the toggle string
		regularExpression = "(\\s(?=" + regularExpression + "$)|(\\s)|^)(" + regularExpression + "(\\s|$))";
		// Example: /(\s(?=myclass$)|(\s)|^)?(myclass(\s|$))/ - so matches (" myclass" or " " or ^ ) followed by ("myclass " or "myclass$") where ^/$ are beginning/end of string
		currentValue = currentValue.replace(new RegExp(regularExpression), "$2");
		val = currentValue + (val ? (currentValue && " ") + toggle : "");
	}
	return val;
};

//========================
// JsViews-specific tags
//========================

$tags({
	on: {
		attr: NONE,
		init: function(tagCtx) {
			var content,
				tag = this,
				i = 0,
				args = tagCtx.args, // [events,] [selector,] handler
				l = args.length;

			for (; i<l && !$isFunction(args[i]); i++); // Handler is first arg of type function
			tag._hi = l>i && i+1; // handler index
			if (tag.inline) {
				if (!$sub.rTmpl.exec(content = $.trim(tagCtx.tmpl.markup))) {
					// Inline {^{on}} tag with no content (or external template content) or with content containing
					// no HTML or JsRender tags: We will wrap the (text) content, or the operation name in a <button> element
					// (Otherwise we will attach the handler to the element content after data-linking)
					tag.template = "<button>" + (content || tagCtx.params.args[i] || "noop") + "</button>";
				}
				tag.attr = HTML;
			}
		},
		onBind: function() {
			if (this.template) { // {^{on/}} with no content has template rendering <button>. Make it the mainElem, so we can set id, size or class
				this.mainElem = this.contents("button");
			}
		},
		onAfterLink: function(tagCtx, linkCtx) {
			var handler, params, find, activeElem,
				tag = this,
				i = tag._hi,
				args = tagCtx.args, // [events,] [selector,] handler
				l = args.length,
				props = tagCtx.props,
				data = props.data,
				view = tagCtx.view,
				contextOb = props.context; // Context ('this' pointer) for attached handler

			if (i) { // There is a handler
				handler = args[i-1];
				params = args.slice(i); // Subsequent args are params
				args = args.slice(0, i-1); // Preceding args (if any) are events and selector
				tag._sel = args[1]; // Selector for descendant elements - for delegated events on those elements, delegating to the activeElem

				activeElem = tag.activeElem = tag.activeElem || $(tag.inline
					? (tag._sel = args[1] || "*", tag.parentElem)
					// If inline, attach to child elements of tag parent element (filtered by selector argument if provided.
					// (In handler we'll filter out events from sibling elements preceding or following tag.)
					// This allows us to use the delegated pattern where the attached event works even for added elements satisfying the selector
					: linkCtx.elem);

				if (!contextOb) {
					// Get the path for the preceding object (context object) of handler (which is the last arg), compile function
					// to return that context object, and run compiled function against data
					contextOb = /^(.*)[\.^][\w$]+$/.exec(tagCtx.params.args.slice(-params.length - 1)[0]);
					contextOb = contextOb && $sub.tmplFn(delimOpenChar1 + ":" + contextOb[1] + delimCloseChar0, view.tmpl, true)(linkCtx.data, view);
				}

				if (tag._evs) {
					tag.onUnbind();
				}

				activeElem.on(
					tag._evs = args[0] || "click", // events defaults to "click"
					tag._sel,
					data == undefined ? null : data,
					tag._hlr = function hndlr(ev) {
						var nodes, length,
							found = !tag.inline;

						if (!found) { // If inline, filter out events from sibling elements preceding or following tag.
							nodes = tag.contents("*");
							l = nodes.length;
							while (!found && l--) {
								if (nodes[l].contains(ev.target)) {
									found = true;
								}
							}
						}
						if (found) { // target elem is indeed within the tag, so call the {on} handler
							return handler.apply(contextOb || linkCtx.data, [].concat(
								params, // e.g. par1, par2
								ev,
								{change: ev.type, view: view, linkCtx: linkCtx},
								params.slice.call(arguments, 1) // If triggering event (e.g. jsv-domchange) has additional arguments after ev, pass them too
							));
							// for {on 'click' handler par1 par2} use handler(par1, par2, ev, domchangeEventArgs)
							// for {on 'jsv-domchange' handler par1 par2} use handler(par1, par2, ev, domchangeEventArgs, tagCtx, linkCtx, observableEventArgs)
						}
					}
				);
			}
		},
		onUpdate: false,
		onUnbind: function() {
			var self = this;
			if (self.activeElem) {
				self.activeElem.off(self._evs, self._sel, self._hlr);
			}
		},
		contentCtx: true,
		setSize: true,
		dataBoundOnly: true
	},
	radiogroup: {
		init: function(tagCtx) {
			this.name = tagCtx.props.name || (Math.random() + "jsv").slice(9);
		},
		onBind: function(tagCtx, linkCtx) {
			var domChngCntnr, $linkedElem, l,
				tag = this;

			if (tag.inline) {
				// If the first element is owned by (rendered by) this tag (not by a childTag such as {^{for}})
				// use it as container for detecting dom changes
				domChngCntnr = tag.contents("*")[0];
				domChngCntnr = domChngCntnr && $view(domChngCntnr).ctx.tag === tag.parent ? domChngCntnr : tag.parentElem;
				$linkedElem = tag.contents(true, "input[type=radio]");
			} else {
				domChngCntnr = linkCtx.elem;
				$linkedElem = $("input[type=radio]", linkCtx.elem);
			}
			tag.linkedElem = $linkedElem;
			l = $linkedElem.length;
			while (l--) {
				// Configure the name for each radio input element
				$linkedElem[l].name = $linkedElem[l].name || tag.name;
			}
			// Establish a domchange listener in case this radiogroup wraps a {^{for}} or {^{if}} or similar which might dynamically insert new radio input elements
			$(domChngCntnr).on("jsv-domchange", function(ev, forOrIfTagCtx) {
				var linkedElem, val,
					parentTags = forOrIfTagCtx.ctx.parentTags;
				if (!tag.inline || domChngCntnr !== tag.parentElem // The domChngCntnr is specific to this tag
					// The domChngCntnr is the parentElem of this tag, so need to make sure dom change event is for
					// a content change within this tag, not outside it.
					|| parentTags && parentTags[tag.tagName] === tag) {
					// Contents have changed so recreate $linkedElem for the radio input elements (including possible new one just inserted)
					val = tag.cvtArgs()[0];
					$linkedElem = tag.linkedElem = tag.contents(true, "input[type=radio]");
					l = $linkedElem.length;
					while (l--) {
						// Configure binding and name for each radio input element
						linkedElem = $linkedElem[l];
						linkedElem._jsvLkEl = tag;
						linkedElem.name = linkedElem.name || tag.name;
						linkedElem._jsvBnd = "&" + tag._tgId + "+";
						linkedElem.checked = val === linkedElem.value;
					}
					tag.linkedElems = tagCtx.linkedElems = [$linkedElem];
				}
			});
		},
		onUpdate: false, // don't rerender
		contentCtx: true,
		dataBoundOnly: true
	}
});

$extend($tags["for"], {
	//onUpdate: function(ev, eventArgs, newTagCtxs) {
		//Consider adding filtering for perf optimization. However the below prevents update on some scenarios which _should_ update - namely when there is another array on which for also depends.
		//var i, l, tci, prevArg;
		//for (tci = 0; (prevArg = this.tagCtxs[tci]) && prevArg.args.length; tci++) {
		//	if (prevArg.args[0] !== newTagCtxs[tci].args[0]) {
		//		return true;
		//	}
		//}
		//return false;
	//},
	onArrayChange: function(ev, eventArgs, tagCtx, linkCtx) {
		var arrayView,
			target = ev.target,
			targetLength = target.length,
			tag = this,
			change = eventArgs.change;
		if (tag._.noVws // Child views not supported because target is not html - e.g. data-link="title{for ...}"
			|| tag.tagCtxs[1] && ( // There is an {{else}}
				change === "insert" && targetLength === eventArgs.items.length // inserting, and new length is same as inserted length, so going from 0 to n
				|| change === "remove" && !targetLength // removing , and new length 0, so going from n to 0
			)) {
			tag.refresh();
		} else {
			for (arrayView in tag._.arrVws) {
				arrayView = tag._.arrVws[arrayView];
				if (arrayView.data === target) {
					arrayChangeHandler.apply(arrayView, arguments);
				}
			}
		}
		tag.domChange(tagCtx, linkCtx, eventArgs);
		ev.done = true;
	},
	onAfterLink: function(tagCtx, linkCtx) {
		var arrHandler, arrBinding, data,
			tag = this,
			i = 0,
			arrayBindings = tag._ars || {},
			tagCtxs = tag.tagCtxs,
			l = tagCtxs.length,
			selected = tag.selected || 0;

		for (; i <= selected; i++) {
			tagCtx = tagCtxs[i];    // loop through tagCtxs up to selected
			data = tagCtx.map
				? tagCtx.map.tgt      // 'data' is mapped data
				: tagCtx.args.length
					? tagCtx.args[0]    // or args[0]
					: tagCtx.view.data; // or defaults to current data.

			if ((arrBinding = arrayBindings[i]) && data !== arrBinding[0]) { // Is there previous array data on this tagCtx, different from new data
				$observe(arrBinding[0], arrBinding[1], true); //unobserve previous array
				delete arrayBindings[i];
			}
			if (!arrayBindings[i] && $isArray(data)) {
				(function() {
					var tagCt = tagCtx;
					$observe(data, arrHandler = function(ev, eventArgs) {
						tag.onArrayChange(ev, eventArgs, tagCt, linkCtx);
					});
					arrayBindings[i] = [data, arrHandler]; // Store array data and arrayChangeHandler on tag._ars[i]
				})();
			}
		}
		for (i = selected + 1; i < l; i++) { // If there were previous bindings on later tagCtxs, remove them
			if (arrBinding = arrayBindings[i]) {
				$observe(arrBinding[0], arrBinding[1], true); //unobserve previous binding
				delete arrayBindings[i];
			}
		}
		tag._ars = arrayBindings;
	},
	onDispose: function() {
		var l, tag = this;
		for (l in tag._ars) {
			$observe(tag._ars[l][0], tag._ars[l][1], true); //unobserve
		}
	}
});

$extend($tags["if"], {
	onUpdate: function(ev, eventArgs, newTagCtxs) {
		var prevArg, different,
			tci = 0;
		for (; (prevArg = this.tagCtxs[tci]); tci++) {
			different = prevArg.props.tmpl !== newTagCtxs[tci].props.tmpl || prevArg.args.length && !(prevArg = prevArg.args[0]) !== !newTagCtxs[tci].args[0];
			if ((!this.convert && !!prevArg) || different) {
				return different;
				// If there is not a change of template, and there is no converter, and newArg and prevArg are both truthy, return false to cancel update.
				// (Even if values on later elses are different, we still don't want to update, since rendered output would be unchanged)
				// If newArg and prevArg are different, return true, to update
				// If newArg and prevArg are both falsey, move to the next {{else ...}}
			}
		}
		// Boolean value of all args are unchanged (falsey), so return false to cancel update
		return false;
	},
	onAfterLink: function(tagCtx, linkCtx, ctx, ev, eventArgs) {
		if (eventArgs) {
			this.domChange(tagCtx, linkCtx, eventArgs);
		}
	}
});

function observeProps(map, ev, eventArgs) {
	if (eventArgs.change === "set") {
		var target = map.tgt,
			l = target.length;
		while (l--) {
			if (target[l].key === eventArgs.path) {
				break;
			}
		}
		if (l === -1) {
			if (eventArgs.path && !eventArgs.remove) {
				$observable(target).insert({key: eventArgs.path, prop: eventArgs.value});
			}
		} else if (eventArgs.remove) {
			$observable(target).remove(l);
		} else {
			$observable(target[l]).setProperty("prop", eventArgs.value);
		}
	}
}

function observeMappedProps(map, ev, eventArgs) {
	var item,
		source = map.src,
		change = eventArgs.change;

	if (change === "set") {
		if (eventArgs.path === "prop") {
			$observable(source).setProperty(ev.target.key, eventArgs.value);
		} else { // path === "key"
			$observable(source).removeProperty(eventArgs.oldValue); // When key is modified observably, remove old one and set new one
			$observable(source).setProperty(eventArgs.value, ev.target.prop);
		}
	} else if (change === "remove") {
		item = eventArgs.items[0];
		$observable(source).removeProperty(item.key);
		delete source[item.key];
	} else if (change === "insert") {
		item = eventArgs.items[0];
		if (item.key) {
			$observable(source).setProperty(item.key, item.prop);
		}
	}
}

function shallowArrayFilter(allPath /*, object, parentObs*/) { // Filter used by {{props}} for the mappedProps target array
	return allPath.indexOf(".") < 0;
}

$tags("props", {
	baseTag: "for",
	dataMap: $views.map({
		getTgt: $tags.props.dataMap.getTgt,
		obsSrc: observeProps,
		obsTgt: observeMappedProps,
		tgtFlt: shallowArrayFilter
	}),
	flow: true
});

//========================
// Extend jQuery namespace
//========================

$extend($, {

	//=======================
	// jQuery $.view() plugin
	//=======================

	view: $view = function(node, inner, type) {
		// $.view() returns top view
		// $.view(node) returns view that contains node
		// $.view(selector) returns view that contains first selected element
		// $.view(nodeOrSelector, type) returns nearest containing view of given type
		// $.view(nodeOrSelector, "root") returns root containing view (child of top view)
		// $.view(nodeOrSelector, true, type) returns nearest inner (contained) view of given type

		function getInnerView(nd, isVl) {
			if (nd) {
				vwInfos = viewInfos(nd, isVl, rOpenViewMarkers);
				for (j = 0, k = vwInfos.length; j < k; j++) {
					if ((view = viewStore[vwInfos[j].id]) && (view = view && type ? view.get(true, type) : view)) {
						break;
					}
				}
			}
		}

		if (inner !== !!inner) {
			// inner not boolean, so this is view(nodeOrSelector, type)
			type = inner;
			inner = undefined;
		}
		var view, vwInfos, i, j, k, l, elems,
			level = 0,
			body = document.body;

		if (node && node !== body && topView._.useKey > 1) {
			// Perf optimization for common cases

			node = "" + node === node
				? $(node)[0]
				: node.jquery
					? node[0]
					: node;

			if (node) {
				if (inner) {
					getInnerView(node._df, true);
					if (!view) {
						// Treat supplied node as a container element and return the first view encountered.
						elems = qsa ? node.querySelectorAll(bindElsSel) : $(bindElsSel, node).get();
						l = elems.length;
						for (i = 0; !view && i < l; i++) {
							getInnerView(elems[i]);
						}
					}
					return view;
				}
				while (node) {
					// Move back through siblings and up through parents to find preceding node which is a _prv (prevNode)
					// script marker node for a non-element-content view, or a _prv (first node) for an elCnt view
					if (vwInfos = viewInfos(node, undefined, rViewMarkers)) {
						l = vwInfos.length;
						while (l--) {
							view = vwInfos[l];
							if (view.open) {
								if (level < 1) {
									view = viewStore[view.id];
									return view && type ? view.get(type) : view || topView;
								}
								level--;
							} else {
								// level starts at zero. If we hit a view.close, then we move level to 1, and we don't return a view until
								// we are back at level zero (or a parent view with level < 0)
								level++;
							}
						}
					}
					node = node.previousSibling || node.parentNode;
				}
			}
		}
		return topView;
	},

	link: $link,
	unlink: $unlink,

	//=====================
	// override $.cleanData
	//=====================
	cleanData: function(elems) {
		if (elems.length && isCleanCall) {
			// Remove JsViews bindings. Also, remove from the DOM any corresponding script marker nodes
			clean(elems);
		}
		oldCleanData.apply($, arguments);
	}
});

// Possible future addition - e.g. for ckeditor tag control
//$views.utility = {
//	validate: function(html) {
//		try {
//			topView.link(undefined, document.createElement("div"), undefined, undefined, html, undefined, undefined, 1);
//		}
//		catch (e) {
//			return e.message;
//		}
//	}
//};

//===============================
// Extend jQuery instance plugins
//===============================

$extend($.fn, {
	link: function(expr, from, context, noIteration, parentView, prevNode, nextNode) {
		return $link(expr, this, from, context, noIteration, parentView, prevNode, nextNode);
	},
	unlink: function() {
		return $unlink(this);
	},
	view: function(inner, type) {
		return $view(this[0], inner, type);
	}
});

//==============================================================================
// Override jQuery methods that call our overridden cleanData, for disposal etc.
//==============================================================================

$.each([HTML, "replaceWith", "empty", "remove"], function(i, name) {
	var oldFn = $.fn[name];
	$.fn[name] = function() {
		var result;
		isCleanCall = 1; // Make sure cleanData does disposal only when coming from these calls.
		try {
			result = oldFn.apply(this, arguments);
		}
		finally {
			isCleanCall = 0;
		}
		return result;
	};
});

//===============
// Extend topView
//===============

$extend(topView = $sub.topView, {tmpl: {links: {}}});

viewStore = {0: topView}; // Top-level view

//===================
// Extend $.views.sub
//===================

$sub._glt = function(elem) { // get linked tags (Used in validate.js)
	var linkCtx,
		regEx = /#(\d*)\^\/\1\^/g,
		linkCtxs = [],
		tokens = markerNodeInfo(elem);

	while (linkCtx = regEx.exec(tokens)) {
		if (linkCtx = bindingStore[linkCtx[1]]) {
			linkCtxs.push(linkCtx.linkCtx.tag);
		}
	}
	return linkCtxs;
};

$sub._gccb = function(view) { // Return a callback for accessing the context of a template/data-link expression - and converting ~foo, #foo etc.
	// TODO Consider exposing or allowing override, as public API
	return function(path, object, depth) {
		// TODO consider only calling the contextCb on the initial token in path '~a.b.c' and not calling again on
		// the individual tokens, 'a', 'b', 'c'... Currently it is called multiple times
		var tokens, tag, items, helper, last, nextPath, l, obsCtxPrm, addedTagCpDep, key, bindTo;
		if (view && path) {
			if (path._cpfn) {
				return path._cpfn.call(view.tmpl, object, view, $sub); // exprOb for computed property
			}
			if (path.charAt(0) === "~") {
				// We return new items to insert into the sequence, replacing the "~a.b.c" string:
				// [helperObject 'a', "a.b.c" currentDataItem] so currentDataItem becomes the object for subsequent paths.
				if (path.slice(0, 4) === "~tag") {
					tag = view.ctx;
					if (path.charAt(4) === ".") {
						// "~tag.xxx"
						tokens = path.slice(5).split(".");
						tag = tag.tag;
					}
					if (tokens) {
						return tag ? [tag, tokens.join("."), object] : [];
					}
				}
				path = path.slice(1).split(".");
				if (helper = view.ctxPrm(last = path.shift(), undefined, true)) {
					if (obsCtxPrm = helper._cxp) { // helper for (contextual parameter ~foo=...) is an array - [view, ctxPrmDependencies ...]
						if (path.length) {
							nextPath = "." + path.join(".");
							last = helper[l = helper.length-1];
							if (last._cpfn) {
								last.sb = nextPath;
								last.bnd = !!depth;
							} else {
								helper[l] = (last + nextPath).replace("#data.", "");
								if (last.slice(0, 5) === "#view") {
									helper[l] = helper[l].slice(6);
									helper.splice(l, 0, view);
								}
							}
						}
						items = [helper]; // Contextual parameter
						if ((tag = obsCtxPrm.tag) && tag.convert) {
							// If there is a converter, it might mix inputs, so tag contextual param needs to depend on all bound args/props.
							bindTo = tag.bindTo || [0];
							l = bindTo.length;
							while (l--) {
								if (depth !== undefined && l !== obsCtxPrm.ind) {
									key = bindTo[l];
									addedTagCpDep = [helper[0], tag.tagCtx.params[+key === key ? "args" : "props"]];
									addedTagCpDep._cxp = obsCtxPrm;
									items.push(addedTagCpDep); // Added dependency for tag contextual parameter
								}
							}
						}
					} else if (path.length || $isFunction(helper)) {
						items = [helper, path.join("."), object]; // 2way bindng on ~foo.helperLeafProperty or ~computed() or ~contextualParam
					}
				}
				return items || [];
			}
			if (path.charAt(0) === "#") {
				// We return new items to insert into the sequence, replacing the "#a.b.c" string: [view, "a.b.c" currentDataItem]
				// so currentDataItem becomes the object for subsequent paths. The 'true' flag makes the paths bind only to leaf changes.
				return path === "#data" ? [] : [view, path.replace(rViewPath, ""), object];
			}
		}
	};
};

//===================
// ctxPrm  helpers
//===================
// The following helper functions for observable contextual parameters are needed by render.js in data-linking scenarios
// Implemented here rather than in render.js to keep render.js size down, and exposed via $.sub...

$sub._cp = function(paramVal, paramExpr, view, tagCtxPrm) { // Create tag or inline contextual parameter
	// Called for inline contextual parameter ~foo=expression, from compiled function for expression. (tagCtxPrm is undefined)
	// Called for tag parameter (two-way binding), from renderTag. (tagCtxPrm is {tag: ..., ind: ...})
	if (view.linked) { // In JsViews, returns [view, linkFn] where linkFn is compiled function for expression, or observable contextual parameter object
		if (paramExpr) {
			var params = delimOpenChar1 + ":" + paramExpr + delimCloseChar0,
				links = topView.tmpl.links, // Use topView links, as for compiled top-level linking expressions. To do - should this ever get disposed?
				linkFn = links[params];
			if (!linkFn) {
				links[params] = linkFn = $sub.tmplFn(params, view.tmpl, true);
			}
			paramVal = linkFn.deps[0]
				? [view, linkFn] // compiled expression
				: [{_ocp: tagCtxPrm ? tagCtxPrm.tag.cvtArgs(true, tagCtxPrm.tagElse)[tagCtxPrm.ind] : linkFn()}]; // Static value - no deps - returns observable contextual parameter object
		} else {
			paramVal = [{_ocp: undefined}]; // Uninitialized observable contextual parameter object
		}
		paramVal._cxp = tagCtxPrm || {
			updateValue: function(val) {
				$observable(paramVal._cxp.data).setProperty(paramVal._cxp.path, val);
				return this;
			}
		}; // Flag that this is a contextual parameter
	}
	return paramVal; // In JsRender returns evaluated expression
};

$sub._crcp = function(key, res, storeView, store) {
	// Create observable contextual parameter for helper. (Called when updating or observing contextual parameter, from view.ctxPrm() )
	(store || (storeView._ocps = storeView._ocps || {}))[key]
		= res
		= [{
			_ocp: res, // The observable contextual parameter value
			_vw: storeView
		}];
	res._cxp = {
		path: _ocp,
		ind: 0,
		updateValue: function(val, path) {
			$.observable(res[0]).setProperty(_ocp, val); // Set the value (res[0]._ocp)
			return this;
		}
	};
	return res;
};

$sub._ucp = function(key, value, view, obsCtxPrm) {
	// update observable contextual parameter
	var index, tag;
	if (!obsCtxPrm.path) {
		resolveDataTargetPath("~" + key, view.data, $sub._gccb(view));
	}
	if (tag = obsCtxPrm.tag) { // If this is a tag contextual parameter
		index = $.inArray(key, tag.linkedCtxParam);
		tag.setValue(value, index, obsCtxPrm.tagElse);
	}
	return (tag||obsCtxPrm).updateValue(value, index, obsCtxPrm.tagElse);
};

$sub._ceo = function cloneExprObjects(obs) { // Clone exprObs so that each referenced contextual parameter ~foo uses its own exprOb instances
	var ob,
		clones = [],
		l = obs.length;
	while (l--) {
		ob = obs[l];
		if (ob._cpfn) {
			ob = $extend({}, ob);              // If an exprOb, clone it. If a string, keep as is
			ob.prm = cloneExprObjects(ob.prm); // Recursively clone exprObs in parameters, too
		}
		clones.unshift(ob);
	}
	return clones;
};

//=========================
// Extend $.views.settings
//=========================

oldAdvSet = $sub.advSet;

$sub.advSet = function() { // refresh advanced settings
	oldAdvSet.call($sub);
	global._jsv = $subSettingsAdvanced._jsv
		? $extend(global._jsv || {}, { // create global _jsv, for accessing views, etc
				views: viewStore,
				bindings: bindingStore
			})
		: undefined; // In IE8 cannot do delete global._jsv
	$viewsLinkAttr = $subSettingsAdvanced.linkAttr;
	linkViewsSel = bindElsSel + ",[" + $viewsLinkAttr + "]";
	wrapMap = $subSettingsAdvanced._wm;
	wrapMap.optgroup = wrapMap.option;
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
};

$viewsSettings.advanced({
	linkAttr: "data-link",
	useViews: false,
	noValidate: false,
	// wrapMap provide appropriate wrappers for inserting innerHTML, used in insertBefore
	// We have to close these tags to support XHTML (#13200)
	// TODO investigate whether more recent jQuery implementation using wrapMap in domManip/$().html() etc. is better optimized now...
	_wm: {
		option: [1, "<select multiple='multiple'>", "</select>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		area: [1, "<map>", "</map>"],
		param: [1, "<object>", "</object>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		svg_ns: [1, "<svg>", "</svg>"],
		// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
		// unless wrapped in a div with non-breaking characters in front of it.
		div: $.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
	},
	_fe: {
		input: {
			from: inputAttrib, to: VALUE
		},
		textarea: valueBinding,
		select: valueBinding,
		optgroup: {
			to: "label"
		}
	}
});

return $;
}, window));



/***/ }),

/***/ "./node_modules/rxjs-compat/Observable.js":
/*!************************************************!*\
  !*** ./node_modules/rxjs-compat/Observable.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
exports.Observable = Observable_1.Observable;
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/Observable.js":
/*!*****************************************!*\
  !*** ./node_modules/rxjs/Observable.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! rxjs-compat/Observable */ "./node_modules/rxjs-compat/Observable.js"));
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Observable.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Observable.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var toSubscriber_1 = __webpack_require__(/*! ./util/toSubscriber */ "./node_modules/rxjs/internal/util/toSubscriber.js");
var observable_1 = __webpack_require__(/*! ../internal/symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
var pipe_1 = __webpack_require__(/*! ./util/pipe */ "./node_modules/rxjs/internal/util/pipe.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var Observable = (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            operator.call(sink, this.source);
        }
        else {
            sink._addParentTeardownLogic(this.source || (config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Observer.js":
/*!************************************************!*\
  !*** ./node_modules/rxjs/internal/Observer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError_1.hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscriber.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscriber.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var Observer_1 = __webpack_require__(/*! ./Observer */ "./node_modules/rxjs/internal/Observer.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        _this._parentSubscription = null;
        switch (arguments.length) {
            case 0:
                _this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (isTrustedSubscriber(destinationOrNext)) {
                        var trustedSubscriber = destinationOrNext[rxSubscriber_1.rxSubscriber]();
                        _this.syncErrorThrowable = trustedSubscriber.syncErrorThrowable;
                        _this.destination = trustedSubscriber;
                        trustedSubscriber._addParentTeardownLogic(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
            this._unsubscribeParentSubscription();
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
            this._unsubscribeParentSubscription();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._addParentTeardownLogic = function (parentTeardownLogic) {
        if (parentTeardownLogic !== this) {
            this._parentSubscription = this.add(parentTeardownLogic);
        }
    };
    Subscriber.prototype._unsubscribeParentSubscription = function () {
        if (this._parentSubscription !== null) {
            this._parentSubscription.unsubscribe();
        }
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        this._parentSubscription = null;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError_1.hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError_1.hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError_1.hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError_1.hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
function isTrustedSubscriber(obj) {
    return obj instanceof Subscriber || ('syncErrorThrowable' in obj && obj[rxSubscriber_1.rxSubscriber]);
}
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscription.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscription.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ./util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isObject_1 = __webpack_require__(/*! ./util/isObject */ "./node_modules/rxjs/internal/util/isObject.js");
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var tryCatch_1 = __webpack_require__(/*! ./util/tryCatch */ "./node_modules/rxjs/internal/util/tryCatch.js");
var errorObject_1 = __webpack_require__(/*! ./util/errorObject */ "./node_modules/rxjs/internal/util/errorObject.js");
var UnsubscriptionError_1 = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/internal/util/UnsubscriptionError.js");
var Subscription = (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        while (_parent) {
            _parent.remove(this);
            _parent = ++index < len && _parents[index] || null;
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
            if (trial === errorObject_1.errorObject) {
                hasErrors = true;
                errors = errors || (errorObject_1.errorObject.e instanceof UnsubscriptionError_1.UnsubscriptionError ?
                    flattenUnsubscriptionErrors(errorObject_1.errorObject.e.errors) : [errorObject_1.errorObject.e]);
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                    if (trial === errorObject_1.errorObject) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = errorObject_1.errorObject.e;
                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                        }
                        else {
                            errors.push(err);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        if (!teardown || (teardown === Subscription.EMPTY)) {
            return Subscription.EMPTY;
        }
        if (teardown === this) {
            return this;
        }
        var subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (typeof subscription._addParent !== 'function') {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        var subscriptions = this._subscriptions || (this._subscriptions = []);
        subscriptions.push(subscription);
        subscription._addParent(this);
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        if (!_parent || _parent === parent) {
            this._parent = parent;
        }
        else if (!_parents) {
            this._parents = [parent];
        }
        else if (_parents.indexOf(parent) === -1) {
            _parents.push(parent);
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/config.js":
/*!**********************************************!*\
  !*** ./node_modules/rxjs/internal/config.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _enable_super_gross_mode_that_will_cause_bad_things = false;
exports.config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/observable.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.observable = typeof Symbol === 'function' && Symbol.observable || '@@observable';
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/rxSubscriber.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function')
    ? Symbol.for('rxSubscriber')
    : '@@rxSubscriber';
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/UnsubscriptionError.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function UnsubscriptionErrorImpl(errors) {
    Error.call(this);
    this.message = errors ?
        errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
    return this;
}
UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
exports.UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/errorObject.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/errorObject.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.errorObject = { e: {} };
//# sourceMappingURL=errorObject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/hostReportError.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function hostReportError(err) {
    setTimeout(function () { throw err; });
}
exports.hostReportError = hostReportError;
//# sourceMappingURL=hostReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isArray.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArray.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
//# sourceMappingURL=isArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isFunction.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isObject(x) {
    return x != null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/noop.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/noop.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function noop() { }
exports.noop = noop;
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/pipe.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/pipe.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var noop_1 = __webpack_require__(/*! ./noop */ "./node_modules/rxjs/internal/util/noop.js");
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
exports.pipe = pipe;
function pipeFromArray(fns) {
    if (!fns) {
        return noop_1.noop;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
exports.pipeFromArray = pipeFromArray;
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/toSubscriber.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var rxSubscriber_1 = __webpack_require__(/*! ../symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var Observer_1 = __webpack_require__(/*! ../Observer */ "./node_modules/rxjs/internal/Observer.js");
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/tryCatch.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/tryCatch.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var errorObject_1 = __webpack_require__(/*! ./errorObject */ "./node_modules/rxjs/internal/util/errorObject.js");
var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    }
    catch (e) {
        errorObject_1.errorObject.e = e;
        return errorObject_1.errorObject;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
exports.tryCatch = tryCatch;
//# sourceMappingURL=tryCatch.js.map

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