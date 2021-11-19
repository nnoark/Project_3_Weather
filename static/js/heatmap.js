var myMap = L.map("map", {
    center: [44.58, -103.46],
    zoom: 5
  });

  // Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

const json = "static/resources/weather.json";

d3.json(json).then(function(data) {

  console.log(data);

  var heatArray = [];

  for (var i = 0; i < data.metadata.length; i++) {
    var location = [data.metadata[i].Lat,data.metadata[i].Lng]
  

    if (location) {
      heatArray.push([location[0],location[1]]);
    }
  }

  var heat = L.heatLayer(heatArray, {
    radius: 80,
    blur: 35
  }).addTo(myMap);

});