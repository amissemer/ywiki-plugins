import {cloneAttachment,lookupAttachment} from './confluence-attachment-async';

async function syncAttachmentsToContainer(attachments, targetContainerId, targetSpaceKey) {
  const synced = [];
  for (let attachment of attachments.results) {
    try {
      let syncTimeStamp = await getTargetSyncTimeStamp(attachment.id, targetSpaceKey);
      let cloned = await syncAttachment(attachment, targetContainerId, syncTimeStamp);
      synced.push(cloned);
    } catch (err) {
      if (onAttachmentCopyFailure == "fail") {
        throw err;
      } else {
        console.warn(`Error copying attachment ${attachment.id} - "${attachment.title}", skipping`, err);
      }
    }
  }
  if (attachments._links.next) {
    console.log("More than 25 attachments, loading next page");
    let nextBatch = await syncAttachmentsToContainer(await $.get(attachments._links.next + "&expand=space,version"), targetContainerId, targetSpaceKey);
    return [].concat(synced, nextBatch);
  } else {
    return synced;
  }
}

export async function syncAttachment(attachment, targetContainerId, syncTimeStamp) {
  let targetAttachment = await lookupAttachment(targetContainerId, attachment.title);
  let targetAttachmentId = targetAttachment ? targetAttachment.id:null;
  if (targetAttachmentId && !syncTimeStamp) {
    // try and get it from the target
    syncTimeStamp = await getSourceSyncTimeStamp(targetAttachmentId, attachment.space.key);
  }
  if (syncTimeStamp && targetAttachmentId!=null && (targetAttachmentId !== syncTimeStamp.targetContentId || targetAttachment.version.number !== syncTimeStamp.targetVersion ) ) {
      throw `Attachment ${targetAttachmentId} was modified on target, should we overwrite?`;
  }
  if (syncTimeStamp && targetAttachmentId!=null && attachment.version.number === syncTimeStamp.sourceVersion) {
      console.log(`attachment ${targetAttachmentId} was already up-to-date, synced with source version ${attachment.version.number}`);
      return targetAttachment;
  } else {
      let cloned = await cloneAttachment(attachment._links.download, targetContainerId, attachment.title, targetAttachmentId);
      await setSyncTimeStamps(attachment, cloned, attachment.space.key, cloned.space.key);
      return cloned;
  }
}