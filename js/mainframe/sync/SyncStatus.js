import SyncStatusEnum from './SyncStatusEnum';
import {createPageUnderPageId, updateContent} from '../../common/confluence/confluence-page-async';
import {preProcess} from '../../common/confluence/confluence-page-postprocessor';

function SyncStatus(pageWrapper, targetSpaceKey, targetPage, syncTimeStamp) {
    let sourcePage = pageWrapper.page;
    this.targetPage = targetPage;
    this.sourcePage = sourcePage;
    this.syncTimeStamp = syncTimeStamp;
    this.pageWrapper = pageWrapper;
    if (!targetPage) {
      this.status = SyncStatusEnum.TARGET_MISSING;
      this.perform = createPage;
    } else if (syncTimeStamp && targetPage.version.number !== syncTimeStamp.sourceVersion && sourcePage.version.number === syncTimeStamp.targetVersion) {
      this.status = SyncStatusEnum.TARGET_UPDATED;
      this.perform = performPull;
      return;
    } else if (syncTimeStamp && targetPage.version.number !== syncTimeStamp.sourceVersion) {
      this.status = SyncStatusEnum.CONFLICTING;
      this.perform = performUpdate;
    } else if (syncTimeStamp && sourcePage.version.number === syncTimeStamp.targetVersion) {
      this.status = SyncStatusEnum.UP_TO_DATE,
      this.perform = noop;
    } else {
      this.status = SyncStatusEnum.SOURCE_UPDATED;
      this.perform = performUpdate;
    }

    async function noop() {}
  
    async function performUpdate() {
      await preProcess(sourcePage, targetSpaceKey);
      targetPage.version.number++;
      targetPage.body = targetPage.body || {};
      targetPage.body.storage = sourcePage.body.storage; // TODO filtering
      targetPage.title = sourcePage.title;
      await updateContent(targetPage);
    }
  
    async function createPage() {
        if (!pageWrapper.parentPage.syncStatus) {
            await pageWrapper.parentPage.computeSyncStatus(targetSpaceKey,false);
        }
        if (pageWrapper.parentPage.syncStatus.status===SyncStatusEnum.TARGET_MISSING) {
            await pageWrapper.parentPage.syncStatus.perform(); // create the parent recursively if necessary
        }
        return createPageUnderPageId(sourcePage, targetSpaceKey, pageWrapper.parentPage.syncStatus.targetPage.id);
    }
  
    async function performPull() {
      throw `not implemented`;
    }
}

SyncStatus.prototype.style = function() {
    switch(this.status) {
        case SyncStatusEnum.TARGET_MISSING:
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

export default SyncStatus; 
