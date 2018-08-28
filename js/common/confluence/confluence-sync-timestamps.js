import {PROP_KEY} from '../config';
import {doWithPropertyValue,getPropertyValue} from './confluence-properties-service';


export async function setSyncTimeStamps(srcContent, targetContent, souceSpace, targetSpace) {
    let syncTime = new Date();
    let syncTimeStamp = {
      sourceContentId : srcContent.id,
      targetContentId : targetContent.id,
      sourceVersion: srcContent.version.number,
      targetVersion: targetContent.version.number,
      syncTime: syncTime
    };
    await doWithPropertyValue(srcContent.id, PROP_KEY, function(value) {
      if (value.syncTargets) {
        console.log("Previous value on source item: syncTargets: ",value.syncTargets);
      } else {
        value.syncTargets = {};
      }
      value.syncTargets[targetSpace] = syncTimeStamp;
    });
    await doWithPropertyValue(targetContent.id, PROP_KEY, function(value) {
      if (value.syncSources) {
        console.log("Previous value on target item: syncSources: ",value.syncSources);
      } else {
        value.syncSources = {};
      }
      value.syncSources[souceSpace] = syncTimeStamp;
    });
}

export async function getTargetSyncTimeStamp(contentId, spaceKey) {
    let value = await getPropertyValue(contentId, PROP_KEY);
    if (value && value.syncTargets && value.syncTargets[spaceKey]) {
        return value.syncTargets[spaceKey];
    }
    return null;
}

export async function getSourceSyncTimeStamp(contentId, spaceKey) {
    let value = await getPropertyValue(contentId, PROP_KEY);
    if (value && value.syncSources && value.syncSources[spaceKey]) {
        return value.syncSources[spaceKey];
    }
    return null;
}