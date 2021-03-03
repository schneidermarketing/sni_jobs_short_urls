var launchLimitedFeaturesDialog = function () {
	var dialogContent;

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
			"instantiateDialog": function () {
				$( "#ModalDialog" ).draggable({
					handle: "h3",
					cursor: "move",
					containment: "window"
				});
				dialogContent = ($('#ModalDialog').length > 0) ? $('#ModalDialog') : $('<div id="ModalDialog" style="position: fixed;width: 250px;border: 1px solid #ccc;border-radius: 5px;background: #fff;font-size: 1em;z-index:1001;"></div>').appendTo('body');
				
				$('#ModalDialog').html("<div style='margin: 5px 15px;'><h3 style=''>Limited Feature Alert!</h3><p>This application is currently <strong><em>limited to viewing work assignments</em></strong>. If you previously accessed additional features of the desktop version of this application, via your mobile device, you may still do so by tapping the <br /><br /><a href='#'>&quot;View Full Site&quot;</a> <br /><br />link at the bottom of each page.</p>" + disableAlertOption + "<hr /><span id='closeDialog' class='ui-button-text'>Close</span></div>");
				
				$(dialogContent).wrap("<div id='ModalOverlay' style='display: none;'></div>");
				
				$( "#ModalOverlay" ).css({ 'height' : $(window).height() + 'px', 'width' : $(window).width() + 'px'});
				
				$('span#closeDialog').on('click', function(){
					if($("input#limitedFeatureMessageBox").is(":checked")){
						appFunctions.cookies.addUpdateCookie("ShowLimitedFeatures","0","/");
					} else {
						appFunctions.cookies.addUpdateCookie("ShowLimitedFeatures","1","/");
					}
					$('#ModalOverlay').hide();
				});
			},
			"removeDialog": function () {
				dialogContent.remove();
				$("#ModalOverlay").remove();
			},
			"dialogPosition": function () {
				var modalTop = ($(window).height()/2) - ($('#ModalDialog').height()/2);
				var modalLeft = ($(window).width()/2) - ($('#ModalDialog').width()/2);
				$(dialogContent).css({ 'top' : modalTop + 'px', 'left' : modalLeft + 'px'});
			},
			"overlaySize": function () {
				$( "#ModalOverlay" ).css({ 'height' : $(window).height() + 'px', 'width' : $(window).width() + 'px'});
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
		
		$(window).on('resize', function () {
			if($("#ModalOverlay:visible")) {
				appFunctions.uiDialog.overlaySize();
				appFunctions.uiDialog.dialogPosition();
			}
		});	
		
		$(window).on("load", function(){
			if(($.cookie('ShowLimitedFeatures') == 0 ? 0 : 1)) {
				appFunctions.uiDialog.instantiateDialog();
				$('#ModalOverlay').show();
				appFunctions.uiDialog.dialogPosition();
			} else {
				appFunctions.uiDialog.removeDialog();
			}
		});
	});
};
