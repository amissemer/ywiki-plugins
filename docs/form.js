$( document ).ready( function () {
	$("#form-close").click( function() {
        parent.postMessage({action: "close"},"https://wiki.hybris.com");
    });
    $("#wizard-submit").click( function() {
        if (parent) {
            parent.postMessage({
                action: "createWorkspace",
                customer: $('#customerSelect').val(),
                servicePackage: $('#serviceSelect').val(),
                projectName: $('#projectName').val()
            },"https://wiki.hybris.com");
        }
        return false;
    });
});
