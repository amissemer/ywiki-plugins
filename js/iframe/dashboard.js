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
import 'datatables.net-bs';
import 'datatables.net-bs/css/dataTables.bootstrap.css';
import 'datatables.net-rowgroup';
import 'datatables.net-rowgroup-bs/css/rowGroup.bootstrap.css';
import './datatable.sum.js';

var options = parseOptions();
var serviceTypes = utils.getTable(options, "service-types");
var improvementIdeas = utils.getTable(options, "improvement-ideas");
var serviceEngagements = utils.getTable(options, "service-engagements");

$(document).ready( function () {
  $("#title").hide().text(options.title).fadeIn();
  wireTables();
});

function setKPI(cssSelector, value) {
  $(cssSelector).hide().text(value).fadeIn();
}

function wireTables() {
  improvementIdeas.done( function (ideas) {
    var participants = utils.countGroupBy(ideas, function(idea) {
      return idea.participants.split(" ").map(function(val) { return val.split('@')[0]; });
    } );
    console.log("participants",participants);
    setKPI("#submitted-ideas", ideas.length);
    setKPI("#people-using", participants.length);
    $('#people-tickets-number').DataTable({
        "order": [[ 1, "desc" ]],
        data: participants,
        columns: [
            { title: "Person", data: "key" },
            { title: "# Tickets Participated", data: "value" }
        ]
    });
  });
  serviceTypes.done( function (services) {
    setKPI("#services-under-ci", services.length);
    var servicesCountByPractice = utils.countGroupBy( services, function(service) {
      return service.practice;
    } );
    $("#services-and-practices").DataTable({
        "order": [[ 1, "desc" ]],
        data: servicesCountByPractice,
        columns: [
            { title: "Practice", data: "key" },
            { title: "# Service Baselines", data: "value" }
        ]
    });
  });
  serviceEngagements.done(function (engagements) {
    setKPI("#engagements-count", engagements.length);
    var workspacesByPracticeCount = utils.countGroupBy( engagements, function (eng) {
      return {service:eng.service,region:eng.region};
    });
    var wsTable = $("#workspaces-by-service").DataTable({
        "order": [[ 0, "asc" ],[ 1, "asc" ]],
        data: workspacesByPracticeCount,
        rowGroup: {
          dataSrc: 'key.region',
          // startRender: function ( rows, group ) {
          //   console.log("rows",rows);
          //   return $('<tr>').append( $('<td colspan=3>').text(group+" total") );//.append( $('<td>').text(rows.column(2).data().sum()));
          // }
        },
        columns: [
            { title: "Service", data: "key.service" },
            { title: "Region", data: "key.region" },
            { title: "# Workspaces", data: "value" }
        ]
    });
    $("#ws-created a.group-by").click( function (e) {
      e.preventDefault();
      var col = $(this).data('column');
      console.info("Changing grouping", col);
      if (!col) {
        wsTable.rowGroup().disable();
      } else {
        wsTable.rowGroup().enable();
        wsTable.rowGroup().dataSrc( col );
      }
      wsTable.draw();
    });
  });
}
