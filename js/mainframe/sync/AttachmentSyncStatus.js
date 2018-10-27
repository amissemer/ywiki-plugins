import SyncStatusEnum from './SyncStatusEnum';
import log from './log';
import AttachmentFactory from '../../common/confluence/Attachment';
const Attachment = AttachmentFactory();

function AttachmentSyncStatus(parentSyncStatus, sourceAttachment, targetAttachment, syncTimeStamp) {
    this.parentSyncStatus = parentSyncStatus;
    this.sourceAttachment = sourceAttachment;
    this.id = this.sourceAttachment.id();
    this.targetAttachment = targetAttachment;
    this.syncTimeStamp = syncTimeStamp;

    this.performPush = noop;
    this.performPull = noop;
    this.recheckSyncStatus = recheckSyncStatus;

    let syncSourceVersion = version(syncTimeStamp.getPage(this.sourceAttachment.id()));
    let syncTargetVersion = version(syncTimeStamp.getOtherPage(this.sourceAttachment.id()));
    if (!this.targetAttachment || !this.targetAttachment.exists()) { // the target doesn't exist
      this.status = SyncStatusEnum.TARGET_ATTACHMENT_MISSING;
      this.performPush = createAttachment;
    } else if (syncTimeStamp.isNew()) { // the target exists but we did not find the timestamp
      this.status = SyncStatusEnum.ATTACHMENT_CONFLICTING;
      this.performPush = performUpdate;
      this.performPull = performPull;
    } else if (this.targetAttachment.version() !== syncTargetVersion && this.sourceAttachment.version() === syncSourceVersion) {
        // the target was updated and not the source
      this.status = SyncStatusEnum.TARGET_ATTACHMENT_UPDATED;
      this.performPull = performPull;
    } else if (this.targetAttachment.version() !== syncTargetVersion) {
        // the target was updated (and the source too of course)
      this.status = SyncStatusEnum.ATTACHMENT_CONFLICTING;
      this.performPush = performUpdate;
      this.performPull = performPull;
    } else if (this.sourceAttachment.version() === syncSourceVersion) {
        // the target wasn't updated, nor the source
      this.status = SyncStatusEnum.ATTACHMENT_UP_TO_DATE;
    } else {
        // the target wasn't updated, but the source was
      this.status = SyncStatusEnum.SOURCE_ATTACHMENT_UPDATED;
      this.performPush = performUpdate;
    }

    function version(page) {
        return page?page.version:null;
    }

    async function noop() {}
  
    async function createAttachment() {
        // make sure the parent container exists
        if (this.parentSyncStatus.status===SyncStatusEnum.TARGET_MISSING) {
            throw 'Cannot push attachments because some pages are missing, push the pages first';
        }
        let parentContainerId = this.parentSyncStatus.targetPage.id;
        this.targetAttachment = await Attachment.getOrCreateAttachment(parentContainerId, this.sourceAttachment.title());
        await performUpdate.apply(this);
    }

    async function performUpdate() {
        await this.targetAttachment.cloneFrom(this.sourceAttachment);
        log(`Pushed attachment ${identifier(this.targetAttachment)} (status=${this.status}) from ${identifier(this.sourceAttachment)}`);
        await this.markSynced();
        await this.recheckSyncStatus();
    }
  
    async function performPull() {
        await this.sourceAttachment.cloneFrom(this.targetAttachment);
        log(`Pulled attachment ${identifier(this.sourceAttachment)} (status=${this.status}) from ${identifier(this.targetAttachment)}`);
        await this.markSynced();
        await this.recheckSyncStatus();
    }

    async function recheckSyncStatus() {
        await this.parentSyncStatus.pageWrapper.computeAttachmentSyncStatus(this.sourceAttachment);
    }

    function identifier(attachment) {
        return attachment.toString();
    }
}

AttachmentSyncStatus.prototype.markSynced = async function() {
    this.syncTimeStamp.setSyncedPages(this.sourceAttachment._internal, this.targetAttachment._internal);
    await this.syncTimeStamp.save();
}


export default AttachmentSyncStatus; 


