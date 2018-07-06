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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/iframe/move-pages.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/iframe/move-pages.js":
/*!*********************************!*\
  !*** ./js/iframe/move-pages.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * An API for confluence that runs ajax queries through the $ object to bypass the CORS restriction.
 */
/*
function deletePage(spaceKey,pageTitle) {
  return getContent(spaceKey,pageTitle)
  .then( function (page) {
    return deletePageById(page.id);
  });
}
function deletePageRecursive(spaceKey,pageTitle) {
  return getContent(spaceKey,pageTitle)
  .then( function (page) {
    return deletePageRecursiveInternal( page.id );
  });
}
function getAttachment(pageId, attachmentName) {
  return $.ajax("/download/attachments/" + pageId + "/" + attachmentName + "?api=v2");
}
function deletePageById(pageId) {
  return $.ajax({
    url: '/rest/api/content/'+encodeURIComponent(pageId),
    type: 'DELETE'
  }).fail(errorLogger( "DELETE page failed"));
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
function addLabel(pageId, label) {
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
  return $.ajax(
    {
      url: '/rest/api/content/'+encodeURIComponent(pageId)+'/label',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(labels)
    }).fail( errorLogger( "ADD label to page "+pageId+" failed" ));
}
*/
const MAX_API_CALL_IN_PARALLEL = 3;
const throat = __webpack_require__(/*! throat */ "./node_modules/throat/index.js")(MAX_API_CALL_IN_PARALLEL);

async function movePages(sourceSpaceKey, sourcePageTitle,targetSpaceKey, targetParentTitle) {
  var sourcePage = await getContent(sourceSpaceKey, sourcePageTitle);
  return await movePagesById( sourcePage.id, targetSpaceKey, targetParentTitle );
}
function getAtlToken() {
  return $('meta[name=ajs-atl-token]').attr("content");
}

async function movePagesById (sourcePageId, targetSpaceKey, targetParentTitle) {
  var url = '/pages/movepage.action?pageId='+encodeURIComponent(sourcePageId)+'&spaceKey='+encodeURIComponent(targetSpaceKey)+'&targetTitle='+encodeURIComponent(targetParentTitle)+'&position=append&atl_token='+getAtlToken()+'&_='+Math.random();
  console.log("Moving page ",sourcePageId," under ",targetSpaceKey+":"+ targetParentTitle, url);
  return await $.ajax(url);
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
  templateProcessor.transformPage(pageToCopy);
  // Create the new page under toPageTitle
  return await createPage(pageToCopy,toSpaceKey,toPageTitle);
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
    templateProcessor.transformPage(pageToCopy);

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
  return await $.ajax(
    {
      url: '/rest/api/content',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(page)
    }
  );
}

async function updateContent(page) {
  return await $.ajax(
    {
      url: '/rest/api/content/'+encodeURIComponent(page.id),
      type: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify(page)
    }
  );
}


$.fn.confluence = {
  movePages : movePages,
  movePagesById : movePagesById,
  updateContent : updateContent,
  createPageUnderPageId:createPageUnderPageId,
  createPage:createPage,
  copyPage:copyPage,
  copyPageRecursive:copyPageRecursive,
  searchPagesWithCQL:searchPagesWithCQL,
  getContent:getContent,
  getContentById:getContentById,
  dumpPageTree:dumpPageTree,
  chart:chart
};

async function dumpPageTree(sourceSpaceKey, sourcePageTitle) {
  var data = [['Title', 'Parent', 'Number of pages', 'Age']];
  var startPage = await getContent(sourceSpaceKey, sourcePageTitle);
  
  await dumpPageTreeRecursive(startPage.id, null, data);
  console.log(`*** Found ${data.length} pages total ***`);
  chart(data);
}

async function dumpPageTreeRecursive( pageId, parentTitle, data) {
  console.log(`Queueing getContentById for ${pageId}`);
  var pageAndChildren = await throat(() => getContentById(pageId, 'history.lastUpdated,children.page'));
  data.push([pageAndChildren.title, parentTitle, 1, (new Date(pageAndChildren.history.lastUpdated.when)).getTime()]);
  if (data.length%100 == 0) console.log(`Found ${data.length} pages`);
  var childrenP = [];
  var childrenPages = pageAndChildren.children.page;
  while (childrenPages && childrenPages.size>0) {
    for (let child of childrenPages.results) {
      childrenP.push(dumpPageTreeRecursive(child.id, pageAndChildren.title, data));
    }
    // get next page if any
    if (childrenPages._links.next) {
      console.log(`Queueing GET next page of children for ${pageAndChildren.title}: ${childrenPages._links.next}`);
      childrenPages = await throat(() => $.ajax(childrenPages._links.next));
    } else {
      childrenPages=false;
    }
  }



  await Promise.all(childrenP);
}

function chart(dataTable) {

  google.charts.load('current', {'packages':['treemap']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    console.log("DRAWING");
    var data = google.visualization.arrayToDataTable(dataTable);

    tree = new google.visualization.TreeMap(document.getElementById('chart_div'));

    tree.draw(data, {
      minColor: '#f00',
      midColor: '#ddd',
      maxColor: '#0d0',
      headerHeight: 15,
      fontColor: 'black',
      showScale: true,
      maxPostDepth: 1,
      minColorValue: new Date('2016-01-01T00:00:00.000+00:00').getTime(),
      maxColorValue: new Date('2018-01-01T00:00:00.000+00:00').getTime(),
      useWeightedAverageForAggregation: true
    });

  }
}

setTimeout(() => dumpPageTree("ps", "Projects France"), 2000);


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
//# sourceMappingURL=move-pages-bundle.js.map