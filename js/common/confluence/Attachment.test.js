import Attachment from './Attachment';
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
        await att.cloneFromUrl(attachmentExample);
        assert.isNotNull(att.id());

        att = await Attachment.getOrCreateAttachment(pageToCopyAttachmentsTo, attachmentTitle);
        assert.isNotNull(att.id());
        assert.isNotNull(att._internal.space.key);
    });
});