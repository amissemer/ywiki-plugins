import log from './log';
import {Observable} from 'rxjs/Observable';
import notify from './notify';
import {setMyselfAsEditor,getEditorRestrictions} from '../../common/confluence/confluence-permissions-async';
import {getUser} from '../../common/confluence/confluence-user-async';

const PERMISSION_ERROR = "Confluence Permission Error";

const ACTIONS = {
    "pushAttachments" : {
        getList: pageGroup => pageGroup.attachmentsToPush,
        perform: async syncStatus => syncStatus.performPush()
    },
    "pullAttachments" : {
        getList: pageGroup => pageGroup.attachmentsToPull,
        perform: async syncStatus => syncStatus.performPull()
    },
    "pushConflictingAttachments" : {
        getList: pageGroup => pageGroup.conflictingAttachments,
        perform: async syncStatus => syncStatus.performPush()
    }
}

/** 
 * We could use the list of SyncStatus from action.getList() and simply perform them in sequence,
 * instead of traversing the tree again. Except we need to ensure the pages are created in the children order
 * because we cannot change the target children after creation.
*/
export default function attachmentSyncPerformer(action, pageGroup) {
    log(`Performing ${action} for ${pageGroup.title}`);
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
            log(`${action} complete for ${pageGroup.title}`);
            pageGroup.removeProgress(action);
        }
    );
}

function doSync(action, pageGroup) {
    let actionRef = ACTIONS[action];
    let listOfSyncStatus = Array.from(actionRef.getList(pageGroup));
    // shallow copy it because it will be concurrently modified while we loop over it

    return Observable.create(observer => {
        (async () => {
            const total = listOfSyncStatus.length;
            let synced = 0;
            for (let syncStatus of listOfSyncStatus) {
                await doSyncOne(syncStatus, actionRef.perform);
                observer.next( Math.round((100* (++synced))/total) );
            }
            observer.complete();
        })().then(null, e=>observer.error(e));
    });
}

// Perform the action with a retry in case of write permission issue
async function doSyncOne(syncStatus, perform) {
    try {
        await perform(syncStatus);
    } catch (err) {
        if (err.status == 403 || err.statusCode == 403) { // HTTP 403 Forbidden
            // if we can gain write permission
            if (await attemptToGetPermission(syncStatus)) {
                try { // retry
                    await perform(syncStatus);
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
    // TODO RECOMPUTE THE SYNC STATUS just for the attachment
    // await pageWrapper.computeSyncStatus(syncStatus.targetSpaceKey, options.syncAttachments); 
}

async function attemptToGetPermission(syncStatus) {
    let pageId = syncStatus.targetAttachment.containerId();
    let spaceKey = syncStatus.parentSyncStatus.targetSpaceKey;
    try {
        let user = await getUser();
        let r = await getEditorRestrictions(pageId);
        if (!r || r.user.indexOf(user)>=0) {
            return false; // we already have permission
        }
        await setMyselfAsEditor(pageId, spaceKey);
        return true; 
    } catch (e) {
        console.warn(`Failed to get write permission on page ${spaceKey}:${pageId}`,e);
    }
}