/*! project-name v0.0.1 | (c) 2020 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
// Initialize and add the map
function initMap() {
  // Map options
  var options = {
    zoom: 13,
    center: { lat: 49.206271, lng: 16.605731 }
  };
  // New Map
  var map = new google.maps.Map(document.getElementById("map"), options);

  var markers = [
    {
      coords: { lat: 49.20395, lng: 16.607083 },
      content: "<h4 class='text-body'>Coffee Trail Lidická<h4>"
    },
    {
      coords: { lat: 49.209716, lng: 16.603439 },
      content: "<h4 class='text-body'>Coffee Trail Bar<h4>"
    }
  ];

  // Loop through Markers
  for (var i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }

  // Add Marker Function
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map
    });

    // Check for Content
    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.content
      });

      marker.addListener("click", (function() {
        infoWindow.open(map, marker);
      }));
    }
  }
}
