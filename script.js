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
    //pulling user input for country name for API search//
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
         //grabbing the country name, its capital, an population size from the API and other variables//
        for (var i = 0;i<response.length;i++){
            var curDiv = $("#resultDiv");
            countryName = response[i].name;
            var capitalCity = response[i].capital;
            var countryPop = response[i].population;
            var resultName = $("<p>").text("Country: " + countryName);
            var resultCapCity = $("<p>").text("Capital City: " + capitalCity);
            var resultPop = $("<p>").text("Population Size: " + countryPop);
            curDiv.append(resultName);
            curDiv.append(resultCapCity);
            curDiv.append(resultPop);

            //grabbing all currencies that the country uses and their info//
            for (var c = 0; c<response[i].currencies.length; c++){
                var countryCurrency = {
                    code: response[i].currencies[c].code,
                    name: response[i].currencies[c].name,
                    symbol: response[i].currencies[c].symbol
                };
                var resultCurrencyC = $("<p>").text("Currency Code: " + countryCurrency.code);
                var resultCurrencyN = $("<p>").text("Currency Name: " + countryCurrency.name);
                var resultCurrencyS = $("<p>").text("Currency Symbol: " + countryCurrency.symbol);
                curDiv.append(resultCurrencyC);
                curDiv.append(resultCurrencyN);
                curDiv.append(resultCurrencyS);
            }   
            //grabbing all the languages that the country uses En and Native language bersion//
            for (var l = 0; l<response[i].languages.length; l++) {
                var countryLang = response[i].languages[l].name;
                var resultLang = $("<p>").text("Language in English: " + countryLang);
                curDiv.append(resultLang);

                var countryNativeLang = response[i].languages[l].nativeName;
                var resultNativeLang = $("<p>").text("Language in Native Language: " + countryNativeLang);
                curDiv.append(resultNativeLang);
                var breakDiv = $("<br>");
                
            }


            curDiv.append(breakDiv)
            //text(JSON.stringify(response));


        }
     })
})
