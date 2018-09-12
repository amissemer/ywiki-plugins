import log from './log';
import {Observable} from 'rxjs/Observable';
import notify from './notify';
import {setMyselfAsEditor,getEditorRestrictions} from '../../common/confluence/confluence-permissions-async';
import {getUser} from '../../common/confluence/confluence-user-async';

const PERMISSION_ERROR = "Confluence Permission Error";
const ACTIONS = {
    "push" : {
        getList: pageGroup => pageGroup.pagesToPush,
        perform: async syncStatus => syncStatus.performPush()
    },
    "pull" : {
        getList: pageGroup => pageGroup.pagesToPull,
        perform: async syncStatus => syncStatus.performPull()
    },
    "pushConflicting" : {
        getList: pageGroup => pageGroup.conflictingPages,
        perform: async syncStatus => syncStatus.performPush()
    }
}

export default function pageSyncPerformer(action, pageGroup) {
    log(`Performing sync for ${pageGroup.title}`);
    pageGroup.setProgress(action, 0);
    doSync(action, pageGroup).subscribe(
        percent => pageGroup.setProgress(action, percent),
        e => {
            if (e.name === PERMISSION_ERROR) {
                notify.error(`Cannot ${action} on ${e.page.title}, target page is write protected, click here to check permissions, then retry`, e.page._links.webui);
                // TODO attempt to use the confluence-permissions-async.js API to fix the problem
            } else {
                console.warn(`Error while synchronizing (${action}) page group ${pageGroup.title}: ${e}`, e);
                notify.error(`Error while synchronizing (${action}) page group ${pageGroup.title}: ${e} ${JSON.stringify(e)}`);
            }
            pageGroup.removeProgress(action);
        },
        () => {
            log(`Sync complete for ${pageGroup.title}`);
            pageGroup.removeProgress(action);
        }
    );
}

function doSync(action, pageGroup) {
    let actionRef = ACTIONS[action];
    let listOfSyncStatus = actionRef.getList(pageGroup);
    return Observable.create(observer => {
        (async () => {
            let numPages = listOfSyncStatus.length;
            let synced = 0;
            await doSyncRecursive(actionRef, pageGroup, pageGroup, listOfSyncStatus, true, callback);
            observer.complete();

            function callback() {
                observer.next( Math.round((100* (++synced))/numPages) );
            }
        })().then(null, e=>observer.error(e));
    });
}

async function doSyncRecursive(actionRef, pageGroup, pageWrapper, listOfSyncStatus, syncAttachments, callback) {
    let children = pageWrapper.children;
    let page = pageWrapper.page;
    let syncStatus = listOfSyncStatus.find(e=>e.sourcePage.id==page.id);
    if (syncStatus) { // is there a syncStatus to perform for current page?
        try {
            await actionRef.perform(syncStatus);
        } catch (err) {
            if (err.status == 403) { // HTTP 403 Forbidden
                // if we can gain write permission
                if (await attemptToGetPermission(syncStatus)) {
                    try { // retry
                        await actionRef.perform(syncStatus);
                    } catch (err) {
                        throw { name: PERMISSION_ERROR, page: syncStatus.targetPage };
                    }
                } else {
                    throw { name: PERMISSION_ERROR, page: syncStatus.targetPage };
                }
            } else {
                throw err;
            }
        }
        let targetSpace = syncStatus.targetSpaceKey;
        await pageWrapper.computeSyncStatus(targetSpace, true); // TODO this doesn't seem to work in case of a batch pull. Also page titles aren't properly pushed
        callback(); // count 1 sync
    }
    // in any case, check the children
    await Promise.all(children.map(async child => {
        if (!child.skipSync(pageGroup)) {
            return doSyncRecursive(actionRef, pageGroup, child, listOfSyncStatus, syncAttachments, callback)
        } else {
            return null;
        }
    }));
}

async function attemptToGetPermission(syncStatus) {
    try {
        let page = syncStatus.targetPage;
        let user = await getUser();
        let r = await getEditorRestrictions(page.id);
        if (!r || r.user.indexOf(user)>=0) {
            return false; // we already have permission
        }
        await setMyselfAsEditor(page.id, syncStatus.targetSpaceKey);r
        return true; 
    } catch (e) {
        console.warn(`Failed to get write permission on ${syncStatus.targetSpaceKey}:${syncStatus.targetPage.title}`,e);
    }
}