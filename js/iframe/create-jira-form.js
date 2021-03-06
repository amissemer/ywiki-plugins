import '../lib/Array.ext';
import $ from 'jquery';
import jsrender from 'jsrender';
jsrender($);
import * as proxy from './proxyService';
import 'bootstrap';
import 'bootstrap-validator';
import 'bootstrap-select';
import {JiraAuthError} from './jira-error';
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
	$("#authenticateWarning a.authenticateWarningLink").click( function() {
		$("#authenticateWarning").fadeOut();
	});
	$(".service-display-name").text(options.serviceDisplayName);
	if (options.issueComponentSelector) {
		$('#componentsWrapper').html($.templates('#componentsTmpl').render({components: options.issueComponentSelector.split(',').map(c=>({name: c}))}));
	}
	if (options.feedbackTypeSelector) {
		$('#feedbackTypeWrapper').html($.templates('#feedbackTypeTmpl').render({feedbackTypes: options.feedbackTypeSelector}, false));
	}
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
			let selectedComponent = $('#component').val() || options.issueComponent;
			let feedbackType = $("#feedback-type").val();
			jira.createIssue(options.jiraProjectKey,options.issueType, selectedComponent,$("#summary").val(),$("#description").val(),$("#priority").val(),feedbackType,labels)
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
	if (error instanceof JiraAuthError) {
		$('#authenticateWarning a.authenticateWarningLink').attr("href",error.authenticationUri);
		$('#authenticateWarning').show();
	} else {
		$('#error-display .msg').text(error);
		$('#error-display').show();
	}
	$('#progress-indicator').hide();
	$("#wizard-submit").prop('disabled', false);
}


$(document).ready(bindDOM);
