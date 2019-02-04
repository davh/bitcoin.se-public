var latestBitcoinPrice = localStorage.getItem('latestBitcoinPrice');
$('.btc-price').html(latestBitcoinPrice);

var oldPrice = 0;
// https://stackoverflow.com/questions/3139879/how-do-i-get-currency-exchange-rates-via-an-api-such-as-google-finance
$.get("https://currencyrate.azurewebsites.net/api/GetRate?currencyPair=USDSEK&nrOfItems=1&resolution=hour", function (data) {
    var sekUsdConversionRate = data.rates[0].rate;

    $.get("https://www.bitstamp.net/api/ticker", function (data) {

        updateTicker(data.last * sekUsdConversionRate);

        var pusher = new Pusher('de504dc5763aeef9ff52');
        var tradesChannel = pusher.subscribe('live_trades');
        tradesChannel.bind('trade', function (data) {
            updateTicker(data.price * sekUsdConversionRate);
        });
    });
});

function updateTicker(price) {
    if (price != oldPrice)
        updateDirection(price);
    oldPrice = price;
    var formattedPrice = formatPrice(Math.round(price));
    $('.btc-price').html(formattedPrice);
    $('.updated-time').html(formatTickerDate(new Date));

    localStorage.setItem('latestBitcoinPrice', formattedPrice);
}

function formatPrice(x) {
    if (isNaN(x)) return "";

    n = x.toString().split('.');
    return n[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ") + (n.length > 1 ? "." + n[1] : "");
}

function formatTickerDate(date) {
    var date = date.getHours() + ":" + date.getMinutes();
    return date;
}

function updateDirection(newPrice) {
    if (newPrice > oldPrice) {
        $('.btc-up').show();
        $('.btc-down').hide();
    }
    else {
        $('.btc-down').show();
        $('.btc-up').hide();
    }
}


