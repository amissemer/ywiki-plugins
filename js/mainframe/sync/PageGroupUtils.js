const PAGE_GROUP_LABELS = ['service-dashboard','ci-publish-package'];

function hasLabel(page, labelsToFind) {
    for (let label of page.metadata.labels.results) {
        if (labelsToFind.indexOf(label.name)>=0) return true;
    }
    return false;
}

export function isPageGroupRoot(page, parentPage) {
    return (!parentPage) || hasLabel(page, PAGE_GROUP_LABELS);
}