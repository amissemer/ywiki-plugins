$( document ).ready( function () {
	$("#form-close").click( function() {
        parent.postMessage("CloseMe","https://wiki.hybris.com");
    })
});
