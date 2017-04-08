import $ from 'jquery';
import * as proxy from './proxy';
//import 'jquery-ui-bundle';
import 'bootstrap';
import 'bootstrap-validator';
import 'bootstrap-select';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import '../../css/dashboard.css';
import 'font-awesome/css/font-awesome.css';
// morris.js
import 'raphael';
import 'morris-data/morris.js';
import 'morris-data/morris.css';
import {parseOptions} from '../common/optionsParser';
var options = parseOptions();

$(document).ready( function () {
  $("#title").hide().text(options.title).fadeIn();
});

/**
 * Reads the table from the main frame into an array of associative arrays [ {col1Name: row1Value1, col2Name:row1Value2 }, {col1Name: row2Value1, col2Name:row2Value2 } ]
 * There must be 2 options set: tableName-dataheaders and  tableName-datasource, being the selectors of the header cells and the data rows respectively. */
function getTable( tableName ) {
  var headers=proxy.$arrayGetText(options[tableName+"-dataheaders"]);
  var datasource=proxy.$tableCellsGetHtml(options[tableName+"-datasource"]);
  var table=[];
  return $.when(headers,datasource).then(function(headers,data) {
    return data.map( function (row) {
      var rowObj={};
      for (var i=0;i<headers.length;i++) {
        rowObj[headers[i].toLowerCase().replace(/\W+/g, "_")] = row[i];
      }
      return rowObj;
    } );
  });
}
var serviceTypes = getTable("service-types");
var improvementIdeas = getTable("improvement-ideas");
var serviceEngagements = getTable("service-engagements");

function countUnique(arr) {
  var counts = {};
  for(var i = 0; i< arr.length; i++) {
      var num = arr[i];
      counts[num] = counts[num] ? counts[num]+1 : 1;
  }
  return counts;
}
function setKPI(cssSelector, value) {
  $(cssSelector).hide().text(value).fadeIn();
}
improvementIdeas.done( function (ideas) {
  var participantCounts = countUnique([].concat.apply([], ideas.map( function(idea) {
    return idea.participants.split(" ");
  } )));
  var participants = [];
  for (var email in participantCounts) {
    if (participantCounts.hasOwnProperty(email)) {
      participants.push({email: email, count: participantCounts[email]});
    }
  }
  participants.sort(function(el1,el2) {
    return el1.count<el2.count;
  });

  console.log("participants", participants);
  setKPI("#submitted-ideas", ideas.length);
  var peopleTableBody = $("#people-tickets-number tbody");
  participants.forEach( function (participant) {
    peopleTableBody.append('<tr><td>'+participant.email.split('@')[0]+'</td><td>'+participant.count+'</td></tr>');
  });
  setKPI("#people-using", peopleTableBody.find("tr").length);
});
serviceTypes.done( function (services) {
  setKPI("#services-under-ci", services.length);
});
serviceEngagements.done(function (engagements) {
  setKPI("#engagements-count", engagements.length);
});
//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {

    var url = window.location;
    // var element = $('ul.nav a').filter(function() {
    //     return this.href == url;
    // }).addClass('active').parent().parent().addClass('in').parent();
    var element = $('ul.nav a').filter(function() {
        return this.href == url;
    }).addClass('active').parent();

    while (true) {
        if (element.is('li')) {
            element = element.parent().addClass('in').parent();
        } else {
            break;
        }
    }
});


$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            iphone: 2666,
            ipad: null,
            itouch: 2647
        }, {
            period: '2010 Q2',
            iphone: 2778,
            ipad: 2294,
            itouch: 2441
        }, {
            period: '2010 Q3',
            iphone: 4912,
            ipad: 1969,
            itouch: 2501
        }, {
            period: '2010 Q4',
            iphone: 3767,
            ipad: 3597,
            itouch: 5689
        }, {
            period: '2011 Q1',
            iphone: 6810,
            ipad: 1914,
            itouch: 2293
        }, {
            period: '2011 Q2',
            iphone: 5670,
            ipad: 4293,
            itouch: 1881
        }, {
            period: '2011 Q3',
            iphone: 4820,
            ipad: 3795,
            itouch: 1588
        }, {
            period: '2011 Q4',
            iphone: 15073,
            ipad: 5967,
            itouch: 5175
        }, {
            period: '2012 Q1',
            iphone: 10687,
            ipad: 4460,
            itouch: 2028
        }, {
            period: '2012 Q2',
            iphone: 8432,
            ipad: 5713,
            itouch: 1791
        }],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['iPhone', 'iPad', 'iPod Touch'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});
