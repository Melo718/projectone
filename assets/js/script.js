const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temp-value p");
const descElement = document.querySelector(".temp-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

const weather = {};

weather.temperature = {
  unit : "celsius"
}
const KELVIN =273;
const key = "4385c4f29ff50ae3190f2e74d27619ba";

if(`geolocation` in navigator){
  navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
  notificationElement.getElementsByClassName.display = "block";
  notificationElement.innerHTML = "<p>Browser dosent support geolocation</p>";
}

function setPosition(position){
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  getWeather(latitude,longitude);
}

function showError(error){
  notificationElement.style.display = "block";
  notificationElement.innerHTML =  `<p> ${error.message} </p>`;
}

function getWeather(latitude, longitude){
  let api = `https://api.openweathermap.org/data/2.5/weather?
  lat=${latitude}&lon=${longitude}&appid=${key}`;
  console.log(api);
  fetch(api)
  .then(function(response){
    let data = response.json();
    return data;
  })
  .then(function(data){
    weather.temperature.value = Math.floor(data.main.temp - KELVIN);
    weather.description = data.weather[0].icon;
    weather.city = data.name;
    weather.country = data.sys.country;
  })
  .then(function(){
    displayWeather();
  })
}

function displayWeather(){
  iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
  tempElement.innerHTML = `${weather.temperature.value}°<span>F</span>`;
  descElement.innerHTML = weather.description;
  locationElement.innerHTML =  `${weather.city}, ${weather.counrty}`;
}