var myMap = L.map("map", {
    center: [37.7749, -122.4194],
    zoom: 13
  });

  // Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

url = "https://data.sfgov.org/resource/cuks-n6tp.json?$limit=10000";

d3.json(url).then(function(Response) {

  console.log(Response);
});