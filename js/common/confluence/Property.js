import { load, create, update, deleteProperty } from './confluence-properties-async';
import { throttleRead, throttleWrite } from './confluence-throttle';

/** A wrapper for Confluence properties.
 *
 * let prop = await Property.load(contentId, key);
 * // you can then update the value
 * prop.value().foo = 'bar'
 * // then save
 * await prop.save()
 */

const Property = {
  async reset(contentId, key) {
    try {
      await load(contentId, key);
    } catch (err) {
      // does not exist, skip
      return;
    }
    await deleteProperty(contentId, key);
  },
  async load(contentId, key) {
    let confluenceInternal;
    try {
      confluenceInternal = await load(contentId, key);
    } catch (err) {
      confluenceInternal = {
        id: null,
        key,
        version: {
          minorEdit: true,
          number: null,
        },
        value: {},
      };
    }
    return {
      value() {
        return confluenceInternal.value;
      },
      async save() {
        if (confluenceInternal.id) {
          confluenceInternal.version.number++;
          try {
            confluenceInternal = await update(contentId, confluenceInternal);
          } catch (err) {
            // workaround for Confluence bug https://jira.atlassian.com/browse/CRA-1259
            let msg;
            if (err.message) {
              msg = err.message;
            } else if (err.responseText) {
              msg = err.responseText;
            }
            if (msg && msg.indexOf("Can't add an owner from another space") >= 0) {
              // then we delete and recreate the prop
              await deleteProperty(contentId, key);
              confluenceInternal.id = null;
              confluenceInternal.version.number = null;
              confluenceInternal = await create(contentId, confluenceInternal);
            } else {
              throw err;
            }
          }
        } else {
          confluenceInternal = await create(contentId, confluenceInternal);
        }
      },
      isNew() {
        return confluenceInternal.id === null;
      },
    };
  },
};

export default Property;
