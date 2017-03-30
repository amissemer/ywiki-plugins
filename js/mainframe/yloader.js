import * as main from './main';

function getOriginLocation() {
  var scripts = document.getElementsByTagName('script');
  var l = document.createElement("a");
  l.href = scripts[scripts.length-1].getAttribute("src");
  console.log("origin",l.origin);
  return l;
}

// Loads a js script asynchronously and calls the callback when it is loaded
// The url is considered relative to the host configured with the bootstrap(host[,callback]) function if it is not starting with 'http'.
function loadScript(host, url, callback){
  if (!url.startsWith('http')) {
    url = host+'/'+url;
  }
  var script = document.createElement("script")
  script.type = "text/javascript";

  if (script.readyState){  //IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
      script.readyState == "complete"){
        script.onreadystatechange = null;
        if (typeof callback === "function") {
          callback();
        }
      }
    };
  } else {  //Others
    script.onload = function(){
      if (typeof callback === "function") {callback();}
    };
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}

function loadMain(host, cacheBuster, callback) {
  loadScript (host+'/main.js'+cacheBuster,callback);
  loadStyleSheet(host+'/main.css'+cacheBuster);
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

function bootstrap(host, cacheBuster) {
  loadMain(host, cacheBuster, function() {
    $('[data-activate="golden-banner"]').each( function() {
      var jEl=$(this);
      goldenButton.wireBanner({
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
  });
}

var originlocation = getOriginLocation();
var host = originlocation.origin+'/ywiki-plugins';
var cacheBuster=originlocation.search;
console.log("plugin Host="+host+", cacheBuster="+cacheBuster);

bootstrap(host,cacheBuster);
