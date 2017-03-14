$( document ).ready( function () {
	$("#form-close").click( function() {
		parent.postMessage({action: "close"},"https://wiki.hybris.com");
	});
	var submitBtn=$("#wizard-submit");
	submitBtn.click( function() {
		if (parent) {
			parent.postMessage({
				action: "createWorkspace",
				customer: $('#customerSelect').val(),
				servicePackage: $('#serviceSelect').val(),
				projectName: $('#projectName').val()
			},"https://wiki.hybris.com");
		}
		submitBtn.prop('disabled', true);
		return false;
	});
});
