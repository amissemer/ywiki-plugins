import dateFormat from 'dateformat';
const cutOffDate = new Date("2017-01-01T00:00:00Z");

const typeOtherIncludeRegex=/\bstats\b/i;
const typeOtherExcludeRegex=/HANA Stats Collected during/i;
const legacyProjectDocumentationPageId = 398183603;
import _ from 'lodash';
const targetSpaceKey = 'eslegacy';
const sourceSpaceKey = 'ps';

import {TemplateProcessor} from './templateProcessor';

function templateProcessor(customerPageTitle) {
    return TemplateProcessor({
        "customer-original-page": {value:`<ac:link><ri:page ri:space-key="${targetSpaceKey}" ri:content-title="${_.escape(customerPageTitle)}" /></ac:link>`}
    }, null, customerPageTitle);
}

import {createPageFromTemplate,copyPageToSpace,movePagesById} from './confluenceAsync';

export default async function migrate(rootPageNode) {
    calculateDates(rootPageNode);
    var counters = {};
    setTypes(rootPageNode, counters);
    console.log('counters',counters);
    check(rootPageNode);
    fillInTreeAction(rootPageNode);
    try {
        console.log('Doing all copies first, and counting required moves');
        var moveCounter = {numMoves:0};
        for (let child of rootPageNode.children) {
            await migrateNode(child, legacyProjectDocumentationPageId, null, true, moveCounter);
        }
        moveCounter.total = moveCounter.numMoves;
        moveCounter.numMoves = 0;
        console.log("Number of moves required: "+moveCounter.total);

        //await Promise.all(rootPageNode.children.map(child=>migrateNode(child, legacyProjectDocumentationPageId)));
        for (let child of rootPageNode.children) {
            console.log('Now migrating '+child.title);
            await migrateNode(child, legacyProjectDocumentationPageId, null, false, moveCounter);
            console.log('Done migrating '+child.title);
        }
        console.log("Done migrating all");
    } catch (err) {
        console.error("In migration: ",err);
        throw err;
    }
    
}

function check(node) {
    if (node.action.startsWith('migrationcheck') && node.action!='migrationcheck-type-project-page') {
        throw 'migrationcheck: ' + [node.nodeType,'"'+node.title.replace(/"/,'""')+'"',node.action].join();
    }
    node.children.map( check );
}

function fillInTreeAction(node) {
    let childTreeActions = node.children.map(fillInTreeAction);
    let thisNodeAction = actionToTreeAction(node);
    let allTreeActions = [thisNodeAction].concat(childTreeActions);
    if (allTreeActions.every(el=>el=='keep')) {
        node.treeAction = 'keep';
    } else if (allTreeActions.every(el=>el=='move')) {
        node.treeAction = 'move';
    } else {
        node.treeAction = 'mixed';
    }
    return node.treeAction;

    function actionToTreeAction(node) {
        if (node.action.startsWith('keep')) {
            return 'keep';
        } else if (node.action.startsWith('move')) {
            return 'move';
        }
        throw 'invalid action '+node.action;
    }
}
async function migrateNode(node, targetParentId, sourceParentId, onlyCopies, moveCounter) {
    console.log(`migrateNode(${node.title}) - ${moveCounter.numMoves}/${moveCounter.total}`);
    if (node.action.startsWith('migrationcheck')) {
        throw `what should we do with ${node.title}, ${node.action}?`;
    } else if (node.action.startsWith('keep')) {
        // ignore if no child needs to be moved/copied
        // else, copy
        if (node.treeAction=='keep') {
            // ignore
        } else {
            if (node.nodeType.startsWith('type-project') || node.nodeType.startsWith('type-customer')) {
                throw 'Incorrect program for node '+node.title;
            }
            var copiedPage = await copyPageToSpace(node.id, targetSpaceKey, targetParentId);
            for (let child of node.children) {
                await migrateNode(child, copiedPage.id, node.id, onlyCopies, moveCounter);
            }
            //await Promise.all(node.children.map(child=>migrateNode(child, copiedPage.id, node.id)));
        }
    } else if (node.action.match(/^move-.*-customer$/)) {
        // move it
        // if any child is kept, create a customer page from template
        if (node.treeAction=='move') {
            moveCounter.numMoves++;
            if (!onlyCopies) {
                console.log(`Moving ${node.title} (${node.weight} pages)`);
                await movePagesById(node.id, targetSpaceKey, targetParentId);
            }
        } else {
            moveCounter.numMoves++;
            if (!onlyCopies) {
                console.log(`Moving ${node.title} (${node.weight} pages)`);
                await movePagesById(node.id, targetSpaceKey, targetParentId);
                console.log(`Recreating customer page ${node.title} in ${sourceSpaceKey} space`);
                try {
                    await createPageFromTemplate(sourceSpaceKey,'Migrated Customer Template', sourceSpaceKey, sourceParentId, templateProcessor(node.title));
                } catch(err) {
                    if (JSON.stringify(err).indexOf('A page with this title already exists')) {
                        console.log("A page with title "+node.title+" already exist, skipping the recreation");
                    } else {
                        throw err;
                    }
                }
            }
            for (let child of node.children) {
                if (child.treeAction=='keep') { // then move it back
                    moveCounter.numMoves++;
                    if (!onlyCopies) {
                        console.log(`Moving back ${child.title} (${child.weight} pages) to ${sourceSpaceKey}`);
                        await movePagesById(child.id, sourceSpaceKey, node.title);
                    }
                } else if (child.treeAction =='move') {
                    console.log(`project ${child.title} was already moved with customer`);
                } else {
                    throw `trouble under ${child.title}`;
                }
            }
        }
    } else if (node.action.startsWith('move')) {
        if (node.treeAction=='move') {
            moveCounter.numMoves++;
            if (!onlyCopies) {
                await movePagesById(node.id, targetSpaceKey, targetParentId);
            }
        } else {
            throw 'Node has action=move but some children dont, please check' + node.title;
        }
    }
    if (!onlyCopies) {
        console.log(`Done migrating ${node.title} and all ${node.weight} pages (treeAction=${node.treeAction})`);
    }
}

function setTypes(node, counters, parentType, level, parentAction) {
    level = level || 0;
    parentAction = parentAction || '';
    node.nodeType = null;
    if (!parentType) {
        node.nodeType = 'type-root';
        parentType = '';
    }
    if (node.title.match(typeOtherIncludeRegex) && ! node.title.match(typeOtherExcludeRegex)) {
        node.nodeType = 'type-other';
    } else {
        if ( parentType=='type-root' && node.labels.indexOf('project-documentation-pages')==-1 ) {
            node.nodeType = 'type-region';
        }
        if (node.labels.indexOf('ci-region')>=0) {
            node.nodeType = 'type-region';
        }
        if ( parentType=='type-region' && node.labels.indexOf('ci-region')==-1 ) {
            node.nodeType = 'type-customer';
        }
        if ( parentType=='type-customer') {
            node.nodeType = 'type-project-root';
        }
        if ( parentType.startsWith('type-project')) {
            node.nodeType = 'type-project-page';
        }
        if (!node.nodeType) {
            node.nodeType = 'type-other';
        }
    }
    
    if (isLegacy(node.firstTouched) && isLegacy(node.lastTouched)) {
        node.timePeriod = 'period-legacy';
    } else if (!isLegacy(node.firstTouched) && !isLegacy(node.lastTouched)) {
        node.timePeriod = 'period-recent';
    } else {
        node.timePeriod = 'period-mixed'
    }

    if (['type-other','type-root'].indexOf(node.nodeType)>=0) {
        node.action = 'keep-other';
    } else if (parentAction.startsWith('move-legacy-type-project') || parentAction.startsWith('move-mixed-type-project')) {
        node.action = 'move-legacy-'+node.nodeType;
    } else if (parentAction.startsWith('keep-recent-type-project')) {
        node.action = 'keep-recent-'+node.nodeType;
    } else if (parentAction.startsWith('migrationcheck-type-project')) {
        node.action = 'migrationcheck-'+node.nodeType;
    } else if (['type-project-root','type-customer','type-region'].indexOf(node.nodeType)>=0) {
        if (node.timePeriod == 'period-legacy') {
            node.action = 'move-legacy-'+node.nodeType;
        } else if (node.timePeriod == 'period-recent') {
            node.action = 'keep-recent-'+node.nodeType;
        } else if (node.nodeType == 'type-region') {
            node.action = 'keep-region';
        } else if (node.nodeType == 'type-customer') {
            node.action = 'move-mixed-type-customer';
        } else if (node.nodeType == 'type-project-root') {
            node.action = 'move-mixed-type-project-root';
        } else {
            node.action = 'migrationcheck-'+node.nodeType;
        }
    }
    if (!node.action) {
        node.action = 'migrationcheck-unknown';
    }

    counters[node.action] = counters[node.action] || 0;
    counters[node.action]++;
    counters[node.timePeriod] = counters[node.timePeriod] || 0;
    counters[node.timePeriod]++;
    counters[node.nodeType] = counters[node.nodeType] || 0;
    counters[node.nodeType]++;
    node.children.forEach(child=>setTypes(child, counters, node.nodeType, level + 1, node.action));
}

function isLegacy(date) {
    return date < cutOffDate;
}

Date.max = function(a,b) {
    var ret = new Date(Math.max.apply(null,[a,b]));
    //console.log("max date",ret);
    return ret;
} 
Date.min = function(a,b) {
    var ret = new Date(Math.min.apply(null,[a,b]));
    //console.log("min date",ret);
    return ret;
}

Date.prototype.format = function() {
    return dateFormat(this, "yyyy-mm");
}

function calculateDates(node) {
    var dates = [].concat(node.children.map(calculateDates));
    var minMaxDate = dates.reduce(function(accumulator, elt) {
        accumulator.min = Date.min(accumulator.min, elt.min);
        accumulator.max = Date.max(accumulator.max, elt.max);
        accumulator.avgCreation = new Date((accumulator.avgCreation*accumulator.weight + elt.avgCreation*elt.weight)/(accumulator.weight+elt.weight));
        accumulator.weight+=elt.weight;
        return accumulator;
    }, {min: new Date(node.createdDate), max: new Date(node.lastUpdated), avgCreation: new Date(node.createdDate), weight: 1});
    node.firstTouched = minMaxDate.min;
    node.lastTouched = minMaxDate.max;
    node.avgCreation = minMaxDate.avgCreation;
    node.weight = minMaxDate.weight;
    return minMaxDate;
}
