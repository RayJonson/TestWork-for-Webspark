$( document ).ready(function() {
    $(function () {
        $('input.dates-input').daterangepicker({
            opens: 'right',
            singleDatePicker: true,
            "autoApply": true,
            locale: {
                format: 'DD_MM_YYYY'
            }
        }, function (start, end, label) {

        });
    });
    $('.dates-input').val('');
    $('.dates-input').attr('readonly', 'readonly');
    $('.close').on('click', function () {
        $(this).parents('.header__dateSelect-holder').find('input').val('')
    });
    $('.select').on('click', function () {
        $(this).parents('.header__dateSelect-holder').find('input').trigger('click')
    });
    //$('.catalog__list').data('attr',$('.catalog__options a:first-of-type').attr('data-attr'));

    $('.catalog__options a').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('.catalog__list').attr('data-attr',$(this).attr('data-attr'));
        $('.catalog__options a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
    });
    $('.menu').on('click', function () {
        $(this).toggleClass('active');
        $('html').toggleClass('active');
        $('.header').toggleClass('active');

    });

});
$(window).on("load resize", function () {
    if (window.innerWidth < 767) {
        $('.catalog__options a.tiles').trigger('click')
    }
});