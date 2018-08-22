$('.art-date, .art-short-date, .art-list-date-small, .rel-art-date').each(function () {
    $(this).text($(this).text().replace("January", "Januari"));
    $(this).text($(this).text().replace("February", "Februari"));
    $(this).text($(this).text().replace("March", "Mars"));
    $(this).text($(this).text().replace("May", "Maj"));
    $(this).text($(this).text().replace("June", "Juni"));
    $(this).text($(this).text().replace("August", "Augusti"));
    $(this).text($(this).text().replace("September", "September"));
    $(this).text($(this).text().replace("October", "Oktober"));
    $(this).text($(this).text().replace("Monday", "Måndag"));
    $(this).text($(this).text().replace("Tuesday", "Tisdag"));
    $(this).text($(this).text().replace("Wednesday", "Onsdag"));
    $(this).text($(this).text().replace("Thursday", "Torsdag"));
    $(this).text($(this).text().replace("Friday", "Fredag"));
    $(this).text($(this).text().replace("Saturday", "Lördag"));
    $(this).text($(this).text().replace("Sunday", "Söndag"));
});