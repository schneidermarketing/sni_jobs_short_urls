var tabs = function (numberTabs) {
    var lpwidth = $(window).width();

    $(document).ready(function () {
        var tabCount = numberTabs;
        var list = $('ul.lp-tabs');
        var listItems = list.children('li');

        var noScriptHtml = $("div.tabbed_area").html();

        tabView();

        $(window).resize(function () {
            if ($(this).width() != lpwidth) {
                lpwidth = $(this).width();
                tabView();
            }
        });

        function tabView() {
            lpwidth = $(window).width();
            if (lpwidth > 899 && tabCount < 6) {

                $("div#accordian.accordian-active div.lp-tabcontent div p").removeClass('cleartxt');
                $("#accordian").removeClass("accordian-active");

                // Start Tabbed Content Script
                //hide all but first tab content up
                var isActive = $("ul.lp-tabs li").hasClass("lp-tabactive");
                if (!isActive) {
                    $("ul.lp-tabs li").removeClass("lp-tabactive");
                    $("ul.lp-tabs li:first").addClass("lp-tabactive");
                }

                $("div.lp-tabcontent").removeAttr("style");
                $("div.lp-tabcontent h4").removeAttr("style").removeAttr("class");
                $("div.lp-tabcontent h4 span.content-lg-number").removeAttr("style");
                $("div.lp-tabcontent div").removeAttr("style");
                $("div.lp-tabcontent h4 span.breakholder").replaceWith("<br />");

                $("div.lp-tabcontent h4").off("click");

                $(".lp-tabcontent").hide();
                $(".lp-tabcontent:first").show();
                $("div#lp-tab-wrapper").removeClass("hidden");
                $(".lp-tabcontent").removeClass("padit").addClass("lp-content-bordered");
                $("ul.lp-tabs li span").last().css({ 'border-right': 'none' });
                $("h2#tabbed-section-title").addClass("lp-tabbed-title-full").removeClass("section-title-no-script");
                $("div.tabbed_area").removeClass("tabbed-no-script");
                $("div.lp-tabcontent hr").remove();

                var tabcount = $("ul.lp-tabs").children().length;
                var tabpadding = String((100 / tabcount) / (tabcount * 2) + "%");
                var tabwidth = String(((100 / tabcount) - (((100 / tabcount) / (tabcount * 2)) * 2)) - 1 + "%");
                $("ul.lp-tabs li").css({ 'padding': "0px " + tabpadding, 'width': tabwidth });
                $("ul.lp-tabs").css({ 'padding': "0 " + tabpadding });

                // When a tabbed content link is clicked
                $("li.lp-tab").click(function () {
                    //switch all tabs off
                    $(".lp-tabactive").removeClass("lp-tabactive");

                    //switch this tab on
                    $(this).addClass("lp-tabactive");

                    //slide all content up
                    $(".lp-tabcontent").hide();

                    //slide this content up
                    var tabcontent_show = $(this).attr("title");
                    var showing = $("div.lp-tabcontent[data='" + tabcontent_show + "']");
                    showing.show();

                    return false;
                });

                // End Tabbed Content Script

            } else if (lpwidth < 900 || tabcount > 5) {
                $("div#lp-tab-wrapper").addClass("hidden");
                $("div.tabbed_area").children().remove();
                $("div.tabbed_area").append(noScriptHtml);
                $("div.tabbed_area").addClass("tabbed-no-script");
                $("#accordian").addClass("accordian-active");

                $("div#accordian.accordian-active div.lp-tabcontent div:not(:first)").hide();
                $("div#accordian.accordian-active div.lp-tabcontent").css({ 'padding': '5px 20px' });
                $("div#accordian.accordian-active div.lp-tabcontent div").css({ 'border-top': '5px solid #ff7011', 'border-bottom': '5px solid #cccccc', 'margin': '0 -20px', 'padding': '20px' });
                $("div#accordian.accordian-active div.lp-tabcontent div p").addClass('cleartxt');
                $("div#accordian.accordian-active div.lp-tabcontent h4:first").addClass('accordian-active-tab');
                $("div#accordian.accordian-active div.lp-tabcontent h4:not(:first)").addClass('accordian-inactive-tab');
                $("div#accordian.accordian-active div.lp-tabcontent div hr").remove();
                ;
                $("div#accordian.accordian-active div.lp-tabcontent h4").css({ 'font-size': '1.5em', 'line-height': '1.5em', 'width': '100%', 'cursor': 'pointer' });
                $("div.lp-tabcontent").removeClass("padit");
                $("div.lp-tabcontent h4 span.content-lg-number").css({ 'color': '#cccccc', 'font-size': '1.0em' });
                $("div#accordian.accordian-active div.lp-tabcontent h4 br").replaceWith("<span class='breakholder'>&nbsp;</span>");

                $("div.lp-tabcontent h4").on("click", animateAccordian);

                function animateAccordian() {
                    $("div#accordian.accordian-active div.lp-tabcontent div").not($(this).siblings("div")).slideUp();
                    $("div#accordian.accordian-active div.lp-tabcontent h4").removeClass('accordian-active-tab').addClass('accordian-inactive-tab');
                    $(this).removeClass('accordian-inactive-tab').addClass('accordian-active-tab');
                    $(this).siblings("div").slideDown();
                }
            }
        }
    });
}

var tabsLtIE9 = function (numberTabs) {
    $(document).ready(function() {
        var tabCount = numberTabs;
        var list = $('ul.lp-tabs');
        var listItems = list.children('li');

        var noScriptHtml = $("div.tabbed_area").html();

        tabView();
        
        function tabView() {
            lpwidth = $(window).width();
            if(tabCount < 6) {
                $("#accordian").removeClass("accordian-active");

                // Start Tabbed Content Script
                //hide all but first tab content up
                var isActive = $("ul.lp-tabs li").hasClass("lp-tabactive");
                if (!isActive) {
                    $("ul.lp-tabs li").removeClass("lp-tabactive");
                    $("ul.lp-tabs li:first").addClass("lp-tabactive");
                }

                $("div.lp-tabcontent").removeAttr("style");
                $("div.lp-tabcontent h4").removeAttr("style").removeAttr("class");
                $("div.lp-tabcontent h4 span.content-lg-number").removeAttr("style");
                $("div.lp-tabcontent div").removeAttr("style");
                $("div.lp-tabcontent h4 span.breakholder").replaceWith("<br />");

                $("div.lp-tabcontent h4").off("click");

                $(".lp-tabcontent").hide();
                $(".lp-tabcontent:first").show();
                $("div#lp-tab-wrapper").removeClass("hidden");
                $(".lp-tabcontent").removeClass("padit").addClass("lp-content-bordered");
                $("ul.lp-tabs li span").last().css({ 'border-right': 'none' });
                $("h2#tabbed-section-title").addClass("lp-tabbed-title-full").removeClass("section-title-no-script");
                $("div.tabbed_area").removeClass("tabbed-no-script");
                $("div.lp-tabcontent hr").remove();

                var tabcount = $("ul.lp-tabs").children().length;
                var tabpadding = String((100 / tabcount) / (tabcount * 2) + "%");
                var tabwidth = String(((100 / tabcount) - (((100 / tabcount) / (tabcount * 2)) * 2)) - 1 + "%");
                $("ul.lp-tabs li").css({ 'padding': "0px " + tabpadding, 'width': tabwidth });
                $("ul.lp-tabs").css({ 'padding': "0 " + tabpadding });

                // When a tabbed content link is clicked
                $("li.lp-tab").click(function() {
                    //switch all tabs off
                    $(".lp-tabactive").removeClass("lp-tabactive");

                    //switch this tab on
                    $(this).addClass("lp-tabactive");

                    //slide all content up
                    $(".lp-tabcontent").hide();

					//slide this content up
                    var tabcontent_show = $(this).attr("title");
                    var showing = $("div.lp-tabcontent[data='" + tabcontent_show + "']");
                    showing.show();
                    return false;
                });
            
            } else if (tabCount > 5) {
                $("div#lp-tab-wrapper").addClass("hidden");
                $("div.tabbed_area").children().remove();
                $("div.tabbed_area").append(noScriptHtml);
                $("div.tabbed_area").addClass("tabbed-no-script");
                $("#accordian").addClass("accordian-active");

                $("div#accordian.accordian-active div.lp-tabcontent div:not(:first)").hide();
                $("div#accordian.accordian-active div.lp-tabcontent").css({ 'padding': '5px 20px' });
                $("div#accordian.accordian-active div.lp-tabcontent div").css({ 'border-top': '5px solid #ff7011', 'border-bottom': '5px solid #cccccc', 'margin': '0 -20px', 'padding': '20px' });
                $("div#accordian.accordian-active div.lp-tabcontent h4:first").addClass('accordian-active-tab');
                $("div#accordian.accordian-active div.lp-tabcontent h4:not(:first)").addClass('accordian-inactive-tab');
                $("div#accordian.accordian-active div.lp-tabcontent div hr").remove();
                ;
                $("div#accordian.accordian-active div.lp-tabcontent h4").css({ 'font-size': '1.5em', 'line-height': '1.5em', 'width': '100%', 'cursor': 'pointer' });
                $("div.lp-tabcontent").removeClass("padit");
                $("div.lp-tabcontent h4 span.content-lg-number").css({ 'color': '#cccccc', 'font-size': '1.0em' });
                $("div#accordian.accordian-active div.lp-tabcontent h4 br").replaceWith("<span class='breakholder'>&nbsp;</span>");

                $("div.lp-tabcontent h4").on("click", animateAccordian);

                function animateAccordian() {
                    $("div#accordian.accordian-active div.lp-tabcontent div").not($(this).siblings("div")).slideUp();
                    $("div#accordian.accordian-active div.lp-tabcontent h4").removeClass('accordian-active-tab').addClass('accordian-inactive-tab');
                    $(this).removeClass('accordian-inactive-tab').addClass('accordian-active-tab');
                    $(this).siblings("div").slideDown();
                }
            }
        }
    });
}