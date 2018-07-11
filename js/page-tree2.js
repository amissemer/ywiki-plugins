import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/js/bootstrap.min';

import 'bootstrap-treeview/dist/bootstrap-treeview.min.css';
import 'bootstrap-treeview/public/js/bootstrap-treeview';
import dateFormat from 'dateformat';
const cutOffDate = new Date("2017-01-01T00:00:00Z");

async function init() {
    var data = await $.getJSON('./data/Project Documentation All.json');
    calculateDates(data);
    var counters = {};
    setTypes(data, counters);
    console.log('counters',counters);
    var restrictions = await $.getJSON('./data/restrictions.json');
    var tree = convertContainerNode(data, restrictions);
    console.log('tree',tree);
    $('#tree').treeview({
        data: [tree],
        showTags: true,
        levels: 1,
        enableLinks: true
    });
    //visit(data) {}
    //treeview.revealNode(id, {silent: true});
    open('viewRestrictions', 500);
    open('migrationcheck-unknown', 2500);
    open('migrationcheck-type-project-root', 5000);
}
init();

function open(search, timeout) {
    setTimeout(function() {
        $('#tree').treeview('search', [search, {
            ignoreCase: false,    
            exactMatch: false,   
            revealResults: true, 
      }]);
    }, timeout);
}

function convertContainerNode(data, restrictions, viewRestricted) {
    let nodeViewRestricted = restrictions[data.id] && hasAny(restrictions[data.id].viewRestrictions);
    let nodeEditRestricted = restrictions[data.id] && hasAny(restrictions[data.id].editRestrictions);
    var ret = {
          text: `<strong>${data.title}</strong>` + (viewRestricted?' [inherited]':'') + (nodeViewRestricted?' [own ('+owners(restrictions[data.id].viewRestrictions)+')]':'') + (viewRestricted||nodeViewRestricted?' [viewRestrictions]':'') + (nodeEditRestricted?' [editRestrictions] ('+owners(restrictions[data.id].editRestrictions)+')':'') + ' min=' + data.firstTouched.format() +' max=' + data.lastTouched.format() + ' avg=' + data.avgCreation.format() + ` weight=${data.weight}, action=${data.action}`,
          tags: data.labels.concat([`[${data.nodeType}]`, `[${data.timePeriod}]`, `[${data.action}]`]),
          href: `https://wiki.hybris.com/pages/viewpage.action?pageId=${data.id}`,
          backColor: color(data),
          color: viewRestricted || nodeViewRestricted ? '#f00':'#000'};
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
    
    if (isLegacy(node.firstTouched) && isLegacy(node.lastTouched)) {
        node.timePeriod = 'period-legacy';
    } else if (!isLegacy(node.firstTouched) && !isLegacy(node.lastTouched)) {
        node.timePeriod = 'period-recent';
    } else {
        node.timePeriod = 'period-mixed'
    }

    if (parentAction.startsWith('move-legacy-type-project')) {
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