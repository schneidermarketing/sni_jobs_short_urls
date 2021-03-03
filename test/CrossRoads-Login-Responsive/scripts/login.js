// JavaScript Document
/*var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
 
try {
var pageTracker = _gat._getTracker("UA-620055-6");
pageTracker._trackPageview();
} 
catch(err) {}
*/	
function callAvaya(){
	try {
		var ssobj = new ActiveXObject("AvAgentStartup.clsAvayaAgentStartup");
	} catch(e) {
		return "Error getting activex object";
	}
	ssobj.Startup(getURLParam("ct_orig_uri"),"","");
	return "success";
}
 
function getmyAgent() {
	var detect = navigator.userAgent.toLowerCase();
	if ((detect.indexOf("msie") != -1) && (detect.indexOf("schneider national") != -1)) {
		location.href='https://webaccess.schneiderlogistics.com/world';
	} else {
		location.href='https://webaccess.schneiderlogistics.com/home';
	}
}
 
function popsWindow2(url, win_name, height, width, left, top) {
	var popsWin2 = window.open( url , win_name, 'height=' + height + ', width=' + width + ', location=no, status=no, menubar=no, toolbar=no,  scrollbars=yes, resizable=yes, left=' + left + ', top=' + top +'' );
	//popsWin2.focus();
	console.log(popsWin2);
}
 
function EBSPopup() {
	var testwindow = window.open("https://ebs1.schneider.com", "ebs", "location=1,status=1,scrollbars=1,width=800,height=600", false); 
	//testwindow.onload = function () { testwindow.focus(); }
	console.log(testwindow);
}
 
function submitDriverLogin() {
	if (""==document.driverLoginForm.username.value) 
	{ 
		alert("Please enter your user id.");
		document.driverLoginForm.username.focus();
		return false; 
	} 
 
	if(""==document.driverLoginForm.password.value) 
	{ 
		alert("Please enter your password."); 
		document.driverLoginForm.password.focus();
		return false; 
	} 
					
	return true;
}

function submitSPLogin() {
	if (""==document.spLoginForm.username.value) { 
		alert("Please enter your user id.");
		document.spLoginForm.username.focus();
		return false; 
	} 
 
	if(""==document.spLoginForm.password.value) { 
		alert("Please enter your password."); 
		document.spLoginForm.password.focus();
		return false; 
	} 
 
	document.spLoginForm.action="https://wcs3.schneider.com/snib/login/ui/customerspservlet";				
	return true;
}
 
 
function queryString(parameter) { 
	var loc = location.search.substring(1, location.search.length);
	var param_value = false;
	var params = loc.split("&");
	
	for (i=0; i<params.length;i++) {
		param_name = params[i].substring(0,params[i].indexOf('='));
		if (param_name == parameter) {
			param_value = params[i].substring(params[i].indexOf('=')+1)
		}
	}
	
	if (param_value) {
		return param_value;
	} else {
		return false; 
	}
}
 
function pageParams() {
	
	var page = queryString('page');
	
	switch (page)
	{
		case 'DRV':
			// Default Tab
			break;
		case 'IC':
			// Set to IC Tab
			$( "ul#nav li > a:eq(1)" ).trigger( "click" );
			break;
		case 'OSW':
			// Set to OSW Tab
			$( "ul#nav li > a:eq(2)" ).trigger( "click" );
			break;
		case 'SD':
			// Set to Student Tab
			$( "ul#nav li > a:eq(3)" ).trigger( "click" );
			break;
	}
}