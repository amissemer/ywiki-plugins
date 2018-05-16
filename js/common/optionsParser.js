function parseOptions(defaultOptions) {

  var re = /(?:#|&)([^=&#]+)(?:=?([^&#]*))/g;
  var match;
  var params = defaultOptions || {};
  function decode(s) {return decodeURIComponent(s.replace(/\+/g, " "));};

  var hash = document.location.hash;

  while (match = re.exec(hash)) {
    var value = decode(match[2]);
    if ( (value.startsWith('{') && value.endsWith('}')) ||  (value.startsWith('[') && value.endsWith(']'))  ) { // assume JSON
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

export {parseOptions, encodeOptions}
