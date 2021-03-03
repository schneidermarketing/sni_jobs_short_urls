// JavaScript Document
$(document).ready(function(e) {
	var width;
	var MobileOption = $("#mobileOption, label[for='mobileOption'], label[for='mobileOptionLabel']");
	
	$(window).resize(function(e) {
        width = $(this).width();
		addPlaceholder(width);
    });
	
	// Hide Enable JavaScript message
	$('#enable-js-message').hide();
	
	// Show JavaScript dependant UI Elements
	$('div.select-container, div#type-info, h3#select-heading, div#font-toolbar').show();

	var typeSelect = $('select#associate-type-select');
	var typeSelectVal;
	var icOption = $('select#ic-type-option');
	var icOptionVal;
	var icOptionHide = $('select#ic-type-option').parent();
	var showForm = false;
	
	$(window).one('load', function() {
		toggleTypes('');
		MobileOption.hide();
		icOptionHide.hide();
		width = $(window).width();
		addPlaceholder(width);
	});
	
	function addPlaceholder(screenwidth) {
		if(screenwidth < 481){
			$('input#username').attr('placeholder','Username');
			$('input#password').attr('placeholder','Password');
		} else {
			$('input#username, input#password').removeAttr('placeholder');
		}
	}
	
	typeSelect.on('change', function(e) {
		typeSelectVal = $('select#associate-type-select').val();
		if(typeSelectVal == 'ic') {
			icOptionHide.show();
			showForm = false;
			toggleTypes('');
		} else {
			icOptionHide.hide();
			icOption.val('');
			showForm = true;
			toggleTypes(typeSelectVal);
		}
	});
	
	icOption.on('change', function(e) {
		var icOptionVal = $('select#ic-type-option').val();
		if(icOptionVal != '') {
			showForm = true;
			toggleTypes(typeSelectVal + '-' + icOptionVal);
		} else {
			showForm = false;
			toggleTypes('');
		}
	});
	
	function toggleTypes(type) {
		// First hide all types
		$('div#type-info').children().hide();
		if(type != '') {
			// Show single new type if value is selected
			$('div#' + type).show();
			// Show form and apply appropriate action based on user type selection
			if(showForm) {
				switch(type)
				{
				case "cd":
				  $('#standardform').attr('action', '/cd');
					if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
						MobileOption.show();
					} else {
						MobileOption.hide();
					}
				  break;
				case "ic-mileage":
				  $('#standardform').attr('action', '/ic-mileage');
					if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
						MobileOption.show();
					} else {
						MobileOption.hide();
					}
				  break;
				case "ic-percentage":
				  $('#standardform').attr('action', '/ic-percentage');
					if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
						MobileOption.show();
					} else {
						MobileOption.hide();
					}
				  break;
				case "osw":
				  $('#standardform').attr('action', '/osw');
					if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
						MobileOption.hide();
					}
				  break;
				case "student":
				  $('#standardform').attr('action', '/student');
					if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
						MobileOption.hide();
					}
				  break;
				default:
				  $('#standardform').attr('action', '/default');
					if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
						MobileOption.hide();
					}
				}
				$('#standardform').show();
				$('div#type-info hr').show();
			}
		}
	};
	
/*	function getmyAgent() {
		var detect = navigator.userAgent.toLowerCase();
		if ((detect.indexOf("msie") != -1) && (detect.indexOf("schneider national") != -1)) {
			location.href='https://webaccess.schneiderlogistics.com/world';
		} else {
			location.href='https://webaccess.schneiderlogistics.com/home';
		}
	};
*/	
	// Font Re-size Script
	var fontSize = 62.5;
	$('#font-toolbar a').on('click', function(){
		var targetClass = $(this).attr('class');
		switch (targetClass) {
			case 'increase-font' :
			if(fontSize < 78.0) {
				fontSize+= 5;
				$('body').css({ 'font-size' : fontSize + '%'});
			}
			break;
			case 'reset-font' :
				fontSize = 62.5;
				$('body').css({ 'font-size' : fontSize + '%'});
			break;
			case 'decrease-font' :
			if(fontSize > 52.0) {
				fontSize+= -5;
				$('body').css({ 'font-size' : fontSize + '%'});
			}
			break;
		}
		return false;
	});
});