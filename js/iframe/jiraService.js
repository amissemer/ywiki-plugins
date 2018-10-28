import $ from 'jquery';
import * as proxy from './proxyService';
import { JiraError, JiraAuthError } from './jira-error';
import { TAGS_FIELD } from '../common/config';

const jiraServerHost = 'jira.hybris.com';
// const jiraServerHost = 'jiratest.hybris.com';

function getJiraServer() {
  return proxy
    .ajax('/rest/createjiracontent/1.0/get-jira-servers')
    .then(servers => {
      const matchingJiraServer = $.grep(servers, (value, idx) => {
        return value.url.indexOf(jiraServerHost) > 0;
      });
      if (matchingJiraServer.length > 0) {
        return matchingJiraServer[0];
      }
      const msg = `No jira server server with url ${jiraServerHost} found`;
      console.error(msg);
      throw new JiraError(msg);
    })
    .then(jiraServer => {
      return jiraServer.id;
    });
}

function getJiraProject(jiraServerP, projectKey) {
  var jiraServerP = getJiraServer();
  return jiraServerP
    .then(serverId => {
      return proxy.ajax(`/rest/jira-integration/1.0/servers/${serverId}/projects`);
    })
    .then(result => {
      for (let i = 0; i < result.length; i++) {
        if (result[i].key === projectKey) {
          console.log('Project', result[i]);
          return result[i];
        }
      }
      const msg = `No project '${projectKey}' found on JIRA server`;
      console.error(msg);
      throw new JiraError(msg);
    });
}

function getIssueTypeId(jiraProject, issueTypeName) {
  return jiraProject
    .then(project => {
      for (let i = 0; i < project.issuetypes.length; i++) {
        if (project.issuetypes[i].name === issueTypeName) {
          return project.issuetypes[i];
        }
      }
      const msg = `No issue type '${issueTypeName}' for project ${project.key}`;
      console.error(msg);
      throw new JiraError(msg);
    })
    .then(issueType => {
      return issueType.id;
    });
}

/** Returns a promise for the issueKey */
function createIssue(projectKey, issueTypeName, componentName, summary, description, priority, feedbackType, labels) {
  const jiraServerP = getJiraServer();
  // var jiraProjectP = getJiraProject(jiraServerP, projectKey);
  // var issueTypeIdP = getIssueTypeId(jiraProjectP, issueTypeName);
  if (typeof labels === 'string') {
    labels = [labels];
  }
  labels = labels || [];
  console.log('FeedbackType:', feedbackType);
  return $.when(jiraServerP)
    .then(jiraServer => {
      const issue = {
        fields: {
          project: { key: projectKey },
          issuetype: { name: issueTypeName },
          components: [{ name: componentName }],
          summary,
          description,
          priority: { name: priority },
          labels,
        },
      };
      if (typeof feedbackType === 'string') {
        issue.fields[TAGS_FIELD] = [feedbackType];
      }
      return proxy.ajax({
        url: `/rest/jira-integration/1.0/issues?applicationId=${jiraServer}`,
        contentType: 'application/json;charset=UTF-8',
        type: 'POST',
        data: JSON.stringify({ issues: [issue] }),
      });
    })
    .then(getJiraTicketKey);
}

function getJiraTicketKey(data) {
  const key = data && data.issues && data.issues[0] && data.issues[0].issue && data.issues[0].issue.key;
  if (key) {
    return key;
  }
  let errorMsg = 'Oops, something happened during ticket creation, please try again. ';
  console.error('Error creating JIRA ticket, full response was: ', data);
  if (
    data &&
    data.errors &&
    data.errors[0] &&
    data.errors[0].exceptionName == 'com.atlassian.integration.jira.JiraAuthenticationRequiredException'
  ) {
    throw new JiraAuthError(data.errors[0].authenticationUri);
  } else if (data && data.errors && data.errors[0] && data.errors[0].message) {
    errorMsg = data.errors[0].message;
  }
  if (data && data.errors && data.errors[0] && data.errors[0].elementErrors) {
    if (data.errors[0].elementErrors.errorMessages && data.errors[0].elementErrors.errorMessages[0]) {
      data.errors[0].elementErrors.errorMessages.forEach(msg => {
        errorMsg += `${msg}, `;
      });
    }
    const errors = data.errors[0].elementErrors.errors;
    if (errors) {
      for (const errKey in errors) {
        if (errors.hasOwnProperty(errKey)) {
          errorMsg += `For ${errKey}: ${errors[errKey]}, `;
        }
      }
    }
  }
  throw new JiraError(errorMsg);
}

export { createIssue, jiraServerHost, getJiraTicketKey };
