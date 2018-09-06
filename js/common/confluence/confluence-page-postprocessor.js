import {getEditorRestrictions, setEditorRestriction} from './confluence-permissions-async';

export async function postProcess(body, page) {
    if (body.indexOf('<ac:structured-macro ac:name="html"')>=0) {
            // if there is already editor restriction, no need to set one
        if (await getEditorRestrictions(page.id)) return;
        await setEditorRestriction(page.id);
        console.log(`Permissions set on page ${page.title}`);
    }
}

export async function preProcess(page, targetSpace) {
    let sourceSpaceRegex = new RegExp('\\b'+page.space.key+'\\b','g'); // find all occurrences of the source space as a whole word
    let body = page.body.storage.value;
    if (sourceSpaceRegex.test(body)) {
        page.body.storage.value = body.replace(sourceSpaceRegex, targetSpace);
        console.warn(`Updated 1 or more ref to space ${page.space.key} in ${page.title}`);
    }
    return page;
}