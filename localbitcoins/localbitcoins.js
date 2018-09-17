// https://localbitcoins.com/api/payment_methods/
var paymentMethods = {
    ALIPAY: "Alipay",
    BPAY: "BPAY Bill Payment",
    CASHU: "CashU",
    WORLDREMIT: "Worldremit",
    ASTROPAY: "AstroPay",
    MPESA_KENYA: "M-PESA Kenya (Safaricom)",
    ALTCOIN_ETH: "Ethereum altcoin",
    SEPA: "SEPA (EU) bank transfer",
    EASYPAISA: "Easypaisa",
    PAYONEER: "Payoneer",
    PAYEER: "Payeer",
    GIFT_CARD_CODE_APPLE_STORE: "Apple Store Gift Card Code",
    MOBILEPAY_DANSKE_BANK_NO: "MobilePay NO",
    ALTCOIN_XMR: "Monero altcoin",
    PAYPALMYCASH: "PayPal My Cash",
    ECOCASH: "EcoCash",
    VENMO: "Venmo",
    TRANSFERWISE: "Transferwise",
    GIFT_CARD_CODE_EBAY: "Ebay Gift Card Code",
    OTHER_PRE_PAID_DEBIT: "Other Pre-Paid Debit Card",
    ALTCOIN_XRP: "Ripple altcoin",
    PAYZA: "Payza",
    PAXUM: "Paxum",
    CASH_DEPOSIT: "Cash deposit",
    PERFECT_MONEY: "Perfect Money",
    MONEYBOOKERS: "Moneybookers / Skrill",
    POSTAL_ORDER: "Postal order",
    GIFT_CARD_CODE_AMAZON: "Amazon Gift Card Code",
    SPECIFIC_BANK: "Transfers with specific bank",
    ALTCOIN_LTC: "Litecoin altcoin",
    TELEGRAMATIC_ORDER: "Telegramatic Order",
    RELOADIT: "Reloadit",
    SUPERFLASH: "Superflash",
    ADVCASH: "advcash",
    CHASE_QUICKPAY: "Chase Quickpay",
    DWOLLA: "Dwolla",
    GIFT_CARD_CODE: "Gift Card Code",
    XOOM: "Xoom",
    WEBMONEY: "WebMoney",
    YANDEXMONEY: "Yandex Money",
    OTHER_ONLINE_WALLET_GLOBAL: "Other Online Wallet(Global)",
    MOBILEPAY_DANSKE_BANK_DK: "MobilePay",
    GIFT_CARD_CODE_GLOBAL: "Gift Card Code(Global)",
    ONECARD: "OneCard",
    ALTCOIN_DASH: "Dash altcoin",
    INTERNATIONAL_WIRE_SWIFT: "International Wire (SWIFT)",
    INTERAC: "Interac e-transfer",
    SERVE2SERVE: "Serve2Serve",
    GIFT_CARD_CODE_WALMART: "Walmart Gift Card Code",
    OTHER_REMITTANCE: "Other Remittance",
    SQUARE_CASH: "Square Cash",
    NETSPEND: "NetSpend Reload Pack",
    WALMART2WALMART: "Walmart 2 Walmart",
    MONEYGRAM: "Moneygram",
    PAYM: "Paym",
    CASHIERS_CHECK: "Cashier's check",
    PostePay: "PostePay",
    SOLIDTRUSTPAY: "SolidTrustPay",
    NETELLER: "Neteller",
    CASH_AT_ATM: "Cash at ATM",
    NATIONAL_BANK: "National bank transfer",
    CASH_BY_MAIL: "Cash by mail",
    BANK_TRANSFER_IMPS: "IMPS Bank Transfer India",
    RIA: "RIA Money Transfer",
    OKPAY: "OKPay",
    PAYPAL: "Paypal",
    LYDIA: "Lydia",
    GIFT_CARD_CODE_STEAM: "Steam Gift Card Code",
    GIFT_CARD_CODE_STARBUCKS: "Starbucks Gift Card Code",
    MPESA_TANZANIA: "M-PESA Tanzania (Vodacom)",
    QIWI: "QIWI",
    VANILLA: "Vanilla",
    CREDITCARD: "Credit card",
    PINGIT: "Pingit",
    TIGOPESA_TANZANIA: "Tigo-Pesa Tanzania",
    MOBILEPAY_DANSKE_BANK: "MobilePay FI",
    HAL_CASH: "Hal-cash",
    OTHER_ONLINE_WALLET: "Other Online Wallet",
    HYPERWALLET: "hyperWALLET",
    PAYSAFECARD: "PaySafeCard",
    GOOGLEWALLET: "Google Wallet",
    VIPPS: "Vipps",
    WU: "Western Union",
    WECHAT: "WeChat",
    OTHER: "Other online payment",
    PYC: "PYC",
    SWISH: "Swish",
    PAYTM: "PayTM"
};

function formatNumber(number) {
    return new Intl.NumberFormat('en-IN').format(number);
};

if ($(".localbitcoins-list-wrapper").length) {
    $.get("http://ip-api.com/json", function (location) {

        var url = "https://cors-anywhere.herokuapp.com/localbitcoins.com/buy-bitcoins-online/" + location.countryCode + "/" + location.country + "/.json";

        $.get(url, function (data) {
                var i = 0;
            $(".localbitcoins-list-wrapper").children("a").each(function () {
                var item = data.data.ad_list[i];
                $(this).prop("href", item.actions.public_view + "?ch=39vp");
                $(this).find(".localbitcoins-item-user").html(item.data.profile.username);
                $(this).find(".localbitcoins-item-price").html(formatNumber(item.data.temp_price));
                $(this).find(".localbitcoins-item-currency").html(item.data.currency);
                $(this).find(".localbitcoins-item-paymentmethod").html(paymentMethods[item.data.online_provider]);
                $(this).find(".localbitcoins-item-feedbackscore").html(item.data.profile.feedback_score);
                $(this).find(".localbitcoins-item-minamount").html(formatNumber(item.data.min_amount));
                $(this).find(".localbitcoins-item-maxamount").html(formatNumber(item.data.max_amount_available));
                $(this).find(".localbitcoins-item-currency2").html(item.data.currency);
                i++;
            });;
        });
    });
}