import { assert } from 'chai';
import { getEditorRestrictions, setMyselfAsEditor, removeRestrictions } from './confluence-permissions-async';
import { getUser } from './confluence-user-async';
import { getContentById } from './confluence-page-async';

const restrictedPage = '326181263';
const norestrictionPage = '158963161';
const pageMissingRestriction = '375593605';

describe('confluence-permissions-async', () => {
  it('getEditorRestrictions should load permissions', async () => {
    console.log('Editor restrictions', await getEditorRestrictions(restrictedPage));
  });
  it("getEditorRestrictions should return false when page doesn't have restrictions", async () => {
    assert.isFalse(await getEditorRestrictions(norestrictionPage));
  });
  it('setMyselfAsEditor', async () => {
    const page = await getContentById(pageMissingRestriction, 'space');
    await removeRestrictions(pageMissingRestriction, page.space.key);
    const user = await getUser();
    let r = await getEditorRestrictions(pageMissingRestriction);
    assert.isOk(!r || r.user.indexOf(user) < 0, `${user} shouldn't already be an editor`);
    await setMyselfAsEditor(pageMissingRestriction, page.space.key);

    r = await getEditorRestrictions(pageMissingRestriction);
    assert.isOk(r.user.indexOf(user) >= 0, `${user} should be in the edit restrictions`);
  });
});
