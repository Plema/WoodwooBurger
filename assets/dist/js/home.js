$(document).ready(function () {
    if ($(window).width() > 768) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 1) {
                $('.header').css('display', 'flex')
                $('.header').css('top', '-100%')
                $('.header-reguest').css('top', '0')
                $('header').addClass("sticky");
                $('.nav-mobile').addClass("sticky");
                $('.cabinet-dropdown').removeClass('active')
            } else {
                $('header').removeClass("sticky");
                $('.nav-mobile').removeClass("sticky");
                $('.header').css('top', '0')
                $('.header-reguest').css('top', '-100%')
            }
        });
    }

    if ($(window).width() < 768) {
        $('.link-page').on('click', function () {
            $(this).addClass('active');
            $(this).parents('.item-image').find('.mark').addClass('not-active')
            $(this).parents('.item-image').find('.close').addClass('active');
        });

        $('.close').on('click', function () {
            $(this).removeClass('active');
            $(this).parents('.item-image').find('.mark').removeClass('not-active')
            $(this).parents('.item-image').find('.link-page').removeClass('active');
        });
    }

    $(".list-item").hover(function () {
            $(this).find('span.minus, span.plus, input').addClass('opacity')
        },
        function () {
            $(this).find('span.minus, span.plus, input').removeClass('opacity')
            var inputnumber = $(this).find('input.only_number')
            if ($(inputnumber).val() != 0) {
                $(this).find('span.minus, span.plus, input').addClass('opacity')
            } else {
                $(this).find('span.minus, span.plus, input').removeClass('opacity')
            }
        });

    $('.section-banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4000,
    });

    $('.list-reviews').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0px',
        infinite: true,
        arrows: true,
        adaptiveHeight: true,
        prevArrow: $('.section-reviews .prev'),
        nextArrow: $('.section-reviews .next'),
        centerMode: true,
        dots: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                dots: false,
            },

        }]
    })

    $(".go-to").click(function () {
        var el = $(this).attr('href')
        var hash = el.split('#')[1];
        var elementClick = $('#' + hash)
        var heading = $('.section-product .heading').outerHeight();
        var ht = $('.section-banner .list-item').outerHeight();
        if (screen.width < 768) {
            var destination = $(elementClick).position().top + ht + heading
            jQuery("html:not(:animated),body:not(:animated)").animate({
                scrollTop: destination
            }, 800);
            return false;
        }
        if (screen.width > 767) {
            var destination = $(elementClick).position().top + ht + heading;
            jQuery("html:not(:animated),body:not(:animated)").animate({
                scrollTop: destination
            }, 800);
            return false;
        }
    });
})
