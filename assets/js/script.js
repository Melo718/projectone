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