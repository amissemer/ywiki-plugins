$( document ).ready( function () {
	$("#form-close").click( function() {
		parent.postMessage({action: "close"},"https://wiki.hybris.com");
	});
	$('#customerSelect').autocomplete({
    source: function(request,responseCallback) {
			parent.postMessage({ action: "findCustomer", customerPartial: request.term }, "https://wiki.hybris.com");
			customerCallbacks[request.term] = responseCallback;
		}
  });
	var submitBtn=$("#wizard-submit");
	submitBtn.click( function() {
		parent.postMessage({
			action: "createWorkspace",
			customer: $('#customerSelect').val(),
			projectName: $('#projectName').val()
		},"https://wiki.hybris.com");
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

var customerCallbacks={};
// Listen to message from parent window
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
eventer(messageEvent,function(e) {
	if (e.data.action) {
		switch (e.data.action) {
			case "findCustomerResponse":
				if (customerCallbacks[e.data.term]) {
					console.log("callback",e.data.result);
					customerCallbacks[e.data.term](e.data.result);
				} else {
					console.log("no callback",e.data.result);
				}
				break;
			default: console.log('Unknown message :',e.data);
		}
	} else {
		console.log("Received non-action message",e.data);
	}
},false);
