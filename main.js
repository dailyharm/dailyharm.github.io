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
function getIP() {
  let ajax = new XMLHttpRequest();
  ajax.onload = function() {
    if (this.status == 200 ) {
      let ip=this.response;
      let reg=new RegExp("^[0-9]{1,3}.+[0-9]{1,3}.+[0-9]{1,3}.+[0-9]{1,3}$");
      if (reg.test(ip)) {
        document.getElementById("ip").innerHTML=ip;
      } else {
        document.getElementById("ip").innerHTML="Erreur de retour";
      }
    }
  }
  let url = "ip.php";
  ajax.open("GET", url, true);
  ajax.send();
}
