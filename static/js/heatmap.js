var myMap = L.map("map", {
    center: [37.7749, -122.4194],
    zoom: 13
  });

  // Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

const data = "../resources/weather.json"

d3.json(data).then(function(Response) {

  console.log(Response);

  var heatArray = [];

  for (var i = 0; i < Response.length; i++) {
    var data = [Response[i].metadata];
  

    if (data) {
      heatArray.push([metadata.Lat, metadata.Lng])
    }
  }

  var heat = L.heatLayer(heatArray, {
    radius: 80,
    blue: 35
  }).addTo(myMap)
});