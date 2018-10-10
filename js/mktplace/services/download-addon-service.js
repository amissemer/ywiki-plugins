import MktplaceDownloads from '../model/mktplace-downloads.js';

const PAGE_ID=429430817
const ATTACHMENT_NAME="mktplace-addon-download-data.csv"
const CONTENT_TYPE="text/csv"

/**
 * Main entry method to update the downloads table.
 * @param formData
 * @returns {Promise<void>}
 */
async function upsertMktplaceAddonDownloadsDB(formData){
    let metadata = await getAttachmentMetadata()
    if(metadata != null){
        let csvData = await loadWikiAttachmentContent(metadata.downloadUrl())
        //Replace , with ;
        let newRecord = csvData.concat("\n" + formData[0] + "," + formData[1] + "," + formData[2] + "," + formData[3] + ","+ formData[4] + ","+ formData[5] )
        postWikiAttachmentContent(newRecord, metadata.id())
    }
}

async function getAttachmentMetadata(){
    let attachment =  MktplaceDownloads.getMetadata(PAGE_ID,ATTACHMENT_NAME)
    if (attachment.id == null){
         //TODO Add initial attachment if it does not exist. attachmnet = WikiAttachment.getAttachment(PAGE_ID,ATTACHMENT_NAME)
    }
    return attachment;
}
async function loadWikiAttachmentContent(url){
      return  MktplaceDownloads.getData(url);
}

function postWikiAttachmentContent(csvData, attachmentId){
    //TODO Do something is this fails.
    MktplaceDownloads.updateData(PAGE_ID, ATTACHMENT_NAME, csvData, attachmentId, CONTENT_TYPE)
}

const DownloadAddonService = {
    upsertMktplaceAddonDownloadsDB:upsertMktplaceAddonDownloadsDB
}

export default DownloadAddonService