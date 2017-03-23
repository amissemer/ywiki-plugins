(function(yWikiPlugins) {

  function closeIFrame(iframeElt) {
    iframeElt.unbind('load').fadeOut( function() {
      iframeElt.attr('src', '');
      $('#block').fadeOut();
      $('#iframecontainer').fadeOut();
    });
  }

  function encodeOptions(options) {
    var res = [];
    for (var key in options) {
      if (options.hasOwnProperty(key)) {
          res.push(key+"="+encodeURIComponent(options[key]));
      }
    }
    return res.join('&');
  }

  /** Opens the iframe in a "lightbox" fashion, loading it from frameSrc, and passing all provided options in the hash part of the url */
  function openIFrame(iframeElt, frameSrc, options) {
    var block = $('#block');
    block.fadeIn();
    $('#iframecontainer').fadeIn();
    iframeElt.bind('load', function() {
      console.log("iframe loaded");
      $('#loader').fadeOut(function() {
        iframeElt.fadeIn();
      });
    });
    iframeElt.attr('src', frameSrc + '#' + encodeOptions(options));

    $(document).mouseup(function (e)
    {
      if (block.is(e.target) || block.has(e.target).length > 0) {
        // If the target of the click is the surrounding block
        // Hide the iframe
        closeIFrame(iframeElt);
      }
    });
  }

  function redirectTo(url) {
    window.location.href = url;
  }

  function attachHandlersToIFrameWindow(myIFrame) {
    iframeWrapperFactory.iframeWrapper(myIFrame[0].contentWindow, yWikiPlugins.getHost())
      .attachActionHandler("ajax", function (param) {
        return jQuery.ajax(param);
      })
      .attachActionHandler("closeFrame", function () {
        return closeIFrame(myIFrame);
      })
      .attachActionHandler("redirect", function (url) {
        return redirectTo(url);
      });
  }

  /** The main entrypoint for the plugin, which receives all options, loads the dependencies,
  creates the iframe element, attach the click event to the main button to load the iframe */
  function wireButton(options) {

    // load dependencies in order
    yWikiPlugins.loadScript("js/common/windowEventListener.js", function () {
      yWikiPlugins.loadScript("js/common/iframeWrapper.js", function() {
        $(options.cssSelector).after('<div id="block"></div><div id="iframecontainer"><div id="loader"></div><iframe></iframe></div>');
        var myIFrame = $('#iframecontainer iframe');
        $(options.cssSelector).click(function() {
          openIFrame(myIFrame, yWikiPlugins.getHost()+'/form.html', options);
          attachHandlersToIFrameWindow(myIFrame);
        });
      });
    });
  }

  // exports:
  yWikiPlugins.wireButton = wireButton

})(yWikiPlugins)
