import {syncPageToSpace} from '../common/confluence/content-sync-service';
import {getContent,getContentById} from '../common/confluence/confluence-page-async';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.css';
// resets some default
import './spaceSyncPlugin.css';

import {loadPluginStyleSheet} from './stylesheetPlugin';
loadPluginStyleSheet('space-sync-bundle.css');
import {loadFragment, loadTemplate} from './fragmentLoader';
import 'jsviews';

const pageExpands = 'version,space,body.storage,metadata.labels,children.page,children.attachment.version,children.attachment.space';
const PAGE_GROUP_LABELS = ['service-dashboard','ci-publish-package'];


import {PageGroupSync} from './models/PageGroupSync';
import {PageSync} from './models/PageSync';
import log from './sync/log';

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
    pages: pages 
};

loadTemplate('sync-plugin/page-groups-table.html').then( function(tmpl) {
    tmpl.link(appElt, model);
});

listPageGroups(sourceSpace, targetSpace, sourceRootPage, targetParentPage).subscribe(
    pageGroup => {
        log(`Found page group: ${pageGroup.title}`);
        addPageGroup({
            title: pageGroup.title,
            url: pageGroup.url,
            descendants: descendants(pageGroup.children)
        });
    },
    e => log(`Error: ${e}`),
    () => log('Page group listing complete')
);

const INDENT = "  ";
function descendants(children, level) {
    let descendantsRes = [];
    level = level || INDENT;
    for (let child of children) {
        if (!child.skipSync) {
            child.level = level;
            descendantsRes.push(child);
            descendantsRes = descendantsRes.concat(descendants(child.children, level+INDENT));
        }
    }
    return descendantsRes;
}

function listPageGroups(sourceSpaceKey, targetSpaceKey, sourcePageTitle, targetParentPage) {
    return Observable.create(async observer => {
        try {
            log();
            log(`Listing page groups to sync between ${sourceSpaceKey}:${sourcePageTitle} and ${targetSpaceKey}...`);
            let sourcePage = await getContent(sourceSpaceKey,sourcePageTitle, pageExpands);
            //let targetParent = await getContent(targetSpaceKey,targetParentPage);
            observer.next({
                title: sourcePage.title,
                url: sourcePage._links.webui,
                children: await scanPageGroups(sourcePage, observer)
            }); // the root page is a PageGroup by definition
            observer.complete();
        } catch (err) {
            observer.error(err);
        }
    });
}

async function ___syncPageTreeToSpace(sourcePage, targetSpaceKey, targetParentId, syncAttachments, observer) {
    //let rootCopy = await syncPageToSpace(sourcePage, targetSpaceKey, targetParentId, syncAttachments);
    let children = sourcePage.children.page;
    while (children) {
        await Promise.all(children.results.map(async child => {
            let childDetails = await getContentById(child.id, pageExpands);
            await syncPageTreeToSpace(childDetails, targetSpaceKey, null, syncAttachments, observer);
        }));
        if (children._links.next) {
            children = await $.ajax(children._links.next);
        } else {
            children = null;
        }
    }
    // once all children have been processed, if the label is PAGE_GROUP_LABEL, emit the PageGroup
    if (isPageGroupRoot(sourcePage)) {
        observer.next(sourcePage);
    }
    //return rootCopy;
}


/** emits page groups to the observer, and returns all descendants of the page if it is not a page group root page, or [] otherwise */
async function scanPageGroups(sourcePage, observer) {
    let children = sourcePage.children.page;
    let descendants = [];
    while (children) {
        descendants = descendants.concat(await Promise.all(children.results.map(async child => {
            let childDetails = await getContentById(child.id, pageExpands);
            return {
                title: childDetails.title,
                url: childDetails._links.webui,
                skipSync: isPageGroupRoot(childDetails),
                children: await scanPageGroups(childDetails, observer)
            };
        })));
        if (children._links.next) {
            children = await $.ajax(children._links.next);
        } else {
            children = null;
        }
    }
    // once all children have been processed, if the label is PAGE_GROUP_LABEL, emit the PageGroup
    if (isPageGroupRoot(sourcePage)) {
        observer.next({
            title: sourcePage.title,
            children: descendants,
            url: sourcePage._links.webui
        });
        return [];
    }
    return descendants;
}

function hasLabel(page, labelsToFind) {
    for (let label of page.metadata.labels.results) {
        if (labelsToFind.indexOf(label.name)>=0) return true;
    }
    return false;
}

function isPageGroupRoot(page) {
    return hasLabel(page, PAGE_GROUP_LABELS);
}