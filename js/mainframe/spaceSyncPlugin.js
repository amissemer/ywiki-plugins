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


import {PageGroupSync} from './models/PageGroupSync';
import {PageSync} from './models/PageSync';
import log from './sync/log';

import {Observable} from 'rxjs/Observable';
//import 'rxjs/add/observable/of';
//import 'rxjs/add/operator/map';

var pages = PageGroupSync.map( [{
    title: 'test',
    pagesToPush: [{id:0, title:'Hello 2'},{id:1, title:'Hello 2'}]
}, {
    title: 'test 2', 
    pagesToPull: [{id:0, title:'Hello'}],
}, {
    title: 'test 3', 
    conflictingPages: [{id:0, title:'Hello'}],
}, {
    title: 'test 4'
}]);

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

listPages(sourceSpace, targetSpace, sourceRootPage, targetParentPage).subscribe(
    page => log(`Found page: ${page.title}`),
    e => log(`Error: ${e}`),
    () => log('Page listing complete')
);

function listPages(sourceSpaceKey, targetSpaceKey, sourcePageTitle, targetParentPage) {
    return Observable.create(async observer => {
        try {
            log();
            log(`Listing pages to sync between ${sourcePageTitle} and ${targetSpaceKey}...`);
            let sourcePage = await getContent(sourceSpaceKey,sourcePageTitle, pageExpands);
            let targetParent = await getContent(targetSpaceKey,targetParentPage);
            let syncedPage = await syncPageTreeToSpace(sourcePage, targetSpaceKey, targetParent.id, true, observer);
            observer.complete();
            log("Listing pages done");
        } catch (err) {
            observer.error(err);
        }
    });
}

$("#copyBtn").click(async () => {
    try {

        let sourcePage = await getContent(sourceSpaceKey,sourcePageTitle, pageExpands);
        let targetParent = await getContent(targetSpaceKey,targetParentPage);
        let syncedPage = await syncPageTreeToSpace(sourcePage, targetSpaceKey, targetParent.id, true);
        log("Done");
        $("#resultPage").html(`<a href="https://wiki.hybris.com/pages/viewpage.action?pageId=${syncedPage.id}">${syncedPage.title}</a>`);
    } catch (err) {
        log(err);
    }
});

async function syncPageTreeToSpace(sourcePage, targetSpaceKey, targetParentId, syncAttachments, observer) {
    //let rootCopy = await syncPageToSpace(sourcePage, targetSpaceKey, targetParentId, syncAttachments);
    observer.next(sourcePage);
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
    //return rootCopy;
}
