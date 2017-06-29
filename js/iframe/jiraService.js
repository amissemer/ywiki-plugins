import $ from 'jquery';
import * as proxy from './proxyService';
import { JiraError} from './jira-error';

const jiraServerHost = 'jira.hybris.com';
//const jiraServerHost = 'jiratest.hybris.com';

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
    throw new JiraError(msg);
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
    throw new JiraError(msg);
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
    throw new JiraError(msg);
  }).then (function(issueType) {
    return issueType.id;
  });
}

/** Returns a promise for the issueKey */
function createIssue(projectKey, issueTypeName, componentName, summary, description, priority, labels) {
  var jiraServerP = getJiraServer();
  //var jiraProjectP = getJiraProject(jiraServerP, projectKey);
  //var issueTypeIdP = getIssueTypeId(jiraProjectP, issueTypeName);
  if (typeof labels === "string") {
    labels = [ labels ];
  }
  labels = labels || [];
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
                "priority": {"name": priority},
                "labels": labels
              }
            }
          ]}
        )
      });
    })
    .then( getJiraTicketKey );
}

function getJiraTicketKey(data) {
  var key = data && data.issues && data.issues[0] && data.issues[0].issue && data.issues[0].issue.key;
  if (key) {
    return key;
  }
  var errorMsg = "Oops, something happened during ticket creation, please try again. ";
  console.error("Error creating JIRA ticket, full response was: ",data);
  if (data && data.errors && data.errors[0] && data.errors[0].elementErrors) {
    if (data.errors[0].elementErrors.errorMessages && data.errors[0].elementErrors.errorMessages[0]) {
      data.errors[0].elementErrors.errorMessages.forEach(function (msg) {
        errorMsg += msg + ", ";
      } );
    }
    var errors = data.errors[0].elementErrors.errors;
    if (errors) {
      for (var errKey in errors) {
          if (errors.hasOwnProperty(errKey)) {
            errorMsg += "For "+errKey + ": " + errors[errKey] + ", ";
          }
      }
    }
  }
  throw new JiraError(errorMsg);
}

export {createIssue, jiraServerHost, getJiraTicketKey};
