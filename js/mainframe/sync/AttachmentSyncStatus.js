import SyncStatusEnum from './SyncStatusEnum';
import log from './log';
import Attachment from '../../common/confluence/Attachment';

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



    // if (!syncTimeStamp.isNew() && targetAttachment.exists()) {
    //                 // we have the source and target attachments and a syncTimeStamp, first check consistency
    //                 if (syncTimeStamp.getPage(attachment.id)==null || syncTimeStamp.getPage(targetAttachment.id())==null) {
    //                     syncStatus = new AttachmentSyncStatus();
    //                 }
    //             } && (syncTimeStamp.getPage(targetAttachment.id())  !== syncTimeStamp.targetContentId || targetAttachment.version.number !== syncTimeStamp.targetVersion ) ) {
    //                 throw `Attachment ${targetAttachmentId} was modified on target, should we overwrite?`;
    //             }
    //             if (syncTimeStamp && targetAttachmentId!=null && attachment.version.number === syncTimeStamp.sourceVersion) {
    //                 console.log(`attachment ${targetAttachmentId} was already up-to-date, synced with source version ${attachment.version.number}`);
    //                 return targetAttachment;
    
    
    //         }
                //let cloned = await syncAttachment(attachment, targetContainerId, syncTimeStamp);
            //synced.push(cloned);
    
            // if (!syncTimeStamp.isNew()) {
            //     try {
            //       targetPage = await getContentById(syncTimeStamp.getOtherPage(pageToCopy.id).contentId, TARGET_EXPANDS);
            //       syncStatus = new SyncStatus(this, targetSpaceKey, targetPage, syncTimeStamp);
            //     } catch (err) {
            //       // target based on syncTimeStamp id is missing
            //       console.debug("Normal error ",err);
            //     }
            //   }
            //   if (!syncStatus && !targetPage) { // lookup by title
            //     try {
            //       targetPage = await getContent(targetSpaceKey, pageToCopy.title, TARGET_EXPANDS);
            //       syncTimeStamp = await SyncTimeStamp.loadLastSyncFromContentWithSpace(targetPage.id, pageToCopy.space.key);
            //       syncStatus = new SyncStatus(this, targetSpaceKey, targetPage, syncTimeStamp);
            //     } catch (err) {
            //       // target with same title as source is missing
            //       syncStatus = new SyncStatus(this, targetSpaceKey, null, syncTimeStamp);
            //     }
            //   }
            //   $.observable(this).setProperty("syncStatus", syncStatus);
            //   this.pageGroupRoot._updateWithSyncStatus(syncStatus);
      



// export async function syncAttachment(attachment, targetContainerId, syncTimeStamp) {
//     let targetAttachment = await lookupAttachment(targetContainerId, attachment.title);
//     let targetAttachmentId = targetAttachment ? targetAttachment.id:null;
//     if (targetAttachmentId && !syncTimeStamp) {
//       // try and get it from the target
//       syncTimeStamp = await getSourceSyncTimeStamp(targetAttachmentId, attachment.space.key);
//     }
//     if (syncTimeStamp && targetAttachmentId!=null && (targetAttachmentId !== syncTimeStamp.targetContentId || targetAttachment.version.number !== syncTimeStamp.targetVersion ) ) {
//         throw `Attachment ${targetAttachmentId} was modified on target, should we overwrite?`;
//     }
//     if (syncTimeStamp && targetAttachmentId!=null && attachment.version.number === syncTimeStamp.sourceVersion) {
//         console.log(`attachment ${targetAttachmentId} was already up-to-date, synced with source version ${attachment.version.number}`);
//         return targetAttachment;
//     } else {
//         let cloned = await cloneAttachment(attachment._links.download, targetContainerId, attachment.title, targetAttachmentId);
//         await setSyncTimeStamps(attachment, cloned, attachment.space.key, cloned.space.key);
//         return cloned;
//     }
//   }