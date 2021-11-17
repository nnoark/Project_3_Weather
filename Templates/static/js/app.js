//function for change on drop down menu 
function optionChanged(selectedCity){
  
//   // check if value is selected in dropdown
  console.log (selectedCity);

  //read json file for the data 
  const json_file = "resources/weather.json"

  d3.json(json_file).then((data) => {
    console.log(data);
  
  
  d3.select("#selDataset").html("");

  // select the metadata array from the json file 
  data.metadata.forEach(city =>
        {
         // console.log(city.City);

        d3.select ("#selDataset").append('option').attr('value', city.City).text(city.City);
        });
  

  
  //selected value is passed 
  d3.select ("#selDataset").node().value = selectedCity;
  

  //filter metadata for selected city on dropdown 
  const citySelect = data.metadata.filter(city => (city.City == selectedCity));
  console.log(citySelect);

  const panelDisplay = d3.select("#sample-metadata");
  panelDisplay.html("");
  Object.entries(citySelect[0]).forEach(item=> 
     {
        // console.log(item);
        panelDisplay.append("p").text(`${item[0]}: ${item[1]}`)
     });
      
 
  // gauge chart for humidity
  const gaugeDisplay = d3.select("#gauge");
  gaugeDisplay.html("");

  const humidity = citySelect[0].Humidity;

  const gaugeData = [{
    domain: { x: [0, 1], y: [0, 1] },
    value: humidity,
    title: { text: "Humidity" },
    type: "indicator",
    mode: "gauge+number",
    gauge: {
      axis: { range: [null, 100] },
      bar: { color: "white" },
      steps: [
        { range: [0, 20], color: "lightgray" },
        { range: [20, 40], color: "gray" },
        { range: [40, 60], color: "lightblue" },
        { range: [60, 80], color: "blue" },
        { range: [80, 100], color: "lightgreen" }
      ]
    }
  }];

  const layout = { width: 600, height: 400, margin: { t: 0, b: 0 } };

Plotly.newPlot("gauge", gaugeData, layout);
  });
}

  //start at New york City
  optionChanged("New York City");


//   //event on change takes the value and calls the function during drop down selection 

// d3.select("#selDataset").on("change",() => {
// optionChanged(d3.event.target.value);

// });
//   });
// }

// // optionChanged();


  








