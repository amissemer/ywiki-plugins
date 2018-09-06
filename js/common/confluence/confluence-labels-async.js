import $ from 'jquery';

const BASE_URL = '/rest/api/content/';

export async function addLabels(contentId, labels) {
    let labelsPayload = [];
    for (let label of labels) {
        labelsPayload.push({"prefix": "global","name":label});
    }
    return $.post({
        url: BASE_URL + contentId + '/label',
        data: JSON.stringify(labelsPayload),
        contentType: "application/json; charset=utf-8"
    });
}

export async function removeLabels(contentId, labels) {
    for (let label of labels) {
        await $.delete(BASE_URL + contentId + '/label?name='+encodeURIComponent(label));
    }
    return labels;
}