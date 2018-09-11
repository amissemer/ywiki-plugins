import {getContentById, getContent, createPageUnderPageId, updateContent} from './confluence-page-async';
import {cloneAttachment,lookupAttachment} from './confluence-attachment-async';
import {addLabels,removeLabels} from './confluence-labels-async';
import {postProcess,preProcess} from './confluence-page-postprocessor';
import SyncStatusEnum from '../../mainframe/sync/SyncStatusEnum';

const onAttachmentCopyFailure = "log";

/** 
 * Synchronizes a single page between spaces, with or without attachments.
 * If the page doesn't exist in the target, it is created under targetParentId.
 */
/*
export async function syncPageToSpace(pageToCopy, targetSpaceKey, targetParentId, syncAttachments) {
    await preProcess(pageToCopy, targetSpaceKey);
    let targetPage;
    let syncTimeStamp = await getTargetSyncTimeStamp(pageToCopy.id, targetSpaceKey);
    if (syncTimeStamp) {
      try {
        targetPage = await getContentById(syncTimeStamp.targetContentId, 'version,metadata.labels');
        // TODO filter links
        await updateContentIfNecessary(pageToCopy, targetPage, syncTimeStamp);
      } catch (err) {
        // the last synced target page was removed, we will recreate
      }
    }
    if (!targetPage) {
      try {
        targetPage = await getContent(targetSpaceKey, pageToCopy.title, 'version,metadata.labels');
        syncTimeStamp = await getSourceSyncTimeStamp(targetPage.id, pageToCopy.space.key);
        // Do a full initial sync
        // TODO filter links
        await updateContentIfNecessary(pageToCopy, targetPage, syncTimeStamp);
      } catch (err) {
        // Create the new page 
        // TODO filter links
        targetPage = await createPageUnderPageId(pageToCopy,targetSpaceKey,targetParentId);
      }
    }
    await setSyncTimeStamps(pageToCopy, targetPage, pageToCopy.space.key, targetSpaceKey);
    await syncLabels(pageToCopy, targetPage);
    await postProcess(pageToCopy.body.storage.value, targetPage);
    if (syncAttachments) {
      let synced = await syncAttachmentsToContainer(pageToCopy.children.attachment, targetPage.id, targetSpaceKey);
      console.log(`${synced.length} attachments synced for ${pageToCopy.title}`);
    }

    return targetPage;
}*/

// async function syncLabels(sourcePage, targetPage) {
//   async function labels(page) {
//     if (!page.metadata) {
//       page = await getContentById(page.id, 'metadata.labels');
//     }
//     let labelArray = [];
//     for (let label of page.metadata.labels.results) {
//       labelArray.push(label.name);
//     }
//     labelArray.sort();
//     return labelArray;
//   }
//   let srcLabels = await labels(sourcePage);
//   let tgtLabels = await labels(targetPage);
//   if (JSON.stringify(srcLabels) != JSON.stringify(tgtLabels)) {
//     let toRemove = tgtLabels.minus(srcLabels);
//     let toAdd = srcLabels.minus(tgtLabels);
//     await addLabels(targetPage.id, toAdd);
//     await removeLabels(targetPage.id, toRemove);
//   }
// }

// Array.prototype.minus = function(a) {
//   return this.filter( i=> a.indexOf(i) < 0 );
// };

async function updateContentIfNecessary(sourcePage, targetPage, syncTimeStamp) {
  if (syncTimeStamp && targetPage.version.number !== syncTimeStamp.targetVersion) {
    throw `targetPage was modified after sync, should we overwrite? ${targetPage.title}`;
  }
  if (syncTimeStamp && sourcePage.version.number === syncTimeStamp.sourceVersion) {
    console.log(`page ${targetPage.title} was already up-to-date, synced with source version ${sourcePage.version.number}`);
  } else {
    targetPage.version.number++;
    targetPage.body = targetPage.body || {};
    targetPage.body.storage = sourcePage.body.storage; // TODO filtering
    targetPage.title = sourcePage.title;
    await updateContent(targetPage);
  }
}



export async function syncSubTreeToSpace(sourcePageId, targetSpaceKey) {
  let subTreeRoot = await getContentById(sourcePageId, 'space,ancestors');
}

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