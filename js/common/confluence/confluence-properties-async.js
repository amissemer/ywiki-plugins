import { throttleRead, throttleWrite } from './confluence-throttle';

const BASE_URL = '/rest/api/content/';

export async function load(contentId, key) {
  const url = `${BASE_URL}${contentId}/property/${key}`;
  return throttleRead(() => $.get(url));
}

export async function create(contentId, propertyData) {
  const url = `${BASE_URL}${contentId}/property`;
  return throttleWrite(() =>
    $.ajax({
    url,
    contentType: 'application/json;charset=UTF-8',
    type: 'POST',
    data: JSON.stringify(propertyData),
  }),
  );
}

export async function update(contentId, propertyData) {
  const url = `${BASE_URL}${contentId}/property/${propertyData.key}`;
  return throttleWrite(() =>
    $.ajax({
    url,
    contentType: 'application/json;charset=UTF-8',
    type: 'PUT',
    data: JSON.stringify(propertyData),
  }),
  );
}

export async function deleteProperty(contentId, key) {
  const url = `${BASE_URL}${contentId}/property/${key}`;
  return throttleWrite(() =>
    $.ajax({
    url,
    type: 'DELETE',
  }),
  );
}
