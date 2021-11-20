const Chart = require('chart.js'); 
const temp = citySelect[0].
const myChart = new Chart(ctx, {
  type: 'bar', 
  data: temp,
  options: {
    scales: {
      y:{
        beginAtZero: true
      }
    }
  }
}); 
const data = {
  labels: labels, 
  datasets: [{
    label: '5 Day Weather Forecast',
    data: [
      x: 'Date',
      y: 'Max Temp', 
    ],
    borderWidth: 1
  }]
}
  
const config = {

}



//////////////////
var xValues = [];
  var yValues = [];
  var barColors = ["red"]

  new Chart("myChart", {
    type: "bar", 
    data: {
      labels: xValues, 
      datasets: [{
        data: yValues
      }]
    }, 
    options: {
      legend: {display:false},
      title: {
        display: true, 
        text: "5 Day Max Temperature Forecast"
      }
    }
  });