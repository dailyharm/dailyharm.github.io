function getMyPosition() {
  
  navigator.geolocation.getCurrentPosition
  
  (function(position) {
    
    console.log("Position trouvée : Latitude="+position.coords.latitude+" Longitude="+position.coords.longitude);
    
    console.log(position.coords);
    
    document.getElementById('alti').innerHTML = "Altitude : "+position.coords.altitude+" M";
    
    document.getElementById('longi').innerHTML = "Longitude : "+position.coords.longitude;
     
    document.getElementById('latitu').innerHTML = "Latitude :"+position.coords.latitude;
     
    document.getElementById('precis').innerHTML = " Niveau de précision : "+position.coords.accuracy;
    
    document.getElementById('deg').innerHTML = "Orientation de l'appareil : "+position.coords.heading;
     
  }, function(error) {
    console.log("Erreur de géoloc N°"+error.code+" : "+error.message);
    console.log(error);
    
  }, {
   timeout: 2000,
   maximumAge: 60000
});
 
}
function showIp(str) {
  if (str.length == 0) {
    document.getElementById('ip').innerHTML = "";
    return;
  } else {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("ip").innerHTML = this.responseText;
        return;
      } else if (str.length == true ) {
        console.log("erreur d'obtention d'ip :"+this.str);
      } else {
        // traitement de l'erreur 
        console.log("that's good !");
      }
  }
  xmlhttp.open("GET", "ip.php?q="+str, true);
  xmlhttp.send();
 }
}
