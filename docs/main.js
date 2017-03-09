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
                $('iframe').fadeOut();
                $('#block').fadeOut();
                $('#iframecontainer').fadeOut();
            }
        });

	});
});
