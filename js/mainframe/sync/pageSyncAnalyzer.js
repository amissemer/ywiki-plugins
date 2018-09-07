import log from './log';
import {Observable} from 'rxjs/Observable';
import notify from './notify';

const SYNC_ACTION = 'sync';
export default function pageSyncAnalyzer(pageGroup, targetSpace) {
    log(`Checking synchronization status for ${pageGroup.title} - ${pageGroup.page.id}...`);
    pageGroup.setAnalyzing(true);
    pageGroup.setProgress(SYNC_ACTION, 0);
    checkSyncStatus(pageGroup, targetSpace).subscribe(
        percent => pageGroup.setProgress(SYNC_ACTION, percent),
        e => {
            notify.error(`Error while checking synchronization of page group ${pageGroup.title}: ${e} ${JSON.stringify(e)}`)
            pageGroup.removeProgress(SYNC_ACTION);
            pageGroup.setAnalyzed(false);
        },
        () => {
            log(`Checked sync status complete for ${pageGroup.title} - ${pageGroup.page.id}`);
            pageGroup.setAnalyzed(true);
        }
    );
}

function checkSyncStatus(pageGroup, targetSpace) {
    return Observable.create(observer => {
        (async () => {
            let numPages = 1 + pageGroup.descendants.length;
            let synced = 0;
            await checkSyncStatusRecursive(pageGroup, pageGroup, targetSpace, true, callback);
            observer.complete();

            function callback() {
                observer.next( Math.round((100* (++synced))/numPages) );
            }

        })().then(null, e=>observer.error(e));
    });
}

async function checkSyncStatusRecursive(pageGroup, pageWrapper, targetSpaceKey, syncAttachments, callback) {
    let children = pageWrapper.children;
    let page = pageWrapper.page;
    await pageWrapper.computeSyncStatus(targetSpaceKey, syncAttachments);
    callback();
    await Promise.all(children.map(async child => {
        if (!child.skipSync(pageGroup)) {
            return checkSyncStatusRecursive(pageGroup, child, targetSpaceKey, syncAttachments, callback)
        } else {
            return null;
        }
    }));
}
