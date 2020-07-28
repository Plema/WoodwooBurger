$(document).ready(function () {
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

})