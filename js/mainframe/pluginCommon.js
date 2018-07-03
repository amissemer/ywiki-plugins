const WHITELISTED_ORIGIN = [
  'https://localhost',
  'https://amissemer.github.io',
  'https://es-global-ci.github.io'
];

function getOriginLocation() {
  var scripts = document.getElementsByTagName('script');
  var candidates = [];
  for (let s of scripts) {
    var url = s.getAttribute("src");
    if (url && url.indexOf('http')==0) candidates.push(url);
  }
  console.log('Looking for script origin within', candidates);

  for (let idx = candidates.length-1; idx>=0; idx--) {
    var l = document.createElement("a");
    l.href = candidates[idx];
    if (!l.origin) l.origin=l.protocol+"//"+l.host
    if (whitelistedOrigin(l.origin)) {
      console.log("Found own origin: ",l.origin, 'cache busting', l.search);
      return l;
    }
  }
  throw 'Could not find a whitelisted origin';
}

function whitelistedOrigin(origin) {
  return WHITELISTED_ORIGIN.indexOf(origin)>=0;
}

var originlocation = getOriginLocation();
var host = originlocation.origin+'/ywiki-plugins';
var cacheBuster=originlocation.search;
console.log("plugin Host="+host+", cacheBuster="+cacheBuster);

export { host, cacheBuster };
