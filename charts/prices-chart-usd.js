Chart.defaults.global.defaultFontColor = 'rgba(73, 53, 128, 1)';
Chart.defaults.global.defaultFontFamily = "futura-pt";
Chart.defaults.global.defaultFontSize = 12;

$.get("https://currencyrate.azurewebsites.net/api/GetRate?currencyPair=BTCUSD&nrOfItems=365&step=7", function (data) {
    var labels = [];
    var prices = [];
    for (var i = 0; i < data.rates.length; i++) {
        var formattedDate = formatDate(data.rates[i].unixDate * 1000);
        labels.push(formattedDate);
        var price = data.rates[i].rate;
        prices.push(price);
    }

    createChart("chart1year", labels, prices);
});

$.get("https://currencyrate.azurewebsites.net/api/GetRate?currencyPair=BTCUSD&nrOfItems=90&step=3", function (data) {
    var labels = [];
    var prices = [];
    for (var i = 0; i < data.rates.length; i++) {
        var formattedDate = formatDate(data.rates[i].unixDate * 1000);
        labels.push(formattedDate);
        var price = data.rates[i].rate;
        prices.push(price);
    }

    createChart("chart3months", labels, prices);
});

$.get("https://currencyrate.azurewebsites.net/api/GetRate?currencyPair=BTCUSD&nrOfItems=30", function (data) {
    var labels = [];
    var prices = [];
    for (var i = 0; i < data.rates.length; i++) {
        var formattedDate = formatDate(data.rates[i].unixDate * 1000);
        labels.push(formattedDate);
        var price = data.rates[i].rate;
        prices.push(price);
    }

    createChart("chart30days", labels, prices);
});

$.get("https://currencyrate.azurewebsites.net/api/GetRate?currencyPair=BTCUSD&nrOfItems=24&resolution=hour", function (data) {
    var labels = [];
    var prices = [];
    for (var i = 0; i < data.rates.length; i++) {
        var formattedTime = formatTime(data.rates[i].unixDate * 1000);
        labels.push(formattedTime);
        var price = data.rates[i].rate;
        prices.push(price);
    }

    createChart("chart24hours", labels, prices);
});
