import {
    lookupAttachment,
    loadResource,
    storeAttachmentContent
} from '../../common/confluence/confluence-attachment-async';

/**
 * Gets CSV Data form attachment
 *
 * @param url
 * @returns {Promise<*>}
 */
async function getData(url) {
    return loadResource(url, '');
}

/**
 * Updates CSV Data
 * @param pageId   wiki page id
 * @param fileName  file name
 * @param data data to be stored
 * @param contentId attachment id
 * @param contentType content type of data stored.
 * @returns {Promise<void>}
 */
async function updateData(pageId, fileName, data, contentId, contentType) {
    storeAttachmentContent(pageId, data, fileName, contentId,contentType)
}

/**
 * Get attachment metadata information.
 *
 * @param pageId
 * @param attachmentName
 * @returns {Promise<{_internal: *, id: id, containerId: containerId, toString: toString, title: title, exists: exists, downloadUrl: downloadUrl, version: version, spaceKey: spaceKey}>}
 */
async function getMetadata(pageId, attachmentName) {

    let internalAttachment = await lookupAttachment(pageId, attachmentName);

    return {
        _internal: internalAttachment,
        id: function () {
            return this._internal ? this._internal.id : null;
        },
        containerId: function () {
            return pageId;
        },
        toString: function () {
            return `${this.id()}:${pageId}:${this.title()}:${this.version()}`;
        },
        title: function () {
            return attachmentName;
        },
        exists: function () {
            return this._internal != null;
        },
        downloadUrl: function () {
            return this._internal ? this._internal._links.download : null;
        },
        version: function () {
            return this._internal ? this._internal.version.number : null;
        },
        spaceKey: function () {
            return this._internal ? this._internal.space.key : null;
        }
    };
}

const MktplaceDownloads = {
    getMetadata: getMetadata,
    getData: getData,
    updateData:updateData
};


export default MktplaceDownloads;