import log from './log';
import {Observable} from 'rxjs/Observable';

export default function pageSyncPerformer(action, listOfSyncStatus, pageGroup) {
    log(`Performing sync for ${pageGroup.title}`);
    // pageGroup.setSyncing(true);
    doSync(action, listOfSyncStatus, pageGroup).subscribe(
        item => log(`Syncing ${item}%`),
        e => log(`Syncing error: ${e} ${JSON.stringify(e)}`),
        () => {
            log(`Sync complete for ${pageGroup.title}`);
           // pageGroup.setSyncing(false);
        }
    );
}

function doSync(action, listOfSyncStatus, pageGroup) {
    return Observable.create(observer => {
        (async () => {
            let numPages = listOfSyncStatus.length;
            let synced = 0;
            try {
                await doSyncRecursive(action, pageGroup, pageGroup, listOfSyncStatus, true, callback);
            } catch (err) {
                log('got a sync error');
                observer.error(err);
            }
            observer.complete();

            function callback() {
                observer.next( Math.round((100* (++synced))/numPages) );
            }
        })().then(null, observer.error);
    });
}

async function doSyncRecursive(action, pageGroup, pageWrapper, listOfSyncStatus, syncAttachments, callback) {
    let children = pageWrapper.children;
    let page = pageWrapper.page;
    let syncStatus = listOfSyncStatus.find(e=>e.sourcePage.id==page.id);
    if (syncStatus) { // is there a syncStatus to perform for current page?
        switch (action) {
            case 'push': await syncStatus.performPush(); break;
            case 'pull': await syncStatus.performPull(); break;
        }
        let targetSpace = syncStatus.targetSpaceKey;
        await pageWrapper.computeSyncStatus(targetSpace, true);
        pageGroup.updateWithSyncStatus(pageWrapper.syncStatus);
        callback(); // count 1 sync
    }
    // in any case, check the children
    await Promise.all(children.map(async child => {
        if (!child.skipSync(pageGroup)) {
            return doSyncRecursive(action, pageGroup, child, listOfSyncStatus, syncAttachments, callback)
        } else {
            return null;
        }
    }));
}
