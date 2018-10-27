import $ from 'jquery';
import '../lib/polyfills';
import '../lib/Array.ext';
import * as proxy from './proxyService';
import * as wizardService from './wizardService';
import 'jquery-ui-bundle';
import 'bootstrap';
import 'bootstrap-validator';
import 'bootstrap-datepicker';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css';
import '../../css/golden-form.css';

function bindDOM() {

	$("#form-close").click( function() {
		proxy.closeFrame();
	});
	$(document).keyup(function(e) {
    if (e.keyCode == 27) { // ESC
			 proxy.closeFrame();
    }
	});
	$("#cancelBtn").click( function() {
		proxy.closeFrame();
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
		 },
		select: function( event, ui ) {
			customerSelect.val( ui.item.label );
			return false;
		}
	})
	.autocomplete( "instance" )._renderItem = function( ul, item ) {
		var regionStr="";
		if (item.regions && item.regions.length>0) {
			regionStr=" <span class='text-muted'>[" + item.regions.join(" > ") + "]</span>";
		}
		return $( "<li>" )
			.append( "<div><strong>" + item.label + "</strong>" + regionStr + "</div>" )
			.appendTo( ul );
	};

	// toggle the glyphicon of the collapsible deliveryRegion panel
	$('#collapseDeliveryRegion.collapse').on('shown.bs.collapse', function () {
		$(this).prev().find(".glyphicon").removeClass("glyphicon-plus").addClass("glyphicon-minus");
	});
	$('#collapseDeliveryRegion.collapse').on('hidden.bs.collapse', function () {
		$(this).prev().find(".glyphicon").removeClass("glyphicon-minus").addClass("glyphicon-plus");
	});

	wizardService.loadRegions().done(setRegionNames);
	wizardService.getDeliveryRegionSettings().then(onDeliveryRegionSettingsUpdated);
	var submitBtn=$("#wizard-submit");
	var submitProgress=$('#progress-indicator');
	submitBtn.click( function() {
		console.log(submitBtn.prop('disabled'));
		if (submitBtn.hasClass('disabled')) {
			return true;
		} else {
			if ($("#rememberReportingRegion").is(':checked')) {
				wizardService.savePreferredRegion($('#reportingRegion').val());
			} else {
				wizardService.savePreferredRegion("");
			}
			wizardService.createWorkspace({
				customer: (customerSelect.val()),
				region: $('#regionSelect').val(),
				reportingRegion: $('#reportingRegion').val(),
				projectName: $('#projectName').val(),
				targetEndDate: $('#targetEndDate').val(),
				variantOptions: readSelectedOptions()
			}).fail(onSubmitError);
			submitBtn.prop('disabled', true);
			submitProgress.show();
			$('#error-display').hide();
		}
		return false;
	});

	wizardService.withOption('newInstanceDisplayName').then(
		function (value) {
			$('#mainTitle').text("New " + value);
		}
	);
	wizardService.withOption('variantOptions').then(
		function (variantOptions) {
			console.log('variantOptions: ',variantOptions);
			if (variantOptions && variantOptions.length>0 && variantOptions[0].options && variantOptions[0].options.length>0) {
				var template = $('.variant-option').first();
				variantOptions[0].options.forEach( function(option) {
					var optElt = template.clone();
					optElt.html(optElt.html().format(option.name, option.value, option.label, option.default?'checked':''));
					optElt.appendTo(template.parent());

					if (optionNames.indexOf(option.name)==-1) {
						optionNames.push(option.name);
					}
				});
				template.remove();
				$('#variant-options').removeClass('hidden');
			}
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
		customerElements.val(($(fromElt).val()));
	}
	customerElements
		.keyup (function() { copyCustomerName(this); } )
		.change(function() { copyCustomerName(this); } );
}

var optionNames = [];

function readSelectedOptions() {
	var selectedOptions = [];
	optionNames.forEach(function(option) {
		selectedOptions.push({ name: option, value: $('input[name='+option+']:checked').val() });
	});
	console.log("Selected options: ",selectedOptions);
	return selectedOptions;
}

function onSubmitError(error) {
	var errorMsg=error;
	if (Array.isArray(errorMsg) && errorMsg[0]) {
		errorMsg=errorMsg[0];
	}
	if (errorMsg.responseJson && errorMsg.responseJson.message) {
		errorMsg = errorMsg.responseJson.message;
	}
	if (typeof errorMsg != "string") {
		errorMsg = JSON.stringify(errorMsg);
	}
	console.error("Submit Error", error);
	$('#error-display .msg').text(errorMsg);
	$('#error-display').show();
	$('#progress-indicator').hide();
	$("#wizard-submit").prop('disabled', false);
}
function setRegionNames(regionNames) {
	var regionSelect = $('#regionSelect');
	$.each(regionNames.sort(), function (i, item) {
	    regionSelect.append($('<option>', {
	        value: item,
	        text : item
	    }));
	});
}
function onDeliveryRegionSettingsUpdated(deliveryRegions, consultantsRegion, preferredRegion) {
	var deliveryRegionSelect = $('#reportingRegion');
	var userKey = wizardService.getCurrentUser();
	var userRegion = consultantsRegion[userKey];
	$.each(deliveryRegions.sort(), function (i, item) {
	    deliveryRegionSelect.append($('<option>', {
	        value: item,
	        text : item
		}));
	});
	if (preferredRegion && deliveryRegions.indexOf(preferredRegion)>=0) {
		$('#rememberReportingRegion').prop('checked', true);
		deliveryRegionSelect.val(preferredRegion);
	} else if (userRegion && deliveryRegions.indexOf(userRegion)>=0) {
		$('#rememberReportingRegion').prop('checked', true);
		deliveryRegionSelect.val(userRegion);
	} else {
		$('#forecastEndDatePicker').switchClass('','col-md-3');
		$('#deliveryRegionSelector').switchClass('hidden','col-sm-6 col-md-3');
		$('#deliveryRegionSelector').fadeIn();
	}
}

$(document).ready(bindDOM);

