import iframeWrapper from '../common/iframeWrapper';
import { WIKI_HOST} from '../common/config';

/**
 * A handy proxy for actions that can be executed in the parent frame bypassing CORS.
 */
var wrapper = iframeWrapper(parent, "https://"+WIKI_HOST);

/**
 * Perform an ajax call in the parent frame and returns a promise that will get resolved or rejected with the data as seen by the parent frame.
 * Not compatible with ajax callbacks that can usually be passed in the settings parameter (complete, beforeSend, error, success), use the return value which is a promise instead.
 */
export function ajax(param) {
  return wrapper.call("ajax", param);
}

export function localStorageSetItem(key, value) {
  return wrapper.call("localStorageSetItem", {key:key, value:value})
}
export function localStorageGetItem(key) {
  return wrapper.call("localStorageGetItem", key)
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

/**
 * proxy for $(el).attr("content") function
 */
export function $metacontent(el) {
  return wrapper.call("$metacontent", el);
}
/**
 * proxy for $(el).text() function
 */
export function $text(el) {
  return wrapper.call("$text", el);
}

export function $arrayGetText(cssSelector) {
  return wrapper.call("$arrayGetText", cssSelector);
}

export function $tableCellsGetHtml(cssSelector) {
  return wrapper.call("$tableCellsGetHtml", cssSelector);
}

export function cloneAttachment(attachmentUrl, targetContainerId, title, targetId) {
  return wrapper.call("cloneAttachment", {attachmentUrl, targetContainerId, title, targetId});
}