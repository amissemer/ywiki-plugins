import {lookupAttachment,cloneAttachment,deleteAttachment} from './confluence-attachment-async';

const Attachment = {
    getOrCreateAttachment: async function(pageId, attachmentTitle) {
        return {
            _internal: await lookupAttachment(pageId, attachmentTitle),
            id: function() {
                return this._internal ? this._internal.id:null;
            },
            cloneFromUrl: async function(url) {
                this._internal = await cloneAttachment(url, pageId, attachmentTitle, this.id());
            },
            delete: async function() {
                let id = this.id();
                if (id) {
                    await deleteAttachment(id);
                }
            }
        };
    }
};

export default Attachment;