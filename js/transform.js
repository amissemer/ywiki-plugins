const fs = require('fs');
const csv=require('csvtojson');

function convert(name) {

    var all = JSON.parse(fs.readFileSync('./docs/data/'+name+'.json'));

    var out = build(all);
    function build(node) {
        return  Array.prototype.concat.apply(  [ [ node.id,node.title ].join(';') ] , node.children.map(build) );
    }
    out.sort();
    dedup(out);
    fs.writeFileSync('./docs/data/'+name+'.csv', out.join('\n'));

}

function dedup(arr) {
    let i=1;
    while (i<arr.length) {
        if (arr[i]==arr[i-1]) {
            arr.splice(i,1);
        } else {
            i++;
        }
    }
}

convert('Project Documentation All');
convert('Project Documentation');
convertRestrictions('restrictions');


async function convertRestrictions(fileName) {
    fs.writeFileSync(`./docs/data/${fileName}.json`, JSON.stringify( restrictionsByPage(await csv().fromFile(`./docs/data/${fileName}.csv`)) ) );
}

function restrictionsByPage(parsedCsv) {
    return groupByPage(parsedCsv.map( e => {
        return { 
            id : e['CONTENT_ID'],
            restrictionType : e['CP_TYPE'],
            groupName : e['GROUPNAME'],
            userName : e['username'],
            title : e['TITLE'],
            url : e['SPACEKEY']
     }; 
    } ));
}

function groupByPage(restrictions) {
    return restrictions.reduce(function(accumulator, elt) {
        accumulator[elt.id] = accumulator[elt.id] || { 
            id: elt.id,
            url: elt.url,
            title: elt.title,
            viewRestrictions: {},
            editRestrictions: {}
        };
        if (elt.restrictionType == 'View') {
            appendRestriction(accumulator[elt.id].viewRestrictions, elt.groupName, elt.userName);
        } else if (elt.restrictionType == 'Edit') {
            appendRestriction(accumulator[elt.id].editRestrictions, elt.groupName, elt.userName);
        } else {
            throw 'Unknown restriction type' + elt.restrictionType;
        }
        return accumulator;
    }, {});
};

function appendRestriction(restList, group, user) {
    if (group && group!='NULL') {
        (restList.groups = restList.groups || []).push(group);
    }
    if (user && user!='NULL') {
        (restList.users = restList.users || []).push(user);
    }
}
