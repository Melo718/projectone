var APIKey = "KmBywIxjpaANpeIoitPkPtCDXEIZZxDJ";

    
    var queryURL = "https://www.ncdc.noaa.gov/cdo-web/api/v2/locations/weather?=" + "q=Charlotte,NorthCarolina&appid=" + APIKey;

    
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      
      .then(function(response) {

        
       
      });


function init() {
    new google.maps.Map(document.getElementById('map'), {
      center: { lat: 35.2271, lng: -80.8431 },
      zoom: 10
    });
  }

  //camilo

var listOfCities = []
var APIKey = "4f148c9563cb2a85404910d3ad39b157";
var city
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey + "&units=imperial";


$.ajax({url: queryURL, method: "GET"})
.then(function(response) {
    console.log(queryURL);
    console.log(response);
});

$("#run-search").on("click", function () {
   city= $("#search-term").val()
    displayWeather()
})

$(".search-data").html("<h3>Forecast</h3>")

$("#clear-search").on("click", function (){
    localStorage.clear("cities")
    listOfCities = []
    $(".buttons-view").empty()
    location.reload()
    })
    

function saveCities() {
    localStorage.setItem("cities", JSON.stringify(listOfCities));
}
//=======
  
   
  var APIKey = "KmBywIxjpaANpeIoitPkPtCDXEIZZxDJ";

    // Here we are building the URL we need to query the database
    var queryURL = "https://www.ncdc.noaa.gov/cdo-web/api/v2/locations/weather?=" + "q=Charlotte,NorthCarolina&appid=" + APIKey;

    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // We store all of the retrieved data inside of an object called "response"
      .then(function(response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);

        // Transfer content to HTML
        $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        
        // Convert the temp to fahrenheit
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;

        // add temp content to html
        $(".temp").text("Temperature (K) " + response.main.temp);
        $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + tempF);
      });
//master
