/** A factory for a generic iframeWrapper providing a call("action", payload) function that can call actions in another frame and return a promise for the asynchronous response.
The receiving frame must hook the action to an actual function call */
var iframeWrapperFactory = (function(windowEventListener, deferredBuilder) {

  // from the iFrame, postToWindow=parent, targetHostname="https://wiki.hybris.com"
  // from the main Frame, postToWindow=$('#iframecontainer iframe')[0].contentWindow, targetHostname=yWikiPlugins.getHost()
  function iframeWrapper( postToWindow, targetHostname ) {
    var _correlationId=1;

    /** Chainable way to attach action Handlers. Handlers can return a promise or a result
    that will be used to send the response back to the other frame. */
    function attachActionHandler(actionName, handler) {

      function requestListener(correlationId, payload) {
        jQuery.when( handler(payload) )
        .done(function sendResponse(responsePayload) {
          var responseMsg = {
            correlationId: correlationId,
            responsePayload: responsePayload
          };
          console.log("Sending response:",responseMsg);
          postToWindow.postMessage(responseMsg, targetHostname);
        })
        .fail(function sendError() {
          var payload = arguments;
          if (arguments && arguments.length && arguments.length>2) {// for ajax errors, the error handler gets (jqXHR, textStatus, errorThrown) but we can't pass the whole jqXHR through the postMessage API
            payload={textStatus: arguments[1], errorThrown: arguments[2]};
          }
          var errorMsg = {
            correlationId: correlationId,
            errorPayload: payload
          };
          console.log("Sending error response:",errorMsg);
          postToWindow.postMessage(errorMsg, targetHostname);
        });
      }
      windowEventListener.registerRequestListener(actionName, requestListener);
      return this;
    }

    /** Calls an an action through the messaging system of frames and returns
    a promise that will get resolved once a response is received (also from the messaging system) */
    function call(action, payload) {
      var defer = deferredBuilder();
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
      console.log("payload",payload);
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
  return {
    iframeWrapper: iframeWrapper,

  }
})(windowEventListener, jQuery.Deferred)
