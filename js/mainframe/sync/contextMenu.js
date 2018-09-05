import $ from 'jquery';
import 'jquery-ui';
import 'jquery-contextmenu/dist/jquery.contextMenu.min.css';
import 'jquery-contextmenu/dist/jquery.contextMenu.js';
import 'font-awesome/css/font-awesome.min.css';
import pageSyncAnalyzer from './pageSyncAnalyzer';

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
            checkTargetChanges: MENU_ITEMS.checkTargetChangesItem,
            checkSourceChanges: MENU_ITEMS.checkSourceChangesItem,
            overwriteTargetChanges: MENU_ITEMS.pushItem("Overwrite target", WARN),
            overwriteSourceChanges: MENU_ITEMS.pullItem("Overwrite source", WARN)
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
});

function getData(element) {
    return $.view($(element)).data;
}
function getPageGroup(element) {
    let view = $.view($(element));
    if (view.data.isPageGroup) {
        return view.data;
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
        callback: function(){ 
            let data = getData(this);
            window.open(data.syncStatus.sourcePage._links.webui);
        }
    },
    openTargetItem : {
        name: "Open target", 
        callback: function(){ 
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
    checkSyncItem : {
        name: "Check Synchronization", 
        callback: function() {
            let pageGroup = getPageGroup(this);
            let targetSpace = getTargetSpace(this);
            pageSyncAnalyzer(pageGroup, targetSpace);
        }
    },
    pushItem: function(name, warning) {
        return {
            name: name || "Push changes", 
            icon: warning?WARNING_ICON:null,
            callback: function(key, opt){ alert("push on "+$(this).text()); }
        }
    },
    pullItem: function(name, warning) {
        return {
            name: name || "Pull changes", 
            icon: warning?WARNING_ICON:null,
            callback: function(key, opt){ alert("push on "+$(this).text()); }
        }
    },
    separator : "---------"
} 

function setMenuTitle(cssClass, title) {
    $(cssClass).attr('data-menutitle', title);
}