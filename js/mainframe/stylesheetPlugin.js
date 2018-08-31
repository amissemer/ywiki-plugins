import * as plugin from './pluginCommon';

// Loads a stylesheet at url. Url can be relative to the configured host.
export function loadStyleSheet(host, url) {
  if (!url.startsWith('http')) {
    url = host+'/'+url;
  }
  var link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  link.setAttribute('href', url);
  document.getElementsByTagName('head')[0].appendChild(link);
  console.log('style loaded');
}

export function loadPluginStyleSheet(filename) {
  return loadStyleSheet(plugin.host, 'dist/'+filename+plugin.cacheBuster);
}