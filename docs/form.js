(function () {
	var customerCallbacks={};

	var bindDOM = function () {
		$("#form-close").click( function() {
			parent.postMessage({action: "close"},"https://wiki.hybris.com");
		});
		var customerSelect = $('#customerSelect');
		var customerProgress = $('#customer-progress');
		customerSelect.autocomplete({
			minLength: 3,
			autoFocus: true,
			source: function(request,responseCallback) {
				parent.postMessage({ action: "findCustomer", customerPartial: request.term }, "https://wiki.hybris.com");
				customerCallbacks[request.term] = responseCallback;
			},
			search: function(event, ui) {
				 customerProgress.show();
		 },
		 response: function(event, ui) {
				 customerProgress.hide();
		 }
		});
		var submitBtn=$("#wizard-submit");
		var submitProgress=$('#progress-indicator');
		submitBtn.click( function() {
			console.log(submitBtn.prop('disabled'));
			if (submitBtn.hasClass('disabled')) {
				return true;
			} else {
				parent.postMessage({
					action: "createWorkspace",
					customer: customerSelect.val(),
					projectName: $('#projectName').val()
				},"https://wiki.hybris.com");
				submitBtn.prop('disabled', true);
				submitProgress.show();
				$('#error-display').hide();
			}
			return false;
		});

		function getHashValue(key) {
			var matches = location.hash.match(new RegExp(key+'=([^&]*)'));
			return matches ? matches[1] : null;
		}

		// usage
		var newInstanceDisplayName = decodeURIComponent(getHashValue('newInstanceDisplayName'));
		$('#mainTitle').text("New " + newInstanceDisplayName);
	};

	var startMessageListener = function () {
		// Listen to message from parent window
		var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
		var eventer = window[eventMethod];
		var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
		eventer(messageEvent,function(e) {
			if (e.data.action) {
				switch (e.data.action) {
					case "findCustomerResponse":
						var responseCallback = customerCallbacks[e.data.term];
						if (responseCallback) {
							console.log("callback",e.data.result);
							// if no result found
							if (!e.data.result.length) {
					       responseCallback([{
		 							label: 'No matches found',
		 			       	value: e.data.term
		 			       }]);
							} else {
								responseCallback(e.data.result);
							}
						} else {
							console.log("no callback",e.data.result);
						}
						break;
					case "submitError":
						onSubmitError(e.data.error);
						break;
					default: console.log('Unknown message :',e.data);
				}
			} else {
				console.log("Received non-action message",e.data);
			}
		},false);
	};

	var onSubmitError = function(error) {
		$('#error-display').text(error).show();
		$('#progress-indicator').hide();
		$("#wizard-submit").prop('disabled', false);
	}


	$(document).ready(bindDOM);
	startMessageListener();

})();
