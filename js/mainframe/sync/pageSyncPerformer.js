import log from './log';
import {Observable} from 'rxjs/Observable';
import notify from './notify';

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
            notify.error(`Error while synchronizing (${action}) page group ${pageGroup.title}: ${e} ${JSON.stringify(e)}`)
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
        await actionRef.perform(syncStatus);
        let targetSpace = syncStatus.targetSpaceKey;
        await pageWrapper.computeSyncStatus(targetSpace, true);
        pageGroup.updateWithSyncStatus(pageWrapper.syncStatus);
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
