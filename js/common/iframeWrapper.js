import jQuery from 'jquery';
import windowEventListener from './windowEventListener';

/**
 * A generic iframeWrapper.
 *
 * The main goal is to bypass the CORS restriction: we want the iframe to be able to execute ajax requests on the domain of the main window, and since they are on different domains, this is not possible with some hack.
 * The hack here consists in using the window.postMessage function and a message listener to execute code from the iframe into the main frame.
 *
 * iframeWrappers provide a call("action", payload) function that can call named actions in another frame and return a promise for the asynchronous response.
 * The receiving frame must hook the named actions to actual actionHandlers, that must be attached to the iframeWrapper.
 *
 * Note: The iframeWrapperFactory requires jQuery and windowEventListener.
 * It must be loaded in the 2 frames (main window and iframe) to be able to use it to run Cross-Origin actions.
 * The factory parameters are different when loading the iframeWrapper from the iframe (in which case the target window is the parent and the target hostname is the wiki),
 * and when loading from the main frame (in which case the target window is the iframe window, and the targetHostname is the yWikiPlugins host).
 *
 * Example:
 * 1. Frame A attaches an actionHandler for a given action, like "ajax", and the action handler simply returns jQuery.ajax(params).
 * 2. Then the other frame B can call("ajax", params) to remotely execute the ajax request in Frame A and get the result back.
 *
 * This is all asynchronous and based on jQuery promises.
 *
 * From the iFrame, call iframeWrapper(parent, "https://wiki.hybris.com").
 * From the main Frame, call iframeWrapper($('iframe')[0].contentWindow, yWikiPlugins.getHost()).
 */
export default function iframeWrapper( postToWindow, targetHostname ) {
  var _correlationId=1;

  /**
   * Chainable function to attach action handlers.
   * Handlers take a single argument and may return a promise or a result (or nothing)
   * that will be used to send the response back to the other frame.
   */
  function attachActionHandler(actionName, handler) {

    function requestListener(correlationId, payload) {
      jQuery.when( handler(payload) )
      .done(function sendResponse(responsePayload) {
        var responseMsg = {
          correlationId: correlationId,
          responsePayload: responsePayload
        };
        //console.log("Sending response:",responseMsg);
        postToWindow.postMessage(responseMsg, targetHostname);
      })
      .fail(function sendError() {
        var payload = arguments;
        if (arguments && arguments.length && arguments.length>2) {// for ajax errors, the error handler gets (jqXHR, textStatus, errorThrown) but we can't pass the whole jqXHR through the postMessage API
          payload={textStatus: arguments[1], errorThrown: arguments[2]};
          if (arguments[0] && arguments[0].responseText) {
            payload.responseText = arguments[0].responseText;
            try {
                payload.responseJson = JSON.parse(payload.responseText);
            } catch(e) {
              // ignore
            }
          }
        }
        var errorMsg = {
          correlationId: correlationId,
          errorPayload: payload
        };
        //console.log("Sending error response:",errorMsg);
        postToWindow.postMessage(errorMsg, targetHostname);
      });
    }
    windowEventListener.registerRequestListener(actionName, requestListener);
    return this;
  }

  /**
   * Calls an an action through the messaging system of frames and returns
   * a jQuery promise that will get resolved once a response is received (also from the messaging system)
   */
  function call(action, payload) {
    var defer = jQuery.Deferred();
    var correlationId = _correlationId++;
    windowEventListener.registerResponseListener(correlationId,
      {
        successHandler: function(successPayload) {
          defer.resolve(successPayload);
        },
        errorHandler: function(errorPayload) {
          defer.reject(errorPayload);
        }
      });
    //console.log("payload",payload);
    postToWindow.postMessage(
      {
        action: action,
        payload: payload,
        correlationId: correlationId
      }, targetHostname);
    return defer.promise();
  }

  return {
    call: call,
    attachActionHandler: attachActionHandler
  }
}
