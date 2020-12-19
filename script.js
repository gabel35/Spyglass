    // var currecncyName = "pa"
    // var queryURL = "https://restcountries.eu/rest/v2/lang/" + currecncyName;
    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    //   })
    //     .then(function(response) {
    //       console.log(queryURL);
    //       console.log(response);
    //  })

function clear() {
    $("#resultDiv").empty();
}

$("#thatBtn").on("click", function(event) {
    event.preventDefault();
    clear();

    var countryName = $("#countryName").val().trim();
    console.log(countryName);
    var queryURL = "https://restcountries.eu/rest/v2/name/" + countryName;
    $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
          console.log(queryURL);
          console.log(response);

        for (var i = 0;i<response.length;i++){
            var curDiv = $("#resultDiv");
            var countryName = response[i].name;
            console.log(countryName);
            var resultName = $("<p>").text("Country: " + countryName);
            curDiv.append(resultName);

            console.log(response[i].currencies);
            for (var c = 0; c<response[i].currencies.length; c++){
                var countryCurrency = {
                    code: response[i].currencies[c].code,
                    name: response[i].currencies[c].name,
                    symbol: response[i].currencies[c].symbol
                };
                console.log(countryCurrency);
                var resultCurrencyC = $("<p>").text("Currency Code: " + countryCurrency.code);
                var resultCurrencyN = $("<p>").text("Currency Name: " + countryCurrency.name);
                var resultCurrencyS = $("<p>").text("Currency Symbol: " + countryCurrency.symbol);
                curDiv.append(resultCurrencyC);
                curDiv.append(resultCurrencyN);
                curDiv.append(resultCurrencyS);
            }   
            
            for (var l = 0; l<response[i].languages.length; l++) {
                var countryLang = response[i].languages[l].name;
                console.log(countryLang);
                var resultLang = $("<p>").text("Language in English: " + countryLang);
                curDiv.append(resultLang);

                var countryNativeLang = response[i].languages[l].nativeName;
                console.log(countryNativeLang);
                var resultNativeLang = $("<p>").text("Language in Native Language: " + countryNativeLang);
                curDiv.append(resultNativeLang);
                var breakDiv = $("<br>");
            }


            curDiv.append(breakDiv)
            //text(JSON.stringify(response));
        }
     })
})

    

//    // API key = b1785630c546994e1265e973c055fa4a09c9f1a5
//        //  Currency convert GET: https://api.getgeoapi.com/api/v2/currency/convert
//        //  Currency list GET: https://api.getgeoapi.com/api/v2/currency/list
//        //  Historical Conversion rate GET: https://api.getgeoapi.com/api/v2/currency/historical/{YYYY-MM-DD}
        
//        var listQueryURL = "https://api.getgeoapi.com/api/v2/currency/list?api_key=b1785630c546994e1265e973c055fa4a09c9f1a5&format=json";

//        $.ajax({
//        url: listQueryURL,
//        method: "GET"
//        }).then(function(response) {
//        console.log(response)
//        });
//        var country1 = "EUR"
//        var country2 = "GBP"
//        var amount = "10"
//        var convertQueryURL = "https://api.getgeoapi.com/api/v2/currency/convert?api_key=b1785630c546994e1265e973c055fa4a09c9f1a5&from=" + country1 + "&to=" + country2+ "&amount=" + amount + "&format=json";

//        $.ajax({
//        url: convertQueryURL,
//        method: "GET"
//        }).then(function(response) {
//        console.log(response)
//        });

