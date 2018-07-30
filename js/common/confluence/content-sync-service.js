import {getContentById, getContent, createPageUnderPageId, updateContent} from './confluence-page-async';
import {cloneAttachment} from './confluence-attachment-async';
import {doWithPropertyValue,getPropertyValue} from './confluence-properties-service';
import {PROP_KEY} from '../config';

/** 
 * Synchronizes a single page between spaces, with or without attachments.
 * If the page doesn't exist in the target, it is created under targetParentId.
 */
export async function syncPageToSpace(sourcePageId, targetSpaceKey, targetParentId, syncAttachments) {
    let pageToCopy = await getContentById(sourcePageId, 'version,space,body.storage,metadata.labels,children.attachment.version,children.attachment.space');
    let targetPage;
    let syncProp = await getPropertyValue(sourcePageId, PROP_KEY);
    if (syncProp && syncProp.syncTargets && syncProp.syncTargets[targetSpaceKey]) {
      let syncTimeStamp = syncProp.syncTargets[targetSpaceKey];
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
        // Do a full initial sync
        // TODO filter links
        await updateContentIfNecessary(pageToCopy, targetPage);
      } catch (err) {
        // Create the new page 
        // TODO filter links
        targetPage = await createPageUnderPageId(pageToCopy,targetSpaceKey,targetParentId);
      }
    }
    await setSyncTimeStamps(pageToCopy, targetPage, pageToCopy.space.key, targetSpaceKey);

    if (syncAttachments) {
      let synced = await syncAttachmentsToContainer(pageToCopy.children.attachment, targetPage.id, targetSpaceKey);
      console.log(`${synced.length} attachments synced for ${pageToCopy.title}`);
    }

    return targetPage;
}

async function updateContentIfNecessary(sourcePage, targetPage, syncTimeStamp) {
  if (syncTimeStamp && targetPage.version.number !== syncTimeStamp.targetVersion) {
    throw `targetPage was modified after sync, should we overwrite? ${targetPage.title}`;
  }
  if (syncTimeStamp && sourcePage.version.number === syncTimeStamp.sourceVersion) {
    console.log(`page ${targetPage.title} was already up-to-date, synced with source version ${sourcePage.version.number}`);
    // TODO update labels even if not modified
  } else {
    targetPage.version.number++;
    targetPage.body = targetPage.body || {};
    targetPage.body.storage = sourcePage.body.storage; // TODO filtering
    targetPage.title = sourcePage.title;
    targetPage.metadata.labels = sourcePage.metadata.labels;
    await updateContent(targetPage);
  }
}

async function setSyncTimeStamps(srcContent, targetContent, souceSpace, targetSpace) {
  let syncTime = new Date();
  let syncTimeStamp = {
    sourceContentId : srcContent.id,
    targetContentId : targetContent.id,
    sourceVersion: srcContent.version.number,
    targetVersion: targetContent.version.number,
    syncTime: syncTime
  };
  await doWithPropertyValue(srcContent.id, PROP_KEY, function(value) {
    if (value.syncTargets) {
      console.log("Previous value on source item: syncTargets: ",value.syncTargets);
    } else {
      value.syncTargets = {};
    }
    value.syncTargets[targetSpace] = syncTimeStamp;
  });
  await doWithPropertyValue(targetContent.id, PROP_KEY, function(value) {
    if (value.syncSources) {
      console.log("Previous value on target item: syncSources: ",value.syncSources);
    } else {
      value.syncSources = {};
    }
    value.syncSources[souceSpace] = syncTimeStamp;
  });
}

export async function syncSubTreeToSpace(sourcePageId, targetSpaceKey) {
  let subTreeRoot = await getContentById(sourcePageId, 'space,ancestors');
}

async function syncAttachmentsToContainer(attachments, targetContainerId, targetSpaceKey) {
  const synced = [];
  for (let attachment of attachments.results) {

    let syncProp = await getPropertyValue(attachment.id, PROP_KEY);
    let syncTimeStamp=null;
    if (syncProp && syncProp.syncTargets && syncProp.syncTargets[targetSpaceKey]) {
      syncTimeStamp = syncProp.syncTargets[targetSpaceKey];
    }
    let cloned = await cloneAttachment(attachment, targetContainerId, syncTimeStamp);
    await setSyncTimeStamps(attachment, cloned, attachment.space.key, cloned.space.key);
    synced.push(cloned);
  }
  if (attachments._links.next) {
    console.log("More than 25 attachments, loading next page");
    let nextBatch = await syncAttachmentsToContainer(await $.get(attachments._links.next + "&expand=space,version"), targetContainerId, targetSpaceKey);
    return [].concat(synced, nextBatch);
  } else {
    return synced;
  }
}