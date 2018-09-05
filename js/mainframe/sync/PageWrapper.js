import SyncStatusEnum from './SyncStatusEnum';
import {getTargetSyncTimeStamp, getSourceSyncTimeStamp} from '../../common/confluence/confluence-sync-timestamps';
import {getContent,getContentById} from '../../common/confluence/confluence-page-async';
import SyncStatus from './SyncStatus';

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
    async computeSyncStatus(targetSpaceKey, syncAttachments) {
        let syncStatus;
        let targetPage;
        let pageToCopy = this.page;
        let syncTimeStamp = await getSourceSyncTimeStamp(pageToCopy.id, targetSpaceKey);
        if (syncTimeStamp && syncTimeStamp.targetContentId!=pageToCopy.id) {
          log(`Error syncTimeStamp`);
        } else if (syncTimeStamp) {
          try {
            targetPage = await getContentById(syncTimeStamp.sourceContentId, 'version,metadata.labels');
            syncStatus = new SyncStatus(this, targetSpaceKey, targetPage, syncTimeStamp);
          } catch (err) {
            console.debug("Normal error ",err);
          }
        }
        if (!syncStatus && !targetPage) {
          try {
            targetPage = await getContent(targetSpaceKey, pageToCopy.title, 'version,metadata.labels');
            syncTimeStamp = await getTargetSyncTimeStamp(targetPage.id, pageToCopy.space.key);
            // Do a full initial sync
            // TODO filter links
            syncStatus = new SyncStatus(this, targetSpaceKey, targetPage, syncTimeStamp);
          } catch (err) {
            // Create the new page 
            // TODO filter links
            syncStatus = new SyncStatus(this, targetSpaceKey)
          }
        }
        $.observable(this).setProperty("syncStatus", syncStatus);
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