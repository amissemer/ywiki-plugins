import {lookupAttachment,cloneAttachment,deleteAttachment} from './confluence-attachment-async';

async function from(internalAttachment) {
    let containerId = internalAttachment.container? internalAttachment.container.id : internalAttachment._expandable.container.replace(/.*\//g,'');
    return getOrCreateAttachment(containerId, internalAttachment.title, internalAttachment);
}

async function getOrCreateAttachment(pageId, attachmentTitle, /* optional */ internalAttachment) {
    if (!internalAttachment) {
        internalAttachment = await lookupAttachment(pageId, attachmentTitle);
    }
    return {
        _internal: internalAttachment,
        id: function() {
            return this._internal ? this._internal.id:null;
        },
        containerId: function() {
            return pageId;
        },
        toString: function() {
            return `${this.id()}:${pageId}:${this.title()}:${this.version()}`;
        },
        title: function() {
            return attachmentTitle;
        },
        exists: function() {
            return this._internal!=null;
        },
        downloadUrl: function() {
            return this._internal?this._internal._links.download:null;
        },
        version: function() {
            return this._internal?this._internal.version.number:null;
        },
        spaceKey: function() {
            return this._internal?this._internal.space.key:null;
        },
        cloneFrom: async function(url) {
            if (typeof url !== 'string') {
                // assume it is another Attachment or confluence attachment
                let otherAttachment = url;
                url = null;
                if (typeof otherAttachment.downloadUrl === 'function') {
                    url = otherAttachment.downloadUrl();
                } else if (otherAttachment._links && typeof otherAttachment._links.download === 'string') {
                    url = otherAttachment._links.download;
                }
            }
            if (!url) {
                throw 'invalid url to clone from';
            }
            this._internal = await cloneAttachment(url, pageId, attachmentTitle, this.id());
        },
        delete: async function() {
            let id = this.id();
            if (id) {
                await deleteAttachment(id);
            }
            this._internal = null;
        }
    };
}

const Attachment = {
    from: from,
    getOrCreateAttachment: getOrCreateAttachment 
};


export default Attachment;