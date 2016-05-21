
$("#tempF").hide();  
 $("button").on("click", function() {
        $("#tempC").toggle();
       $("#tempF").toggle();   
      
        });
var position;  
$.getJSON('http://ipinfo.io', function(data) {
  var i = data.loc.indexOf(',');
  var lat = data.loc.slice(0, i);
  var long = data.loc.slice(i+1, data.loc.length);
  var city = data.city;

  var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=5c9de76704388d0c233518e3059e7cd3";
 $.getJSON(url, function(info) {
   var tempC = Math.round(info.main.temp);
   var tempF = (tempC *9)/5 + 32;
   $("#city").text(info.name + "," + info.sys.country);
   $("#tempF").html(tempF + " &#176;F");
    $("#tempC").html(tempC + " &#176;C");
   $("#weather").text(info.weather[0].description);
   if(info.weather[0].main === "Clouds") {
     $("#icon").addClass("fa fa-cloud");
   }
   else if(info.weather[0].main === "Clear") {
     $("#icon").addClass("fa fa-sun-o");
   }
   else if(info.weather[0].main === "Mist") {
     $("#icon").html("&#9926;");
   }
    else if(info.weather[0].main === "Rain") {
     $("#icon").html("&#9926;");
   }
    else if(info.weather[0].main === "Snow") {
     $("#icon").html("&#10052;");
   }
   
  
   
  });
  
  
  

});


