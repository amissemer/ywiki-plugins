function getOriginLocation() {
  var scripts = document.getElementsByTagName('script');
  var l = document.createElement("a");
  l.href = scripts[scripts.length-1].getAttribute("src");
  if (!l.origin) l.origin=l.protocol+"//"+l.host
  console.log("origin",l.origin);
  return l;
}

var originlocation = getOriginLocation();
var host = originlocation.origin+'/ywiki-plugins';
var cacheBuster=originlocation.search;
console.log("plugin Host="+host+", cacheBuster="+cacheBuster);

export { host, cacheBuster };
