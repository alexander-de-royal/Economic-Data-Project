//
//
// // const cors = require('cors');
// // app.use(cors());
//
// // const url = 'https://api.stlouisfed.org/fred/series/observations?series_id=MSPUS&api_key=FRED_KEY&file_type=json';
// // // const corsProxyUrl = 'https://cors-anywhere/herokuapp.com/';
// // fetch(url)
// //     .then(response => response.json())
// //     .then(data => {
// //         console.log(data);
// //     })
// //     .catch(error => {
// //         console.log('Error:', error);
// //     });
//
// // fetch("http://localhost:3000/data")
// //     .then(res => res.json())
// //     .then(data => console.log(data))
//
// // const url = 'https://api.stlouisfed.org/fred/series/observations?series_id=MSPUS&api_key=FRED_KEY&file_type=json';
// // const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/corsdemo/';
// // console.log(url);
// // fetch( corsProxyUrl + url)
// //     .then(response => response.json())
// //     .then(data => {
// //         // Process the data as needed
// //         // console.log(data);
// //     })
// //     .catch(error => {
// //         // console.log('Error fetching data:', error);
// //     });
//
// // const cors = require('cors');
// //
// // app.use(cors());
// // var Fred = require('fred-api');
// //
// // apiKey = process.env.FRED_KEY;
// // fred   = new Fred(apiKey);
// //
// //
// // fred.getSeries({series_id: 'GNPCA'}, function(error, result) {
// //     console.log(result)
// // });
// //Fetch data from FRED API
// // let url = "https://api.stlouisfed.org/fred/series/observations?series_id=MSPUS&api_key=&file_type=json";
// // url = "https://cors.iamnd.edu.org/?url=" + url;
// // fetch(url)
// //     .then(response => response.json())
// //     .then(data => {
// //         console.log(data);
// //         // Extract relevant data
// //         const dates = data.observations.map(observation => observation.date);
// //         const prices = data.observations.map(observation => observation.value);
// //
// //         console.log(dates);
// //         console.log(prices);
// //
// //         // Create a line chart using Chart.js
// //         const ctx = document.getElementById('chart').getContext('2d');
// //         new Chart(ctx, {
// //             type: 'line',
// //             data: {
// //                 labels: dates,
// //                 datasets: [{
// //                     label: 'Median Housing Listing Price',
// //                     data: prices,
// //                     backgroundColor: 'rgba(75, 192, 192, 0.2)',
// //                     borderColor: 'rgba(75, 192, 192, 1)',
// //                     borderWidth: 1
// //                 }]
// //             },
// //             options: {
// //                 responsive: true,
// //                 scales: {
// //                     x: {
// //                         type: 'time',
// //                         time: {
// //                             unit: 'year'
// //                         }
// //                     },
// //                     y: {
// //                         beginAtZero: true
// //                     }
// //                 }
// //             }
// //         });
// //     })
// //     .catch(error => {
// //         console.log('Error fetching data:', error);
// //     });
//
//
// // async function getDummyData(){
// //     const apiUrl = "http://dummy.restapiexample.com/api/v1/employees";
// //
// //     const response = await fetch(apiUrl);
// //     const barChartData = await response.json();
// //
// //     const salary = barChartData.data.map( (x) => x.employee_salary);
// //     const age = barChartData.data.map( (x) => x.employee_age);
// //     const name = barChartData.data.map( (x) => x.employee_name);
// //
// //     console.log(salary, age, name);
// //
// //     employeeLabel = name;
// //     employeeSalaryData = salary;
// //     employeeAgeData = age;
// // }
// //
// //     let employeeLabel = [], employeeSalaryData = [], employeeAgeData = []
// //
// //     async function dummyChart() {
// //         await getDummyData()
// //
// //         let ctx = document.getElementById('myChart');
// //         new Chart(ctx, {
// //             type: 'bar',
// //             data: {
// //                 labels: employeeLabel,
// //                 datasets: [{
// //                     label: 'Employee Salary',
// //                     data: [12, 19, 3, 5, 2, 3],
// //                     borderWidth: 1
// //                 },
// //                     {
// //                         label: 'Employee Age',
// //                         data: employeeAgeData
// //                     }]
// //             },
// //             options: {
// //                 scales: {
// //                     y: {
// //                         beginAtZero: true
// //                     }
// //                 }
// //             }
// //         });
// //     }
// //     dummyChart();
//
// //Fetch Data from API
//
//
// // async function getDummyData() {
// //     // const apiUrl = "https://dummy.restapiexample.com/api/v1/employees"
// //
// //     fetch('https://dummy.restapiexample.com/api/v1/employees')
// //         .then(response => response.json())
// //         .then(data => {
// //             console.log(data);
// //
// //             const salary = barChatData.data.map((x) => x.employee_salary)
// //             const age = barChatData.data.map((x) => x.employee_age)
// //             const name = barChatData.data.map((x) => x.employee_name)
// //
// //             let employeeSalaryData = salary;
// //             let employeeAgeData = age;
// //             let employeeLabel = name;
// //
// //             // let salary = data[0].employee_salary;
// //
// //             // console.log(salary, age, name);
// //
// //         })
// //         .catch(error => {
// //             console.log('Error:', error);
// //         });
//
//
//
//     // const response = await fetch(apiUrl)
//     // const barChatData = await response.json()
//     //
//     // const salary = barChatData.data.map((x) => x.employee_salary)
//     // const age = barChatData.data.map((x) => x.employee_age)
//     // const name = barChatData.data.map((x) => x.employee_name)
//     //
//     // console.log(salary, age, name);
//     //
// //     let employeeSalaryData = salary;
// //     let employeeAgeData = age;
// //     let employeeLabel = name;
// // }
//
// // var employeeLabel = [], employeeSalaryData = [], employeeAgeData = []
//
// // async function dummyChart() {
// //     await getDummyData()
// //
// //     const ctx = document.getElementById('myChart');
// //
// //     new Chart(ctx, {
// //         type: 'bar',
// //         data: {
// //             labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
// //             datasets: [{
// //                 label: '# of Votes',
// //                 data: [12, 19, 3, 5, 2, 3],
// //                 borderWidth: 1
// //             }]
// //         },
// //         options: {
// //             scales: {
// //                 y: {
// //                     beginAtZero: true
// //                 }
// //             }
// //         }
// //     });
//     // const ctx = document.getElementById('myChart').getContext('2d');
//     //
//     // const chart = new Chart(ctx, {
//     //     // The type of chart we want to create
//     //     type: 'bar',
//     //
//     //     // The data for our dataset
//     //     data: {
//     //         labels: employeeLabel,
//     //         datasets: [{
//     //             label: 'Employee Salary',
//     //             backgroundColor: 'blue',
//     //             borderColor: 'rgb(255, 99, 132)',
//     //             data: employeeSalaryData
//     //         },
//     //             {
//     //                 label: 'Employee Age',
//     //                 backgroundColor: 'pink',
//     //                 borderColor: 'rgb(255, 99, 132)',
//     //                 data: employeeAgeData
//     //             }
//     //         ]
//     //     },
//
//         // Configuration options go here
// //         options: {
// //             tooltips: {
// //                 mode: 'index'
// //             }
// //         }
// //     })}
// //
// // dummyChart()
//
// // fetch('https://dummy.restapiexample.com/api/v1/employees')
// // fetch('https://dummyjson.com/products')
// //     .then(response => response.json())
// //     .then(data => {
// //         // console.log(data);
// //
// //         const brand = data.products.map((x) => x.brand)
// //         const price = data.products.map((x) => x.price)
// //         // const name = barChatData.data.map((x) => x.employee_name)
// //
// //         // const brand = data.products[0].brand;
// //         // const price = data.products[0].price;
// //         console.log(brand);
// //         console.log(price);
// //
// //         let brandName = brand;
// //         let totalPrice = price;
// //
// //     })
// //     .catch(error => {
// //         console.log('Error:', error);
// //     });
//
//
//
// // const ctx = document.getElementById('myChart');
// //
// // new Chart(ctx, {
// //     type: 'bar',
// //     data: {
// //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
// //         datasets: [{
// //             label: '# of Votes',
// //             data: ,
// //             borderWidth: 1
// //         },
// //             {
// //                 labels: brandName
// //             }
// //         ]
// //     },
// //     options: {
// //         scales: {
// //             y: {
// //                 beginAtZero: true
// //             }
// //         }
// //     }
// // });
//
//
// //Fetch Data from API
//
// // async function getDummyData() {
// //     fetch('https://dummyjson.com/products')
// //         .then(response => response.json())
// //         .then(data => {
// //             // console.log(data);
// //
// //             const brand = data.products.map((x) => x.brand)
// //             const price = data.products.map((x) => x.price)
// //             // const name = barChatData.data.map((x) => x.employee_name)
// //
// //             // const brand = data.products[0].brand;
// //             // const price = data.products[0].price;
// //             console.log(brand);
// //             console.log(price);
// //
// //             let brandName = brand;
// //             let totalPrice = price;
// //             // employeeSalaryData = salary
// //             // employeeAgeData = age
// //             // employeeLabel = name
// //
// //         })
// //         .catch(error => {
// //             console.log('Error:', error);
// //         });
// //
// //
// // }
// // let brandName = [], totalPrice = []
// //
// // async function dummyChart() {
// //     await getDummyData()
// //
// //     const ctx = document.getElementById('myChart').getContext('2d');
// //
// //     const chart = new Chart(ctx, {
// //         // The type of chart we want to create
// //         type: 'bar',
// //
// //         // The data for our dataset
// //         data: {
// //             labels: brandName,
// //             datasets: [{
// //                 label: 'Brand Name',
// //                 backgroundColor: 'blue',
// //                 borderColor: 'rgb(255, 99, 132)',
// //                 data: brandName
// //             },
// //                 // {
// //                 //     label: 'Price',
// //                 //     backgroundColor: 'pink',
// //                 //     borderColor: 'rgb(255, 99, 132)',
// //                 //     data: totalPrice
// //                 // }
// //             ]
// //         },
// //
// //         // Configuration options go here
// //         options: {
// //             tooltips: {
// //                 mode: 'index'
// //             }
// //         }
// //     })}
// //
// // dummyChart()
//
// // Function to fetch data from the FRED API
// async function fetchData() {
//     const response = await fetch('https://api.stlouisfed.org/fred/series/observations?series_id=MEHOINUSA646N&api_key=498e4ed18f85b0be8806fbc2e2618172&file_type=json');
//     const data = await response.json();
//     return data.observations;
// }
//
// // Function to format the data for chart.js
// function formatData(observations) {
//     const labels = [];
//     const prices = [];
//
//     observations.forEach(observation => {
//         labels.push(observation.date);
//         prices.push(parseFloat(observation.value));
//     });
//
//     return { labels, prices };
// }
//
// // Function to create the chart
// function createChart(labels, prices) {
//     const ctx = document.getElementById('chart').getContext('2d');
//
//     new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: labels,
//             datasets: [{
//                 label: 'Median House Listing Price',
//                 data: prices,
//                 backgroundColor: 'rgba(0, 123, 255, 0.3)',
//                 borderColor: 'rgba(0, 123, 255, 1)',
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             responsive: true,
//             maintainAspectRatio: false
//         }
//     });
// }
//
// // Call the functions to fetch data, format it, and create the chart
// fetchData()
//     .then(observations => {
//         const { labels, prices } = formatData(observations);
//         createChart(labels, prices);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
//
//
//
//
//


