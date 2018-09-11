import SyncStatusEnum from './SyncStatusEnum';
import {getContent,getContentById} from '../../common/confluence/confluence-page-async';
import SyncStatus from './SyncStatus';
import {loadPageForSync} from './spaceScanner';
import $ from 'jquery';
import SyncTimeStamp from './SyncTimeStamp';

const TARGET_EXPANDS = 'version,metadata.labels,space';
const MIN_PROGRESS = 20; // in percent, what's the min size of the progress bars

export default class PageWrapper {
    constructor(page, parent) {
        this.title = page.title;
        this.url = page._links.webui;
        this.page = page;
        this.children = null;
        this.parentPage = parent;
        this.isPageGroup = isPageGroupRoot(page, parent);
        this.pageGroupRoot = findRoot(this); // cache the pageGroup that contains this page

        // PageGroup specific properties
        if (this.isPageGroup) {
            this.pagesToPush = [];
            this.pagesToPull = [];
            this.syncedPages = [];
            this.unsyncedLabels = [];
            this.conflictingPages = [];
            this.descendants = [];
            this.analyzing = false;
            this.analyzed = false;
            this.progress = {};
        }
        
    }
    async refreshSourcePage() {
        let page = await loadPageForSync(this.page.id);
        let o = $.observable(this);
        o.setProperty("page", page);
        o.setProperty("title", page.title);
        o.setProperty("url", page._links.webui);
        o.removeProperty("syncStatus");
    }
    skipSync(context) {
        return context.title!=this.title && this.isPageGroup;
    }
    _updateWithSyncStatus(syncStatus) {
        this.removeExistingBySourcePageId(syncStatus.sourcePage.id);
        switch (syncStatus.status) {
            case SyncStatusEnum.TARGET_MISSING: return this.addPageToPush(syncStatus);
            case SyncStatusEnum.TARGET_UPDATED: return this.addPageToPull(syncStatus);
            case SyncStatusEnum.CONFLICTING: return this.addConflictingPage(syncStatus);
            case SyncStatusEnum.UP_TO_DATE: return this.addSyncedPage(syncStatus);
            case SyncStatusEnum.SOURCE_UPDATED: return this.addPageToPush(syncStatus);
        }
    }
    removeExistingBySourcePageId(pageId) {
        this.removeFromArray(this.pagesToPush, pageId);
        this.removeFromArray(this.pagesToPull, pageId);
        this.removeFromArray(this.conflictingPages, pageId);
        this.removeFromArray(this.syncedPages, pageId);
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
    removeFromArray(arr, pageId) {
        let idx = arr.findIndex(s=>s.sourcePage.id==pageId);
        if (idx >= 0) {
            $.observable(arr).remove(idx);
        }
    }
    setProgress(action, percent) {
        // percent is always scaled to start from MIN_PROGRESS%, so that the progress bar is visible from the start
        $.observable(this.progress).setProperty(action, MIN_PROGRESS + Math.round((100-MIN_PROGRESS)*percent / 100.));
    }
    removeProgress(action) {
        $.observable(this.progress).removeProperty(action);
    }
    setAnalyzing(analyzing) {
        $.observable(this).setProperty('analyzing', analyzing);
    }
    setAnalyzed(analyzed) {
        let o = $.observable(this);
        o.setProperty('analyzing', false);
        o.setProperty('analyzed', true);
    }
    getSourceDiff() {
        return getDiffUrl(this.syncStatus.sourcePage, this.syncStatus.syncTimeStamp.getPage(this.syncStatus.sourcePage.id).version);
    }
    getTargetDiff() {
        return getDiffUrl(this.syncStatus.targetPage, this.syncStatus.syncTimeStamp.getPage(this.syncStatus.targetPage.id).version);
    }
    async computeSyncStatus(targetSpaceKey, syncAttachments) {
        let syncStatus;
        let targetPage;
        let pageToCopy = this.page;
        let syncTimeStamp = await SyncTimeStamp.loadLastSyncFromContentWithSpace(pageToCopy.id, targetSpaceKey);
        if (!syncTimeStamp.isNew()) {
          try {
            targetPage = await getContentById(syncTimeStamp.getOtherPage(sourceContentId).contentId, TARGET_EXPANDS);
            syncStatus = new SyncStatus(this, targetSpaceKey, targetPage, syncTimeStamp);
          } catch (err) {
            // target based on syncTimeStamp id is missing
            console.debug("Normal error ",err);
          }
        }
        if (!syncStatus && !targetPage) { // lookup by title
          try {
            targetPage = await getContent(targetSpaceKey, pageToCopy.title, TARGET_EXPANDS);
            syncTimeStamp = await SyncTimeStamp.loadLastSyncFromContentWithSpace(targetPage.id, pageToCopy.space.key);
            syncStatus = new SyncStatus(this, targetSpaceKey, targetPage, syncTimeStamp);
          } catch (err) {
            // target with same title as source is missing
            syncStatus = new SyncStatus(this, targetSpaceKey)
          }
        }
        $.observable(this).setProperty("syncStatus", syncStatus);
        this.pageGroupRoot._updateWithSyncStatus(syncStatus);
    }
}

function findRoot(pageWrapper) {
    if (pageWrapper.parentPage ==null || pageWrapper.isPageGroup) return pageWrapper;
    return findRoot(pageWrapper.parentPage);
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