import '../../css/professors.css';
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
    if (options.hasOwnProperty(key) && options[key]!==undefined) {
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
  $(document).keyup(function(e) {
    if (e.keyCode == 27) { // ESC
			 closeIFrame(iframeElt);
    }
	});

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

function attachHandlersToIFrameWindow(host, myIFrame) {
  iframeWrapper(myIFrame[0].contentWindow, host)
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
  options.bannerText = options.bannerText || $('#title-text').text().trim();
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

function genericButton(options, formPath) {
  // load dependencies in order
  var myIFrame = $('#iframecontainer iframe');
  $(options.cssSelector).click(function() {
    openIFrame(myIFrame, options.host+'/'+formPath, options);
    attachHandlersToIFrameWindow(options.host,myIFrame);
  });
}

/** The main entrypoint for the plugin, which receives all options, loads the dependencies,
creates the iframe element, attach the click event to the main button to load the iframe */
export function wireButton(options) {
  return genericButton(options, 'form.html');
}

export function wireCreateJiraButton(options) {

  var el = $(options.cssSelector);
  var currentText = el.text();
  el.addClass("cibutton btn btn-lg btn-warning")
  .html('\
    <span class="fa-stack">\
      <i class="fa fa-comment-o fa-stack-2x"></i>\
      <i class="fa fa-lightbulb-o fa-stack-1x"></i>\
    </span><span class="text">'+currentText+'</span>\
  ');
  return genericButton(options, 'create-jira.html');
}
