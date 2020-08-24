  
   
  var APIKey = "KmBywIxjpaANpeIoitPkPtCDXEIZZxDJ";

    
    var queryURL = "https://www.ncdc.noaa.gov/cdo-web/api/v2/locations/weather?=" + "q=Charlotte,NorthCarolina&appid=" + APIKey;

    
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      
      .then(function(response) {

        
       
      });
