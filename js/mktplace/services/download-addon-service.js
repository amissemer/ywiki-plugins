import AttachmentFactory from '../../common/confluence/Attachment';
const Attachment = AttachmentFactory();
import {DB_SPACE, DB_PAGE_TITLE, ATTACHMENT_NAME} from '../mktplace-config';
import {getContent} from '../../common/confluence/confluence-page-async';

const CONTENT_TYPE='text/csv';

/**
 * Main entry method to update the downloads table.
 * @param formData
 * @returns {Promise<void>}
 */
async function upsertMktplaceAddonDownloadsDB(formData){
    let dbPageId;
    try {
        dbPageId = (await getContent(DB_SPACE, DB_PAGE_TITLE)).id;
    } catch (err) {
        throw new Error(`Cannot find the marketplace page, please contact an admin (${DB_SPACE}:${DB_PAGE_TITLE})`);
    }
    let metadata = await Attachment.getOrCreateAttachment(dbPageId, ATTACHMENT_NAME);
    let csvData = await metadata.loadText();
    if (!csvData) { // initialize the file
        csvData = 'userId,addonUrl,projectName,customerName,sapCommerceVersion,comments';
    }
    //Replace , with ;
    let newRecord = csvData.concat("\n" + formData[0] + "," + formData[1] + "," + formData[2] + "," + formData[3] + ","+ formData[4] + ","+ formData[5] );
    await metadata.saveText(newRecord, CONTENT_TYPE);
}

const DownloadAddonService = {
    upsertMktplaceAddonDownloadsDB:upsertMktplaceAddonDownloadsDB
}

export default DownloadAddonService