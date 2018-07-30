import {create,load,update} from './confluence-properties-async';

export async function getPropertyValue(contentId, key) {
    try {
        return (await load(contentId, key)).value;
    } catch (err) {
        return null;
    }
}

export async function setPropertyValue(contentId, key, value) {
    let propertyData = {
        id: null,
        key: key,
        version: {
            minorEdit: true,
            number: null
        },
        value: value
    };

    try {
        let existingProperty = await load(contentId, key);
        propertyData.id = existingProperty.id;
        propertyData.version.number = existingProperty.version.number+1;
    } catch (err) {
        // ignore, it just means the property does not exist yet
    }
    if (propertyData.id) {
        update(contentId, propertyData);
    } else {
        create(contentId, propertyData);
    }
}

/**
 * updateCallback: function(propertyData)=>void
 */
export async function doWithPropertyValue(contentId, key, updateCallback) {
    let propertyData;
    try {
        propertyData = await load(contentId, key);
        propertyData.version.number++;
    } catch (err) {
        propertyData = {
            id: null,
            key: key,
            version: {
                minorEdit: true,
                number: null
            },
            value: {}
        };
    }
    await updateCallback(propertyData.value);
    if (propertyData.id) {
        update(contentId, propertyData);
    } else {
        create(contentId, propertyData);
    }
}
