import Labels from './Labels';
import {getContentById} from './confluence-page-async';
import { assert } from 'chai';

let page1Id = '257597020'; // in ~adrien.missemer@sap.com
let page2Id = '404455459'; // in ps

describe("Labels", function() {
    it("should load (lazily or not) and save properly", async function() {
        // set to 
        let labels1 = await loadLabels(page1Id, true);
        let labels2 = await loadLabels(page2Id);
        labels1.labelArray = [];
        await labels1.save();
        labels2.labelArray = ['c','a','b'];
        await labels2.save();

        // reload
        labels1 = await loadLabels(page1Id);
        labels2 = await loadLabels(page2Id, true);
        assert.deepEqual(labels1.labelArray, []);
        assert.deepEqual(labels2.labelArray, ['a','b','c']); // labels get sorted
    });
    it("should remove or add labels", async function() {
        // set to 
        let labels1 = await loadLabels(page1Id, true);
        let labels2 = await loadLabels(page2Id);
        labels1.labelArray = ['new1','new2'];
        await labels1.save();
        labels2.labelArray = ['z'];
        await labels2.save();

        // reload
        labels1 = await loadLabels(page1Id);
        labels2 = await loadLabels(page2Id, true);
        assert.deepEqual(labels1.labelArray, ['new1','new2']);
        assert.deepEqual(labels2.labelArray, ['z']);
    });
    it("should merge labels", async function() {
        // set to 
        let labels1 = await loadLabels(page1Id, true);
        let labels2 = await loadLabels(page2Id);
        labels1.labelArray = ['a','b','c','d'];
        await labels1.save();
        labels2.labelArray = ['b','c','z'];
        await labels2.save();

        // reload
        labels1 = await loadLabels(page1Id);
        labels2 = await loadLabels(page2Id, true);
        let initial = ['a','b','c']; // page2 added z and removed a (and page 1 added 'd')
        // merge changes from page 2 into page 1
        labels1.mergeFrom(labels2, initial);
        assert.deepEqual(labels1.labelArray, ['b','c','d','z']);
        assert.deepEqual(labels2.labelArray, ['b','c','z']);
        // merge changes from page 1 into page 2

        labels2.mergeFrom(labels1, initial);
        assert.deepEqual(labels1.labelArray, ['b','c','d','z']);
        assert.deepEqual(labels2.labelArray, ['b','c','d','z']);
    });
});

async function loadLabels(pageId, lazyLoad) {
    let expand = lazyLoad? '':'metadata.labels';
    let page = await getContentById(pageId, expand);
    return Labels.getFromPage(page);
}