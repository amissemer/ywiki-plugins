import { Observable } from 'rxjs/Observable';
import log from './log';
import notify from './notify';
import { setMyselfAsEditor, getEditorRestrictions } from '../../common/confluence/confluence-permissions-async';
import { getUser } from '../../common/confluence/confluence-user-async';

const PERMISSION_ERROR = 'Confluence Permission Error';
const SYNC_ATTACHMENT = true;

const ACTIONS = {
  push: {
    getList: pageGroup => pageGroup.pagesToPush,
    perform: async syncStatus => syncStatus.performPush(),
  },
  pull: {
    getList: pageGroup => pageGroup.pagesToPull,
    perform: async syncStatus => syncStatus.performPull(),
  },
  pushConflicting: {
    getList: pageGroup => pageGroup.conflictingPages,
    perform: async syncStatus => syncStatus.performPush(),
  },
};

/**
 * We could use the list of SyncStatus from action.getList() and simply perform them in sequence,
 * instead of traversing the tree again. Except we need to ensure the pages are created in the children order
 * because we cannot change the target children after creation.
 */
export default function pageSyncPerformer(action, pageGroup) {
  log(`Performing ${action} for ${pageGroup.title}`);
  pageGroup.setProgress(action, 0);
  doSync(action, pageGroup).subscribe(
    percent => pageGroup.setProgress(action, percent),
    e => {
      if (e.name === PERMISSION_ERROR) {
        notify.error(
          `Cannot ${action} on ${
            e.page.title
          }, target page is write protected, click here to check permissions, then retry`,
          e.page._links.webui,
        );
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
    },
  );
}

function doSync(action, pageGroup) {
  const actionRef = ACTIONS[action];
  const listOfSyncStatus = actionRef.getList(pageGroup);
  return Observable.create(observer => {
    (async () => {
      const total = listOfSyncStatus.length;
      let synced = 0;
      const options = {
        actionRef,
        pageGroup,
        listOfSyncStatus,
        syncAttachments: SYNC_ATTACHMENT,
        callback: () => observer.next(Math.round((100 * ++synced) / total)),
      };
      await doSyncRecursive(pageGroup, options);
      observer.complete();
    })().then(null, e => observer.error(e));
  });
}

async function doSyncRecursive(pageWrapper, options) {
  const page = pageWrapper.page;
  const syncStatus = options.listOfSyncStatus.find(e => e.sourcePage.id == page.id);
  if (syncStatus) {
    // is there a syncStatus to perform for current page?
    try {
      await options.actionRef.perform(syncStatus);
    } catch (err) {
      if (err.status == 403) {
        // HTTP 403 Forbidden
        // if we can gain write permission
        if (await attemptToGetPermission(syncStatus)) {
          try {
            // retry
            await options.actionRef.perform(syncStatus);
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
    await pageWrapper.computeSyncStatus(syncStatus.targetSpaceKey, options.syncAttachments);
    options.callback(); // count 1 sync
  }
  // in any case, check the children
  await Promise.all(
    pageWrapper.children.map(async child => {
      if (!child.skipSync(options.pageGroup)) {
        return doSyncRecursive(child, options);
      }
      return null;
    }),
  );
}

async function attemptToGetPermission(syncStatus) {
  try {
    const page = syncStatus.targetPage;
    const user = await getUser();
    const r = await getEditorRestrictions(page.id);
    if (!r || r.user.indexOf(user) >= 0) {
      return false; // we already have permission
    }
    await setMyselfAsEditor(page.id, syncStatus.targetSpaceKey);
    r;
    return true;
  } catch (e) {
    console.warn(`Failed to get write permission on ${syncStatus.targetSpaceKey}:${syncStatus.targetPage.title}`, e);
  }
}
