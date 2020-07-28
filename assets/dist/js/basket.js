$(document).ready(function () {
    jcf.replaceAll();

    jQuery(".only_number").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });

    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
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

    $(".close").on('click', function () {
        $(this).parents('.list-item').css('display', 'none')
    })

    $(".time span.jcf-radio.jcf-unchecked").on('click', function () {
        $('.pick-time').addClass('active')
        jQuery(function ($) {
            $(document).mouseup(function (e) {
                var div = $(".pick-time");
                if (!div.is(e.target) &&
                    div.has(e.target).length === 0) {
                    div.removeClass('active');
                }
            });
        });
    })

    $(".form-column span.jcf-radio.jcf-unchecked").on('click', function () {
        $('.add-select').removeClass('active')
        $('.courier').addClass('active')
    })
    $(".pickup span.jcf-radio.jcf-unchecked").on('click', function () {
        $('.add-select').addClass('active')
        $('.courier').removeClass('active')
    })


    // Set Options
    var speed = 500; // Fade Speed
    var $slide = $('#slider-1 .date-slide');
    var $slide2 = $('#slider-2 .date-slide2');
    var $slide3 = $('#slider-3 .date-slide3');
    
    $('.details-time').empty()
    var dTotall = $('.details-time').append($('#slider-1 .date-active,#slider-2 .date-active,#slider-3 .date-active').clone()).html();

    // Add initial active class
    $slide.eq(0).addClass('date-prev');
    $slide.eq(0).addClass('date-active');
    $slide.eq(1).addClass('date-next');

    $slide2.eq(0).addClass('date-prev');
    $slide2.eq(0).addClass('date-active');
    $slide2.eq(1).addClass('date-next');

    $slide3.eq(0).addClass('date-prev');
    $slide3.eq(0).addClass('date-active');
    $slide3.eq(1).addClass('date-next');


    // Hide all slides
    $slide.hide();
    $slide2.hide();
    $slide3.hide();

    // Show first slide
    $('#slider-1 .date-active').show();
    $('#slider-2 .date-active').show();
    $('#slider-3 .date-active').show();

    // Next Handler
    $('#nextBtn').click(nextSlide);
    $('#nextBtn2').click(nextSlide2);
    $('#nextBtn3').click(nextSlide3);

    // Previous Handler
    $('#prevBtn').click(prevSlide);
    $('#prevBtn2').click(prevSlide2);
    $('#prevBtn3').click(prevSlide3);


    // Switch to next slide
    function nextSlide() {
        if ($('#slider-1 .date-active').next().hasClass('date-slide')) {
            $('#slider-1 .date-prev').removeClass('date-prev');
            $('#slider-1 .date-active').removeClass('date-active').addClass('date-prev');
            $('#slider-1 .date-next').removeClass('date-next').addClass('date-active');
            $('#slider-1 .date-active').next().addClass('date-next');

            $slide.hide();
            $('#slider-1 .date-active').show();
            $('.details-time').empty()
            var dTotall = $('.details-time').append($('#slider-1 .date-active,#slider-2 .date-active,#slider-3 .date-active').clone()).html();
        }
    }

    function nextSlide2() {
        if ($('#slider-2 .date-active').next().hasClass('date-slide2')) {
            $('#slider-2 .date-prev').removeClass('date-prev');
            $('#slider-2 .date-active').removeClass('date-active').addClass('date-prev');
            $('#slider-2 .date-next').removeClass('date-next').addClass('date-active');
            $('#slider-2 .date-active').next().addClass('date-next');

            $slide2.hide();
            $('#slider-2 .date-active').show();
            $('.details-time').empty()
            var dTotall = $('.details-time').append($('#slider-1 .date-active,#slider-2 .date-active,#slider-3 .date-active').clone()).html();
        }
    }

    function nextSlide3() {
        if ($('#slider-3 .date-active').next().hasClass('date-slide3')) {
            $('#slider-3 .date-prev').removeClass('date-prev');
            $('#slider-3 .date-active').removeClass('date-active').addClass('date-prev');
            $('#slider-3 .date-next').removeClass('date-next').addClass('date-active');
            $('#slider-3 .date-active').next().addClass('date-next');

            $slide3.hide();
            $('#slider-3 .date-active').show();
            $('.details-time').empty()
            var dTotall = $('.details-time').append($('#slider-1 .date-active,#slider-2 .date-active,#slider-3 .date-active').clone()).html();
        }
    }

    // Switch to previous slide
    function prevSlide() {
        if ($('#slider-1 .date-active').prev().hasClass('date-slide')) {
            $('#slider-1 .date-next').removeClass('date-next');
            $('#slider-1 .date-active').removeClass('date-active').addClass('date-next');
            $('#slider-1 .date-prev').removeClass('date-prev').addClass('date-active');
            $('#slider-1 .date-active').prev().addClass('date-prev');

            $slide.hide();
            $('#slider-1 .date-active').show();
            $('.details-time').empty()
            var dTotall = $('.details-time').append($('#slider-1 .date-active,#slider-2 .date-active,#slider-3 .date-active').clone()).html();
        }
    }

    function prevSlide2() {
        if ($('#slider-2 .date-active').prev().hasClass('date-slide2')) {
            $('#slider-2 .date-next').removeClass('date-next');
            $('#slider-2 .date-active').removeClass('date-active').addClass('date-next');
            $('#slider-2 .date-prev').removeClass('date-prev').addClass('date-active');
            $('#slider-2 .date-active').prev().addClass('date-prev');

            $slide2.hide();
            $('#slider-2 .date-active').show();
            $('.details-time').empty()
            var dTotall = $('.details-time').append($('#slider-1 .date-active,#slider-2 .date-active,#slider-3 .date-active').clone()).html();
        }
    }

    function prevSlide3() {
        if ($('#slider-3 .date-active').prev().hasClass('date-slide3')) {
            $('#slider-3 .date-next').removeClass('date-next');
            $('#slider-3 .date-active').removeClass('date-active').addClass('date-next');
            $('#slider-3 .date-prev').removeClass('date-prev').addClass('date-active');
            $('#slider-3 .date-active').prev().addClass('date-prev');

            $slide3.hide();
            $('#slider-3 .date-active').show();
            $('.details-time').empty()
            var dTotall = $('.details-time').append($('#slider-1 .date-active,#slider-2 .date-active,#slider-3 .date-active').clone()).html();
        }
    }


})