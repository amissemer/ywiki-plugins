import SyncStatusEnum from './SyncStatusEnum';

export default class PageWrapper {
    constructor(page, parent) {
        this.title = page.title;
        this.url = page._links.webui;
        this.page = page;
        this.children = null;
        this.parentPage = parent;
        this.pagesToPush = [];
        this.pagesToPull = [];
        this.syncedPages = [];
        this.conflictingPages = [];
        this.descendants = [];
        this.isPageGroup = isPageGroupRoot(page, parent);
        
    }
    skipSync(context) {
        return context.title!=this.title && this.isPageGroup;
    }
    updateWithSyncStatus(syncStatus) {
        switch (syncStatus.status) {
            case SyncStatusEnum.TARGET_MISSING: return this.addPageToPush(syncStatus);
            case SyncStatusEnum.TARGET_UPDATED: return this.addPageToPull(syncStatus);
            case SyncStatusEnum.CONFLICTING: return this.addConflictingPage(syncStatus);
            case SyncStatusEnum.UP_TO_DATE: return this.addSyncedPage(syncStatus);
            case SyncStatusEnum.SOURCE_UPDATED: return this.addPageToPush(syncStatus);
        }
    }
    addPageToPush(page) {
        $.observable(this.pagesToPush).insert(page);
    }
    addPageToPull(page) {
        $.observable(this.pagesToPull).insert(page);
    }
    addConflictingPage(page) {
        $.observable(this.conflictingPages).insert(page);
    }
    addSyncedPage(page) {
        $.observable(this.syncedPages).insert(page);
    }
    setAnalyzing(analyzing) {
        $.observable(this).setProperty('analyzing', analyzing);
    }
    setAnalyzed(analyzed) {
        let o = $.observable(this);
        o.setProperty('analyzing', false);
        o.setProperty('analyzed', true);
    }
}

const PAGE_GROUP_LABELS = ['service-dashboard','ci-publish-package'];

function hasLabel(page, labelsToFind) {
    for (let label of page.metadata.labels.results) {
        if (labelsToFind.indexOf(label.name)>=0) return true;
    }
    return false;
}

function isPageGroupRoot(page, parentPage) {
    return (!parentPage) || hasLabel(page, PAGE_GROUP_LABELS);
}

/* URL to display changes since last synchro */
function getDiffUrl(page, lastSyncedVersion) {
    return `/pages/diffpagesbyversion.action?pageId=${page.id}&selectedPageVersions=${page.version.number}&selectedPageVersions=${lastSyncedVersion}`;
}