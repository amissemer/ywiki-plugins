import SyncStatusEnum from './SyncStatusEnum';
import {createPageUnderPageId, updateContent, getContentById} from '../../common/confluence/confluence-page-async';
import {preProcess} from '../../common/confluence/confluence-page-postprocessor';
import {setSyncTimeStamps} from '../../common/confluence/confluence-sync-timestamps';
import Page from '../../common/confluence/Page';

const COPY_EXPANDS = 'version,space,body.storage,metadata.labels,children.page,children.attachment.version,children.attachment.space';
const STYLES = {
    [SyncStatusEnum.TARGET_MISSING]: "create-target",
    [SyncStatusEnum.SOURCE_UPDATED]: "push",
    [SyncStatusEnum.TARGET_UPDATED]: "pull",
    [SyncStatusEnum.CONFLICTING]: "conflict"
};

function SyncStatus(pageWrapper, targetSpaceKey, targetPage, syncTimeStamp) {
    let sourcePage = pageWrapper.page;
    this.targetPage = targetPage;
    this.sourcePage = sourcePage;
    this.syncTimeStamp = syncTimeStamp;
    this.pageWrapper = pageWrapper;
    this.performPush = noop;
    this.performPull = noop;
    this.targetSpaceKey = targetSpaceKey;
    if (!targetPage) {
      this.status = SyncStatusEnum.TARGET_MISSING;
      this.performPush = createPage;
    } else if (syncTimeStamp && targetPage.version.number !== syncTimeStamp.sourceVersion && sourcePage.version.number === syncTimeStamp.targetVersion) {
      this.status = SyncStatusEnum.TARGET_UPDATED;
      this.performPull = performPull;
      return;
    } else if (syncTimeStamp && targetPage.version.number !== syncTimeStamp.sourceVersion) {
      this.status = SyncStatusEnum.CONFLICTING;
      this.performPush = performUpdate;
      this.performPull = performPull;
    } else if (syncTimeStamp && sourcePage.version.number === syncTimeStamp.targetVersion) {
      this.status = SyncStatusEnum.UP_TO_DATE;
    } else {
      this.status = SyncStatusEnum.SOURCE_UPDATED;
      this.performPush = performUpdate;
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
        let newPage = Page.copyFrom(sourcePage);
       
        await preProcess(newPage, sourcePage.space.key, targetSpaceKey);
        newPage.setSpaceKey(targetSpaceKey).setParentId(pageWrapper.parentPage.syncStatus.targetPage.id);

        this.targetPage = await createPageUnderPageId(newPage);
        await this.markSynced();
    }

    async function performUpdate() {
        let updatedTargetPage = Page.newVersionOf(this.targetPage, `pushed from ${this.sourcePage.space.key} with ysync`, true);
        updatedTargetPage.setBodyFromPage(this.sourcePage).setTitle(this.sourcePage.title);
        await preProcess(updatedTargetPage, this.sourcePage.space.key, targetSpaceKey);
        this.targetPage = await updateContent(updatedTargetPage);
        await this.markSynced();
    }
  
    async function performPull() {
        if (!this.targetPage.body || !this.targetPage.body.storage) {
            this.targetPage = targetPage = await getContentById(targetPage.id, COPY_EXPANDS);
        }
        let updatedSourcePage = Page.newVersionOf(this.sourcePage, `pulled from ${this.targetPage.space.key} with ysync`);
        updatedSourcePage.setBodyFromPage(this.targetPage).setTitle(this.targetPage.title);
        await preProcess(updatedSourcePage, this.targetPage.space.key, this.sourcePage.space.key);
        this.sourcePage = await updateContent(updatedSourcePage);
        await this.markSynced();
        await this.pageWrapper.refreshSourcePage();
    }
}

SyncStatus.prototype.style = function() {
    return STYLES[this.status] || "";
};

SyncStatus.prototype.markSynced = async function() {
    // source and target in timeStamps are reversed, for now
    return setSyncTimeStamps(this.targetPage, this.sourcePage, this.targetPage.space.key, this.sourcePage.space.key);
}

export default SyncStatus; 
