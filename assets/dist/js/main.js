document.addEventListener("touchstart", function () {}, true);

$(document).ready(function () {

    $('.close').on('click', function () {
        $('.menu-mobile').removeClass('active');
        $(".modall").removeClass('active');
        $('.tabs-link').removeClass('active');
        $(".modall-review").removeClass('active');
        $('.body').removeClass('showing-modal');
    });

    $('.open-menu').on('click', function () {
        $('.menu-mobile').addClass('active');
    });

    $(".menu-mobile").find('.menu').click(function (event) {
        event.stopPropagation();
    });

    $('.menu-mobile').on('click', function () {
        $(".menu-mobile").find('.menu').click(function (event) {
            event.stopPropagation();
        });
        $('.menu-mobile').removeClass('active');
    });

    $('.menu-mobile a').on('click', function () {
        $('.menu-mobile').removeClass('active');
    });

    $(".cabinet").on('click', function () {
        $('.cabinet-dropdown').toggleClass('active')
    })

    jQuery(function ($) {
        $(document).mouseup(function (e) {
            var div = $(".cabinet-dropdown");
            if (!div.is(e.target) &&
                div.has(e.target).length === 0) {
                div.removeClass('active');
            }
        });
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('header').addClass("sticky");
            $('.nav-mobile').addClass("sticky");
            $('.cabinet-dropdown').removeClass('active')
        } else {
            $('header').removeClass("sticky");
            $('.nav-mobile').removeClass("sticky");
        }
    });

    $('.nav-mobile a').on('click', function () {
        $(".nav-mobile a").removeClass('active');
        $(this).addClass("active");
    });

    $('.close-menu').on('click', function () {
        $('.menu-mobile').removeClass('active');
    });

    //Попапы

    jcf.replaceAll();

    jQuery(function ($) {
        $(document).mouseup(function (e) {
            var div = $(".modall-body");
            if (!div.is(e.target) &&
                div.has(e.target).length === 0) {
                div.removeClass('active-modall');
                $(".modall").removeClass('active-modall');
                $('.body').removeClass('showing-modal');
            }
        });
    })

    $('.close, ok').on('click', function () {
        $(".modall").removeClass('active-modall');
        $('.body').removeClass('showing-modal');
    });

    $('.show-address').on('click', function () {
        $(".modall").removeClass('active-modall');
        $(".modall-address").addClass('active-modall');
        $('.body').addClass('showing-modal');
    });

    $('.show-code').on('click', function () {
        $(".modall").removeClass('active-modall');
        $(".modall-code").addClass('active-modall');
        $('.body').addClass('showing-modal');
    });

    $('.show-promo').on('click', function () {
        $(".modall").removeClass('active-modall');
        $(".modall-promo").addClass('active-modall');
        $('.body').addClass('showing-modal');
    });

    $('.show-accepted').on('click', function () {
        $(".modall").removeClass('active-modall');
        $(".modall-accepted").addClass('active-modall');
        $('.body').addClass('showing-modal');
    });

    $('.show-over').on('click', function () {
        $(".modall").removeClass('active-modall');
        $(".modall-over").addClass('active-modall');
        $('.body').addClass('showing-modal');
    });

    $('.show-options').on('click', function () {
        $(".modall").removeClass('active-modall');
        $(".modall-options").addClass('active-modall');
        $('.body').addClass('showing-modal');
    });

    $('.show-basket').on('click', function () {
        $(".modall").removeClass('active-modall');
        $(".modall-basket").addClass('active-modall');
        $('.body').addClass('showing-modal');
    });

    $('.show-code-sms').on('click', function () {
        $(".modall").removeClass('active-modall');
        $(".modall-code-sms").addClass('active-modall');
        $('.body').addClass('showing-modal');
    });

    $('.add-review').on('click', function () {
        $(".modall").removeClass('active-modall');
        $(".modall-review").addClass('active-modall');
        $('.body').addClass('showing-modal');
    });


    jQuery(".only_number").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });

    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 0 ? 0 : count;
        $input.val(count);
        $input.change();
        return false;
    });

    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $(".phone").mask("+7 (000) 000 00 00", {
        placeholder: "Ваш номер телефона"
    })

    $(".phone-number").mask("+7 (000) 000 00 00", {
        placeholder: "+7 (___) ___ __ __"
    })
    $(".telephone").mask("+7 (000) 000 00 00", {
        placeholder: "Телефон"
    })

    //для бэков менялся код!
    var HashValue = location.hash;
    var ht = $('.section-banner .list-item').outerHeight();
    var heading = $('.section-product .heading').outerHeight();
    if (screen.width < 768) {
        location.hash = '';
        if (HashValue[1] != undefined) {
            $('html, body').animate({
                scrollTop: $(HashValue).position().top + ht + heading
            }, 800);
        };
    }
    if (screen.width > 768) {
        location.hash = '';
        if (HashValue[1] != undefined) {
            $('html, body').animate({
                scrollTop: $(HashValue).position().top + ht + heading
            }, 800);
        };
    }


    // $(".customScroll").mCustomScrollbar({
    //     axis: "x" // horizontal scrollbar
    // });

    $(".customScrollVertical").mCustomScrollbar()

    $('.slickSubmenu').slick({
        slidesToScroll: 2,
        variableWidth: true,
        arrows: false,
    })

});
