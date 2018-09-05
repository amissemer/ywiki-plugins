import $ from 'jquery';
import 'jquery-ui';

import {getContent,getContentById} from '../common/confluence/confluence-page-async';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.css';
// resets some default
import './spaceSyncPlugin.css';

import {loadPluginStyleSheet} from './stylesheetPlugin';
loadPluginStyleSheet('space-sync-bundle.css');
import {host} from './pluginCommon';
import {loadFragment, loadTemplate} from './fragmentLoader';
import jsviews from 'jsviews';
jsviews($);

const pageExpands = 'version,space,body.storage,metadata.labels,children.page,children.attachment.version,children.attachment.space';

import log from './sync/log';
import PageWrapper from './sync/PageWrapper';

import {Observable} from 'rxjs/Observable';

import 'jquery-contextmenu/dist/jquery.contextMenu.min.css';
import 'jquery-contextmenu/dist/jquery.contextMenu.js';
import 'font-awesome/css/font-awesome.min.css';

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
    host: host
};
const helpers = {
    analyze : function(pageGroup) {
        log(`Checking synchronization status for ${pageGroup.title} - ${pageGroup.page.id}...`);
        pageGroup.setAnalyzing(true);
        checkSyncStatus(pageGroup).subscribe(
            item => log(`Sync check ${item}%`),
            e => log(`Sync check error: ${e}`),
            () => {
                log(`Checked sync status complete for ${pageGroup.title} - ${pageGroup.page.id}`);
                pageGroup.setAnalyzed(true);
            }
        );
    },
    menuAction: function(ev, ui) {
        if (!ui.item.children("ul").length) {
            // Leaf menu item
            alert(ui.item.text());
        }
    }
};

$(function(){
    $.contextMenu({
        // define which elements trigger this menu
        selector: ".sync-table tr .link-conflict",
        className: 'context-menu-with-title context-menu-conflict',
        // define the elements of the menu
        items: {
            openSource: {name: "Open source", callback: function(key, opt){ alert("openSource on "+$(this).text());}},
            openTarget: {name: "Open target", callback: function(key, opt){ alert("openTarget on "+$(this).text());}},
            "sep1": "---------",
            checkTargetChanges: {name: "Check target changes", callback: function(key, opt){ alert("checkTargetChanges on "+$(this).text());}},
            checkSourceChanges: {name: "Check source changes", callback: function(key, opt){ alert("checkSourceChanges on "+$(this).text()); }},
            overwriteTargetChanges: {name: "Overwrite target", icon: "fa-exclamation-triangle", callback: function(key, opt){ alert("overwriteTargetChanges on "+$(this).text()); }},
            overwriteSourceChanges: {name: "Overwrite source", icon: "fa-exclamation-triangle", callback: function(key, opt){ alert("overwriteSourceChanges on "+$(this).text()); }}
        },
        zIndex: 2000,
        trigger: 'left'
        // there's more, have a look at the demos and docs...
    });
    $.contextMenu({
        // define which elements trigger this menu
        selector: ".sync-table tr .link-pull",
        className: 'context-menu-with-title  context-menu-pull',
        // define the elements of the menu
        items: {
            openSource: {name: "Open source", callback: function(key, opt){ alert("openSource on "+$(this).text());}},
            openTarget: {name: "Open target", callback: function(key, opt){ alert("openTarget on "+$(this).text());}},
            "sep1": "---------",
            checkTargetChanges: {name: "Check target changes", callback: function(key, opt){ alert("checkTargetChanges on "+$(this).text());}},
            pullTargetChanges: {name: "Pull changes", callback: function(key, opt){ alert("pullTargetChanges on "+$(this).text());}},
            resetTarget: {name: "Force reset target from source", icon: "fa-exclamation-triangle", callback: function(key, opt){ alert("resetTarget on "+$(this).text()); }}
        },
        zIndex: 2000,
        trigger: 'left'
        // there's more, have a look at the demos and docs...
    });
    $.contextMenu({
        // define which elements trigger this menu
        selector: ".sync-table tr .link-push",
        className: 'context-menu-with-title  context-menu-push',
        // define the elements of the menu
        items: {
            openSource: {name: "Open source", callback: function(key, opt){ alert("openSource on "+$(this).text());}},
            openTarget: {name: "Open target", callback: function(key, opt){ alert("openTarget on "+$(this).text());}},
            "sep1": "---------",
            checkSourceChanges: {name: "Check source changes", callback: function(key, opt){ alert("checkSourceChanges on "+$(this).text()); }},
            pushSourceChanges: {name: "Push changes", callback: function(key, opt){ alert("pushSourceChanges on "+$(this).text()); }},
            resetSource: {name: "Reset source from target", icon: "fa-exclamation-triangle", callback: function(key, opt){ alert("resetSource on "+$(this).text()); }}
        },
        zIndex: 2000,
        trigger: 'left'
        // there's more, have a look at the demos and docs...
    });
    $.contextMenu({
        // define which elements trigger this menu
        selector: ".sync-table tr .link-",
        className: 'context-menu-with-title context-menu-none',
        // define the elements of the menu
        items: {
            openSource: {name: "Open source", callback: function(key, opt){ alert("openSource on "+$(this).text());}},
            openTarget: {name: "Open target", callback: function(key, opt){ alert("openTarget on "+$(this).text());}}
        },
        zIndex: 2000,
        trigger: 'left'
        // there's more, have a look at the demos and docs...
    });
    $.contextMenu({
        // define which elements trigger this menu
        selector: ".sync-table tr .link-default",
        //className: 'context-menu-with-title context-menu-default',
        // define the elements of the menu
        items: {
            checkSync: {name: "Check Synchronization", callback: function(key, opt){ alert("checkSync on "+$(this).text());}}
        },
        zIndex: 2000,
        trigger: 'left'
        // there's more, have a look at the demos and docs...
    });
    $('.context-menu-conflict').attr('data-menutitle', "Conflicting page");
    $('.context-menu-pull').attr('data-menutitle', "Target is more recent");
    $('.context-menu-push').attr('data-menutitle', "Source is more recent");
    $('.context-menu-none').attr('data-menutitle', "Page is synchronized");
    //$('.context-menu-default').attr('data-menutitle', "Check the synchronization fir");
});

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

function checkSyncStatus(pageGroup) {
    return Observable.create(observer => {
        (async () => {
            let numPages = 1 + pageGroup.descendants.length;
            let synced = 0;
            try {
                await checkSyncStatusRecursive(pageGroup, pageGroup, targetSpace, true, callback);
            } catch (err) {
                log('got a sync check error');
                observer.error(err);
            }
            observer.complete();

            function callback() {
                observer.next( Math.round((100* (++synced))/numPages) );
            }

        })().then(null, observer.error);

        
    });
}
async function checkSyncStatusRecursive(pageGroup, pageWrapper, targetSpaceKey, syncAttachments, callback) {
    let children = pageWrapper.children;
    let page = pageWrapper.page;
    await pageWrapper.computeSyncStatus(targetSpaceKey, syncAttachments);
    pageGroup.updateWithSyncStatus(pageWrapper.syncStatus);
    callback();
    await Promise.all(children.map(async child => {
        if (!child.skipSync(pageGroup)) {
            return checkSyncStatusRecursive(pageGroup, child, targetSpaceKey, syncAttachments, callback)
        } else {
            return null;
        }
    }));
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







