var latestBitcoinPrice = localStorage.getItem('latestBitcoinPriceUSD');
$('.btc-price').html(latestBitcoinPrice);

var oldPrice = 0;
$.get("https://www.bitstamp.net/api/ticker", function (data) {

    updateTicker(data.last);

    var pusher = new Pusher('de504dc5763aeef9ff52');
    var tradesChannel = pusher.subscribe('live_trades');
    tradesChannel.bind('trade', function (data) {
        updateTicker(data.price);
    });
});

function updateTicker(price) {
    if (price != oldPrice)
        updateDirection(price);
    oldPrice = price;
    var formattedPrice = formatPrice(Math.round(price));
    $('.btc-price').html(formattedPrice);

    localStorage.setItem('latestBitcoinPriceUSD', formattedPrice);
}

function formatPrice(x) {
    if (isNaN(x)) return "";

    n = x.toString().split('.');
    return n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (n.length > 1 ? "." + n[1] : "");
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


