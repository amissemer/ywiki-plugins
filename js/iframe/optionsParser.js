export default function getOptionsFromLocationHash(defaultOptions) {

  var re = /(?:#|&)([^=&#]+)(?:=?([^&#]*))/g;
  var match;
  var params = defaultOptions || {};
  function decode(s) {return decodeURIComponent(s.replace(/\+/g, " "));};

  var hash = document.location.hash;

  while (match = re.exec(hash)) {
    params[decode(match[1])] = decode(match[2]);
  }
  return params;
}
