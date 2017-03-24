import iframeWrapper from '../common/iframeWrapper';

/**
 * A handy proxy for actions that can be executed in the parent frame bypassing CORS.
 */
var wrapper = iframeWrapper(parent, "https://wiki.hybris.com");

/**
 * Perform an ajax call in the parent frame and returns a promise that will get resolved or rejected with the data as seen by the parent frame.
 * Not compatible with ajax callbacks that can usually be passed in the settings parameter (complete, beforeSend, error, success), use the return value which is a promise instead.
 */
export function ajax(param) {
  return wrapper.call("ajax", param);
}
/**
 * Closes the iframe from inside the iframe.
 * It actually asks the parent window to nicely close the iframe.
 */
export function closeFrame() {
  return wrapper.call("closeFrame");
}
/**
 * Asks the parent window to redirect to a URL.
 */
export function redirect(url) {
  return wrapper.call("redirect", url);
}
