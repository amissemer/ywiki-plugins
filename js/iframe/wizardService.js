import * as confluence from './confluenceService'
import * as proxy from './proxyService';
import $ from 'jquery';
import {parseOptions} from '../common/optionsParser';

var options = parseOptions();
var defaultProjectDocumentationRootPage='Project Documentation';
var customerComboLimit=10;
var defaultCustomerPageTemplate='.CI New Project Documentation Template';
var additionalLabel='service-workspace';
var template_pattern = /\[Customer\]|\[ProjectName\]/;

if (!options.cssSelector || !options.newInstanceDisplayName || !options.addLabel) {
	throw "wireButton({cssSelector:'',newInstanceDisplayName:'',addLabel='',logToPage:''})"
}
options.addLabel=[options.addLabel,additionalLabel];
var promise1=proxy.$metacontent('meta[name=ajs-page-id]')
	.then(
		function(val) { options.sourcePageId=val; },
		function () { console.error("Could not read current pageId")}
	);
var promise2=proxy.$metacontent('meta[name=ajs-remote-user-key]')
	.then(
		function(val) { options.currentUserKey=val; },
		function () { console.error("Could not resolve current userkey")}
	);
var promise3=proxy.$metacontent('meta[name=confluence-space-key]')
	.then(
		function(val) { options.currentSpaceKey=val; },
		function () { console.error("Could not resolve current spaceKey")}
);
var optionsPromise = $.when(promise1,promise2,promise3).then( postProcessOptions );
optionsPromise.then(function (options) { console.log("yWiki Options: ",options);});

function postProcessOptions() {
	// set defaults for missing options
	options.projectDocumentationRootPage = options.projectDocumentationRootPage || defaultProjectDocumentationRootPage;
	options.customerPageTemplate = options.customerPageTemplate || defaultCustomerPageTemplate;
	options.openInNewTab= !!options.openInNewTab;
	options.targetSpace = options.targetSpace || options.currentSpaceKey;
	return options;
}


export function withOption(name) {
  return optionsPromise.then( function (options) { return options[name]; } );
}


function logCreation(logToPage, createdPage) {
	proxy.$text(".confluenceTh:contains('Current Version') + .confluenceTd").done( function (version) {
		logCreationWithVersion(version, logToPage, createdPage);
	}).
	fail( function () {
		log.warning("Could not retrieve baseline version, make sure you have a meta-data table with a 'Current Version' row.");
		logCreationWithVersion(null, logToPage, createdPage);
	});
}
function logCreationWithVersion(version, logToPage, createdPage) {
	var versionMsg="";
	if (version) {
		versionMsg = " with baseline "+version;
	}
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
				var logLine = '<li><ac:link><ri:user ri:userkey="[userkey]" /></ac:link> created&nbsp;<ac:link><ri:page ri:content-title="[pagetitle]" /></ac:link> on&nbsp;<time datetime="[date]" />&nbsp;'+versionMsg+'</li>';
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
	return optionsPromise
	.then( function (options) {
	  return getRegions(options.targetSpace , options.projectDocumentationRootPage);
	})
  .then(function (regionResults) {
    return regionResults.results.map(function(regionPage) {return regionPage.title;});
  });
}

function endCopyProcess(copiedPages) {
  var workspaceURL = '/pages/viewpage.action?pageId='+copiedPages[0].id;
  proxy.redirect(workspaceURL);
}

export function createWorkspace(workspaceOpts) {
	return optionsPromise.then( function (options) {
		console.log("New Service Engagement...",workspaceOpts);
	  if (workspaceOpts.region) {
	    console.log("First creating Customer Page "+workspaceOpts.customer+" in region" + workspaceOpts.region);
	    return createCustomerPage(workspaceOpts.region,workspaceOpts.customer).then( function() {
	      return createJustWorkspace(workspaceOpts);
	    } );
	  } else {
	    return createJustWorkspace(workspaceOpts);
	  }
	} );
}

function createCustomerPage(region,customer) {
 return confluence.copyPage(options.targetSpace, options.customerPageTemplate, options.targetSpace, region, customer);
}

function createJustWorkspace(workspaceOpts) {
  var copiedPages=[];
	var customerPage = confluence.getContent(options.targetSpace,workspaceOpts.customer,'ancestors');
	var rootPageToCopy = confluence.getContentById(options.sourcePageId,'space');
	var regionNames = loadRegions();
  return $.when(customerPage, rootPageToCopy, regionNames)
  .then(function(customerPage, sourcePage, regionNames) {
		var regionName = findRegionInAncestors(customerPage.ancestors, regionNames);
    return confluence.copyPageRecursive(sourcePage.space.key, sourcePage.title, options.targetSpace, workspaceOpts.customer, onlyTemplates,
    {
			"Region": regionName,
      "Customer": workspaceOpts.customer,
      "ProjectName": workspaceOpts.projectName,
      "TargetEndDate": workspaceOpts.targetEndDate
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

function findRegionInAncestors(ancestors, regionNames) {
	console.log("findRegionInAncestors", ancestors, regionNames);
	for (var a=0;a<ancestors.length;a++) {
		console.log("Matching page name",ancestors[a].title);
		if (regionNames.indexOf(ancestors[a].title)>=0) {
			console.log("Found");
			return ancestors[a].title;
		}
	};
	console.error ("The selected customer page is not under a valid region");
	return "";
}

export function findCustomer(term) {
  return optionsPromise.then( function(options) {
		return getCustomersMatching(options.targetSpace , options.projectDocumentationRootPage, term, customerComboLimit);
	});
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
