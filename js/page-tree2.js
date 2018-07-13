import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/js/bootstrap.min';

import 'bootstrap-treeview/dist/bootstrap-treeview.min.css';
import 'bootstrap-treeview/public/js/bootstrap-treeview';
import dateFormat from 'dateformat';
const cutOffDate = new Date("2017-01-01T00:00:00Z");

const typeOtherIncludeRegex=/\bstats\b/i;
const typeOtherExcludeRegex=/HANA Stats Collected during/i;
const legacyProjectDocumentationPageId = 398183603;

async function init() {
    var data = await $.getJSON('./data/Project Documentation All.json');
    calculateDates(data);
    var counters = {};
    setTypes(data, counters);
    console.log('counters',counters);
    var decisions = ['type,pageTitle,decision'];
    collectDecisions(data, decisions);
    console.log(decisions.join('\n'));
    var restrictions = await $.getJSON('./data/restrictions.json');

    var permissionsOut = ['pageType,pageTitle,readUsers,readGroups,writeUsers,writeGroups,createdDate,lastUpdated,restrictedPageCount,action,url'];
    collectPermissions(data, restrictions, permissionsOut);
    console.log("permissions",permissionsOut.join('\n'));


    let migrationProgram = buildMigrationProgram(data);
    console.log("migrationProgram",migrationProgram);
    console.log("additional permissions",additionalPagesToFreeUp.join('\n'));

    var tree = convertContainerNode(data, restrictions);
    console.log('tree',tree);
    $('#tree').treeview({
        data: [tree],
        showTags: true,
        levels: 1,
        enableLinks: true,
        highlightSearchResults: false
    });
    //visit(data) {}
    //treeview.revealNode(id, {silent: true});
    open('viewRestrictions', 500);
    open('migrationcheck-unknown', 2500);
    open('migrationcheck-type-project-root', 5000);
}
init();

function collectDecisions(node, arr) {
    if (node.action.startsWith('migrationcheck') && node.action!='migrationcheck-type-project-page') {
        arr.push([node.nodeType,'"'+node.title.replace(/"/,'""')+'"',node.action].join());
    }
    node.children.map( child => collectDecisions(child,arr) );
}

function collectPermissions(node, restrictions, arr) {
    let viewRestrictions = restrictions[node.id] ? restrictions[node.id].viewRestrictions : {};
    let editRestrictions = restrictions[node.id] ? restrictions[node.id].editRestrictions : {};
    let viewUsers = viewRestrictions.users || [];
    let viewGroups = viewRestrictions.groups || [];
    let editUsers = editRestrictions.users || [];
    let editGroups = editRestrictions.groups || [];
    let restrictedPageCount = [].concat(viewGroups, viewUsers).length>0 ? node.weight : 1;
    let url = `https://wiki.hybris.com/pages/viewpage.action?pageId=${node.id}`;
    if ([].concat(viewGroups,viewUsers,editGroups,editUsers).length >0) {
        arr.push([node.nodeType, csvEscape(node.title), csvjoin(viewUsers), csvjoin(viewGroups), csvjoin(editUsers), csvjoin(editGroups), node.createdDate, node.lastUpdated, restrictedPageCount, node.action, url].join());
    }
    node.viewUsers=viewUsers;
    node.editUsers=editUsers;
    node.viewGroups=viewGroups;
    node.editGroups=editGroups;
    node.allRestrictions = [].concat(viewUsers, editUsers, viewGroups, editGroups);
    if (node.allRestrictions.length>0) {
        node.hasRestrictions = true;
    }
    node.children.map( child => collectPermissions(child,restrictions, arr) );
}

function csvEscape(title) {
    return '"'+title.replace(/"/,'""')+'"';
}
function csvjoin(arr) {
    let t={};
    arr.forEach(e=>t[e]=e);
    return '"' +Object.keys(t).join()+ '"';
}

function buildMigrationProgram(rootNode) {
    fillInTreeAction(rootNode);
    let program = rootNode.children.map(child=>buildMigrationProgramToNode(child, legacyProjectDocumentationPageId));
    let dumpedMoves = [];
    program.forEach(p=>dumpMoves(p, dumpedMoves));
    console.log("dumpedMoves",dumpedMoves.join('\n'));
    return program;
}
function dumpMoves(program, dumpedMoves) {
    if (program.function=="move") {
        dumpedMoves.push(['move',csvEscape(program.title),program.comment].join());
    }
    if (program.then) {
        program.then.forEach(p=>dumpMoves(p, dumpedMoves));
    }
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
function buildMigrationProgramToNode(node, targetParentId) {
    let actionNode;
    if (node.action.startsWith('migrationcheck')) {
        throw `what should we do with ${node.title}, ${node.action}?`;
    } else if (node.action.startsWith('keep')) {
        // ignore if no child needs to be moved/copied
        // else, copy
        if (node.treeAction=='keep') {
            actionNode = {
                function: 'ignore'
            }
        } else {
            if (node.nodeType.startsWith('type-project') || node.nodeType.startsWith('type-customer')) {
                throw 'Incorrect program for node '+node.title;
            }
            actionNode = {
                function: 'copy',
                source: node.id,
                target: targetParentId,
                then: node.children.map(child => buildMigrationProgramToNode(child, 'resultOfCopy'))
            }
        }
    } else if (node.action.match(/^move-.*-customer$/)) {
        // move it
        ensureNoPerm(node);
        // if any child is kept, create a customer page from template
        if (node.treeAction=='move') {
            actionNode = {
                function: 'move',
                comment: node.weight+' pages',
            }
        } else {
            actionNode = {
                function: 'move',
                comment: node.weight+' pages',
                then: [ {
                    function: 'instantiate',
                    source: 'customerTemplate',
                    target: 'nodeParent',
                    then: node.children.map(child=>moveBackChildrenToBeKept(child, 'createdPageId'))
                } ]
            }
        }
    } else if (node.action.startsWith('move')) {
        if (node.treeAction=='move') {
            actionNode = {
                function: 'move',
                comment: node.weight+' pages'
            }
        } else {
            throw 'Node has action=move but some children dont, please check' + node.title;
        }
    }
    actionNode.title = node.title;
    return actionNode;
}

function moveBackChildrenToBeKept(node, targetParentId) {
    if (node.treeAction=='keep') {
        return {
            function: 'move',
            target: targetParentId,
            comment: node.weight+' pages (back to ps)',
            title: node.title
        };
    } else if (node.treeAction=='move') {
        return {function: 'ignore',
    comment: 'already moved',
title: node.title};
    } else {
        throw 'what to do with this?';
    }
}
var additionalPagesToFreeUp = [];
function ensureNoPerm(node) {
    if (node.hasRestrictions && !node.action.startsWith('move')) {
        additionalPagesToFreeUp.push([csvEscape(node.title),csvjoin(node.allRestrictions),node.id].join());
    } //throw 'Node has restrictions: '+node.title+' '+node.allRestrictions;
    node.children.forEach(ensureNoPerm);
}

function open(search, timeout) {
    setTimeout(function() {
        $('#tree').treeview('search', [search, {
            ignoreCase: false,    
            exactMatch: false,   
            revealResults: true
      }]);
    }, timeout);
}

function convertContainerNode(data, restrictions, viewRestricted) {
    let nodeViewRestricted = restrictions[data.id] && hasAny(restrictions[data.id].viewRestrictions);
    let nodeEditRestricted = restrictions[data.id] && hasAny(restrictions[data.id].editRestrictions);
    var ret = {
          text: `<strong>${data.title}</strong>` + (viewRestricted?' [inherited]':'') + (nodeViewRestricted?' [own ('+owners(restrictions[data.id].viewRestrictions)+')]':'') + (viewRestricted||nodeViewRestricted?' [viewRestrictions]':'') + (nodeEditRestricted?' [editRestrictions] ('+owners(restrictions[data.id].editRestrictions)+')':'') + ' min=' + data.firstTouched.format() +' max=' + data.lastTouched.format() + ' avg=' + data.avgCreation.format() + ` weight=${data.weight}, action=${data.action}`,
          tags: data.labels.concat([`[${data.nodeType}]`, `[${data.timePeriod}]`, `[${data.action}]`, `[${data.treeAction}-tree]`]),
          href: `https://wiki.hybris.com/pages/viewpage.action?pageId=${data.id}`,
          backColor: color(data),
          color: (viewRestricted || nodeViewRestricted) ? '#f00':'#000'};
    if (data.children.length) {
        ret.nodes = data.children.map(child => {
            return convertContainerNode(child, restrictions, viewRestricted || nodeViewRestricted);
        });
    } 
    return ret;
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

function color(node) {
    if (node.action.startsWith('move')) return '#824818';
    if (node.action.startsWith('migrationcheck')) return '#ffa09b';
    if (node.action.startsWith('keep')) return '#95bc7e';
    return '#ffffff';
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


function hasAny(restriction) {
    return (restriction.groups && restriction.groups.length && restriction.groups.indexOf('hybris')==-1) || (restriction.users && restriction.users.length);
}

function owners(restriction) {
    var users = restriction.users || [];
    var groups = restriction.groups || [];
    var txt = users.concat(groups).join(',');
    var abbr = txt.substring(0,10) + (txt.length>10?'...':'');
    return `<span title="${txt}">${abbr}</span>`;
}

Date.prototype.format = function() {
    return dateFormat(this, "yyyy-mm");
}