$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(".pop").popover({ trigger: "manual" , html: true, animation:false})
    .on("mouseenter", function () {
    var _this = this;
    $(this).popover("show");
    $(".popover").on("mouseleave", function () {
    $(_this).popover('hide');
    });
    }).on("mouseleave", function () {
    var _this = this;
    setTimeout(function () {
    if (!$(".popover:hover").length) {
    $(_this).popover("hide");
    }
    }, 300);
});