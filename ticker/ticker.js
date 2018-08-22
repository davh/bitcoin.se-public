var latestBitcoinPrice = localStorage.getItem('latestBitcoinPrice');
$('.btc-price').html(latestBitcoinPrice);

var oldPrice = 0;
// https://stackoverflow.com/questions/3139879/how-do-i-get-currency-exchange-rates-via-an-api-such-as-google-finance
$.get("http://free.currencyconverterapi.com/api/v3/convert?q=USD_SEK&compact=ultra", function (data) {
    var sekUsdConversionRate = data.USD_SEK;

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

    localStorage.setItem('latestBitcoinPrice', formattedPrice);
}

function formatPrice(x) {
    if (isNaN(x)) return "";

    n = x.toString().split('.');
    return n[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ") + (n.length > 1 ? "." + n[1] : "");
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


