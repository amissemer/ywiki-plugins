import {syncPageToSpace} from '../common/confluence/content-sync-service';
import {getContent} from '../common/confluence/confluence-page-async';

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
        let sourcePage = await getContent(sourceSpaceKey,sourcePageTitle);
        let targetParent = await getContent(targetSpaceKey,targetParentPage);
        let syncedPage = await syncPageToSpace(sourcePage.id, targetSpaceKey, targetParent.id, true);
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