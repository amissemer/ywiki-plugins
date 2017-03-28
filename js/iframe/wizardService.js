import * as confluence from './confluence'
import * as proxy from './proxy';
import $ from 'jquery';

var defaultProjectDocumentationRootPage='Project Documentation';
var customerComboLimit=10;
var defaultCustomerPageTemplate='.CI New Project Documentation Template';
var template_pattern = /\[Customer\]|\[ProjectName\]/;

var options = getOptionsFromLocationHash();
if (!options.cssSelector || !options.targetSpace || !options.newInstanceDisplayName || !options.addLabel) {
	throw "wireButton({cssSelector:'',targetSpace:'',newInstanceDisplayName:'',addLabel='',logToPage:''})"
}
proxy.$metacontent('meta[name=ajs-page-id]')
	.done(function(val) { options.sourcePageId=val; })
	.fail(function () { console.error("Could not read current pageId")});
proxy.$metacontent('meta[name=ajs-remote-user-key]')
	.done(function(val) { options.currentUserKey=val; })
	.fail(function () { console.error("Could not resolve current userkey")});
proxy.$metacontent('meta[name=confluence-space-key]')
	.done(function(val) { options.currentSpaceKey=val; })
	.fail(function () { console.error("Could not resolve current spaceKey")});

// set defaults for missing options
options.projectDocumentationRootPage = (options.projectDocumentationRootPage? options.projectDocumentationRootPage:defaultProjectDocumentationRootPage);
options.customerPageTemplate = (options.customerPageTemplate? options.customerPageTemplate:defaultCustomerPageTemplate);
console.log("projectDocumentationRootPage",options.projectDocumentationRootPage);
options.openInNewTab=!!options.openInNewTab;
options.targetSpace = (typeof options.targetSpace === undefined ? options.currentSpaceKey : options.targetSpace);

console.log("yWiki Options",options);

export function getOption(name) {
  return options[name];
}
function getOptionsFromLocationHash() {

  var re = /(?:#|&)([^=&#]+)(?:=?([^&#]*))/g;
  var match;
  var params = {};
  function decode(s) {return decodeURIComponent(s.replace(/\+/g, " "));};

  var hash = document.location.hash;

  while (match = re.exec(hash)) {
    params[decode(match[1])] = decode(match[2]);
  }
  return params;
}

function logCreation(logToPage, createdPage) {
  if (logToPage) {
    console.log("Logging creation of "+createdPage.title+" by "+options.currentUserKey+' in '+logToPage);
    return confluence.getContent(options.currentSpaceKey, logToPage, 'space,body.storage,version')
    .then( function(logPageJson) {
      console.log("logPageJson before edit: ",logPageJson);
      if (logPageJson.body.storage) {
        var bodyContent = logPageJson.body.storage.value;
        if (bodyContent.indexOf('<ul>')<0) {
          bodyContent='<ul></ul>';
        }
        var logLine = '<li><ac:link><ri:user ri:userkey="[userkey]" /></ac:link> created&nbsp;<ac:link><ri:page ri:content-title="[pagetitle]" /></ac:link> on&nbsp;<time datetime="[date]" />&nbsp;</li>';
        logLine=logLine.replace('[userkey]',options.currentUserKey).replace('[pagetitle]',createdPage.title).replace('[date]',formattedDate);
        logPageJson.body.storage.value=bodyContent.replace('</ul>',logLine+'</ul>');
        logPageJson.version.minorEdit=false;
        logPageJson.version.number+=1;
        return confluence.updateContent(logPageJson);
      }
    });
  } else {
    console.log("Not logging because logToPage option is not set");
  }
}

export function loadRegions() {
  return getRegions(options.targetSpace , options.projectDocumentationRootPage)
  .then(function (regionResults) {
    return regionResults.results.map(function(regionPage) {return regionPage.title;});
  });
}

function endCopyProcess(copiedPages) {
  var workspaceURL = '/pages/viewpage.action?pageId='+copiedPages[0].id;
  proxy.redirect(workspaceURL);
}

export function createWorkspace(workspaceOpts) {
  console.log("New Service Engagement...",workspaceOpts);
  if (workspaceOpts.region) {
    console.log("First creating Customer Page "+workspaceOpts.customer+" in region" + workspaceOpts.region);
    return createCustomerPage(workspaceOpts.region,workspaceOpts.customer).then( function() {
      return createJustWorkspace(workspaceOpts);
    } );
  } else {
    return createJustWorkspace(workspaceOpts);
  }
}

function createCustomerPage(region,customer) {
 return confluence.copyPage(options.targetSpace, options.customerPageTemplate, options.targetSpace, region, customer);
}

function createJustWorkspace(workspaceOpts) {
  var copiedPages=[];
  return confluence.getContentById(options.sourcePageId,'space')
  .then(function(sourcePage) {
    return confluence.copyPageRecursive(sourcePage.space.key, sourcePage.title, options.targetSpace, data.customer, onlyTemplates,
    {
      "Customer": data.customer,
      "ProjectName": data.projectName,
      "TargetEndDate": data.targetEndDate
    }
    ,copiedPages
  )}).then( function() {
    if (copiedPages.length==0) {
      return $.Deferred().reject("No page was copied, check if one of the subpages of the service page definition has a title that matches the pattern "+template_pattern);
    }
    return confluence.addLabel(copiedPages[0].id, options.addLabel);
  })
  .then(function() {
    return logCreation(options.logToPage,copiedPages[0]);
  })
  .done(function() {
    console.log("Copy Successful, "+copiedPages.length+" page(s)",copiedPages);
    // Now open new tab or redirect to 'https://wiki.hybris.com/pages/viewpage.action?pageId='+copiedPages[0].id
    endCopyProcess(copiedPages);
  })
  .fail(function() {
    console.error("Copy failed",arguments);
  });
}

export function findCustomer(term) {
  return getCustomersMatching(options.targetSpace , options.projectDocumentationRootPage, term, customerComboLimit);
}

function formattedDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  if(dd<10) {
      dd='0'+dd
  }
  if(mm<10) {
      mm='0'+mm
  }
  return yyyy+'-'+mm+'-'+dd;
}

var cachedProjectDocumentationRootPageResult=null;
var cachedRegionResults=null;
function extractPageIds(searchAPIResponse) {
  var pageIds=[];
  searchAPIResponse.results.forEach(function( page ) {
    pageIds.push(page.id);
  });
  return pageIds;
}

function parentQuery(pageIds) {
  var restriction = [];
  pageIds.forEach(function (pageId) {
    restriction.push("parent="+pageId);
  });
  return '('+restriction.join(' OR ')+')';
}

function getRegions(spaceKey, projectDocumentationRootPage) {
  var promise;
  if (cachedProjectDocumentationRootPageResult) {
    promise = $.Deferred().resolve(cachedProjectDocumentationRootPageResult).promise();
  } else {
    // get the id of the root Product Documentation page
    promise = confluence.getContent(spaceKey,projectDocumentationRootPage)
  }
  return promise
    .then(function(rootPage) {
      cachedProjectDocumentationRootPageResult = rootPage;
      if (cachedRegionResults) return cachedRegionResults;
      // get all the direct children of the root (the region pages) (there are around 10 of them but we use a limit of 50 to make sure we have them all)
      return confluence.searchPagesWithCQL(spaceKey, "label!='project-documentation-pages' AND parent="+cachedProjectDocumentationRootPageResult.id, 50);
    })
    .then(function (regionResults) {
      cachedRegionResults = regionResults;
      return regionResults;
    });
}

/** Return 'limit' sub-sub pages of the spaceKey:projectDocumentationRootPage, whose title partially match partialTitle */
function getCustomersMatching(spaceKey, projectDocumentationRootPage, partialTitle, limit) {
    return getRegions(spaceKey, projectDocumentationRootPage)
    .then(function (regionResults) {
      var titleRestriction = (partialTitle?' and (title~"'+encodeURIComponent(partialTitle)+'" OR title~"'+encodeURIComponent(partialTitle)+'*")':"");
      return confluence.searchPagesWithCQL(spaceKey, parentQuery(extractPageIds(cachedRegionResults))+titleRestriction, limit);
    })
    .then(function (searchResponse) {
      var customers=[];
       searchResponse.results.forEach(function(page) {
         customers.push(page.title);
       });
       return customers
    });
}

// Filters pages that contain [placeholders]
function onlyTemplates(page) {
  return template_pattern.test(page.title);
}
