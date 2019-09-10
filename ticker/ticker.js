var latestBitcoinPrice = localStorage.getItem('latestBitcoinPrice');
$('.btc-price').html(latestBitcoinPrice);

var oldPrice = 0;
$.get("https://currencyrate.azurewebsites.net/api/GetRate?currencyPair=EURSEK&nrOfItems=1&resolution=hour", function (data) {
    var sekEurConversionRate = data.rates[0].rate;

    $.get("https://simpleproxies.azurewebsites.net/btceur", function (data) {

        updateTicker(data.last * sekEurConversionRate);

        var ws = new WebSocket('wss://ws.bitstamp.net');
        ws.onopen = () => {
            ws.send('{"event": "bts:subscribe","data": { "channel": "live_trades_btceur" }}');
        };
        
        ws.onmessage = (e) => {
            var data = JSON.parse(e.data);
            if (data.event != 'trade')
                return;
     
            updateTicker(data.data.price * sekEurConversionRate);
        };        
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


