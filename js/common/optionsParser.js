function parseOptions(defaultOptions) {

  var re = /(?:#|&)([^=&#]+)(?:=?([^&#]*))/g;
  var match;
  var params = defaultOptions || {};
  function decode(s) {return decodeURIComponent(s.replace(/\+/g, " "));};

  var hash = document.location.hash;

  while (match = re.exec(hash)) {
    var value = decode(match[2]);
    if ( isJSON(value) ) { 
      console.log("Parsing options: ",value);
      value = JSON.parse(value);
    }
    params[decode(match[1])] = value;
  }
  return params;
}

function encodeOptions(options) {
  var res = [];
  for (var key in options) {
    if (options.hasOwnProperty(key) && options[key]!==undefined) {
        var value = options[key];
        if (value.toString() === '[object Object]') {
          value = JSON.stringify(value);
        }
        res.push(key+"="+encodeURIComponent(value));
    }
  }
  return res.join('&');
}

function isJSON(value) {
  // simplistic heuristic to detect serialized JSON
  return ((value.startsWith('{') && value.endsWith('}')) ||  (value.startsWith('[') && value.endsWith(']')) ) && !(value.startsWith('[object'));
}

export {parseOptions, encodeOptions}
