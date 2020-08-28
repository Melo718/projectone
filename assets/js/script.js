var APIKey = "4385c4f29ff50ae3190f2e74d27619ba";

var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
"q=Charlotte,Burundi&appid=" + APIKey; 


$.ajax({
  url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(queryURL);
    console.log(response);
    
    $(".city").html("<h6>" + response.name + "</h6>");
    
    
    
    var tempF = (response.main.temp - 273.15) * 1.80 + 32;
    
    $(".tempF").text(tempF.toFixed() + "°F");
  })

  req = $.getJSON(queryURL);
  req.then(function(resp) {
    var prefix = 'wi wi-';
    var code = resp.weather[0].id;
    var icon = weatherIcon[code].icon;
  
    
    icon = prefix + icon;
  })

 
