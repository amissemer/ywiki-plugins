import $ from 'jquery';
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
import * as utils from './dashboard-utils.js';

var options = parseOptions();

$(document).ready( function () {
  $("#title").hide().text(options.title).fadeIn();
});

var serviceTypes = utils.getTable(options, "service-types");
var improvementIdeas = utils.getTable(options, "improvement-ideas");
var serviceEngagements = utils.getTable(options, "service-engagements");

function setKPI(cssSelector, value) {
  $(cssSelector).hide().text(value).fadeIn();
}

improvementIdeas.done( function (ideas) {
  var participants = utils.sortMapByValue( utils.countUnique( ideas.map( function(idea) {
    return idea.participants.split(" ");
  } )));
  setKPI("#submitted-ideas", ideas.length);
  var peopleTableBody = $("#people-tickets-number tbody");
  participants.forEach( function (participant) {
    peopleTableBody.append(utils.row(participant.key.split('@')[0], participant.value));
  });
  setKPI("#people-using", peopleTableBody.find("tr").length);
});
serviceTypes.done( function (services) {
  setKPI("#services-under-ci", services.length);
  var servicesCountByPractice = utils.sortMapByValue (utils.countUnique ( services.map ( function(service) {
    return service.practice;
  } )));
  var servicesTableBody = $("#services-and-practices tbody");
  servicesCountByPractice.forEach( function (service) {
    servicesTableBody.append(utils.row(service.key,service.value));
  });
});
serviceEngagements.done(function (engagements) {
  setKPI("#engagements-count", engagements.length);
  var workspacesByServiceTable = $("#workspaces-by-service tbody");
  var workspacesByPracticeCount = utils.sortMapByValue (utils.countUnique ( engagements.map ( function (eng) {
    return {service:eng.service,region:eng.region};
  })));
  workspacesByPracticeCount.forEach( function (ws) {
    workspacesByServiceTable.append(utils.row(ws.key.service,ws.key.region,ws.value));
  });
});


//////////////////// CHARTS ///////////////
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
