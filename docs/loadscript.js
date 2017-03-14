var yWikiPlugins = (function () {
  var loadScript = function (url, callback){

    var script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState){  //IE
      script.onreadystatechange = function(){
        if (script.readyState == "loaded" ||
        script.readyState == "complete"){
          script.onreadystatechange = null;
          if (typeof callback === "function") {callback();}
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

  var bootstrap = function (host, callback) {
    this.host=host;
    loadScript (host+'/main.js',callback);
    loadStyleSheet(host+'/main.css');
  };

  var getHost = function () {
    return this.host;
  }

  var loadStyleSheet = function (url) {
    var link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('type', 'text/css')
    link.setAttribute('href', url)
    document.getElementsByTagName('head')[0].appendChild(link)
  };

  var host;

  return {
    loadStyleSheet:loadStyleSheet,
    loadScript:loadScript,
    bootstrap:bootstrap,
    getHost:getHost
  }
})();
