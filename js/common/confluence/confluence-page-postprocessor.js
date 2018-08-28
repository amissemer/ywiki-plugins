import {getEditorRestrictions, setEditorRestriction} from './confluence-permissions-async';

export async function postProcess(body, page) {
    if (body.indexOf('<ac:structured-macro ac:name="html"')>=0) {
            // if there is already editor restriction, no need to set one
        if (await getEditorRestrictions(page.id)) return;
        await setEditorRestriction(page.id);
        console.log(`Permissions set on page ${page.title}`);
    }
}

const portfolioRegex = /\bservportfolio\b/g;

export async function preProcess(page, targetSpace) {
    let body = page.body.storage.value;
    if (portfolioRegex.test(body)) {
        page.body.storage.value = body.replace(portfolioRegex, targetSpace);
        console.warn(`Updated 1 or more servportfolio ref in ${page.title}`);
    }
    return page;
}