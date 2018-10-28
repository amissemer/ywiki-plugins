import $ from 'jquery';
import * as confluence from './confluenceService';
import * as proxy from './proxyService';
import { parseOptions } from '../common/optionsParser';
import {
  SINGLE_WORKSPACE_PAGE_REDIRECT_DELAY,
  PREFIX,
  PREFERRED_REGION_KEY,
  DEFAULT_PROJECT_DOCUMENTATION_ROOT_PAGE,
  DEFAULT_CUSTOMER_PAGE_TEMPLATE,
  CISTATS_DATA_PAGE,
} from '../common/config';
import { TemplateProcessor } from './templateProcessor';

const options = parseOptions();
const customerComboLimit = 10;
const additionalLabel = 'service-workspace';
const BASELINE_VERSION_CSS_SELECTOR = ".confluenceTd p:contains('Definition') + p";
const EXPAND_LABELS = 'metadata.labels';

if (!options.cssSelector || !options.newInstanceDisplayName || !options.addLabel) {
  throw "wireButton({cssSelector:'',newInstanceDisplayName:'',addLabel='',logToPage:''})";
}
options.addLabel = [options.addLabel, additionalLabel];
const promise1 = proxy.$metacontent('meta[name=ajs-page-id]').then(
  val => {
    options.sourcePageId = val;
  },
  () => {
    console.error('Could not read current pageId');
  },
);
const promise2 = proxy.$metacontent('meta[name=ajs-remote-user-key]').then(
  val => {
    options.currentUserKey = val;
  },
  () => {
    console.error('Could not resolve current userkey');
  },
);
const promise3 = proxy.$metacontent('meta[name=confluence-space-key]').then(
  val => {
    options.currentSpaceKey = val;
  },
  () => {
    console.error('Could not resolve current spaceKey');
  },
);
const promise4 = proxy.$metacontent('meta[name=ajs-remote-user]').then(
  val => {
    options.currentUser = val;
  },
  () => {
    console.error('Could not resolve current user');
  },
);
const optionsPromise = $.when(promise1, promise2, promise3, promise4).then(postProcessOptions);
optionsPromise.then(options => {
  console.log('yWiki Options: ', options);
});

function postProcessOptions() {
  // set defaults for missing options
  options.projectDocumentationRootPage =
    options.projectDocumentationRootPage || DEFAULT_PROJECT_DOCUMENTATION_ROOT_PAGE;
  options.customerPageTemplate = options.customerPageTemplate || DEFAULT_CUSTOMER_PAGE_TEMPLATE;
  options.openInNewTab = !!options.openInNewTab;
  options.targetSpace = options.targetSpace || options.currentSpaceKey;
  return options;
}

export function savePreferredRegion(region) {
  return proxy.localStorageSetItem(PREFIX + PREFERRED_REGION_KEY, region);
}
/** returns a promise for the region name (the region is typed as a simple String) */
function getPreferredRegion() {
  return proxy.localStorageGetItem(PREFIX + PREFERRED_REGION_KEY);
}

/** returns a promise for 3 params, the list of region names, the map of consultant regions in the form { email:regionName, email:regionName }, and the preferred region name */
export function getDeliveryRegionSettings() {
  const dataPage = CISTATS_DATA_PAGE;
  return withOption('targetSpace')
    .then(targetSpace => {
      return confluence.getContent(targetSpace, dataPage);
    })
    .then(page => {
      const consultantList = confluence.getAttachment(page.id, 'cached-employee-default-regions.json');
      const regionList = confluence.getAttachment(page.id, 'cached-regions.json');
      const preferredRegion = getPreferredRegion();
      return $.when(regionList, consultantList, preferredRegion);
    });
}

export function withOption(name) {
  return optionsPromise.then(options => {
    return options[name];
  });
}

function logCreation(logToPage, createdPage) {
  return proxy
    .$text(BASELINE_VERSION_CSS_SELECTOR)
    .catch(() => {
      log.warning(
        "Could not retrieve baseline version, make sure you have a meta-data table with a 'Current Version' row.",
      );
      return null;
    })
    .then(version => {
      return logCreationWithVersion(version, logToPage, createdPage);
    });
}
export function getCurrentUser() {
  return options.currentUser;
}
function logCreationWithVersion(version, logToPage, createdPage) {
  let versionMsg = '';
  if (version) {
    versionMsg = ` with baseline ${version}`;
  }
  if (logToPage) {
    console.log(`Logging creation of ${createdPage.title} by ${options.currentUserKey} in ${logToPage}`);
    return confluence.getContent(options.currentSpaceKey, logToPage, 'space,body.storage,version').then(logPageJson => {
      console.log('logPageJson before edit: ', logPageJson);
      if (logPageJson.body.storage) {
        let bodyContent = logPageJson.body.storage.value;
        if (bodyContent.indexOf('<ul>') < 0) {
          bodyContent = '<ul></ul>';
        }
        let logLine =
          '<li><ac:link><ri:user ri:userkey="[userkey]" /></ac:link> created&nbsp;<ac:link><ri:page ri:space-key="[spaceKey]" ri:content-title="[pagetitle]" /></ac:link> on&nbsp;<time datetime="[date]" />&nbsp;';
        versionMsg;
        ('</li>');
        logLine = logLine
          .replace('[userkey]', options.currentUserKey)
          .replace(
            '[pagetitle]',
            $('<div>')
              .text(createdPage.title)
              .html(),
          )
          .replace('[date]', formattedDate)
          .replace('[spaceKey]', createdPage.space.key);
        logPageJson.body.storage.value = bodyContent.replace('</ul>', `${logLine}</ul>`);
        logPageJson.version.minorEdit = false;
        logPageJson.version.number += 1;
        return confluence.updateContent(logPageJson);
      }
    });
  }
  console.log('Not logging because logToPage option is not set');
}

export function loadRegions() {
  return optionsPromise
    .then(options => {
      return getRegions(options.targetSpace, options.projectDocumentationRootPage);
    })
    .then(filterTitlesFromResults);
}

function filterTitlesFromResults(pageResults) {
  return pageResults.results.map(page => {
    return page.title;
  });
}

function endCopyProcess(copiedPages) {
  const workspaceURL = `/pages/viewpage.action?pageId=${copiedPages[0].id}`;
  let delay = 0;
  if (copiedPages.length == 1) delay = SINGLE_WORKSPACE_PAGE_REDIRECT_DELAY; // add a delay when only a single page was copied, for ESPLM-846
  setTimeout(() => {
    proxy.redirect(workspaceURL);
  }, delay);
}

export function createWorkspace(workspaceOpts) {
  return optionsPromise.then(options => {
    console.log('New Service Engagement...', workspaceOpts);
    if (workspaceOpts.region) {
      console.log(`First creating Customer Page ${workspaceOpts.customer} in region${workspaceOpts.region}`);
      return createCustomerPage(workspaceOpts.region, workspaceOpts.customer).then(() => {
        return createJustWorkspace(workspaceOpts);
      });
    }
    return createJustWorkspace(workspaceOpts);
  });
}

function createCustomerPage(region, customer) {
  return confluence.copyPage(
    options.targetSpace,
    options.customerPageTemplate,
    options.targetSpace,
    region,
    new TemplateProcessor({ placeholderReplacements: customer }),
  );
}

function createJustWorkspace(workspaceOpts) {
  const copiedPages = [];
  const templateProcessor = new TemplateProcessor({
    placeholderReplacements: {
      Region: workspaceOpts.reportingRegion,
      Customer: workspaceOpts.customer,
      ProjectName: workspaceOpts.projectName,
      TargetEndDate: workspaceOpts.targetEndDate,
    },
    variantOptions: workspaceOpts.variantOptions,
    copyAttachments: true,
  });

  return confluence
    .getContentById(options.sourcePageId, 'space')
    .then(sourcePage => {
      return confluence.copyPageRecursive(
        sourcePage.space.key,
        sourcePage.title,
        options.targetSpace,
        workspaceOpts.customer,
        templateProcessor,
        copiedPages,
      );
    })
    .then(() => {
      if (copiedPages.length == 0) {
        return $.Deferred().reject(
          `No page was copied, check if one of the subpages of the service page definition has a title that matches the pattern ${template_pattern}`,
        );
      }
      return confluence.addLabel(copiedPages[0].id, options.addLabel);
    })
    .then(() => {
      return logCreation(options.logToPage, copiedPages[0]).then(
        () => {
          console.log(`Copy Successful, ${copiedPages.length} page(s)`, copiedPages);
          // Now open new tab or redirect to 'https://wiki.hybris.com/pages/viewpage.action?pageId='+copiedPages[0].id
          endCopyProcess(copiedPages);
        },
        function(e) {
          console.error('Copy failed', arguments);
          return $.Deferred().reject(e);
        },
      );
    });
}

function findRegionsInAncestors(ancestors, regionNames) {
  if (!ancestors) return [];
  console.log('findRegionsInAncestors', ancestors, regionNames);
  const regions = [];
  for (let a = 0; a < ancestors.length; a++) {
    const newRegion = ancestors[a].title;
    // if it is really an existing regionNames which is not already in the regions list
    if (regionNames.indexOf(newRegion) >= 0 && regions.indexOf(newRegion) < 0) {
      regions.push(newRegion);
    }
  }
  return regions;
}

export function findCustomer(term) {
  return optionsPromise.then(options => {
    return getCustomersMatching(options.targetSpace, options.projectDocumentationRootPage, term, customerComboLimit);
  });
}

function formattedDate() {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; // January is 0!
  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = `0${dd}`;
  }
  if (mm < 10) {
    mm = `0${mm}`;
  }
  return `${yyyy}-${mm}-${dd}`;
}

let cachedProjectDocumentationRootPageResult = null;
let cachedRegionResults = null;
function extractPageIds(searchAPIResponse) {
  const res = [];
  searchAPIResponse.results.forEach(page => {
    res.push(page.id);
  });
  return res;
}

function parentQuery(pageIds) {
  const restriction = [];
  pageIds.forEach(pageId => {
    restriction.push(`parent=${pageId}`);
  });
  return `(${restriction.join(' OR ')})`;
}

function getRegions(spaceKey, projectDocumentationRootPage) {
  let promise;
  if (cachedProjectDocumentationRootPageResult) {
    promise = $.Deferred()
      .resolve(cachedProjectDocumentationRootPageResult)
      .promise();
  } else {
    // get the id of the root Product Documentation page
    promise = confluence.getContent(spaceKey, projectDocumentationRootPage);
  }
  return promise
    .then(rootPage => {
      cachedProjectDocumentationRootPageResult = rootPage;
      if (cachedRegionResults) return cachedRegionResults;
      // get all the direct children of the root (the region pages) (there are around 10 of them but we use a limit of 50 to make sure we have them all)
      return confluence
        .searchPagesWithCQL(
          spaceKey,
          `label!='project-documentation-pages' AND parent=${cachedProjectDocumentationRootPageResult.id}`,
          50,
          EXPAND_LABELS,
        )
        .then(level1Results => {
          const regionsWithSubRegions = [cachedProjectDocumentationRootPageResult.id];
          level1Results.results.forEach(page => {
            if (page.metadata && page.metadata.labels && page.metadata.labels.results) {
              page.metadata.labels.results.forEach(label => {
                if (label.name == 'ci-has-subregions') {
                  regionsWithSubRegions.push(page.id);
                }
              });
            }
          });
          return confluence.searchPagesWithCQL(
            spaceKey,
            `label='ci-region' AND label!='project-documentation-pages' AND ${parentQuery(regionsWithSubRegions)}`,
            50,
          );
        });
    })
    .then(regionResults => {
      cachedRegionResults = regionResults;
      return regionResults;
    });
}

/** Return 'limit' sub-sub pages of the spaceKey:projectDocumentationRootPage, whose title partially match partialTitle */
function getCustomersMatching(spaceKey, projectDocumentationRootPage, partialTitle, limit) {
  return getRegions(spaceKey, projectDocumentationRootPage)
    .then(regionResults => {
      const titleRestriction = partialTitle
        ? ` and (title~"${stripQuote(partialTitle)}" OR title~"${stripQuote(partialTitle)}*")`
        : '';
      return confluence.searchPagesWithCQL(
        spaceKey,
        `label!='ci-region' AND ${parentQuery(extractPageIds(cachedRegionResults))}${titleRestriction}`,
        limit,
        'ancestors',
      );
    })
    .then(searchResponse => {
      const regionTitles = filterTitlesFromResults(cachedRegionResults);
      const customers = [];
      searchResponse.results.forEach(page => {
        customers.push(buildCustomerAutoCompleteData(page, regionTitles));
      });
      return customers;
    });
}

/* builds the data to show in the autocomplete customer input on the golden form */
function buildCustomerAutoCompleteData(page, regionTitles) {
  return {
    label: page.title,
    regions: findRegionsInAncestors(page.ancestors, regionTitles),
  };
}

function stripQuote(str) {
  return str.replace(/"/g, '');
}
