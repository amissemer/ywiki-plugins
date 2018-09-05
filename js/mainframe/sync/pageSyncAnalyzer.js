import log from './log';
import {Observable} from 'rxjs/Observable';

export default function pageSyncAnalyzer(pageGroup, targetSpace) {
    log(`Checking synchronization status for ${pageGroup.title} - ${pageGroup.page.id}...`);
    pageGroup.setAnalyzing(true);
    checkSyncStatus(pageGroup, targetSpace).subscribe(
        item => log(`Sync check ${item}%`),
        e => log(`Sync check error: ${e}`),
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
            try {
                await checkSyncStatusRecursive(pageGroup, pageGroup, targetSpace, true, callback);
            } catch (err) {
                log('got a sync check error');
                observer.error(err);
            }
            observer.complete();

            function callback() {
                observer.next( Math.round((100* (++synced))/numPages) );
            }

        })().then(null, observer.error);

        
    });
}

async function checkSyncStatusRecursive(pageGroup, pageWrapper, targetSpaceKey, syncAttachments, callback) {
    let children = pageWrapper.children;
    let page = pageWrapper.page;
    await pageWrapper.computeSyncStatus(targetSpaceKey, syncAttachments);
    pageGroup.updateWithSyncStatus(pageWrapper.syncStatus);
    callback();
    await Promise.all(children.map(async child => {
        if (!child.skipSync(pageGroup)) {
            return checkSyncStatusRecursive(pageGroup, child, targetSpaceKey, syncAttachments, callback)
        } else {
            return null;
        }
    }));
}
