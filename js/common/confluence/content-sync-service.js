import {getContentById, getContent, createPageUnderPageId} from './confluence-page-async';
import {cloneAttachment} from './confluence-attachment-async';

export async function syncPageToSpace(sourcePageId, targetSpaceKey, targetParentId, syncAttachments) {
    let pageToCopy = await getContentById(sourcePageId, 'space,body.storage,metadata.labels,children.attachment');
    let targetPage;
    try {
      targetPage = await getContent(targetSpaceKey, pageToCopy.title);
      // TODO update the body if modified
    } catch (err) {
      // Create the new page 
      targetPage = await createPageUnderPageId(pageToCopy,targetSpaceKey,targetParentId);
    }
    if (syncAttachments) {
      let synced = await syncAttachmentsToContainer(pageToCopy.children.attachment, targetPage.id);
      console.log(`${synced.length} attachments synced for ${pageToCopy.title}`);
    }
    return targetPage;
}

async function syncAttachmentsToContainer(attachments, targetContainerId) {
  let synced = await Promise.all( Array.prototype.map.call(attachments.results, attachment => cloneAttachment(attachment, targetContainerId) ));
  if (attachments._links.next) {
    console.log("More than 25 attachments, loading next page");
    let nextBatch = await syncAttachmentsToContainer(await $.get(attachments._links.next), targetContainerId);
    return [].concat(synced, nextBatch);
  } else {
    return synced;
  }
}