import $ from 'jquery';
import 'jquery-ui';
import 'jquery-contextmenu/dist/jquery.contextMenu.min.css';
import 'jquery-contextmenu/dist/jquery.contextMenu.js';
import 'font-awesome/css/font-awesome.min.css';
import log from './log';

const DEFAULT_Z_INDEX = 2000;
const TRIGGER = 'left';
const WARNING_ICON = "fa-exclamation-triangle";
const WARN = true;

$(function(){
    $.contextMenu({
        // define which elements trigger this menu
        selector: ".sync-table tr .link-conflict",
        className: 'context-menu-with-title context-menu-conflict',
        // define the elements of the menu
        items: {
            openSource: MENU_ITEMS.openSourceItem,
            openTarget: MENU_ITEMS.openTargetItem,
            "sep1": MENU_ITEMS.separator,
            checkSourceChanges: MENU_ITEMS.checkBothChangesItem,
            overwriteSourceChanges: MENU_ITEMS.pullItem("Overwrite source", WARN),
            overwriteTargetChanges: MENU_ITEMS.pushItem("Overwrite target", WARN),
        },
        zIndex: DEFAULT_Z_INDEX,
        trigger: TRIGGER
    });
    $.contextMenu({
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
    $.contextMenu({
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
    $.contextMenu({
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
    $.contextMenu({
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
    $.contextMenu({
        // define which elements trigger this menu
        selector: ".sync-table tr .link-ignored",
        className: 'context-menu-with-title context-menu-ignored',
        // define the elements of the menu
        items: {
            openSource: MENU_ITEMS.openSourceItem,
            openTarget: MENU_ITEMS.openTargetItem
        },
        zIndex: DEFAULT_Z_INDEX,
        trigger: TRIGGER
    });
    $.contextMenu({
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
    setMenuTitle('.context-menu-ignored', "Page is labelled as ignored");
    setMenuTitle('.context-menu-create-target', "Target doesn't exist");
});

function getData(element) {
    return $.view($(element)).data;
}
function getPageGroup(element) {
    let view = $.view($(element));
    if (view.data.isPageGroup) {
        return view.data;
    } else if (view.parent.data.isPageGroup) {
        return view.parent.data;
    } else {
        return view.parent.parent.data;
    }
}
function getTargetSpace(element) {
    return $.view($(element)).root.data.targetSpace;
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
    checkBothChangesItem : {
        name: "Check changes", 
        callback: function() {
            let data = getData(this);
            window.open(data.getSourceDiff());
            window.open(data.getTargetDiff());
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
    $(cssClass).attr('data-menutitle', title);
}
function handleErrors(funcName, asyncFunc) {
    return function() {
        (async (elt)=>{
            try {
                log(`Starting ${funcName}...`);
                await asyncFunc(elt);
                log(`Done ${funcName}.`);
            } catch (err) {
                log(`Error in ${funcName}: ${JSON.stringify(err)}`);
            }
        })(this);
    }
}
