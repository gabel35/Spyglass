    var currecncyName = "cop"
    var queryURL = "https://restcountries.eu/rest/v2/currency/" + currecncyName;
    $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
          console.log(queryURL);
          console.log(response);
     })



    var language = "es";
    var countryName = "aus"
    // var queryURL = "https://restcountries.eu/rest/v2/lang/" + language;
    var queryURL = "https://restcountries.eu/rest/v2/name/" + countryName;
    
 $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
      console.log(queryURL);
      console.log(response);
 })
   // API key = b1785630c546994e1265e973c055fa4a09c9f1a5
       //  Currency convert GET: https://api.getgeoapi.com/api/v2/currency/convert
       //  Currency list GET: https://api.getgeoapi.com/api/v2/currency/list
       //  Historical Conversion rate GET: https://api.getgeoapi.com/api/v2/currency/historical/{YYYY-MM-DD}
        
       var listQueryURL = "https://api.getgeoapi.com/api/v2/currency/list?api_key=b1785630c546994e1265e973c055fa4a09c9f1a5&format=json";

       $.ajax({
       url: listQueryURL,
       method: "GET"
       }).then(function(response) {
       console.log(response)
       });
       var country1 = "EUR"
       var country2 = "GBP"
       var amount = "10"
       var convertQueryURL = "https://api.getgeoapi.com/api/v2/currency/convert?api_key=b1785630c546994e1265e973c055fa4a09c9f1a5&from=" + country1 + "&to=" + country2+ "&amount=" + amount + "&format=json";

       $.ajax({
       url: convertQueryURL,
       method: "GET"
       }).then(function(response) {
       console.log(response)
       });

