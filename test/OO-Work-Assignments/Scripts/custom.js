$(document).bind("mobileinit", function () {
    //apply overrides here
    $.mobile.ignoreContentEnabled = true;
});
$(document).ready(function () {
    $.datepicker.setDefaults({
        autoSize: true, dateFormat: "mm/dd/yy", changeYear: true, changeMonth: true
    });
    $('input.datepicker').datepicker();
    $('div.ui-datepicker').css({ 'font-size': '14px' });

    // if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    $('#standard').hide();
    // } else {
    //$('#mobile').hide();
    //$('#username').focus();
    // }

    var activeParent = $('a.ui-btn-active').parent();
    activeParent.css({ 'background': 'transparent url(images/navigation-active.png) bottom center no-repeat', 'padding-bottom': '7px' });

    var collapsibleHeading = $(".collabsible-heading");
    $(window).one('load', function () {
        collapsibleHeading.append('<span class="icon"></span>');
        $(collapsibleHeading).first().addClass('expanded-heading');
        collapseIt(collapsibleHeading.not(':first'));
    });

    collapsibleHeading.on('click', function () {
        if ($(this).hasClass('collapsed-heading')) {
            expandIt($(this));
        } else {
            collapseIt($(this));
        }
    });

    function collapseIt(heading) {
        heading.nextUntil('.collabsible-heading, .stop-collapse').hide();
        heading.addClass('collapsed-heading');
        heading.removeClass('expanded-heading');
    };

    function expandIt(heading) {
        heading.nextUntil('.collabsible-heading, .stop-collapse').show();
        heading.removeClass('collapsed-heading');
        heading.addClass('expanded-heading');
    };
});