import $ from 'jquery';

import {getContent,getContentById} from '../common/confluence/confluence-page-async';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.css';
// resets some default
import './spaceSyncPlugin.css';
import {loadPluginStyleSheet} from './stylesheetPlugin';
import {host} from './pluginCommon';
import {loadFragment, loadTemplate} from './fragmentLoader';
import jsviews from 'jsviews';
import log from './sync/log';
import PageWrapper from './sync/PageWrapper';
import {Observable} from 'rxjs/Observable';
import './sync/contextMenu';
import pageSyncAnalyzer from './sync/pageSyncAnalyzer';

loadPluginStyleSheet('space-sync-bundle.css');
jsviews($);

const pageExpands = 'version,space,body.storage,metadata.labels,children.page,children.attachment.version,children.attachment.space';

var pages = [];
function addPageGroup(pageGroup) {
    $.observable(pages).insert(pageGroup);
}

let appElt = $('ci-sync-app').first();
let sourceSpace = appElt.data('source-space');
let targetSpace = appElt.data('target-space');
let sourceRootPage = appElt.data('source-root-page');
let targetParentPage = appElt.data('target-parent-page');
log(`sourceSpace="${sourceSpace}"`);
log(`targetSpace="${targetSpace}"`);
log(`sourceRootPage="${sourceRootPage}"`);
log(`targetParentPage="${targetParentPage}"`);

const model = {
    output: log.output, 
    pages: pages,
    host: host,
    targetSpace: targetSpace
};
const helpers = {
    analyze : pageSyncAnalyzer,
    menuAction: function(ev, ui) {
        if (!ui.item.children("ul").length) {
            // Leaf menu item
            alert(ui.item.text());
        }
    }
};

loadTemplate('sync-plugin/page-groups-table.html').then( function(tmpl) {
    tmpl.link(appElt, model, helpers);
});

listPageGroups(sourceSpace, sourceRootPage).subscribe(
    pageGroup => {
        log(`Found page group: ${pageGroup.title}`);
        pageGroup.descendants = descendants(pageGroup, pageGroup.children);
        addPageGroup(pageGroup);
    },
    e => log(`Error: ${e}`),
    () => log('Page group listing complete')
);

const INDENT = "  ";
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

function listPageGroups(sourceSpaceKey, sourcePageTitle) {
    return Observable.create(observer => {
        (async () => {
            try {
                log();
                log(`Listing page groups to sync from ${sourceSpaceKey}:${sourcePageTitle}...`);
                let sourcePage = await getContent(sourceSpaceKey,sourcePageTitle, pageExpands);
                //let targetParent = await getContent(targetSpaceKey,targetParentPage);
                await scanPageGroups(sourcePage, null, observer);
            } catch (err) {
                observer.error(err);
            }
            observer.complete();
        })().then(null, observer.error);
    });
}




/** emits page groups to the observer (the root and subtrees starting from pages with a given label).
 * Wraps all pages in PageWrapper. */
async function scanPageGroups(sourcePage, parentPageWrapper, observer) {
    let thisPageWrapper = new PageWrapper(sourcePage, parentPageWrapper);

    let children = sourcePage.children.page;
    let allChildren = [];
    while (children) {
        allChildren = allChildren.concat(await Promise.all(children.results.map(async child => {
            let childDetails = await getContentById(child.id, pageExpands);
            let childWrapper = await scanPageGroups(childDetails, thisPageWrapper, observer);
            return childWrapper;
        })));
        if (children._links.next) {
            children = await $.ajax(children._links.next);
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







