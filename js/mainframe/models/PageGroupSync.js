import {PageSync} from './PageSync';

export const PageGroupSync = $.views.viewModels({
    getters: ["title", "url",
    {getter: "pagesToPush",      defaultVal: [], type: "PageSync"}, 
    {getter: "pagesToPull",      defaultVal: [], type: "PageSync"}, 
    {getter: "syncedPages",      defaultVal: [], type: "PageSync"}, 
    {getter: "conflictingPages", defaultVal: [], type: "PageSync"},
    {getter: "descendants",      defaultVal: [], type: "PageSync"}],
    extend: {addPageToPush: addPageToPush, addPageToPull: addPageToPull, addSyncedPage: addSyncedPage, addConflictingPage: addConflictingPage}
});

function addPageToPush(page) {
    $.observable(this.pagesToPush()).insert(page);
}
function addPageToPull(page) {
    $.observable(this.pagesToPull()).insert(page);
}
function addSyncedPage(page) {
    $.observable(this.syncedPages()).insert(page);
}
function addConflictingPage(page) {
    $.observable(this.conflictingPages()).insert(page);
}