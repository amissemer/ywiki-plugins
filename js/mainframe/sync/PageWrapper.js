import SyncStatusEnum from './SyncStatusEnum';
import {getContent,getContentById} from '../../common/confluence/confluence-page-async';
import SyncStatus from './SyncStatus';
import AttachmentSyncStatus from './AttachmentSyncStatus';
import {loadPageForSync} from './spaceScanner';
import $ from 'jquery';
import SyncTimeStamp from './SyncTimeStamp';
import AttachmentFactory from '../../common/confluence/Attachment';
const Attachment = AttachmentFactory();
import Labels from '../../common/confluence/Labels';

const TARGET_EXPANDS = 'version,metadata.labels,space,children.attachment.version,children.attachment.space';
const MIN_PROGRESS = 20; // in percent, what's the min size of the progress bars

export default class PageWrapper {
    constructor(page, parent) {
        this.title = page.title;
        this.url = page._links.webui;
        this.page = page;
        this.children = null;
        this.parentPage = parent;
        this.attachments = page.children.attachment.results;
        this.isPageGroup = isPageGroupRoot(page, parent);
        this.pageGroupRoot = findRoot(this); // cache the pageGroup that contains this page

        // PageGroup specific properties
        if (this.isPageGroup) {
            this.pagesToPush = [];
            this.pagesToPull = [];
            //this.syncedPages = [];
            this.unsyncedLabels = [];
            this.conflictingPages = [];
            this.conflictingAttachments = [];
            this.attachmentsToPush = [];
            this.attachmentsToPull = [];
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
        this._removeExistingBySourceContentId(syncStatus.id);
        let property;
        switch (syncStatus.status) {
            case SyncStatusEnum.TARGET_MISSING: property = this.pagesToPush; break;
            case SyncStatusEnum.TARGET_UPDATED: property = this.pagesToPull; break;
            case SyncStatusEnum.CONFLICTING: property = this.conflictingPages; break;
            //case SyncStatusEnum.UP_TO_DATE: property = this.syncedPages; break; // not used
            case SyncStatusEnum.SOURCE_UPDATED: property = this.pagesToPush; break;

            case SyncStatusEnum.TARGET_ATTACHMENT_MISSING: property = this.attachmentsToPush; break;
            case SyncStatusEnum.TARGET_ATTACHMENT_UPDATED: property = this.attachmentsToPull; break;
            case SyncStatusEnum.ATTACHMENT_CONFLICTING: property = this.conflictingAttachments; break;
            //case SyncStatusEnum.ATTACHMENT_UP_TO_DATE: property = this.syncedPages; break; // not used
            case SyncStatusEnum.SOURCE_ATTACHMENT_UPDATED: property = this.attachmentsToPush; break;
        }
        if (property) {
            return this.insertStatusInto(syncStatus, property);
        }
    }
    _removeExistingBySourceContentId(contentId) {
        this.removeFromArray(this.pagesToPush, contentId);
        this.removeFromArray(this.pagesToPull, contentId);
        this.removeFromArray(this.conflictingPages, contentId);
        //this.removeFromArray(this.syncedPages, contentId);
        this.removeFromArray(this.attachmentsToPush, contentId);
        this.removeFromArray(this.attachmentsToPull, contentId);
        this.removeFromArray(this.conflictingAttachments, contentId);
    }
    insertStatusInto(syncStatus, property) {
        $.observable(property).insert(syncStatus);
    }
    removeFromArray(arr, pageId) {
        let idx = arr.findIndex(s=>s.id==pageId);
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
            targetPage = await getContentById(syncTimeStamp.getOtherPage(pageToCopy.id).contentId, TARGET_EXPANDS);
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
            syncStatus = new SyncStatus(this, targetSpaceKey, null, syncTimeStamp);
          }
        }
        $.observable(this).setProperty("syncStatus", syncStatus);
        this.pageGroupRoot._updateWithSyncStatus(syncStatus);

        if (syncAttachments) {
            await this.computeAllAttachmentsSyncStatus(pageToCopy.children.attachment);
        }
    }
    async computeAllAttachmentsSyncStatus(attachmentListResponse) {
        await attachmentListResponse.results.forEachParallel(async attachmentInternal => {
            let sourceAttachment = await Attachment.from(attachmentInternal);
            await this.computeAttachmentSyncStatus(sourceAttachment);
        } );
        if (attachmentListResponse._links.next) {
            console.log("More than 25 attachments, loading next page");
            let next = await $.get(attachmentListResponse._links.next + "&expand=space,version");
            await this.computeAllAttachmentsSyncStatus(next);
        }
    }
    async computeAttachmentSyncStatus(sourceAttachment) {
        let attachmentSyncStatus;
        let targetAttachment;
        let containerId;
        let syncTimeStamp = await SyncTimeStamp.loadLastSyncFromContentWithSpace(sourceAttachment.id(), this.syncStatus.targetSpaceKey);
        if (this.syncStatus.targetPage && this.syncStatus.targetPage.id) {
            containerId = this.syncStatus.targetPage.id;
            targetAttachment = await Attachment.getOrCreateAttachment(containerId, sourceAttachment.title());
            if (targetAttachment.exists() && syncTimeStamp.isNew()) {
                // try and get the syncTimeStamp from the target
                syncTimeStamp = await SyncTimeStamp.loadLastSyncFromContentWithSpace(targetAttachment.id(), sourceAttachment.spaceKey());
            }
        }
        attachmentSyncStatus = new AttachmentSyncStatus(this.syncStatus, sourceAttachment, targetAttachment, syncTimeStamp);
        this.pageGroupRoot._updateWithSyncStatus(attachmentSyncStatus);
    }
}
function findRoot(pageWrapper) {
    if (pageWrapper.parentPage ==null || pageWrapper.isPageGroup) return pageWrapper;
    return findRoot(pageWrapper.parentPage);
}

const PAGE_GROUP_LABELS = ['service-dashboard','ci-publish-package'];

function isPageGroupRoot(page, parentPage) {
    return (!parentPage) || Labels.hasLabel(page, PAGE_GROUP_LABELS);
}

/* URL to display changes since last synchro */
function getDiffUrl(page, lastSyncedVersion) {
    return `/pages/diffpagesbyversion.action?pageId=${page.id}&selectedPageVersions=${page.version.number}&selectedPageVersions=${lastSyncedVersion}`;
}