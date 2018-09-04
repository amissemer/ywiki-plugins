export class PageWrapper {
    constructor(page, parent, children) {
        this.title = page.title;
        this.url = page._links.webui;
        this.page = page;
        this.children = children;
        this.parentPage = parent;
    }
    isPageGroup() {return false;}

    skipSync(context) {
        return context.title!=this.title && this.isPageGroup();
    }
}

export class PageGroup extends PageWrapper {
    constructor(rootPage, parent, children) {
        super(rootPage, parent, children);
        this.pageGroup = true;
    }
    updateWithSyncStatus(syncStatus) {
        return PageGroupSync.map(this).addPageToPush({id:""})
    }
    isPageGroup() {return true;}
}

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

export default function wrap(sourcePage, parentPageWrapper) {
    if (isPageGroupRoot(sourcePage, parentPageWrapper)) {
        return new PageGroup(sourcePage, parentPageWrapper);
    } else {
        return new PageWrapper(sourcePage, parentPageWrapper);
    }    
}