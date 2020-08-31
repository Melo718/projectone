
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

 
=======
const weatherkey = '4f148c9563cb2a85404910d3ad39b157';
const mtbkey = '200883403-ada2291e9279c2012a03db0c4517b4ff';
const mapkey = 'AIzaSyAAnMgdCdZHfBYWb1ASE4k7mQrvSwKK3Es';
  
  function weatherBallon( cityID ) {
      fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + weatherkey)  
      .then(function(resp) { return resp.json() })
      .then(function(data) {
          drawWeather(data);
      })
      .catch(function() {
      });
  }
  function drawWeather( d ) {
    var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
    var description = d.weather[0].description; 
      
      document.getElementById('description').innerHTML = description;
      document.getElementById('temp').innerHTML = fahrenheit + '&deg;';
  }
  window.onload = function() {
      weatherBallon( 4460243 );
  }; 

  function init() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 35.2271, lng: -80.8431 },
      zoom: 10
    });
    const bikeLayer = new google.maps.BicyclingLayer();
    bikeLayer.setMap(map);
  }

