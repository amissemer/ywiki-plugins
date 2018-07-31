import {syncPageToSpace} from '../common/confluence/content-sync-service';
import {getContent,getContentById} from '../common/confluence/confluence-page-async';

const pageExpands = 'version,space,body.storage,metadata.labels,children.page,children.attachment.version,children.attachment.space';
/*

Source Space Key: <input id="sourceSpaceKey" value="ps" /><br>
Target Space Key: <input id="targetSpaceKey" value="~adrien.missemer@hybris.com" /><br>
Target Parent Page: <input id="targetParentPage" value="Tests" /><br>
Source Page Title: <input id="sourcePageTitle" value="Test Adrien With Attachments" /><br>
<input type="button" id="copyBtn" value="Copy"/>
<br>
<textarea id="output" style="width: 100%; height: 100px;"></textarea>
<br>
Result page: 
<div id="resultPage"></div>
<script src="http://localhost/ywiki-plugins/dist/space-sync-bundle.js"></script>
*/
console.log("jquery binding");
$("#copyBtn").click(async () => {
    try {
        let sourceSpaceKey = $("#sourceSpaceKey").val();
        let targetSpaceKey = $("#targetSpaceKey").val();
        let targetParentPage = $("#targetParentPage").val();
        let sourcePageTitle = $("#sourcePageTitle").val();
        output();
        output(`Syncing ${sourcePageTitle} to ${targetSpaceKey}...`);

        let sourcePage = await getContent(sourceSpaceKey,sourcePageTitle, pageExpands);
        let targetParent = await getContent(targetSpaceKey,targetParentPage);
        let syncedPage = await syncPageTreeToSpace(sourcePage, targetSpaceKey, targetParent.id);
        output("Done");
        $("#resultPage").html(`<a href="https://wiki.hybris.com/pages/viewpage.action?pageId=${syncedPage.id}">${syncedPage.title}</a>`);
    } catch (err) {
        output(err);
    }
});

const OUT = $("#output");

function output(txt) {
    if (txt === undefined || txt === null) {
        OUT.text("");
    } else {
        OUT.text(OUT.text() + txt + '\n');
    }
}

async function syncPageTreeToSpace(sourcePage, targetSpaceKey, targetParentId) {
    let rootCopy = await syncPageToSpace(sourcePage, targetSpaceKey, targetParentId, true);
    let children = sourcePage.children.page;
    while (children) {
        for (let child of children.results) {
            let childDetails = await getContentById(child.id, pageExpands);
            await syncPageTreeToSpace(childDetails, targetSpaceKey, rootCopy.id);
        }
        if (children._links.next) {
            children = await $.ajax(children._links.next);
        } else {
            children = null;
        }
    }
    return rootCopy;
}
