import {load,create,update,deleteProperty} from './confluence-properties-async';

/** A wrapper for Confluence properties.
 * 
 * let prop = await Property.load(contentId, key);
 * // you can then update the value
 * prop.value().foo = 'bar'
 * // then save
 * await prop.save()
 */

const Property = {
    reset: async function(contentId, key) {
        await deleteProperty(contentId, key);
    },
    load : async function(contentId, key) {
        let confluenceInternal;
        try {
            confluenceInternal = await load(contentId, key);
        } catch (err) {
            confluenceInternal = {
                id: null,
                key: key,
                version: {
                    minorEdit: true,
                    number: null
                },
                value: {}
            };
        }
        return {
            value : function() { 
                return confluenceInternal.value; 
            },
            save: async function() { 
                if (confluenceInternal.id) {
                    confluenceInternal.version.number++;
                    confluenceInternal = await update(contentId, confluenceInternal);
                } else {
                    confluenceInternal = await create(contentId, confluenceInternal);
                }
            },
            isNew: function() {
                return confluenceInternal.id===null;
            }
        };
    }
};

export default Property;
