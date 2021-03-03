var launchLimitedFeaturesDialog = function () {
	var dialogContent = ($('#ModalDialog').length > 0) ? $('#ModalDialog') : $('<div id="ModalDialog" style=""></div>').appendTo('body');
	var appFunctions = {
		"cookies": {
			"testCookies": function () {
				if (navigator.cookieEnabled) {
					return true;
				}
				return false;
			},
			"addUpdateCookie": function (name, value, cookiePath) {
				$.cookie(name, value, {path: cookiePath, expires: 1000 });
			}
		},
		"uiDialog": {
			"closeDialog": function () {
				dialogContent.dialog("close");
			},
			"instantiateDialog": function () {
					dialogContent.dialog({
					autoOpen: false,
					bgiframe: true,
					modal: true,
					width: 310,
					resizable: false,
					title: 'Limited Feature Notice',
					buttons: {
						"Close": function() {
							$('#ModalDialog').dialog('close');
						}
					},
					close: function (event, ui) {
						if($("input#limitedFeatureMessageBox").is(":checked")){
							appFunctions.cookies.addUpdateCookie("ShowLimitedFeatures","0","/");
						} else {
							appFunctions.cookies.addUpdateCookie("ShowLimitedFeatures","1","/");
						}
						
						$(this).dialog("destroy").remove();
					}
				});
	
			}
		}
	};
	
	$(document).ready(function(e) {
		var enableFeatureAlert = ($.cookie('ShowLimitedFeatures') == 0 ? 0 : 1);
					
		(function() {
			if (appFunctions.cookies.testCookies()) {
				//Checkbox appended to Modal Dialog to allow option for hiding the message in the future
				disableAlertOption = "\n<input type='checkbox' id='limitedFeatureMessageBox' name='limitedFeatureMessageBox' value='1'> Don\'t Show Again"
			} else {
				// Nothing for now	
			}
		})();
		
		appFunctions.uiDialog.instantiateDialog();			
		
		$(window).on("load", function(){
			if(enableFeatureAlert) {
				dialogContent.html("<p>This application is currently <strong><em>limited to viewing work assignments</em></strong>. If you previously accessed additional features of the desktop version of this application, via your mobile device, you may still do so by tapping the <br /><br /><a href='#'>&quot;View Full Site&quot;</a> <br /><br />link at the bottom of each page.</p>" + disableAlertOption);
				dialogContent.dialog("open");
			}
		});
	});
};
