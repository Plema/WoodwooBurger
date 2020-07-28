$(document).ready(function () {
    jcf.replaceAll();
    $(".icon-edit").on("click", function () {
            var a = $(this).parents('.form').find("p").removeClass('active').html();
            $(this).parents('.form').find(".icons").removeClass('active')
            $(this).parents('.form').find(".form-column").addClass("active").siblings()
            // $(this).parents().siblings().find("input").val(a)
        }),

        $("button.icon-delete").on("click", function () {
            $(this).parents('.form').css('display', 'none')
        })

        $(".address .form-column button").on("click", function () {
            $(this).parents('.form-column').removeClass('active')
            $(this).parents('.form').find(".icons").addClass('active')
            var valueInput = $(this).parents('.form-column').find("input").val();
            $(this).parents('.form').find("p").html(valueInput).addClass("active")
        })
})