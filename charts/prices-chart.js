Chart.defaults.global.defaultFontColor = 'rgba(73, 53, 128, 1)';
Chart.defaults.global.defaultFontFamily = "futura-pt";
Chart.defaults.global.defaultFontSize = 12;

$.get("http://free.currencyconverterapi.com/api/v3/convert?q=USD_SEK&compact=ultra", function (data) {
    // TODO: Fixa correct valutakurs för den dagen
    var sekUsdConversionRate = data.USD_SEK;

    $.get("https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=53&aggregate=7", function (data) {
        var labels = [];
        var prices = [];
        for (var i = 0; i < data.Data.length; i++) {
            var formattedDate = formatDate(data.Data[i].time * 1000);
            labels.push(formattedDate);
            var price = data.Data[i].close * sekUsdConversionRate;
            prices.push(price);
        }

        createChart("chart1year", labels, prices);
    });

    $.get("https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=30&aggregate=3", function (data) {
        var labels = [];
        var prices = [];
        for (var i = 0; i < data.Data.length; i++) {
            var formattedDate = formatDate(data.Data[i].time * 1000);
            labels.push(formattedDate);
            var price = data.Data[i].close * sekUsdConversionRate;
            prices.push(price);
        }

        createChart("chart3months", labels, prices);
    });

    $.get("https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=30&aggregate=1", function (data) {
        var labels = [];
        var prices = [];
        for (var i = 0; i < data.Data.length; i++) {
            var formattedDate = formatDate(data.Data[i].time * 1000);
            labels.push(formattedDate);
            var price = data.Data[i].close * sekUsdConversionRate;
            prices.push(price);
        }

        createChart("chart30days", labels, prices);
    });

    $.get("https://min-api.cryptocompare.com/data/histohour?fsym=BTC&tsym=USD&limit=24", function (data) {
        var labels = [];
        var prices = [];
        for (var i = 0; i < data.Data.length; i++) {
            var formattedTime = formatTime(data.Data[i].time * 1000);
            labels.push(formattedTime);
            var price = data.Data[i].close * sekUsdConversionRate;
            prices.push(price);
        }

        createChart("chart24hours", labels, prices);
    });
});