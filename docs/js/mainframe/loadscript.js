/**
 * A Generic Bootstrap script for wiki plugins.
 * Usage:
 * Add an HTML block to a wiki page (and set some write permissions to enable the HTML macro) and add the following code:

  <script src="https://yourhost/loadscript.js?v1"></script>
  <script>
  yWikiPlugins.bootstrap("https://yourhost", function() {
    yWikiPlugins.main.something(someparams);
  });
  </script>

 */
var yWikiPlugins = (function () {
  // Loads a js script asynchronously and calls the callback when it is loaded
  // The url is considered relative to the host configured with the bootstrap(host[,callback]) function if it is not starting with 'http'.
  function loadScript(url, callback){
    if (!url.startsWith('http')) {
      url = this.host+'/'+url;
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

  // Loads the main.css and main.js scripts from the host and run the callback once the js is loaded, allowing you
  // to hooks actions that require the main.js script to be loaded.
  function bootstrap(host, callback) {
    this.host=host;
    loadStyleSheet('main.css');
    return loadScript ('js/mainframe/main.js',callback);
  }

  // Allows to retrieve the host that was used to bootstrap the yWikiPlugin
  function getHost() {
    return this.host;
  }

  // Loads a stylesheet at url. Url can be relative to the configured host.
  function loadStyleSheet(url) {
    if (!url.startsWith('http')) {
      url = this.host+'/'+url;
    }
    var link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('type', 'text/css')
    link.setAttribute('href', url)
    document.getElementsByTagName('head')[0].appendChild(link)
  }

  // The host the plugin lives in, set by the bootstrap function.
  var host;

  return {
    loadStyleSheet:loadStyleSheet,
    loadScript:loadScript,
    bootstrap:bootstrap,
    getHost:getHost
  }
})();
