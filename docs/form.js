$( document ).ready( function () {
	$("#form-close").click( function() {
        parent.postMessage("CloseMe","https://wiki.hybris.com");
    });
    $("#wizard-submit").click( function() {
        parent.postMessage("Submit","https://wiki.hybris.com");
        return false;
    });
});
