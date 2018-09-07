import syncModel from './model';
import $ from 'jquery';
import notify from './notify';
import PageWrapper from './PageWrapper';
import {Observable} from 'rxjs/Observable';
import {getContent,getContentById, searchPagesWithCQL} from '../../common/confluence/confluence-page-async';
import log from './log';

const PAGE_EXPANDS = 'version,space,body.storage,metadata.labels,children.page,children.attachment.version,children.attachment.space';
const MIN_PROGRESS=10;
const SCAN_ACTION = 'scan';
const INDENT = "  ";

export default async function spaceScanner(sourceSpace, sourceRootPage) {
    setScanProgress(0);
    let sourcePage = await getContent(sourceSpace, sourceRootPage, PAGE_EXPANDS);
    var pageCount = 0;
    let pageSearchResult = await searchPagesWithCQL(sourceSpace, "ancestor = "+sourcePage.id, 100);
    pageCount += pageSearchResult.size;
    while (pageSearchResult._links.next) {
        pageSearchResult = await $.get(pageSearchResult._links.next);
        pageCount += pageSearchResult.size;
    }
    var pageFoundCout = 0;
    function pageFoundCallback() {
        setScanProgress( Math.round(100*(++pageFoundCout)/pageCount) ); 
    }

    
    listPageGroups(sourceSpace, sourceRootPage, sourcePage, pageFoundCallback).subscribe(
        pageGroup => {
            log(`Found page group: ${pageGroup.title}`);
            pageGroup.descendants = descendants(pageGroup, pageGroup.children);
            addPageGroup(pageGroup);
        },
        e => {
            notify.error(`Error while listing Page Groups: ${e}`);
            setScanProgress();
        },
        () => {
            log('Page group listing complete');
            setScanProgress();
        }
    );
}

function addPageGroup(pageGroup) {
    $.observable(syncModel.pages).insert(pageGroup);
}

function setScanProgress(percent) {
    if(typeof percent!=='number') {
        $.observable(syncModel.progress).removeProperty(SCAN_ACTION);
    } else {
        // percent is always scaled to start from MIN_PROGRESS%, so that the progress bar is visible from the start
        $.observable(syncModel.progress).setProperty(SCAN_ACTION, MIN_PROGRESS + Math.round((100-MIN_PROGRESS)*percent / 100.));
    }
}

function descendants(context, children, level) {
    let descendantsRes = [];
    level = level || INDENT;
    for (let child of children) {
        if (!child.skipSync(context)) {
            child.level = level;
            descendantsRes.push(child);
            descendantsRes = descendantsRes.concat(descendants(context, child.children, level+INDENT));
        }
    }
    return descendantsRes;
}

function listPageGroups(sourceSpaceKey, sourcePageTitle, sourcePage, pageFoundCallback) {
    return Observable.create(observer => {
        (async () => {
            log();
            log(`Listing page groups to sync from ${sourceSpaceKey}:${sourcePageTitle}...`);
            await scanPageGroups(sourcePage, null, observer, pageFoundCallback);
            observer.complete();
        })().then(null, e=>observer.error(e));
    });
}

export async function loadPageForSync(pageId) {
    return getContentById(pageId, PAGE_EXPANDS);
}

/** emits page groups to the observer (the root and subtrees starting from pages with a given label).
 * Wraps all pages in PageWrapper. */
async function scanPageGroups(sourcePage, parentPageWrapper, observer, pageFoundCallback) {
    let thisPageWrapper = new PageWrapper(sourcePage, parentPageWrapper);
    pageFoundCallback();
    let children = sourcePage.children.page;
    let allChildren = [];
    while (children) {
        allChildren = allChildren.concat(await Promise.all(children.results.map(async child => {
            let childDetails = await loadPageForSync(child.id);
            let childWrapper = await scanPageGroups(childDetails, thisPageWrapper, observer, pageFoundCallback);
            return childWrapper;
        })));
        if (children._links.next) {
            children = await $.ajax(children._links.next);
        } else {
            children = null;
        }
    }
    thisPageWrapper.children = allChildren;

    if (thisPageWrapper.isPageGroup) {
        observer.next(thisPageWrapper);
    }
    return thisPageWrapper;
}
