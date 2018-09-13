import {throttleRead, throttleWrite} from './confluence-throttle';

const BASE_URL = '/rest/api/content/';

export async function load(contentId, key)  {
    let url = BASE_URL + `${contentId}/property/${key}`; 
    return throttleRead( () => $.get(url) );
}

export async function create(contentId, propertyData)  {
    let url = BASE_URL + `${contentId}/property`; 
    return throttleWrite( () => $.ajax({
        url: url, 
        contentType: "application/json;charset=UTF-8",
        type: "POST",
        data: JSON.stringify( propertyData )
    }) );
}

export async function update(contentId, propertyData)  {
    let url = BASE_URL + `${contentId}/property/${propertyData.key}`; 
    return throttleWrite( () => $.ajax({
        url: url, 
        contentType: "application/json;charset=UTF-8",
        type: "PUT",
        data: JSON.stringify( propertyData )
    }) );
}

export async function deleteProperty(contentId, key)  {
    let url = BASE_URL + `${contentId}/property/${key}`; 
    return throttleWrite( () => $.ajax({
        url: url,
        type: "DELETE"
    }) );
}
