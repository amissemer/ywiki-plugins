
export async function preProcess(page, sourcePage, targetSpace) {
    let sourceSpaceRegex = new RegExp('\\b'+sourcePage+'\\b','g'); // find all occurrences of the source space as a whole word
    let body = page.body.storage.value;
    if (sourceSpaceRegex.test(body)) {
        page.body.storage.value = body.replace(sourceSpaceRegex, targetSpace);
        console.warn(`Updated 1 or more ref to space '${sourcePage}' in ${page.title} to '${targetSpace}'`);
    }
    return page;
}