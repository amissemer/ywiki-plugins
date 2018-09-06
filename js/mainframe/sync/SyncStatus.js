import SyncStatusEnum from './SyncStatusEnum';
import {createPageUnderPageId, updateContent, getContentById} from '../../common/confluence/confluence-page-async';
import {preProcess} from '../../common/confluence/confluence-page-postprocessor';
import {setSyncTimeStamps} from '../../common/confluence/confluence-sync-timestamps';

const COPY_EXPANDS = 'version,space,body.storage,metadata.labels,children.page,children.attachment.version,children.attachment.space';


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
  
    async function performUpdate() {
      await preProcess(sourcePage, targetSpaceKey);
      targetPage.version.number++;
      targetPage.body = targetPage.body || {};
      targetPage.body.storage = sourcePage.body.storage; // TODO filtering
      targetPage.title = sourcePage.title;
      await updateContent(targetPage);
      await this.markSynced()
    }
  
    async function createPage() {
        if (!pageWrapper.parentPage.syncStatus) {
            await pageWrapper.parentPage.computeSyncStatus(targetSpaceKey,false);
        }
        if (pageWrapper.parentPage.syncStatus.status===SyncStatusEnum.TARGET_MISSING && !pageWrapper.parentPage.syncStatus.targetPage) {
            await pageWrapper.parentPage.syncStatus.performPush(); // create the parent recursively if necessary
        }
        this.targetPage = await createPageUnderPageId(sourcePage, targetSpaceKey, pageWrapper.parentPage.syncStatus.targetPage.id);
        await this.markSynced()
    }
  
    async function performPull() {
        if (!this.targetPage.body || !this.targetPage.body.storage) {
            this.targetPage = targetPage = await getContentById(targetPage.id, COPY_EXPANDS);
        }
        await preProcess(this.targetPage, sourcePage.space.key);
        sourcePage.version.number++;
        sourcePage.body = sourcePage.body || {};
        sourcePage.body.storage = sourcePage.body.storage; // TODO filtering
        sourcePage.title = targetPage.title;
        await updateContent(sourcePage);
        await this.markSynced()
    }
}

SyncStatus.prototype.style = function() {
    switch(this.status) {
        case SyncStatusEnum.TARGET_MISSING:
            return "create-target";
        case SyncStatusEnum.SOURCE_UPDATED:
            return "push";
        case SyncStatusEnum.TARGET_UPDATED:
            return "pull";
        case SyncStatusEnum.CONFLICTING:
            return "conflict";
        default:
            return "";
    }
};

SyncStatus.prototype.markSynced = async function() {
    // source and target in timeStamps are reversed, for now
    return setSyncTimeStamps(this.targetPage, this.sourcePage, this.targetPage.space.key, this.sourcePage.space.key);
}

export default SyncStatus; 
