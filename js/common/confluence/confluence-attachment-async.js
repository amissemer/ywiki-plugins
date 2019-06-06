import {throttleRead, throttleWrite} from './confluence-throttle';

const BASE_URL = '/rest/api/content/';

/**
 * Retrieves an existing attachment, by its container (page) and title
 * @param {function} ajax either jQuery.ajax function or proxy.ajax function (see proxyService.js)
 * @param {string} containerId id of the containing page
 * @param {string} attachmentTitle title of the attachment
 * @returns {Promise<{id,version,space,_links}>} the attachment object or null if the attachment doesn't exist
 */
export async function lookupAttachment(ajax, containerId, attachmentTitle) {
    let results = await throttleRead( () => ajax(BASE_URL+`${containerId}/child/attachment?filename=${encodeURIComponent(attachmentTitle)}&expand=space,version,container`) );
    if (results && results.results && results.results.length) {
        return results.results[0];
    } else {
        return null;
    }
}

/**
 * Deletes an attachment by its ID
 * @param {function} ajax either jQuery.ajax function or proxy.ajax function (see proxyService.js)
 * @param {string} attachmentId the attachment ID
 */
export async function deleteAttachment(ajax, attachmentId) {
    return throttleWrite( () => ajax({
        url: BASE_URL + encodeURIComponent(attachmentId),
        type: 'DELETE'
    }) );
}

/**
 * Loads an attachment content from an URL and copies it as a new attachment version under a different page.
 * @param {string} attachmentUrl the source URL
 * @param {string} targetContainerId the target page ID
 * @param {string} title the title to create/update the target attachment
 * @param {string} [targetId] the id of the existing attachment, if exists
 */
export async function cloneAttachment(attachmentUrl, targetContainerId, title, /* optional */ targetId) {
    let blobData = await loadResource(attachmentUrl, 'blob');
    let attachment = JSON.parse(await storeAttachmentContent(targetContainerId, blobData, title, targetId));
    if (attachment.results && attachment.results instanceof Array ) {
        // the attachment API returns an array
        attachment = attachment.results[0]; 
    } 
    // populate the space.key to save a GET, since we need it to store the sync timestamp
    if (!attachment.space) {
        attachment.space = {
            key: attachment._expandable.space.replace(/.*\//,'')
        };
    }
    return attachment;
}

/** 
 * Creates or updates an attachment by uploading data as a page attachment.
 * @param {string} containerId id of the page that contains the attachment
 * @param {Object} data is either a Blob, or any data to be uploaded as the attachment
 * @param {string} title the name of the attachment on the page
 * @param {string} [contentId] is mandatory when updating an existing attachment, and must be omitted when
 * creating a new attachment.
 * @param {string} [contentType] is required when data is not a Blob
 */
export async function storeAttachmentContent(containerId, data, title,  contentId, contentType) {
    let url = BASE_URL;
    url += containerId;
    url += '/child/attachment';
    if (contentId) {
        url += '/' + contentId + '/data';
    }
    let formData = new FormData();
    let blob = (data instanceof Blob)? data : new Blob([data], { type: contentType});
    formData.append('file', blob, title);
    formData.append('minorEdit', 'true');
    return throttleWrite( () => postBinary(url, formData));
}

/**
 * Load a url resource.
 * @param {string} url
 * @param {string} [responseType='']  see also https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType
 */
export async function loadResource(url, responseType){
    responseType = responseType || '';
    return throttleRead( () => loadUrlResource(url, responseType) );
}

async function postBinary(url, formData) {
    return new Promise( (resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.onerror = reject;
        xhr.setRequestHeader('X-Atlassian-Token','nocheck');
        xhr.onload = function () {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                reject(this);
            }
        };
        xhr.send(formData);
    });
}

async function loadUrlResource(url, responseType){
    return new Promise( (resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = responseType;
        xhr.onerror = reject;
        xhr.onload = function(e) {
            if (this.status == 200) {
                // get binary data as a response
                let resource = this.response;
                resolve(resource);
            } else {
                reject(e);
            }
        };
        xhr.send();
    });
}