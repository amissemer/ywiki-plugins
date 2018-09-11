import {PROP_KEY} from '../../common/config';
import Property from '../../common/confluence/Property';

const SyncTimeStamp = {
  clearAll: async function(contentId) {
    await Property.reset(contentId, PROP_KEY);
  },
  loadLastSyncFromContentWithSpace : async function (contentId, otherSpaceKey) {
    let syncProperty = await Property.load(contentId, PROP_KEY);
    let value = syncProperty.value();
    let legacySyncTS;

    // Convert legacy format
    if ( (value.syncTargets && value.syncTargets[otherSpaceKey]) || (value.syncSources && value.syncSources[otherSpaceKey])) { // old format
        legacySyncTS = value.syncTargets[otherSpaceKey];
        delete value.syncTargets[otherSpaceKey];
    }
    if (value.syncSources && value.syncSources[otherSpaceKey]) { // legacy format
        legacySyncTS = value.syncSources[otherSpaceKey];
        delete value.syncSources[otherSpaceKey];
    }
    value.syncTS = value.syncTS || {};
    if (legacySyncTS) {
        value.syncTS[otherSpaceKey] = {
            pages : [ {
                contentId: legacySyncTS.sourceContentId, 
                version: legacySyncTS.sourceVersion
            }, { 
                contentId: legacySyncTS.targetContentId, 
                version: legacySyncTS.targetVersion
            }],
            syncTime : legacySyncTS.syncTime,
            lastSyncedLabels : null
        };
    }
    // End Convert legacy format
    // Generate new TS is not exist
    if (!value.syncTS[otherSpaceKey]) { // new format
        value.syncTS[otherSpaceKey]={};
    }
    return {
        setSyncedPages:setSyncedPages,
        setSyncedLabels:setSyncedLabels,
        save:save,
        isNew:isNew,
        getOtherPage:getOtherPage,
        lastSyncedLabels:lastSyncedLabels,
        getPage:getPage
    };

    function isNew() {
        return syncProperty.isNew() || !syncProperty.value().syncTS || !syncProperty.value().syncTS[otherSpaceKey] || !syncTS().pages || syncTS().pages.length==0;
    }

    function getOtherPage(pageId) {
        return syncTS().pages.find( e=>e.contentId!=pageId );
    }

    function lastSyncedLabels() {
        return syncTS().lastSyncedLabels;
    }

    function syncTS(prop, spaceKey) {
        return syncProperty.value().syncTS[otherSpaceKey];
    }

    function populate(syncTSFrom, syncTSTarget) {
        syncTSTarget.pages = syncTSFrom.pages;
        syncTSTarget.lastSyncedLabels = syncTSFrom.lastSyncedLabels;
        syncTSTarget.syncTime = syncTSFrom.syncTime;
    }
    function getPage(pageId) {
        return syncTS().pages.find( e=>e.contentId==pageId );
    }
    
    function setSyncedPages(page1, page2) {
        // checkConsistency
        if (page1.id != contentId && page2.id != contentId) throw `one of the pages (${page1.id},${page2.id}) should be the one we loaded the SyncTimeStamp from: ${contentId}`;
        syncTS().pages = [ {
            contentId : page1.id,
            version: page1.version.number,
            spaceKey: page1.space.key
        }, {
            contentId : page2.id,
            version: page2.version.number,
            spaceKey: page2.space.key
        }];
        syncTS().syncTime = new Date();
        return this;
    }
    function setSyncedLabels(labels) {
        if (!Array.isArray(labels)) throw 'the syncedLabels must be an array';
        syncTS().lastSyncedLabels = labels;
        return this;
    }
    async function save() {
        // can't save if it is doesn't have exactly 2 pages
        if (! Array.isArray(syncTS().pages) || syncTS().pages.length!=2) throw "Can't save the SyncTimeStamp without setting the syncedPages first";
        await syncProperty.save();
        // now try and save the timeStamp on the other page
        let otherPage = getOtherPage(contentId);
        let thisSpace = getOtherPage(otherPage.contentId).spaceKey;
        let otherProp = await Property.load(otherPage.contentId, PROP_KEY);
        otherProp.value().syncTS = otherProp.value().syncTS || {};
        otherProp.value().syncTS[thisSpace] = {};
        populate(syncTS(), otherProp.value().syncTS[thisSpace]);
        if (otherProp.value().syncSources) delete otherProp.value().syncSources;
        if (otherProp.value().syncTargets) delete otherProp.value().syncTargets;
        populate(syncProperty, otherProp);
        await otherProp.save();
    }
  }
}

export default SyncTimeStamp;
