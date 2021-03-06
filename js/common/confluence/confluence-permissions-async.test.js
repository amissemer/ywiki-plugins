import {getEditorRestrictions, setMyselfAsEditor, removeRestrictions} from './confluence-permissions-async';
import {getUser} from './confluence-user-async';
import {assert} from 'chai';
import { getContentById } from './confluence-page-async';

let restrictedPage = '326181263';
let norestrictionPage = '158963161';
let pageMissingRestriction = '375593605';

describe("confluence-permissions-async", function() {
    it("getEditorRestrictions should load permissions", async function() {
        console.log("Editor restrictions", await getEditorRestrictions(restrictedPage));
    });
    it("getEditorRestrictions should return false when page doesn't have restrictions", async function() {
        assert.isFalse(await getEditorRestrictions(norestrictionPage));
    });
    it("setMyselfAsEditor", async function() {
        let page = await getContentById(pageMissingRestriction, 'space');
        await removeRestrictions(pageMissingRestriction, page.space.key);
        let user = await getUser();
        let r = await getEditorRestrictions(pageMissingRestriction);
        assert.isOk(!r || r.user.indexOf(user)<0, `${user} shouldn't already be an editor`);
        await setMyselfAsEditor(pageMissingRestriction, page.space.key);
        
        r = await getEditorRestrictions(pageMissingRestriction);
        assert.isOk(r.user.indexOf(user)>=0, `${user} should be in the edit restrictions`);
    });
});