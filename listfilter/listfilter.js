// Hack for allowing filtering of lists. Find categories in text fields and add as classes
$('.wallet-collection-list .w-dyn-item .category:not(.w-condition-invisible)').each(function () {
    var categoryName = $(this).text();
    $(this).parent().parent().addClass(categoryName);
});

$('input[type="checkbox"]').click(function () {
    $('.wallet-item').addClass('visible-in-total');

    $('.categorygroup').each(function () {
        $(this).children().children().children('input[type="checkbox"]:checked').each(function () {
            $('.' + this.name).addClass('visible-in-group');
        });

        $(':not(.visible-in-group)').removeClass('visible-in-total');
        $('.wallet-item').removeClass('visible-in-group');
    });

    $('.wallet-item').hide();
    $('.visible-in-total').fadeIn();
});