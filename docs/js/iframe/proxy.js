var proxy = (function () {
  var iframeWrapper = iframeWrapperFactory.iframeWrapper(parent, "https://wiki.hybris.com");

  /** Perform an ajax call in the parent frame and returns a promise that will get resolved or rejected with the data as seen by the parent frame.
   *  Not compatible with ajax callbacks that can usually be passed in the settings parameter (complete, beforeSend, error, success)
   */
  function ajax(param) {
    return iframeWrapper.call("ajax", param);
  }
  function closeFrame() {
    return iframeWrapper.call("closeFrame");
  }
  function redirect(url) {
    return iframeWrapper.call("redirect", url);
  }

  return {
    ajax:ajax,
    closeFrame:closeFrame,
    redirect:redirect
  }
})();
