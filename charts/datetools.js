function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function formateDateForApi(dateUnix) {
    var dateLabel = new Date(dateUnix);
    var year = dateLabel.getFullYear();
    var month = dateLabel.getMonth() + 1;
    var day = dateLabel.getDate();
    var formattedDate = year + "-" + month + '-' + day;
    return formattedDate;
}

function formatDate(dateUnix) {
    var dateLabel = new Date(dateUnix);
    var year = dateLabel.getFullYear() - 2000;
    var month = dateLabel.getMonth() + 1;
    var day = dateLabel.getDate();
    var formattedDate = day + '/' + month;
    return formattedDate;
}

function formatTime(dateUnix) {
    var dateLabel = new Date(dateUnix);
    var hours = dateLabel.getHours();
    var minutes = dateLabel.getMinutes();
    var formattedDate = (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes;
    return formattedDate;
}