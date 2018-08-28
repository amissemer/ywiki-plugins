import $ from 'jquery';
import getUser from './confluence-user-async';
import {DEFAULT_RESTRICTION_GROUP} from '../config';

/**
 * returns either false if no edit restriction exist, or an object with a user and a group property 
 * containing the list of user names and group names with edit restriction.
 */
export async function getEditorRestrictions(contentId) {
    let resp = await $.get('/rest/api/content/'+contentId+'/restriction/byOperation/update');
    let restrictions = { user: [], group: []};
    if (resp && resp.restrictions) {
        if (resp.restrictions.group && resp.restrictions.group.results) {
            restrictions.group = resp.restrictions.group.results.map(r=>r.name);
        }
        if (resp.restrictions.user && resp.restrictions.user.results) {
            restrictions.user = resp.restrictions.user.results.map(r=>r.username);
        }
    }
    if (restrictions.user.length + restrictions.group.length == 0) {
        restrictions = false;
    }
    return restrictions;
}

export async function setEditorRestriction(contentId, groupName) {
    if (!groupName) {
        groupName = DEFAULT_RESTRICTION_GROUP;
    }
    let username = await getUser();
    // set ourselves as editor
    await experimental('/rest/experimental/content/'+contentId+'/restriction/byOperation/update/user?userName=' + encodeURIComponent(username));
    // and the whole group as well
    await experimental('/rest/experimental/content/'+contentId+'/restriction/byOperation/update/group/' + encodeURIComponent(groupName));
}

/** the experimental restriction API resturns 200 OK without any content which
 * jquery considers as an error, so we need to catch the error
 */
async function experimental(url) {
    try { 
        await $.ajax({
            url: url,
            type: 'PUT'
        });
    } catch (err) {
        if (err.status != 200 && err.status  != 204) { // is this a real error
            throw err; // rethrow
        } // else success
    }
}