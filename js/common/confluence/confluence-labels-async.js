import $ from 'jquery';

const BASE_URL = '/rest/api/content/';

export async function addLabels(contentId, labels) {
  const labelsPayload = [];
  labels.forEach(label => labelsPayload.push({ prefix: 'global', name: label }));
  return $.post({
    url: `${BASE_URL + contentId}/label`,
    data: JSON.stringify(labelsPayload),
    contentType: 'application/json; charset=utf-8',
  });
}

export async function removeLabels(contentId, labels) {
  await labels.forEachSerial(async label =>
    $.ajax({
    url: `${BASE_URL + contentId}/label?name=${encodeURIComponent(label)}`,
    type: 'DELETE',
  }),
  );
  return labels;
}
