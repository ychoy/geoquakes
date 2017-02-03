// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).on("ready", function() {

  // CODE IN HERE!
  //
  //
  $.ajax({
    method: "GET",
    url: weekly_quakes_endpoint,
    success: onSuccess,
    error: onError
  });

  function onSuccess(json) {
    
    for (let i=0; i < json.features.length; i++) {
      $(".earthquakes").append(`<li>${json.features[i].properties.title}</li>`)
      var coords = json.features[i].geometry.coordinates;
      var latLng = new google.maps.LatLng(coords[1],coords[0]); 
      
      var house = {
        url: "earthquake.png",
        scaledSize: new google.maps.Size(32, 32)
      }

      var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        icon: house
      });


    }
  }

  function onError(json) {
  }




});


