import SyncTimeStamp from './SyncTimeStamp';
import {getContentById} from '../../common/confluence/confluence-page-async';
import {assert} from 'chai';

let page1Id = '257597020'; // in ~adrien.missemer@sap.com
let page2Id = '377578548'; // in ps

describe("SyncTimeStamp", function() {
    it('should handle load and save', async function() {
        // setup (clean)
        let page1 = await getContentById(page1Id, 'version,space');
        let page1space = page1.space.key;
        let page2 = await getContentById(page2Id, 'version,space');
        let page2space = page2.space.key;

        await SyncTimeStamp.clearAll(page1Id);
        await SyncTimeStamp.clearAll(page2Id);

        // load empty timestamp
        let ts = await SyncTimeStamp.loadLastSyncFromContentWithSpace(page1Id, page2space);

        // set syncedPages and labels then save
        assert.isTrue(ts.isNew());
        ts.setSyncedPages(page1, page2);
        await ts.save();
        assert.notExists(ts.lastSyncedLabels());
        ts.setSyncedLabels(['hello','world']);
        await ts.save();

        // reload and check data was persisted
        ts = await SyncTimeStamp.loadLastSyncFromContentWithSpace(page1Id, page2space);
        assert.isFalse(ts.isNew());
        assert.equal(ts.lastSyncedLabels().length, 2);
        assert.equal(ts.lastSyncedLabels()[0], 'hello');
        let otherPage1 = ts.getOtherPage(page2Id);
        assert.equal(otherPage1.contentId, page1Id);
        assert.equal(otherPage1.spaceKey, page1space);
        let otherPage2 = ts.getOtherPage(page1Id);
        assert.equal(otherPage2.contentId, page2Id);
        assert.equal(otherPage2.spaceKey, page2space);

        // reload the timestamp from page2 instead of page1, it should be the same as on page1
        ts = await SyncTimeStamp.loadLastSyncFromContentWithSpace(page2Id, page1space);
        assert.isFalse(ts.isNew());
        assert.equal(ts.lastSyncedLabels().length, 2);
        assert.equal(ts.lastSyncedLabels()[0], 'hello');

        // load the timestamp for another space, it should be an empty TS
        ts = await SyncTimeStamp.loadLastSyncFromContentWithSpace(page2Id, 'otherSpace');
        assert.isTrue(ts.isNew());

    });

    it('lastSyncedLabels should not overwrite the syncedPages', async function() {
        // setup (clean)
        let page1 = await getContentById(page1Id, 'version,space');
        let page1space = page1.space.key;
        let page2 = await getContentById(page2Id, 'version,space');
        let page2space = page2.space.key;

        await SyncTimeStamp.clearAll(page1Id);
        await SyncTimeStamp.clearAll(page2Id);

        // init the timestamp with synced pages only
        let ts = await SyncTimeStamp.loadLastSyncFromContentWithSpace(page1Id, page2space);

        ts.setSyncedPages(page1, page2);
        await ts.save();
        assert.notExists(ts.lastSyncedLabels());

        // now reload and set the syncedLabels
        ts = await SyncTimeStamp.loadLastSyncFromContentWithSpace(page1Id, page2space);
        ts.setSyncedLabels(['hello','world']);
        await ts.save();

        // reload and check the data was not overwritten
        ts = await SyncTimeStamp.loadLastSyncFromContentWithSpace(page1Id, page2space);
        assert.isFalse(ts.isNew());
        assert.equal(ts.lastSyncedLabels().length, 2);
        assert.equal(ts.lastSyncedLabels()[0], 'hello');
        let otherPage1 = ts.getOtherPage(page2Id);
        assert.equal(otherPage1.contentId, page1Id);
        assert.equal(otherPage1.spaceKey, page1space);
        let otherPage2 = ts.getOtherPage(page1Id);
        assert.equal(otherPage2.contentId, page2Id);
        assert.equal(otherPage2.spaceKey, page2space);
    });

    it('setSyncedPages should not overwrite the syncedLabels', async function() {
        // setup (clean)
        let page1 = await getContentById(page1Id, 'version,space');
        let page1space = page1.space.key;
        let page2 = await getContentById(page2Id, 'version,space');
        let page2space = page2.space.key;

        await SyncTimeStamp.clearAll(page1Id);
        await SyncTimeStamp.clearAll(page2Id);

        // init the timestamp with syncedPages and labels
        let ts = await SyncTimeStamp.loadLastSyncFromContentWithSpace(page1Id, page2space);

        ts.setSyncedPages(page1, page2);
        ts.setSyncedLabels(['hello','world']);
        await ts.save();

        // reload the timeStamp and ensure data was properly saved
        ts = await SyncTimeStamp.loadLastSyncFromContentWithSpace(page1Id, page2space);
        assert.equal(ts.lastSyncedLabels().length, 2);
        let otherPage1 = ts.getOtherPage(page2Id);
        assert.equal(otherPage1.contentId, page1Id);
        assert.equal(otherPage1.spaceKey, page1space);
        assert.equal(otherPage1.version, page1.version.number);

        // now let's update the page sync attributes (the versions) and save
        page1.version.number++;
        page2.version.number++;
        ts.setSyncedPages(page1, page2);
        await ts.save();

        // then reload and verify the syncedLabels haven't been changed, but the version numbers have
        ts = await SyncTimeStamp.loadLastSyncFromContentWithSpace(page1Id, page2space);
        assert.equal(ts.lastSyncedLabels().length, 2);
        assert.equal(ts.lastSyncedLabels()[0], 'hello');
        otherPage1 = ts.getOtherPage(page2Id);
        assert.equal(otherPage1.version, page1.version.number);
        let otherPage2 = ts.getOtherPage(page1Id);
        assert.equal(otherPage2.version, page2.version.number);
    });
});

