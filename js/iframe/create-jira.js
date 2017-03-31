import $ from 'jquery';
import * as proxy from './proxy';
//import 'jquery-ui-bundle';
import 'bootstrap';
import 'bootstrap-validator';
import 'bootstrap-select';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import '../../css/create-jira.css';
import optionsParser from './optionsParser';

var options = optionsParser({"serviceDisplayName" : "service engagements"});
const jiraServerHost = 'jira.hybris.com';

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
	$(".service-display-name").text(options.serviceDisplayName);

	function getJiraServer() {
		return proxy.ajax("/rest/createjiracontent/1.0/get-jira-servers")
		.then( function(servers) {
			var matchingJiraServer = $.grep(servers, function (value, idx) {
				return value.url.indexOf(jiraServerHost)>0;
			});
			if (matchingJiraServer.length>0) {
				return matchingJiraServer[0];
			}
			var msg="No jira server server with url "+jiraServerHost+" found";
			console.error(msg);
			throw msg;
		} )
		.then ( function (jiraServer) {
			return jiraServer.id;
		});
	}

	function getJiraProject(jiraServerP, projectKey) {
		var jiraServerP = getJiraServer();
		return jiraServerP.then(function(serverId) {
			return proxy.ajax("/rest/jira-integration/1.0/servers/"+serverId+"/projects")
		}).then(function (result) {
			for (var i=0;i<result.length;i++) {
				if (result[i].key === projectKey) {
					return result[i];
				}
			}
			var msg="No project '"+projectKey+"' found on JIRA server";
			console.error(msg);
			throw msg;
		});
	}

	function getIssueTypeId(jiraProject, issueTypeName) {
		return jiraProject.then( function (project) {
			for (var i=0;i<project.issuetypes.length;i++) {
				if (project.issuetypes[i].name=== issueTypeName) {
					return project.issuetypes[i];
				}
			}
			var msg="No issue type '"+issueTypeName+"' for project "+project.key;
			console.error(msg);
			throw msg;
		}).then (function(issueType) {
			return issueType.id;
		});
	}

	/** Returns a promise for the issueKey */
	function createIssue(projectKey, issueTypeName, summary, description) {
		var jiraServerP = getJiraServer();
		var jiraProjectP = getJiraProject(jiraServerP, projectKey);
		var issueTypeIdP = getIssueTypeId(jiraProjectP, issueTypeName);
		return $.when(jiraServerP, jiraProjectP, issueTypeIdP)
			.then(function(jiraServer, jiraProject, issueTypeId) {
				return proxy.ajax({
					url: "/rest/jira-integration/1.0/issues?applicationId="+jiraServer,
					contentType: "application/json;charset=UTF-8",
					type: "POST",
					data: JSON.stringify(
						{ "issues":[
							{
								"fields": {
									"project": {"id": jiraProject.id},
									"issuetype":{"id":issueTypeId},
									"summary":summary,
									"description":description
								}
							}
						]}
					)
				});
			})
			.then( function (result) {
				if (result && result.errors && result.errors.length>0) {
					var msg=JSON.stringify(result.errors[0].elementErrors.errors);
					console.error(msg);
					throw msg;
				}
				if (result && result.issues && result.issues.length>0) {
					var issue = result.issues[0];
					if (!issue.issue.key) {
						throw new "Expecting an issue.key property in the response";
					}
					return issue.issue.key;
				}
				var msg="Unknown JIRA ticket creation error, " + JSON.stringify(result);
				console.error(msg);
				throw msg;
			});
	}

	createIssue("ESPLM","Improvement","Hello world","my desc")
		.then(
			function(issueKey) { console.log(issueKey);}
			, console.error );

	var submitBtn=$("#wizard-submit");
	var submitProgress=$('#progress-indicator');
	submitBtn.click( function() {
		console.log(submitBtn.prop('disabled'));
		if (submitBtn.hasClass('disabled')) {
			return true;
		} else {


			// proxy.ajax({
			// 	url : 'https://jira.hybris.com/rest/api/2/search?jql=assignee=%22adrien.missemer%40hybris.com%22',
			//
			// 	})
			// .then(console.log,console.log);

			submitBtn.prop('disabled', true);
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
