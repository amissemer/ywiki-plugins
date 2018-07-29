import {getContentById, getContent, createPageUnderPageId} from './confluence-page-async';
import {cloneAttachment} from './confluence-attachment-async';
import {doWithPropertyValue} from './confluence-properties-service';

/** 
 * Synchronizes a single page between spaces, with or without attachments.
 * If the page doesn't exist in the target, it is created under targetParentId.
 */
export async function syncPageToSpace(sourcePageId, targetSpaceKey, targetParentId, syncAttachments) {
    let pageToCopy = await getContentById(sourcePageId, 'version,space,body.storage,metadata.labels,children.attachment.version,children.attachment.space');
    let targetPage;
    try {
      targetPage = await getContent(targetSpaceKey, pageToCopy.title, 'version');
      // TODO update the body if modified
    } catch (err) {
      // Create the new page 
      // TODO filter links
      targetPage = await createPageUnderPageId(pageToCopy,targetSpaceKey,targetParentId);
    }
    if (syncAttachments) {
      let synced = await syncAttachmentsToContainer(pageToCopy.children.attachment, targetPage.id);
      console.log(`${synced.length} attachments synced for ${pageToCopy.title}`);
    }
    await setSyncTimeStamps(pageToCopy, targetPage, pageToCopy.space.key, targetSpaceKey);

    return targetPage;
}

async function setSyncTimeStamps(srcContent, targetContent, souceSpace, targetSpace) {
  let syncTime = new Date();
  await doWithPropertyValue(srcContent.id, 'ysync', function(propertyValue) {
    if (propertyValue.value.syncTargets) {
      console.log("Previous value on source item: syncTargets: ",propertyValue.value.syncTargets);
    }
    propertyValue.value.syncTargets = propertyValue.value.syncTargets || {};
    propertyValue.value.syncTargets[targetSpace] = {
      targetContentId : targetContent.id,
      targetVersion: targetContent.version.number,
      sourceVersion: srcContent.version.number,
      syncTime: syncTime
    };
  });
  await doWithPropertyValue(targetContent.id, 'ysync', function(propertyValue) {
    if (propertyValue.value.syncSources) {
      console.log("Previous value on target item: syncSources: ",propertyValue.value.syncSources);
    }
    propertyValue.value.syncSources = propertyValue.value.syncSources || {};
    propertyValue.value.syncSources[souceSpace] = {
      sourceContentId : srcContent.id,
      targetVersion: targetContent.version.number,
      sourceVersion: srcContent.version.number,
      syncTime: syncTime
    };
  });
}

export async function syncSubTreeToSpace(sourcePageId, targetSpaceKey) {
  let subTreeRoot = await getContentById(sourcePageId, 'space,ancestors');
}

async function syncAttachmentsToContainer(attachments, targetContainerId) {
  const synced = [];
  for (let attachment of attachments.results) {
    let cloned = await cloneAttachment(attachment, targetContainerId);
    await setSyncTimeStamps(attachment, cloned, attachment.space.key, cloned.space.key);
    synced.push(cloned);
  }
  if (attachments._links.next) {
    console.log("More than 25 attachments, loading next page");
    let nextBatch = await syncAttachmentsToContainer(await $.get(attachments._links.next + "&expand=space,version"), targetContainerId);
    return [].concat(synced, nextBatch);
  } else {
    return synced;
  }
}