import $ from 'jquery';
import * as confluence from './confluenceService'
import * as proxy from './proxyService';
import 'bootstrap';
import 'bootstrap-validator';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';

proxy.$metacontent('meta[name=confluence-space-key]')
	.then(
		function(value) { $("#source-space").val(value); },
		function () { console.error("Could not resolve current spaceKey")}
);

function bindDOM() {
  $(document).keyup(function(e) {
    if (e.keyCode == 27) { // ESC
			 proxy.closeFrame();
    }
	});
	$("#cancel-move").click( function() {
		proxy.closeFrame();
	});
	var submitBtn=$("#submit-move");
	submitBtn.click( function() {
		if (submitBtn.hasClass('disabled')) {
			return true;
    }
    console.log("Submit");
    submitBtn.prop('disabled', true);
    var sourceSpaceKey = $("#source-space").val();
    var sourcePageTitle = $("#source-page").val();
    var targetSpaceKey = $("#target-space").val();
    var targetParentTitle = $("#target-parent").val();
    confluence.movePages(sourceSpaceKey, sourcePageTitle, targetSpaceKey, targetParentTitle)
       .then(
         function() {
           submitBtn.prop('disabled', false);
           confluence.getContent(targetSpaceKey, sourcePageTitle).then( endMoveProcess );
         });
  });
}

function endMoveProcess(rootPage) {
  proxy.redirect(rootPage._links.webui);
}

$(document).ready(bindDOM);
