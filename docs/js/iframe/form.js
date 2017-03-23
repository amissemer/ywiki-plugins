(function () {

	var iframeWrapper = iframeWrapperFactory.iframeWrapper(parent, "https://wiki.hybris.com");

  /** Perform an ajax call in the parent frame and returns a promise that will get resolved or rejected with the data as seen by the parent frame.
   *  Not compatible with ajax callbacks that can usually be passed in the settings parameter (complete, beforeSend, error, success)
   */
  function ajax(param) {
    return iframeWrapper.call("ajax", param);
  }
	function closeFrame() {
    return iframeWrapper.call("closeFrame");
  }
  function redirect(url) {
    return iframeWrapper.call("redirect", url);
  }


	function bindDOM() {
		$("#form-close").click( function() {
			parent.closeFrame();
		});
		var customerSelect = $('#customerSelect');
		var customerProgress = $('#customer-progress');
		customerSelect.autocomplete({
			minLength: 3,
			autoFocus: true,
			source: function(request,responseCallback) {
				// insert code for action: "findCustomer", customerPartial: request.term
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
				// INSERT CODE for action: createWorkspace
				// 	customer: customerSelect.val(),
				// 	region: $('#regionSelect').val(),
				// 	projectName: $('#projectName').val(),
				// 	targetEndDate: $('#targetEndDate').val()
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

		// $('#create-new-customer').click(function() {
		// 	// TODO (Adrien) This is temporary. We must ask for the region and create the page under that region
		// 	// Also, do not hardcode the templateId and spaceKey if possible.
		// 	var cust = customerSelect.val();
		// 	parent.location.href = 'https://wiki.hybris.com/pages/createpage-entervariables.action?templateId=136019971&spaceKey=ps&title='+cust+'&newSpaceKey=ps&fromPageId=327520116';
		// });

    $('.datepicker').datepicker({
        todayBtn: 'linked',
        startDate: '+0d',
				todayHighlight: true,
        autoclose: true
    });

		var customerElements = $(".copyCustomerName");
		function copyCustomerName(fromElt) {
			customerElements.val($(fromElt).val());
		}
		customerElements
			.keyup (function() { copyCustomerName(this); } )
			.change(function() { copyCustomerName(this); } );
	}

	function onSubmitError(error) {
		$('#error-display .msg').text(error);
		$('#error-display').show();
		$('#progress-indicator').hide();
		$("#wizard-submit").prop('disabled', false);
	}
	function setRegionNames(regionNames) {
		$.each(regionNames.sort(), function (i, item) {
		    $('#regionSelect').append($('<option>', {
		        value: item,
		        text : item
		    }));
		});
	}

	$(document).ready(bindDOM);
})();
