


// LEAFLET MAP LOGIC

console.log("logic.js is loaded.  Matt was here");

// Creating map object
var myMap = L.map("map", {
  center: [39.15, -84.5],
  zoom: 11
});

// Adding tile layer to the map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);







// Store API query variables
var baseURL = "./api/v1.0/neighborhood_incidents";
//var date = "$where=created_date between'2016-01-01T00:00:00' and '2017-01-01T00:00:00'";
//var complaint = "&complaint_type=Rodent";
//var limit = "&$limit=10000";

// Assemble API query URL





//Grab the data with d3
d3.json(baseURL).then(function(response) {
  console.log("Here is the json response for the map markers:");
  console.log(response);
  // Create a new marker cluster group
  var markers = L.markerClusterGroup();

  // Loop through data
  for (var i = 0; i < response.length; i++) {

    // Set the data location property to a variable
    var location = response[i];

    // Check for location property
    if (location) {

      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(   L.marker(   [   location.latitude, location.longitude   ]  )
        .bindPopup(response[i].descriptor));
    }

  }

  // Add our marker cluster layer to the map
   myMap.addLayer(markers);

});





// Use this link to get the geojson data.
var link = "./static/data/Cincinnati_Community_Council_Boundaries.geojson"



// Grabbing our GeoJSON data..
d3.json(link).then(function(data) {
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(data, {
    style: function(feature) {
      return {
        color: "navy",
        fillColor: "blue",
        fillOpacity: 0.2,
        weight: 1.5
      }
    },

    onEachFeature: function(feature, layer) {
      // Set mouse events to change map styling
      layer.on({
        // When a user's mouse touches a map feature, the mouseover event calls this function, that feature's opacity changes to 90% so that it stands out
        mouseover: function(event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.5
          });
        },
        // When the cursor no longer hovers over a map feature - when the mouseout event occurs - the feature's opacity reverts back to 50%
        mouseout: function(event) {
          layer = event.target;
          layer.setStyle({
            fillOpacity: 0.2
          });
        },
        // When a feature (neighborhood) is clicked, it is enlarged to fit the screen
        click: function(event) {
          console.log("clicked neighborhood:", event.target.feature.properties.NEIGH);
          var neighborhood = event.target.feature.properties.NEIGH;
          // DrawLineGraph(neighborhood);
        }
      });
      // Giving each feature a pop-up with information pertinent to it
      layer.bindPopup("<h1>" + feature.properties.NEIGH + "</h1> <hr> <h2>" + "Matt was here" + "</h2>");

    }




  }).addTo(myMap);
});

