/**
 * Sets up a listener of all events received by the window, that dispatches:
 *   - those that have an action to the corresponding requestListeners
 *   - those that have a correlationId but no action, to the corresponding responseListeners
 * Exposes functions to (un)register listeners.
 */
var windowEventListener = (function windowEventListener() {

  // Start listening to messages (from other frames, typically)
  var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
  var eventer = window[eventMethod];
  var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
  var requestListeners = {}; // map of key=action, value=function(correlationId, payload)
  var responseListeners = {}; // map of key=correlationId, value={ successHandler: function(responsePayload), errorHandler: function(errorPayload)  }
  eventer(messageEvent, eventCallback, false);

  function eventCallback(e) {
    if (e.data.action) {
      // action data is in the form { action: "actionName", payload: object }
      if (requestListeners[e.data.action]) {
        requestListeners[e.data.action](e.data.correlationId, e.data.payload);
      } else {
        // no registered requestListener for this action
        console.warn('No requestListeners for action: ', e.data.action);
      }
    } else if (e.data.correlationId) {
      // response data is in the form { correlationId: theRequestCorrelationId, responsePayload: object, errorPayload: object }
      if (responseListeners[e.data.correlationId]) {
        // deregister (should be used only once for each correlationId)
        var responseListener = responseListeners[e.data.correlationId];
        responseListeners[e.data.correlationId] = null;
        // delegate to the registered responseListener
        if (e.data.errorPayload) {
          responseListener.errorHandler(e.data.errorPayload);
        } else {
          responseListener.successHandler(e.data.responsePayload);
        }
      } else {
        console.warn("No response listener for correlationId: ", e.data.correlationId);
      }
    } else {
      // not an action message
      console.log("Received non-request, non-response, message: ", e.data);
    }
  }

  /**
   * Func should be a function(correlationId, payload). The return value will be ignored.
   * Consider this private and used solely by the iframeWrapper.
   * Use iframeWrapper.attachActionHandler(action, handler) instead
   */
  function registerRequestListener( action, func ) {
    if (typeof func != 'function') {
      console.error("Cannot register request listener since not a function: ", func);
    } else {
      requestListeners[action] = func;
    }
  }
  function unregisterRequestListener( action ) {
    requestListeners[action] = null;
  }
  /**
   *  The response listener must be an object in the form { successHandler: function(argument) {}, errorHandler: function(argument) {}}
   *  where at least 1 of successHandler or errorHandler is defined.
   *  successHandler and errorHandler, if defined, must be functions that take a single argument. Their returned value is ignored.
   *  If one of the property is missing, a default handler is added that will simply log the result/error.
   *
   *  Note: There is no unregisterResponseListener because the unregistration is automatically done the first (and only) time the responseListener is used.
   *  This is because for a given correlationId, only one response or one error will be returned.
   */
  function registerResponseListener( correlationId, listener ) {
    if (!listener.successHandler && !listener.errorHandler) {
      console.error("Cannot register response listener as it is missing a successHandler function or errorHandler function", listener);
      return;
    }
    if (listener.successHandler && typeof listener.successHandler != 'function') {
      console.error("Cannot register response listener as the successHandler is not a function", listener);
      return;
    }
    if (listener.errorHandler && typeof listener.errorHandler != 'function') {
      console.error("Cannot register response listener as the errorHandler is not a function", listener);
      return;
    }
    listener.successHandler = listener.successHandler? listener.successHandler : defaultSuccessHandler;
    listener.errorHandler = listener.errorHandler? listener.errorHandler : defaultErrorHandler;
    responseListeners[correlationId] = listener;
  }

  function defaultSuccessHandler(responsePayload) { console.info("Default success handler: ", responsePayload); }
  function defaultErrorHandler(errorPayload) { console.warn("Default error handler: ", errorPayload); }

  return {
    registerRequestListener: registerRequestListener,
    unregisterRequestListener: unregisterRequestListener,
    registerResponseListener: registerResponseListener
  };
})();

export default windowEventListener;
