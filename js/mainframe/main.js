import '../../css/main.css';
import iframeWrapper from '../common/iframeWrapper';

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
  iframeWrapper(myIFrame[0].contentWindow, yloader.getHost())
    .attachActionHandler("ajax", function (param) {
      return jQuery.ajax(param);
    })
    .attachActionHandler("closeFrame", function () {
      return closeIFrame(myIFrame);
    })
    .attachActionHandler("redirect", function (url) {
      return redirectTo(url);
    })
    .attachActionHandler("$metacontent", function (e) {
      return jQuery(e).attr("content");
    })
    .attachActionHandler("$text", function (e) {
      return jQuery(e).text();
    });
}

export function wireBanner(options) {
  var jEl = $(options.cssSelector);
  jEl.addClass("cibanner");
  if (!options.disablePullUp) {
    jEl.addClass("pullup");
  }
  options.buttonText = options.buttonText || "Start";
  options.bannerText = options.bannerText || $('#title-text').text();
  $(".wiki-content .innerCell").css("overflow-x", "visible");
  $(options.cssSelector).removeClass("rw_corners rw_page_left_section")
  .html('<div class="ciaction">\
              <img src="'+options.host+'/banner/clickme.png" />\
              <div id="theOneButton">'+options.buttonText+'</div>\
            </div>\
            <div class="cilogo">\
              <img src="'+options.host+'/banner/dashboard_figure.png" />\
            </div>\
            <div class="cicenter">\
            <h1>'+options.bannerText+'</h1>\
            </div>\
          ');
  options.cssSelector="#theOneButton";
  wireButton(options);
}


/** The main entrypoint for the plugin, which receives all options, loads the dependencies,
creates the iframe element, attach the click event to the main button to load the iframe */
export function wireButton(options) {

  // load dependencies in order
  $(options.cssSelector).after('<div id="block"></div><div id="iframecontainer"><div id="loader"></div><iframe></iframe></div>');
  var myIFrame = $('#iframecontainer iframe');
  $(options.cssSelector).click(function() {
    openIFrame(myIFrame, options.host+'/form.html', options);
    attachHandlersToIFrameWindow(myIFrame);
  });
}
