yWikiPlugins.main = (function() {

/*  {
    cssSelector: '#theOneButton',
	  targetSpace: 'ps',
	  newInstanceDisplayName: 'Hybris Capabilities Workshop Engagement',
	  addLabel: 'capabilities-workshop'
  }*/
  var wireButton = function(options) {
    if (!options || !options.cssSelector || !options.targetSpace || !options.newInstanceDisplayName || !options.addLabel) {
      throw "wireButton({cssSelector='',targetSpace='',newInstanceDisplayName='',addLabel=''})"
    }
    var sourcePageId = $('meta[name=ajs-page-id]').attr("content");
    if (!sourcePageId) {
      throw "Could not read current pageId";
    }
    $( document ).ready( function () {
      $(options.cssSelector).after('<div id="block"></div><div id="iframecontainer"><div id="loader"></div><iframe></iframe></div>'
      +'<script src="'+yWikiPlugins.getHost()+'/confluence.js"></script>');
      $(options.cssSelector).click(function() {
        $('#block').fadeIn();
        $('#iframecontainer').fadeIn();
        $('#iframecontainer iframe').attr('src', yWikiPlugins.getHost()+'/form.html#newInstanceDisplayName='+encodeURIComponent(options.newInstanceDisplayName));
        $('#iframecontainer iframe').load(function() {
          $('#loader').fadeOut(function() {
            $('iframe').fadeIn();
          });
        });

        $(document).mouseup(function (e)
        {
          // Grab your div
          var foo = $('#block');
          if (foo.is(e.target) || foo.has(e.target).length > 0) {
            // If the target of the click is the surrounding block
            // Hide the iframe
            close_iframe();
          }
        });

      });

      function close_iframe() {
        $('iframe').fadeOut( function() {
          $('#block').fadeOut();
          $('#iframecontainer').fadeOut();
        });
      }

      var template_pattern = /\[Customer\]|\[ProjectName\]/;
      // Filters pages that contain [placeholders]
      var onlyTemplates = function (page) {

        return template_pattern.test(page.title);
      }

      function doCreate(data) {
        console.log("New Service Engagement...",data);
        //confluence.deletePageRecursive("~adrien.missemer@hybris.com","Hybris Capabilities Workshop Dashboard").
        //then( function() {
        var copiedPages=[];
        confluence.getContentById(sourcePageId,'space')
        .pipe(function(sourcePage) {
          return confluence.copyPageRecursive(sourcePage.space.key, sourcePage.title, options.targetSpace, data.customer, onlyTemplates,
          {
            "Customer": data.customer,
            "ProjectName": data.projectName
          }
          ,copiedPages
        )}).pipe( function() {
          if (copiedPages.length==0) {
            throw "No page was copied, check if one of the subpages of the service page definition has a title that matches the pattern "+template_pattern;
          }
          return confluence.addLabel(copiedPages[0].id, options.addLabel);
        })
        .done(function() {
          console.log("Copy Successful, "+copiedPages.length+" page(s)",copiedPages);
          //close_iframe();
          // New redirect to 'https://wiki.hybris.com/pages/viewpage.action?pageId='+copiedPages[0].id
          window.location.href = '/pages/viewpage.action?pageId='+copiedPages[0].id;
        })
        .fail(function() { console.error("Copy failed",arguments);   });
        //} );

      }

      var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
      var eventer = window[eventMethod];
      var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

      // Listen to message from child window
      eventer(messageEvent,function(e) {
        if (e.data.action) {
          switch (e.data.action) {
            case "close": close_iframe(); break
            case "createWorkspace": doCreate(e.data); break
            default: console.log('Unknown message :',e.data);
          }
        } else {
          console.log("Received non-action message",e.data);
        }
      },false);
    });
  };
  return {
    wireButton:wireButton
  }

})()
