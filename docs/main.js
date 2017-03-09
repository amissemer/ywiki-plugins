$( document ).ready( function () {
	$('#theOneButton').after('<div id="block"></div><div id="iframecontainer"><div id="loader"></div><iframe></iframe></div>');
	$('#theOneButton').click(function() {
		$('#block').fadeIn();
		$('#iframecontainer').fadeIn();
		$('#iframecontainer iframe').attr('src', 'https://localhost/form.html');
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
});

function close_iframe() {
    $('iframe').fadeOut( function() {
        $('#block').fadeOut();
        $('#iframecontainer').fadeOut();
    });
}

function doCreate() {
    console.log("New Service Engagement...");
    close_iframe();
}

var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
eventer(messageEvent,function(e) {
  switch (e.data) {
    case "CloseMe": close_iframe(); break
    case "Submit": doCreate(); break
    default: console.log('Parent received unknown message!:  ',e.data);
  }
},false);