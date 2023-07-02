// alert("Hey");
// Import the FRED API library.
const fred = require('fred');

// Get the data for the median listing price of houses in the United States.
const data = fred.getSeries('MEDLISPRIUS');

// Create a new chart.
const chart = new Chart('myChart', {
    type: 'line',
    data: {
        datasets: [{
            label: 'Median Listing Price',
            data: data.values,
            fill: false,
            lineTension: 0.1
        }]
    },
    options: {
        title: 'Median Listing Price of Houses in the United States',
        xAxis: {
            title: 'Date',
            type: 'date'
        },
        yAxis: {
            title: 'Price (USD)'
        }
    }
});
