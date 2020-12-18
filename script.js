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

