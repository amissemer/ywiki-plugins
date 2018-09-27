import {addLabels,removeLabels} from './confluence-labels-async';
import {getContentById} from './confluence-page-async';

/** provides sets management feature for labels */
const Labels = {
    getFromPage : async function(page) {
        let labelArray = [];
        // read the labels of the page if necessary
        if (!page.metadata) {
            page = await getContentById(page.id, 'metadata.labels');
        }
        page.metadata.labels.results.forEach(label=>labelArray.push(label.name));
        labelArray.sort();
        let initialArray = Array.from(labelArray);

        return {
            labelArray: labelArray,
            save: save,
            mergeFrom: mergeFrom
        }

        async function save() {
            // because this.labelArray is a mutable array, we need to sort it before saving
            this.labelArray.sort();
            if (JSON.stringify(this.labelArray) != JSON.stringify(initialArray)) {
                let toAdd = this.labelArray.minus(initialArray);
                let toRemove = initialArray.minus(this.labelArray);
                if (toAdd.length) {
                    await addLabels(page.id, toAdd);
                }
                if (toRemove.length) {
                    await removeLabels(page.id, toRemove);
                }
            }
        }
        function mergeFrom(otherLabels, commonAncestor) {
            let toAdd = otherLabels.labelArray.minus(commonAncestor);
            let toRemove = commonAncestor.minus(otherLabels.labelArray);
            this.labelArray.pushUnique(toAdd);
            this.labelArray.removeAll(toRemove);
            this.labelArray.sort();
        }
    },
    hasLabel: function(page, labelsToFind) {
        if (typeof labelsToFind === 'string') {
            labelsToFind = [ labelsToFind ];
        }
        return null != page.metadata.labels.results.find( l => labelsToFind.indexOf(l.name)>=0 );
    }
};
  
Array.prototype.minus = function(a) {
    return this.filter( i=> a.indexOf(i) < 0 );
};
Array.prototype.pushUnique = function(arr) {
    arr.forEach(i=>{
        if (this.indexOf(i) < 0) this.push(i);
    });
};
Array.prototype.removeAll = function(arr) {
    arr.forEach(i=>{
        let pos = this.indexOf(i);
        if (pos >= 0) this.splice(pos, 1);
    });
};

export default Labels;