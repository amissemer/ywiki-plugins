import '../../css/professors.css';
import '../../css/golden-button.css';
import '../../css/jira-issue-summary.css';
import iframeWrapper from '../common/iframeWrapper';
import * as plugin from './pluginCommon';
import {encodeOptions} from '../common/optionsParser';
import {DEFAULT_JIRA_COLUMNS, DEFAULT_JIRA_ISSUE_COUNT, MAIN_JIRA_LABEL, WIKI_HOST} from '../common/config';

function closeIFrame(iframeElt) {
  iframeElt.unbind('load').fadeOut( function() {
    iframeElt.attr('src', '');
    $('#block').fadeOut();
    $('#iframecontainer').fadeOut();
  });
}

/** Opens the iframe in a "lightbox" fashion, loading it from frameSrc, and passing all provided options in the hash part of the url */
function openIFrame(iframeElt, frameSrc, options) {
  var block = $('#block');
  block.fadeIn();
  $('#iframecontainer').fadeIn();
  iframeElt.bind('load', function() {
    console.log("iframe loaded");
    $('#loader').fadeOut(function() {
      iframeElt.fadeIn();
    });
  });
  iframeElt.attr('src', frameSrc + '#' + encodeOptions(options));
  $(document).keyup(function(e) {
    if (e.keyCode == 27) { // ESC
			 closeIFrame(iframeElt);
    }
	});

  $(document).mouseup(function (e)
  {
    if (block.is(e.target) || block.has(e.target).length > 0) {
      // If the target of the click is the surrounding block
      // Hide the iframe
      closeIFrame(iframeElt);
    }
  });
}

function redirectTo(url) {
  window.location.href = url;
}

function attachHandlersToIFrameWindow(host, myIFrame) {
  iframeWrapper(myIFrame[0].contentWindow, host)
    .attachActionHandler("ajax", function (param) {
      return jQuery.ajax(param);
    })
    .attachActionHandler("closeFrame", function () {
      return closeIFrame(myIFrame);
    })
    .attachActionHandler("redirect", function (url) {
      return redirectTo(url);
    })
    .attachActionHandler("$metacontent", function (e) {
      return jQuery(e).attr("content");
    })
    .attachActionHandler("localStorageSetItem", function (e) {
      return window.localStorage.setItem(e.key, e.value);
    })
    .attachActionHandler("localStorageGetItem", function (e) {
      return window.localStorage.getItem(e);
    })
    .attachActionHandler("$text", function (e) {
      return jQuery(e).text();
    });
}

function wireBanner(options) {
  var jEl = $(options.cssSelector);
  jEl.addClass("cibanner");
  if (!options.disablePullUp) {
    jEl.addClass("pullup");
  }
  options.buttonText = options.buttonText || "Start";
  options.bannerText = options.bannerText || $('#title-text').text().trim();
  $(".wiki-content .innerCell").css("overflow-x", "visible");
  $(options.cssSelector).removeClass("rw_corners rw_page_left_section")
  .html('<div class="cilogo">\
              <img src="'+options.host+'/banner/service_leads_2.png" />\
            </div>\
            <div class="cicenter">\
            <h1>'+options.bannerText+'</h1>\
            </div>\
          ');
}

function genericButton(options, formPath) {
  // load dependencies in order
  var myIFrame = $('#iframecontainer iframe');
  $(options.cssSelector).click(function() {
    openIFrame(myIFrame, options.host+'/'+formPath, options);
    attachHandlersToIFrameWindow(options.host,myIFrame);
  });
}

function wireJiraIssueSummary(options) {
  // {
  //   host,
  //   cacheBuster,
  //   cssSelector,
  //   jiraLabel,
  //   summaryType,
  //   jiraIssueCount,
  //   jiraColumns
  // }
  var el = $(options.cssSelector);
  var jql = '( labels="'+options.jiraLabel+'" AND labels="'+MAIN_JIRA_LABEL+'") ';
  if (options.summaryType=="done") {
    jql+=' AND status IN (Resolved, "Verified/Closed", Done, Fixed, Complete)';
  } else if (options.summaryType=="todo") {
    jql+=' AND status NOT IN (Resolved, "Verified/Closed", Done, Fixed, Complete, Cancelled)';
  }
  var postQuery = '<ac:structured-macro ac:name="jira" ac:schema-version="1" ><ac:parameter ac:name="columns">'+options.jiraColumns+'</ac:parameter><ac:parameter ac:name="maximumIssues">'+options.jiraIssueCount+'</ac:parameter><ac:parameter ac:name="jqlQuery">'+jql+'</ac:parameter></ac:structured-macro>';
  var reqPayload = {
      wikiMarkup : encodeURIComponent( postQuery ),
      clearCache:true
  };
  $.ajax({
    url:"/rest/jiraanywhere/1.0/jira/renderTable",
    type: "POST",
    data: JSON.stringify(reqPayload),
    contentType: "application/json",
    complete: function( data ) {el.html(JSON.parse(data.responseText).data);}
  });
}

function wireStartEngagementButton(options) {
  var jEl = $(options.cssSelector);
  jEl.addClass("cibutton btn btn-lg btn-warning btn-raised").html('<span class="text">Start</span>&nbsp;&nbsp;<i class="fa fa-play-circle fa-2x"></i>');
  return genericButton(options, 'golden-form.html');
}

function wireCreateJiraButton(options) {
  var el = $(options.cssSelector);
  var currentText = el.text();
  el.addClass("cibutton btn btn-lg btn-warning btn-raised")
  .html('\
    <span class="text">'+currentText+'</span>&nbsp;&nbsp;<span class="fa-stack" style="top: -3px">\
      <i class="fa fa-comment-o fa-stack-2x"></i>\
      <i class="fa fa-lightbulb-o fa-stack-1x"></i>\
    </span>\
  ');
  return genericButton(options, 'create-jira-form.html');
}

function insertFrame() {
  // insert the frame html after the current script tag
  var scripts = document.getElementsByTagName('script');
  $(scripts[scripts.length-1]).after('<div id="block"></div><div id="iframecontainer"><div id="loader"></div><iframe></iframe></div>');
}
function readOptions(el) {
  var groups = [];
  function defaultNotFalse(v) {
    return (v!==undefined && v!==null && v!==false && v!=="false"); 
  }
  el.children('ci-options').each(function() {
    var name = $(this).attr("name");
    var options = [];
    $(this).children('ci-option').each(function() {
      options.push({name: name, value: $(this).attr("value"), label: $(this).html(), default: defaultNotFalse($(this).attr("default")) });
    });
    groups.push({name: name, options: options});
  });
  return groups;
}

function bootstrap(host, cacheBuster) {
  insertFrame();
  $('[data-activate="golden-banner"]').each( function() {
    var jEl=$(this);
    wireBanner({
      host: host,
      cacheBuster: cacheBuster,
      cssSelector: this,
      disablePullUp: jEl.data('disable-pull-up'),
      buttonText: jEl.data('button-text'),
      bannerText: jEl.data('banner-text'),
      targetSpace: jEl.data('target-space'),
      newInstanceDisplayName: jEl.data('new-instance-display-name'),
      addLabel: jEl.data('add-label'),
      logToPage: jEl.data('log-to-page'),
      variantOptions: readOptions(jEl),
    });
  });
  $('[data-activate="golden-button"]').each( function() {
    var jEl=$(this);
    wireStartEngagementButton({
      host: host,
      cacheBuster: cacheBuster,
      cssSelector: this,
      disablePullUp: jEl.data('disable-pull-up'),
      buttonText: jEl.data('button-text'),
      bannerText: jEl.data('banner-text'),
      targetSpace: jEl.data('target-space'),
      newInstanceDisplayName: jEl.data('new-instance-display-name'),
      addLabel: jEl.data('add-label'),
      logToPage: jEl.data('log-to-page'),
      variantOptions: readOptions(jEl),
    });
  });
  $('[data-activate="issue-creator"]').each( function() {
    var jEl=$(this);
    wireCreateJiraButton({
      host: host,
      cacheBuster: cacheBuster,
      cssSelector: this,
      jiraProjectKey: jEl.data('jira-project-key'),
      serviceDisplayName: jEl.data('service-display-name'),
      issueType: jEl.data('issue-type') || "Improvement",
      issueComponent: jEl.data('issue-component'),
      issueLabel: jEl.data('issue-label') || jEl.data('jira-label'),
    });
  });
  $('[data-activate="issue-summary"]').each( function() {
    var jEl=$(this);
    wireJiraIssueSummary({
      host: host,
      cacheBuster: cacheBuster,
      cssSelector: this,
      jiraLabel : jEl.data('jira-label'),
      summaryType: jEl.data('summary-type'),
      jiraIssueCount: Number(jEl.data('jira-max-issues')) || DEFAULT_JIRA_ISSUE_COUNT,
      jiraColumns: jEl.data('jira-columns') || DEFAULT_JIRA_COLUMNS
    });
  });
}

bootstrap(plugin.host,plugin.cacheBuster);
