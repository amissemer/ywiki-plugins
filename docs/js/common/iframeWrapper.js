/** A factory for a generic iframeWrapper providing a call("action", payload) function that can call actions in another frame and return a promise for the asynchronous response.
The receiving frame must hook the action to an actual function call */
var iframeWrapperFactory = (function(windowEventListener, deferredBuilder) {

  // from the iFrame, postToWindow=parent, targetHostname="https://wiki.hybris.com"
  // from the main Frame, postToWindow=$('#iframecontainer iframe')[0].contentWindow, targetHostname=yWikiPlugins.getHost()
  function iframeWrapper( postToWindow, targetHostname ) {
    var _correlationId=0;

    /** Chainable way to attach action Handlers */
    function attachActionHandler(actionName, handler) {
      windowEventListener.registerRequestListener(actionName, handler);
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
      parent.postMessage(
        {
          action: action,
          payload: payload,
          correlationId: correlationId
        }, hostname);
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
