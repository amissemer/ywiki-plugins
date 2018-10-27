import AttachmentFactory from './Attachment';
const Attachment = AttachmentFactory();
import {assert} from 'chai';

const pageToCopyAttachmentsTo =  '377578548';
const attachmentExample = '/download/attachments/257608297/Sprint%20Execution_test.png?api=v2';
const attachmentTitle = 'Sprint Execution_test.png';

describe('Attachment', function() {
    it('should load, clone and delete', async function() {
        let att = await Attachment.getOrCreateAttachment(pageToCopyAttachmentsTo, attachmentTitle);
        // make sure it does not exist
        await att.delete();

        att = await Attachment.getOrCreateAttachment(pageToCopyAttachmentsTo, attachmentTitle);
        assert.isNull(att.id());
        await att.cloneFrom(attachmentExample);
        assert.isNotNull(att.id());

        att = await Attachment.getOrCreateAttachment(pageToCopyAttachmentsTo, attachmentTitle);
        assert.isNotNull(att.id());
        assert.isNotNull(att._internal.space.key);
    });
    it('should clone from another attachment', async function() {
        let from = await Attachment.getOrCreateAttachment(pageToCopyAttachmentsTo, attachmentTitle);
        let to   = await Attachment.getOrCreateAttachment(pageToCopyAttachmentsTo, attachmentTitle + '_2');
        await to.cloneFrom(from);
        assert.isNotNull(to.id(), 'after cloning, id should be populated');
        await to.delete();
        assert.isNull(to.id(), 'after delete(), id should be null');
    });
    it('existing attachment should return version() and downloadUrl()', async function() {
        let att = await Attachment.getOrCreateAttachment(pageToCopyAttachmentsTo, attachmentTitle);
        assert.isNotNull(att.id());
        assert.isNotNull(att.version(), 'version() should not be null');
        assert.equal(1, att.version(), 'first version() should be 1');
        assert.isNotNull(att.downloadUrl(), 'downloadUrl() should not be null');
    });
    it('unexisting attachment should return null version() and downloadUrl()', async function() {
        let att = await Attachment.getOrCreateAttachment(pageToCopyAttachmentsTo, 'notAttitle');
        assert.isNull(att.id());
        assert.isNull(att.version(), 'version() should be null');
        assert.isNull(att.downloadUrl(), 'downloadUrl() should be null');
    });
});