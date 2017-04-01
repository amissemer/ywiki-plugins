import $ from 'jquery';
import * as proxy from './proxy';

const jiraServerHost = 'jira.hybris.com';

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
        console.log("Project",result[i]);
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
export function createIssue(projectKey, issueTypeName, componentName, summary, description, priority) {
  var jiraServerP = getJiraServer();
  //var jiraProjectP = getJiraProject(jiraServerP, projectKey);
  //var issueTypeIdP = getIssueTypeId(jiraProjectP, issueTypeName);
  return $.when(jiraServerP)
    .then(function(jiraServer) {
      return proxy.ajax({
        url: "/rest/jira-integration/1.0/issues?applicationId="+jiraServer,
        contentType: "application/json;charset=UTF-8",
        type: "POST",
        data: JSON.stringify(
          { "issues":[
            {
              "fields": {
                "project": {"key": projectKey},
                "issuetype":{"name": issueTypeName},
                "components":[{"name": componentName}],
                "summary":summary,
                "description":description,
                "priority": {"name": priority}
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
