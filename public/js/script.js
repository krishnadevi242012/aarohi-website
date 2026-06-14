jQuery(function ($) {

    'use strict';

    /*$('.service-dd').on('click', function() {
        $('.service-plus-minus').toggleClass('collapsed');
    });
    $('.industry-dd').on('click', function() {
        $('.industry-plus-minus').toggleClass('collapsed');
    });
    $('.insight-dd').on('click', function() {
        $('.insight-plus-minus').toggleClass('collapsed');
    });*/

    // Scrolltop
    $(window).on('scroll', function() {
        if( $(this).scrollTop() > 300 ) {
            $("#scrolltop").addClass("scrolltopactive");
        }
        else {
            $("#scrolltop").removeClass("scrolltopactive");
        }
    });

    $("#scrolltop").on('click', function () {
        $("html").animate({
            scrollTop: 0
        }, 2000);
        return false;
    });

    // Banner-carousel
    $(".banner-carousel").owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        nav: false,
        navText: ['',''],
        responsive:{
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });


    //Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        loop: true,
        items: 3,
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        nav: true,
        navText: ["<i class='mdi mdi-chevron-left c-blue'></i>", "<i class='mdi mdi-chevron-right c-blue'></i>"],
        responsive:{
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    //Client carousel
    $(".client-carousel").owlCarousel({
        loop: true,
        items: 3,
        autoplay: false,
        smartSpeed: 1500,
        margin: 5,
        dots: false,
        nav: true,
        navText: ["<i class='mdi mdi-chevron-left c-blue'></i>", "<i class='mdi mdi-chevron-right c-blue'></i>"],
        responsive:{
            0: {
                items: 1
            },
            768: {
                items: 4
            },
            992: {
                items: 4
            }
        }
    });

    //Blogs carousel
    $(".blog-carousel").owlCarousel({
        loop: true,
        items: 1,
        center:true,
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        nav: true,
        navText: ["<i class='mdi mdi-chevron-left text-white'></i>", "<i class='mdi mdi-chevron-right text-white'></i>"],
        pagination:false,
        // onInitialized : function(el){
        //     el.find(".owl-item").eq(0).addClass("synced");
        // },
        responsive:{
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    /*Refresh Page click on Browser back button*/
    window.onpopstate = function () {
        location.reload()
    };

    $(document).ready(function() {
        "use strict";
        $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
        $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
        $(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\"></a>");
        $(".eval-nav .menu > ul > li").hover(function(e) {
            if ($(window).width() > 1070) {
                $(this).children("ul").stop(true, false).fadeToggle(150);
                e.preventDefault();
            }
        });

        $(".menu > ul > li").on('click', function () {
            if ($(window).width() <= 1070) {
                $(this).children("ul").fadeToggle(150);
            }
        });

        $(".menu-mobile").on('click', function (e) {
            $(".menu > ul").toggleClass('show-on-mobile');
            e.preventDefault();
        });
    });

    $(window).resize(function() {
        $(".menu > ul > li").children("ul").hide();
        $(".menu > ul").removeClass('show-on-mobile');
    });

});
