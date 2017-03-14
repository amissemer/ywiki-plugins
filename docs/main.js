yWikiPlugins.main = (function() {

  var wireButton = function(buttonSelector) {
    $( document ).ready( function () {
      $('#theOneButton').after('<div id="block"></div><div id="iframecontainer"><div id="loader"></div><iframe></iframe></div>'
      +'<script src="'+yWikiPlugins.getHost()+'/confluence.js"></script>');
      $(buttonSelector).click(function() {
        $('#block').fadeIn();
        $('#iframecontainer').fadeIn();
        $('#iframecontainer iframe').attr('src', yWikiPlugins.getHost()+'/form.html');
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

      function doCreate(data) {
        console.log("New Service Engagement...",data);
        //confluence.deletePageRecursive("~adrien.missemer@hybris.com","Hybris Capabilities Workshop Dashboard").
        //then( function() {

          confluence.copyPageRecursive("ps", data.servicePackage, "ps", data.customer,
          {
            "Customer": data.customer,
            "ProjectName": data.projectName,
            "ServicePackage": data.servicePackage
          }
        )
        .done(function( val ) { console.log("Copy Successful",val); close_iframe(); })
        .fail(function(err)   { console.error("Copy failed",err);   });
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
