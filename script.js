


function displayWeather(file){
    let temp=file.main.temp
    let humidity=file.main.humidity
    let description=file.weather[0].description
    let wind=file.wind.speed
    console.log(temp,humidity,description);
    let htmlData=`
    <div class="container">
        <div class="widget">
          <div class="details">
            <div class="temperature">${temp}</div>
            <div class="summary">
              <p class="summaryText">${description}</p>
            </div>
            <div class="precipitation">Humidity: ${humidity}</div>
            <div class="wind">Wind: ${wind}</div>
          </div>
          <div class="pictoBackdrop"></div>
          <div class="pictoFrame"></div>
          <div class="pictoCloudBig"></div>
          <div class="pictoCloudFill"></div>
          <div class="pictoCloudSmall"></div>
          <div class="iconCloudBig"></div>
          <div class="iconCloudFill"></div>
          <div class="iconCloudSmall"></div>
        </div>
      </div>
    `
    document.getElementById('result').innerHTML=htmlData

}

function fetchWeather(){
    let placeName=box.value
    var url=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${placeName}&appid=8f9164d0bb1a347b51a7d0e25e247b6c`
    fetch(url).then(res=>res.json()).then(data=>displayWeather(data))
    
}


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition,showError);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude); 
}

function showError( error ) {
    console.log( 'getCurrentPosition returned error', error);
}

// function getlocation(){
//     /* Chrome need SSL! */
//     var is_chrome = /chrom(e|ium)/.test( navigator.userAgent.toLowerCase() );
//     var is_ssl    = 'https:' == document.location.protocol;
//     if( is_chrome && ! is_ssl ){
//         return false;
//     }
//     /* HTML5 Geolocation */
//     navigator.geolocation.getCurrentPosition(
//         function( position ){ // success cb

//             /* Current Coordinate */
//             var lat = position.coords.latitude;
//             var lng = position.coords.longitude;
//             var google_map_pos = new google.maps.LatLng( lat, lng );

//             /* Use Geocoder to get address */
//             var google_maps_geocoder = new google.maps.Geocoder();
//             google_maps_geocoder.geocode(
//                 { 'latLng': google_map_pos },
//                 function( results, status ) {
//                     if ( status == google.maps.GeocoderStatus.OK && results[0] ) {
//                         console.log( results[0].formatted_address );
//                         currentlocation = results[0].formatted_address;
//                         console.log(currentlocation);
//                     }
//                 }
//             );
//         },
//         function(){ // fail cb
//         }
//     );
// }



// getlocation()
getLocation()