import $ from 'jquery';
import * as proxy from './proxy';
import * as confluence from './confluence';
import * as wizardService from './wizardService';
import 'jquery-ui-bundle';
import 'bootstrap';
import 'bootstrap-validator';
import 'bootstrap-datepicker';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css';
import '../../css/form.css';

function bindDOM() {

	$("#form-close").click( function() {
		proxy.closeFrame();
	});
	$(document).keyup(function(e) {
    if (e.keyCode == 27) { // ESC
			 proxy.closeFrame();
    }
	});
	var customerSelect = $('#customerSelect');
	var customerProgress = $('#customer-progress');
	customerSelect.autocomplete({
		minLength: 3,
		autoFocus: true,
		source: function(request,responseCallback) {
			wizardService.findCustomer(request.term).done(responseCallback);
		},
		search: function(event, ui) {
			 customerProgress.show();
	 },
	 response: function(event, ui) {
			 customerProgress.hide();
	 }
	});
	wizardService.loadRegions().done(setRegionNames);
	var submitBtn=$("#wizard-submit");
	var submitProgress=$('#progress-indicator');
	submitBtn.click( function() {
		console.log(submitBtn.prop('disabled'));
		if (submitBtn.hasClass('disabled')) {
			return true;
		} else {
			wizardService.createWorkspace({
				customer: customerSelect.val(),
				region: $('#regionSelect').val(),
				projectName: $('#projectName').val(),
				targetEndDate: $('#targetEndDate').val()
			});
			submitBtn.prop('disabled', true);
			submitProgress.show();
			$('#error-display').hide();
		}
		return false;
	});

	wizardService.withOption('newInstanceDisplayName').done(
		function (value) {
			$('#mainTitle').text("New " + value);
		}
	);

  $('.datepicker').datepicker({
      todayBtn: 'linked',
      startDate: '+0d',
			todayHighlight: true,
      autoclose: true,
			format: "yyyy/mm/dd"
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
