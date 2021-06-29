$(document).ready(function(){
  
  var city;
  //function buttonClick() {
	  $("#buttonCli").on("click",function(){
      city= document.getElementById("city").value;
  

//Geolocation
  $.getJSON("http://ip-api.com/json", function(geoData){
    
    
    var api="https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=1635890035cbba097fd5c26c8ea672a1";

	

  $.getJSON(api, function(data){
//Conversion from UNIX timestamp to actual date
  
	 
	
	
  var timestamp=data.list[0].dt;
  var a=new Date(timestamp*1000);
  var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var dayOfWeek=days[a.getDay()]
  $("#day1").html(dayOfWeek);
  $("#day2").html(days[(a.getDay())+1]);
  $("#day3").html(days[(a.getDay())+2]);
  $("#day4").html(days[(a.getDay())+3]);
  $("#day5").html(days[(a.getDay())+4]);



//Temperatures
  //var cTemp=((data.main.temp)-273.15).toFixed(2);
  //var fTemp=((data.main.temp)*(9/5)-459.67).toFixed(2);
  var temp1=data.list[0].main.temp;
  var temp2=data.list[1].main.temp;
  var temp3=data.list[2].main.temp;
  var temp4=data.list[3].main.temp;
  
  $("#temp1").html(temp1);
  $("#temp2").html(temp2);
  $("#temp3").html(temp3);
  $("#temp4").html(temp4);
  //Date
  var date1=data.list[0].dt_txt;
  var date2=data.list[4].dt_txt;
  var date3=data.list[12].dt_txt;
  var date4=data.list[20].dt_txt;
  
  $("#date1").html(date1);
  $("#date2").html(date2);
  $("#date3").html(date3);
  $("#date4").html(date4);
 


 //minimum temperature 
  var min1=data.list[0].main.temp_min;
  var min2=data.list[1].main.temp_min;
  var min3=data.list[2].main.temp_min;
  var min4=data.list[3].main.temp_min;
  
  $("#min1").html(min1);
  $("#min2").html(min2);
  $("#min3").html(min3);
  $("#min4").html(min4);
  
 //maximum temperature 
  var max1=data.list[0].main.temp_max;
  var max2=data.list[1].main.temp_max;
  var max3=data.list[2].main.temp_max;
  var max4=data.list[3].main.temp_max;
 
  $("#max1").html(max1);
  $("#max2").html(max2);
  $("#max3").html(max3);
  $("#max4").html(max4);
 //pressure
  var pres1=data.list[0].main.pressure;
  var pres2=data.list[1].main.pressure;
  var pres3=data.list[2].main.pressure;
  var pres4=data.list[3].main.pressure;
 
  $("#pres1").html(pres1);
  $("#pres2").html(pres2);
  $("#pres3").html(pres3);
  $("#pres4").html(pres4);
 //Humidity
  var hum1=data.list[0].main.humidity;
  var hum2=data.list[1].main.humidity;
  var hum3=data.list[2].main.humidity;
  var hum4=data.list[3].main.humidity;
 
  $("#hum1").html(hum1);
  $("#hum2").html(hum2);
  $("#hum3").html(hum3);
  $("#hum4").html(hum4);
  
  
  });

  });
  });
});
