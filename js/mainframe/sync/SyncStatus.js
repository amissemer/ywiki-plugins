import SyncStatusEnum from './SyncStatusEnum';
import {createPageUnderPageId, updateContent, getContentById} from '../../common/confluence/confluence-page-async';
import {preProcess} from '../../common/confluence/confluence-page-postprocessor';
import Page from '../../common/confluence/Page';
import log from './log';
import Labels from '../../common/confluence/Labels';
import {ensureEditRestrictions} from '../../common/confluence/confluence-permissions-async';

const IGNORE_UPDATES_LABEL = 'ci-ignore-updates';
const COPY_EXPANDS = 'version,space,body.storage,metadata.labels,children.page,children.attachment.version,children.attachment.space';
const STYLES = {
    [SyncStatusEnum.IGNORED]: "ignored",
    [SyncStatusEnum.TARGET_MISSING]: "create-target",
    [SyncStatusEnum.SOURCE_UPDATED]: "push",
    [SyncStatusEnum.TARGET_UPDATED]: "pull",
    [SyncStatusEnum.CONFLICTING]: "conflict"
};

function SyncStatus(pageWrapper, targetSpaceKey, targetPage, syncTimeStamp) {
    let sourcePage = pageWrapper.page;
    this.targetPage = targetPage;
    this.sourcePage = sourcePage;
    this.id = this.sourcePage.id;
    this.syncTimeStamp = syncTimeStamp;
    this.pageWrapper = pageWrapper;
    this.performPush = noop;
    this.performPull = noop;
    this.targetSpaceKey = targetSpaceKey;
    let syncSourceVersion = version(syncTimeStamp.getPage(this.sourcePage.id));
    let syncTargetVersion = version(syncTimeStamp.getOtherPage(this.sourcePage.id));
    if (!targetPage) {
      this.status = SyncStatusEnum.TARGET_MISSING;
      this.performPush = createPage;
    } else if (Labels.hasLabel(this.sourcePage, IGNORE_UPDATES_LABEL)) {
        this.status = SyncStatusEnum.IGNORED;
    } else if (syncTimeStamp && targetPage.version.number !== syncTargetVersion && sourcePage.version.number === syncSourceVersion) {
      this.status = SyncStatusEnum.TARGET_UPDATED;
      this.performPull = performPull;
      return;
    } else if (syncTimeStamp && targetPage.version.number !== syncTargetVersion) {
      this.status = SyncStatusEnum.CONFLICTING;
      this.performPush = performUpdate;
      this.performPull = performPull;
    } else if (syncTimeStamp && sourcePage.version.number === syncSourceVersion) {
      this.status = SyncStatusEnum.UP_TO_DATE;
    } else {
      this.status = SyncStatusEnum.SOURCE_UPDATED;
      this.performPush = performUpdate;
    }

    function version(page) {
        return page?page.version:null;
    }

    async function noop() {}
  
    async function createPage() {
        // make sure the parent syncStatus was determined first
        if (!pageWrapper.parentPage.syncStatus) {
            await pageWrapper.parentPage.computeSyncStatus(targetSpaceKey,false);
        }
        // make sure the target parent page exists
        if (pageWrapper.parentPage.syncStatus.status===SyncStatusEnum.TARGET_MISSING && !pageWrapper.parentPage.syncStatus.targetPage) {
            await pageWrapper.parentPage.syncStatus.performPush(); // create the parent recursively if necessary
        }
        // now create the page under the target parent page
        let newPage = Page.copyFrom(sourcePage); // .setVersion(1, `pushed by ysync from ${identifier(sourcePage)}`); (doesn't work on page creation)
       
        await preProcess(newPage, sourcePage.space.key, targetSpaceKey);
        newPage.setSpaceKey(targetSpaceKey).setParentId(pageWrapper.parentPage.syncStatus.targetPage.id);

        this.targetPage = await createPageUnderPageId(newPage);
        log(`Created page ${nameAndVersion(this.targetPage)} from ${identifier(sourcePage)}`);
        await ensureEditRestrictions(this.targetPage.id, this.pageWrapper.pageGroupRoot.editGroup, sourcePage.body.storage.value);
        
        await this.syncLabels(false);
        await this.markSynced();
    }

    async function performUpdate() {
        let updatedTargetPage = Page.newVersionOf(this.targetPage, `pushed by ysync from ${identifier(this.sourcePage)}`, true);
        updatedTargetPage.setBodyFromPage(this.sourcePage).setTitle(this.sourcePage.title);
        await preProcess(updatedTargetPage, this.sourcePage.space.key, targetSpaceKey);
        this.targetPage = await updateContent(updatedTargetPage);
        log(`Pushed page ${nameAndVersion(this.targetPage)} (status=${this.status}) from ${identifier(this.sourcePage)}`);
        await ensureEditRestrictions(this.targetPage.id, this.pageWrapper.pageGroupRoot.editGroup, this.sourcePage.body.storage.value);
        await this.syncLabels(false);
        await this.markSynced();
    }

    function identifier(page) {
        return `${page.space.key}:${page.id}:${page.version.number}`;
    }
    function nameAndVersion(page) {
        return `"${page.space.key}:${page.title}" (v. ${page.version.number})`;
    }
  
    async function performPull() {
        if (!this.targetPage.body || !this.targetPage.body.storage) {
            this.targetPage = targetPage = await getContentById(targetPage.id, COPY_EXPANDS);
        }
        let updatedSourcePage = Page.newVersionOf(this.sourcePage, `pulled by ysync from ${identifier(this.targetPage)}`);
        updatedSourcePage.setBodyFromPage(this.targetPage).setTitle(this.targetPage.title);
        await preProcess(updatedSourcePage, this.targetPage.space.key, this.sourcePage.space.key);
        this.sourcePage = await updateContent(updatedSourcePage);
        log(`Pulled page ${nameAndVersion(this.sourcePage)} (status=${this.status}) from ${identifier(this.targetPage)}`);
        await this.syncLabels(false);
        await this.markSynced();
        await this.pageWrapper.refreshSourcePage();
    }
}

SyncStatus.prototype.style = function() {
    return STYLES[this.status] || "";
};

SyncStatus.prototype.markSynced = async function() {
    this.syncTimeStamp.setSyncedPages(this.sourcePage, this.targetPage);
    await this.syncTimeStamp.save();
}

/** bidirectional sync of labels on source and target */
SyncStatus.prototype.syncLabels = async function(saveTimeStamp) {
    let sourceLabels = await Labels.getFromPage(this.sourcePage);
    let targetLabels = await Labels.getFromPage(this.targetPage);
    let lastSyncedLabels = this.syncTimeStamp.lastSyncedLabels();
    if (lastSyncedLabels) { // can do 3-way merge
        sourceLabels.mergeFrom(targetLabels, lastSyncedLabels);
        targetLabels.mergeFrom(sourceLabels, lastSyncedLabels);
        await sourceLabels.save();
        await targetLabels.save();
    } else {
        // just copy to target
        targetLabels.labelArray = sourceLabels.labelArray;
        await targetLabels.save();
    }
    this.syncTimeStamp.setSyncedLabels(sourceLabels.labelArray);
    if (saveTimeStamp) { // we may not want to save immediately if we have more changes to save
        await this.syncTimeStamp.save();
    }
}

export default SyncStatus; 
