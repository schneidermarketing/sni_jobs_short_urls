$(document).bind("mobileinit", function () {
    //apply overrides here
    $.mobile.ignoreContentEnabled = true;
});
$(document).ready(function () {

    //if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    $('#standard').hide();
    //} else {
    //$('#mobile').hide();
    //$('#username').focus();
    //}

    var activeParent = $('a.ui-btn-active').parent();
    console.log(activeParent);
    activeParent.css({ 'background': 'transparent url(images/navigation-active.png) bottom center no-repeat', 'padding-bottom': '7px' });

});