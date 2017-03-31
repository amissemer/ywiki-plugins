import * as main from './main';

function getOriginLocation() {
  var scripts = document.getElementsByTagName('script');
  var l = document.createElement("a");
  l.href = scripts[scripts.length-1].getAttribute("src");
  console.log("origin",l.origin);
  return l;
}

// Loads a stylesheet at url. Url can be relative to the configured host.
function loadStyleSheet(host, url) {
  if (!url.startsWith('http')) {
    url = host+'/'+url;
  }
  var link = document.createElement('link')
  link.setAttribute('rel', 'stylesheet')
  link.setAttribute('type', 'text/css')
  link.setAttribute('href', url)
  document.getElementsByTagName('head')[0].appendChild(link)
}

function insertFrame() {
  // insert the frame html after the current script tag
  var scripts = document.getElementsByTagName('script');
  $(scripts[scripts.length-1]).after('<div id="block"></div><div id="iframecontainer"><div id="loader"></div><iframe></iframe></div>');
}

function bootstrap(host, cacheBuster) {
  insertFrame();
  loadStyleSheet(host,'dist/golden-button.css'+cacheBuster);
  $('[data-activate="golden-banner"]').each( function() {
    var jEl=$(this);
    main.wireBanner({
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
    });
  });
  $('[data-activate="issue-creator"]').each( function() {
    var jEl=$(this);
    main.wireCreateJiraButton({
      host: host,
      cacheBuster: cacheBuster,
      cssSelector: this,
      jiraProjectKey: jEl.data('jira-project-key'),
      serviceDisplayName: jEl.data('service-display-name'),
      issueType: jEl.data('issue-type'),
      issueComponent: jEl.data('issue-component'),
    });
  });
}

var originlocation = getOriginLocation();
var host = originlocation.origin+'/ywiki-plugins';
var cacheBuster=originlocation.search;
console.log("plugin Host="+host+", cacheBuster="+cacheBuster);

bootstrap(host,cacheBuster);
