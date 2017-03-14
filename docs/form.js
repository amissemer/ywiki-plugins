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
				projectName: $('#projectName').val()
			},"https://wiki.hybris.com");
		}
		submitBtn.prop('disabled', true);
		return false;
	});

	function getHashValue(key) {
	  var matches = location.hash.match(new RegExp(key+'=([^&]*)'));
	  return matches ? matches[1] : null;
	}

	// usage
	var newInstanceDisplayName = decodeURIComponent(getHashValue('newInstanceDisplayName'));
	$('#mainTitle').text("New " + newInstanceDisplayName);
});
