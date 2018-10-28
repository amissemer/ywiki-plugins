import '../lib/Array.ext';
import $ from 'jquery';
import * as proxy from './proxyService';
import 'bootstrap';
import 'bootstrap-validator';
import 'bootstrap-select';
import { JiraAuthError } from './jira-error';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import '../../css/create-jira.css';
import { parseOptions } from '../common/optionsParser';
import * as jira from './jiraService';
import { MAIN_JIRA_LABEL } from '../common/config';

const options = parseOptions({ serviceDisplayName: 'service engagements' });

const additionalLabel = MAIN_JIRA_LABEL;

console.info('Form options', options);

function bindDOM() {
  $('#form-close').click(() => {
    proxy.closeFrame();
  });
  $(document).keyup(e => {
    if (e.keyCode == 27) {
      // ESC
      proxy.closeFrame();
    }
  });
  $('#cancelBtn').click(() => {
    proxy.closeFrame();
  });
  $('#authenticateWarning a.authenticateWarningLink').click(() => {
    $('#authenticateWarning').fadeOut();
  });
  $('.service-display-name').text(options.serviceDisplayName);
  const submitBtn = $('#wizard-submit');
  const submitProgress = $('#progress-indicator');
  submitBtn.click(() => {
    console.log(submitBtn.prop('disabled'));
    if (submitBtn.hasClass('disabled')) {
      return true;
    }
    const labels = [additionalLabel];
    if (options.issueLabel) {
      labels.push(options.issueLabel);
    }
    const cust = $('#customer').val();
    if (cust) {
      labels.push(cust.replace(/[\W_]+/g, '-'));
    }
    jira
      .createIssue(
        options.jiraProjectKey,
        options.issueType,
        options.issueComponent,
        $('#summary').val(),
        $('#description').val(),
        $('#priority').val(),
        $('#feedback-type').val(),
        labels,
      )
      .then(issueKey => {
        // RESET FORM
        $('input[type=text], textarea').val('');
        $('#priority').val('Minor');
        $('.selectpicker').selectpicker('refresh');

        submitBtn.prop('disabled', false);
        submitProgress.hide();
        $('#resultPanel').show();
        console.log(`Created JIRA Issue ${issueKey}`);
        $('.issueKeyCreated')
          .attr('href', `https://${jira.jiraServerHost}/browse/${encodeURIComponent(issueKey)}`)
          .text(issueKey);
      }, onSubmitError);

    submitBtn.prop('disabled', true);
    $('#resultPanel').hide();
    submitProgress.show();
    $('#error-display').hide();

    return false;
  });
}

function onSubmitError(error) {
  if (error instanceof JiraAuthError) {
    $('#authenticateWarning a.authenticateWarningLink').attr('href', error.authenticationUri);
    $('#authenticateWarning').show();
  } else {
    $('#error-display .msg').text(error);
    $('#error-display').show();
  }
  $('#progress-indicator').hide();
  $('#wizard-submit').prop('disabled', false);
}

$(document).ready(bindDOM);
