const WHITELISTED_ORIGIN = [
  'https://localhost',
  'https://amissemer.github.io',
  'https://amissemer.github.io:443',
  'https://es-global-ci.github.io',
  'https://es-global-ci.github.io:443'
];

function getOriginLocation() {
  var scripts = document.getElementsByTagName('script');
  var candidates = [];
  for (let i=0;i<scripts.length;i++) {
    let s = scripts[i];
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
