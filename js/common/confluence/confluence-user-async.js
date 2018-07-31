import $ from 'jquery';

let userCached;

export default async function getUser() {
    if (userCached) return userCached;
    userCached = (await $.get('/rest/api/user/current') ).username;
    return userCached;
}