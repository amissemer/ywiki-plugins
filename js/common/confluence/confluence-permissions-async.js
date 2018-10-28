import $ from 'jquery';
import { getUserKey, getUser } from './confluence-user-async';
import { DEFAULT_RESTRICTION_GROUP } from '../config';
import { throttleRead, throttleWrite } from './confluence-throttle';
/**
 * returns either false if no edit restriction exist, or an object with a user and a group property
 * containing the list of user names and group names with edit restriction.
 */
export async function getEditorRestrictions(contentId) {
  const resp = await throttleRead(() => $.get(`/rest/api/content/${contentId}/restriction/byOperation/update`));
  let restrictions = { user: [], group: [] };
  if (resp && resp.restrictions) {
    if (resp.restrictions.group && resp.restrictions.group.results) {
      restrictions.group = resp.restrictions.group.results.map(r => r.name);
    }
    if (resp.restrictions.user && resp.restrictions.user.results) {
      restrictions.user = resp.restrictions.user.results.map(r => r.username);
    }
  }
  if (restrictions.user.length + restrictions.group.length == 0) {
    restrictions = false;
  }
  return restrictions;
}

export async function removeRestrictions(contentId, spaceKey) {
  const atlToken = $('meta[name=ajs-atl-token]').attr('content');
  const form = {
    viewPermissionsUsers: '',
    editPermissionsUsers: '',
    viewPermissionsGroups: '',
    editPermissionsGroups: '',
    contentId,
    atl_token: atlToken,
  };
  await throttleWrite(() =>
    $.post({
    url: '/pages/setcontentpermissions.action',
    contentType: 'application/x-www-form-urlencoded',
    data: $.param(form),
  }),
  );
}

/** Ensures some edit restrictions are set if necessary (if restrictAllPages is true,
 * or if the bodyContent is not provided, or if the bodyContent contains the html macro) */
export async function ensureEditRestrictions(pageId, group, bodyContent, restrictAllPages) {
  // if there is no group set or there are already editor restrictions, just skip
  if (!group || (await getEditorRestrictions(pageId))) return;
  if (restrictAllPages || !bodyContent || bodyContent.indexOf('<ac:structured-macro ac:name="html"') >= 0) {
    await setEditorRestriction(pageId, group);
    console.log(`Permissions set on page ${pageId}`);
  }
}

export async function setMyselfAsEditor(contentId, spaceKey) {
  const atlToken = $('meta[name=ajs-atl-token]').attr('content');
  const me = await getUserKey();
  const current = await throttleRead(() =>
    $.get(
    `/pages/getcontentpermissions.action?contentId=${contentId}&spaceKey=${spaceKey}&atl_token=${atlToken}&_=${Math.random()}`,
  ),
  );
  const form = {
    viewPermissionsUsers: [],
    editPermissionsUsers: [],
    viewPermissionsGroups: [],
    editPermissionsGroups: [],
    contentId,
    atl_token: atlToken,
  };
  // parse current permissions into the form to be posted
  const FIELDS = {
    PERM_TYPE: 0,
    PRINCIPAL_TYPE: 1,
    PRINCIPAL_ID: 2,
    TARGET_PAGE_ID: 3,
  };
  current.permissions.forEach(p => {
    if (p[FIELDS.TARGET_PAGE_ID] == contentId) {
      let field;
      switch (`${p[FIELDS.PERM_TYPE]} ${p[FIELDS.PRINCIPAL_TYPE]}`) {
        case 'Edit user':
          field = form.editPermissionsUsers;
          break;
        case 'Edit group':
          field = form.editPermissionsGroups;
          break;
        case 'View user':
          field = form.viewPermissionsUsers;
          break;
        case 'View group':
          field = form.viewPermissionsGroups;
          break;
      }
      if (field) {
        field.push(p[FIELDS.PRINCIPAL_ID]);
      }
    }
  });
  // add ourselves
  form.editPermissionsUsers.push(me);
  // add read permission if any are set
  if (form.viewPermissionsUsers.length || form.viewPermissionsGroups.length) {
    form.viewPermissionsUsers.push(me);
  }
  // transform the form
  form.viewPermissionsUsers = form.viewPermissionsUsers.join(',');
  form.editPermissionsUsers = form.editPermissionsUsers.join(',');
  form.viewPermissionsGroups = form.viewPermissionsGroups.join(',');
  form.editPermissionsGroups = form.editPermissionsGroups.join(',');
  await throttleWrite(() =>
    $.post({
    url: '/pages/setcontentpermissions.action',
    contentType: 'application/x-www-form-urlencoded',
    data: $.param(form),
  }),
  );
}

export async function setEditorRestriction(contentId, groupName) {
  if (!groupName) {
    groupName = DEFAULT_RESTRICTION_GROUP;
  }
  const username = await getUser();
  // set ourselves as editor
  await experimental(
    `/rest/experimental/content/${contentId}/restriction/byOperation/update/user?userName=${encodeURIComponent(
      username,
    )}`,
  );
  // and the whole group as well
  await experimental(
    `/rest/experimental/content/${contentId}/restriction/byOperation/update/group/${encodeURIComponent(groupName)}`,
  );
}

/** the experimental restriction API resturns 200 OK without any content which
 * jquery considers as an error, so we need to catch the error
 */
async function experimental(url) {
  try {
    await throttleWrite(() =>
      $.ajax({
      url,
      type: 'PUT',
    }),
    );
  } catch (err) {
    if (err.status != 200 && err.status != 204) {
      // is this a real error
      throw err; // rethrow
    } // else success
  }
}
