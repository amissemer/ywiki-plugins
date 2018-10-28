import { lookupAttachment, cloneAttachment, deleteAttachment } from './confluence-attachment-async';

function Attachment(jQuery) {
  if (!jQuery) jQuery = $;
  return {
    from,
    getOrCreateAttachment,
  };

  async function from(internalAttachment) {
    const containerId = internalAttachment.container
      ? internalAttachment.container.id
      : internalAttachment._expandable.container.replace(/.*\//g, '');
    return getOrCreateAttachment(containerId, internalAttachment.title, internalAttachment);
  }

  async function getOrCreateAttachment(pageId, attachmentTitle, /* optional */ internalAttachment) {
    if (!internalAttachment) {
      internalAttachment = await lookupAttachment(jQuery.ajax, pageId, attachmentTitle);
    }
    return {
      _internal: internalAttachment,
      id() {
        return this._internal ? this._internal.id : null;
      },
      containerId() {
        return pageId;
      },
      toString() {
        return `${this.id()}:${pageId}:${this.title()}:${this.version()}`;
      },
      title() {
        return attachmentTitle;
      },
      exists() {
        return this._internal != null;
      },
      downloadUrl() {
        return this._internal ? this._internal._links.download : null;
      },
      version() {
        return this._internal ? this._internal.version.number : null;
      },
      spaceKey() {
        return this._internal ? this._internal.space.key : null;
      },
      async cloneFrom(url) {
        if (typeof url !== 'string') {
          // assume it is another Attachment or confluence attachment
          const otherAttachment = url;
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
        this._internal = await cloneAttachment(url, pageId, attachmentTitle, this.id(), jQuery.cloneAttachment);
      },
      async delete() {
        const id = this.id();
        if (id) {
          await deleteAttachment(jQuery.ajax, id);
        }
        this._internal = null;
      },
    };
  }
}

export default Attachment;
