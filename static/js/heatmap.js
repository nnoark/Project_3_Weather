var myMap = L.map("map", {
    center: [37.7749, -122.4194],
    zoom: 5
  });

  // Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

const data = "static/resources/weather.json"

d3.json(data).then(function(data) {

  console.log(data);

  var heatArray = [];

  for (var i = 0; i < data.length; i++) {
    var x = [data[i].metadata];
  

    if (x) {
      heatArray.push([data.Lat[i], data.Lng[i]]);
    }
  }

  var heat = L.heatLayer(heatArray, {
    radius: 80,
    blur: 35
  }).addTo(myMap);

});