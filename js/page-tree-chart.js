import $ from 'jquery';

async function init() {
    var dataTree = await $.getJSON('./data/Project Documentation.json');
    var dataTable = [['Title', 'Parent', 'Number of pages', 'Last Updated', 'Last Updated Str', 'Created Str']];
    appendToDataTable(dataTree, dataTable);
    chart(dataTable);
}

function appendToDataTable(node, dataTable) {
    var size = 0;
    if (node.children.length) {
        size = 0;
        for (let child of node.children) {
            appendToDataTable(child, dataTable);
        }
        dataTable.push([node.title + '_SELF', node.title, 1, new Date(node.lastUpdated).getTime(), new Date(node.lastUpdated), new Date(node.createdDate)]);
    } else {
        size = 1;
    }
    dataTable.push([node.title, node.parentTitle, size, new Date(node.lastUpdated).getTime(), new Date(node.lastUpdated), new Date(node.createdDate)]);
}

init();

function chart(dataTable) {

    google.charts.load('current', {'packages':['treemap']});
    google.charts.setOnLoadCallback(() => {
        var data = google.visualization.arrayToDataTable(dataTable);
    
        let tree = new google.visualization.TreeMap(document.getElementById('chart_div'));
    
        tree.draw(data, {
          minColor: '#f00',
          midColor: '#ddd',
          maxColor: '#0d0',
          headerHeight: 15,
          fontColor: 'black',
          showScale: true,
          maxPostDepth: 1,
          maxDepth: 2,
          hintOpacity: 0.5,
          minColorValue: new Date('2016-01-01T00:00:00.000+00:00').getTime(),
          maxColorValue: new Date('2018-01-01T00:00:00.000+00:00').getTime(),
          useWeightedAverageForAggregation: true,
          generateTooltip: (row, size, value) => 
             `<div style="background:#fd9; padding:10px; border-style:solid;font-family:Courier">
                <b>${data.getValue(row, 0)}</b> (${data.getValue(row, 1)})<br>
                Created: ${data.getValue(row, 5)}<br>
                Updated: ${data.getValue(row, 4)}<br>
                Total pages: ${size}
            </div>`});
          
    });
}

