import $ from 'jquery';
import getUser from './confluence-user-async';
import {DEFAULT_RESTRICTION_GROUP} from '../config';

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