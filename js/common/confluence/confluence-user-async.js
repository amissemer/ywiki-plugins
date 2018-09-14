import $ from 'jquery';

let _user;

export async function getUser() {
    return (await load()).username;
}
export async function getUserKey() {
    return (await load()).userKey;
}
async function load() {
    if (!_user) {
        _user = await $.get('/rest/api/user/current');
    }
    return _user;
}