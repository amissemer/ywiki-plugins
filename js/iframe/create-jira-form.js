import $ from 'jquery';
import * as proxy from './proxyService';
//import 'jquery-ui-bundle';
import 'bootstrap';
import 'bootstrap-validator';
import 'bootstrap-select';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import '../../css/create-jira.css';
import {parseOptions} from '../common/optionsParser';
import * as jira from './jiraService';
import {MAIN_JIRA_LABEL} from '../common/config';

var options = parseOptions({"serviceDisplayName" : "service engagements"});

var additionalLabel = MAIN_JIRA_LABEL;

console.info("Form options",options);

function bindDOM() {

	$("#form-close").click( function() {
		proxy.closeFrame();
	});
	$(document).keyup(function(e) {
    if (e.keyCode == 27) { // ESC
			 proxy.closeFrame();
    }
	});
	$("#cancelBtn").click( function() {
		proxy.closeFrame();
	});
	$(".service-display-name").text(options.serviceDisplayName);
	var submitBtn=$("#wizard-submit");
	var submitProgress=$('#progress-indicator');
	submitBtn.click( function() {
		console.log(submitBtn.prop('disabled'));
		if (submitBtn.hasClass('disabled')) {
			return true;
		} else {
			var labels = [additionalLabel];
			if (options.issueLabel) {
				labels.push(options.issueLabel);
			}
			var cust = $("#customer").val();
			if (cust) {
				labels.push(cust.replace(/[\W_]+/g,"-"));
			}
			jira.createIssue(options.jiraProjectKey,options.issueType, options.issueComponent,$("#summary").val(),$("#description").val(),$("#priority").val(),labels)
				.then(
					function(issueKey) {
						// RESET FORM
						$("input[type=text], textarea").val("");
						$("#priority").val("Minor");
						$('.selectpicker').selectpicker('refresh')

						submitBtn.prop('disabled', false);
						submitProgress.hide();
						$("#resultPanel").show();
						console.log("Created JIRA Issue "+issueKey);
						$(".issueKeyCreated").attr("href","https://"+jira.jiraServerHost+"/browse/"+encodeURIComponent(issueKey)).text(issueKey);
					},
					onSubmitError);

			submitBtn.prop('disabled', true);
			$("#resultPanel").hide();
			submitProgress.show();
			$('#error-display').hide();
		}
		return false;
	});


}

function onSubmitError(error) {
	$('#error-display .msg').text(error);
	$('#error-display').show();
	$('#progress-indicator').hide();
	$("#wizard-submit").prop('disabled', false);
}


$(document).ready(bindDOM);
