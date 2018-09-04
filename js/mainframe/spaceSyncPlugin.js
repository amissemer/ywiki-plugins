import {syncPageToSpace, getSyncStatus} from '../common/confluence/content-sync-service';
import {getContent,getContentById} from '../common/confluence/confluence-page-async';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.css';
// resets some default
import './spaceSyncPlugin.css';

import {loadPluginStyleSheet} from './stylesheetPlugin';
loadPluginStyleSheet('space-sync-bundle.css');
import {host} from './pluginCommon';
import {loadFragment, loadTemplate} from './fragmentLoader';
import 'jsviews';

const pageExpands = 'version,space,body.storage,metadata.labels,children.page,children.attachment.version,children.attachment.space';


import {PageGroupSync} from './models/PageGroupSync';
import {PageSync} from './models/PageSync';
import log from './sync/log';
import wrap from './sync/PageWrapperTypes';

import {Observable} from 'rxjs/Observable';

//import 'rxjs/add/observable/of';
//import 'rxjs/add/operator/map';

var pages = [];
function addPageGroup(pageGroup) {
    $.observable(pages).insert(PageGroupSync.map(pageGroup));
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
    host: host
};
const helpers = {
    analyze : function(pageGroup) {
        log(`Checking synchronization status for ${pageGroup.title()} - ${pageGroup.rootPage.id}...`);
        pageGroup.analyzing(true);
        checkSyncStatus(pageGroup).subscribe(
            item => log(`Sync check ${item}%`),
            e => log(`Error: ${e}`),
            () => log('Checked sync status complete for ${pageGroup.title()} - ${pageGroup.rootPage.id}')
        );
    }
};

loadTemplate('sync-plugin/page-groups-table.html').then( function(tmpl) {
    tmpl.link(appElt, model, helpers);
});

listPageGroups(sourceSpace, sourceRootPage).subscribe(
    pageGroup => {
        log(`Found page group: ${pageGroup.title}`);
        //pageGroup.rootPage = pageGroup.rootPage;
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
        } else {
            console.log('ok');
        }
    }
    return descendantsRes;
}

function listPageGroups(sourceSpaceKey, sourcePageTitle) {
    return Observable.create(async observer => {
        try {
            log();
            log(`Listing page groups to sync from ${sourceSpaceKey}:${sourcePageTitle}...`);
            let sourcePage = await getContent(sourceSpaceKey,sourcePageTitle, pageExpands);
            //let targetParent = await getContent(targetSpaceKey,targetParentPage);
            await scanPageGroups(sourcePage, null, observer);
            observer.complete();
        } catch (err) {
            observer.error(err);
        }
    });
}

function checkSyncStatus(pageGroup) {
    //let rootCopy = await syncPageToSpace(sourcePage, targetSpaceKey, targetParentId, syncAttachments);
    return Observable.create(async observer => {
        let numPages = 1 + pageGroup.descendants.length;
        let synced = 0;
        try {
            await checkSyncStatusRecursive(pageGroup, pageGroup, targetSpace, targetParentPage, true, { next: () =>  
                observer.next( Math.round((100*synced++)/numPages) ) 
            });
        } catch (err) {
            observer.error(err);
        }
        observer.complete();
    });
}
async function checkSyncStatusRecursive(pageGroup, pageWrapper, targetSpaceKey, targetParentId, syncAttachments, observer) {
    let children = pageWrapper.children;
    let page = pageWrapper.page;
    let syncStatus = await getSyncStatus(page, targetSpaceKey, targetParentId, syncAttachments);
    let targetPage = syncStatus.targetPage;
    pageGroup.updateWithSyncStatus(syncStatus);
    observer.next();
    await Promise.all(children.map(async child => 
        checkSyncStatusRecursive(pageGroup, child, targetSpaceKey, targetPage, syncAttachments,observer)
    ));
}


/** emits page groups to the observer (the root and subtrees starting from pages with given label, see isPageGroupRoot).
 * Wraps all pages in PageWrapper or PageGroup. */
async function scanPageGroups(sourcePage, parentPageWrapper, observer) {
    let thisPageWrapper = wrap(sourcePage, parentPageWrapper);

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

    if (thisPageWrapper.isPageGroup()) {
        observer.next(thisPageWrapper);
    }
    return thisPageWrapper;
}







