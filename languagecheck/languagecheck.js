if ($(".language-check-norway").length || $(".language-check-denmark").length) {
    $.get("https://extreme-ip-lookup.com/json/", function (location) {
        if (location.countryCode == "NO") {
            $(".language-check-norway").show();
            $(".ombitcoin-hero-paragraph").hide();
        }
        if (location.countryCode == "DK") {
            $(".language-check-denmark").show();
            $(".ombitcoin-hero-paragraph").hide();
        }
    });
}