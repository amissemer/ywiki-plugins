import '../lib/polyfills';

function parseOptions(defaultOptions) {
  const re = /(?:#|&)([^=&#]+)(?:=?([^&#]*))/g;
  let match;
  const params = defaultOptions || {};
  function decode(s) {
    return decodeURIComponent(s.replace(/\+/g, ' '));
  }

  const hash = document.location.hash;

  while ((match = re.exec(hash))) {
    let value = decode(match[2]);
    if (isJSON(value)) {
      console.log('Parsing options: ', value);
      value = JSON.parse(value);
    }
    params[decode(match[1])] = value;
  }
  return params;
}

function encodeOptions(options) {
  const res = [];
  for (const key in options) {
    if (options.hasOwnProperty(key) && options[key] !== undefined) {
      let value = options[key];
      if (value.toString() === '[object Object]') {
        value = JSON.stringify(value);
      }
      res.push(`${key}=${encodeURIComponent(value)}`);
    }
  }
  return res.join('&');
}

function isJSON(value) {
  // simplistic heuristic to detect serialized JSON
  return (
    ((value.startsWith('{') && value.endsWith('}')) || (value.startsWith('[') && value.endsWith(']'))) &&
    !value.startsWith('[object')
  );
}

export { parseOptions, encodeOptions };
