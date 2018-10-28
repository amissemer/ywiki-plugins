import { Observable } from 'rxjs/Observable';
import log from './log';
import notify from './notify';

const SYNC_ACTION = 'sync';
const CHECK_ATTACHMENT_SYNC = true;

/** This action performs the initial difference analysis for a page group compared to a target space. */
export default function pageSyncAnalyzer(pageGroup, globalOptions) {
  log(`Checking synchronization status for ${pageGroup.title} - ${pageGroup.page.id}...`);
  let refreshSourcePages = false;
  if (pageGroup.analyzed) {
    // this is a refresh, we should refresh the source pages
    refreshSourcePages = true;
  }
  pageGroup.editGroup = globalOptions.editGroup;
  pageGroup.restrictAllPages = globalOptions.restrictAllPages;
  pageGroup.setAnalyzing(true);
  pageGroup.setProgress(SYNC_ACTION, 0);
  checkSyncStatus(pageGroup, globalOptions, refreshSourcePages).subscribe(
    percent => pageGroup.setProgress(SYNC_ACTION, percent),
    e => {
      console.warn(`Error while checking synchronization of page group ${pageGroup.title}: ${e}`, e);
      notify.error(`Error while checking synchronization of page group ${pageGroup.title}: ${e} ${JSON.stringify(e)}`);
      pageGroup.removeProgress(SYNC_ACTION);
      pageGroup.setAnalyzed(false);
    },
    () => {
      log(`Checked sync status complete for ${pageGroup.title} - ${pageGroup.page.id}`);
      pageGroup.removeProgress(SYNC_ACTION);
      pageGroup.setAnalyzed(true);
    },
  );
}

function checkSyncStatus(pageGroup, globalOptions, refreshSourcePages) {
  return Observable.create(observer => {
    (async () => {
      const numPages = 1 + pageGroup.descendants.length;
      let synced = 0;
      const options = {
        pageGroup,
        targetSpaceKey: globalOptions.targetSpace,
        syncAttachments: CHECK_ATTACHMENT_SYNC,
        callback: () => observer.next(Math.round((100 * ++synced) / numPages)),
        refreshSourcePages,
      };
      await checkSyncStatusRecursive(pageGroup, options);
      observer.complete();
    })().then(null, e => observer.error(e));
  });
}

async function checkSyncStatusRecursive(pageWrapper, options) {
  if (options.refreshSourcePages) {
    await pageWrapper.refreshSourcePage();
  }
  await pageWrapper.computeSyncStatus(options.targetSpaceKey, options.syncAttachments);
  options.callback();
  await Promise.all(
    pageWrapper.children.map(async child => {
      if (!child.skipSync(options.pageGroup)) {
        return checkSyncStatusRecursive(child, options);
      }
      return null;
    }),
  );
}
