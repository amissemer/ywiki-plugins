import {throttleRead, throttleWrite} from './confluence-throttle';

const BASE_URL = '/rest/api/content/';

export async function lookupAttachment(containerId, attachmentTitle) {
    let results = await $.get(BASE_URL+`${containerId}/child/attachment?filename=${encodeURIComponent(attachmentTitle)}&expand=space,version,container`);
    if (results && results.results && results.results.length) {
        return results.results[0];
    } else {
        return null;
    }
}

export async function deleteAttachment(attachmentId) {
    return await $.ajax({
        url: BASE_URL + encodeURIComponent(attachmentId),
        type: 'DELETE'
    });
}

export async function cloneAttachment(attachmentUrl, targetContainerId, title, /* optional */ targetId) {
    let blobData = await loadBlob(attachmentUrl);
    let attachment = JSON.parse(await storeBlob(targetContainerId, blobData, title, targetId));
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
 * ContentId is mandatory when updating an existing attachment, and must be omitted when
 * creating a new attachment.
 */
async function storeBlob(containerId, blobData, title, /* optional */ contentId) {
    let url = BASE_URL;
    url += containerId;
    url += '/child/attachment';
    if (contentId) {
        url += '/' + contentId + '/data';
    }
    let formData = new FormData();
    formData.append('file', blobData, title);
    formData.append('minorEdit', 'true');
    return throttleWrite( () => postBinary(url, formData));
}



async function loadBlob(url) {
    return throttleRead( () => loadBinary(url) );
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
async function loadBinary(url) {
    return new Promise( (resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'blob';
        xhr.onerror = reject;
        xhr.onload = function(e) {
          if (this.status == 200) {
            // get binary data as a response
            let blob = this.response;
            resolve(blob);
          } else {
            reject(e);
          }
        };
        xhr.send();
    });
}