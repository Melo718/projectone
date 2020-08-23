
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
