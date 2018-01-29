// Step Three (b): Style the charts to match the overall style of the dashboard.

//    <!-- Step Three (b): Style the charts to match the overall style of the dashboard. -->
//    <!-- Step Three (c): You will need to make up this data - you can see the mockup for sample data -->
//    <!-- Step Three -->



// Step Three (a): using chart.js create and include the information for the following chart widgets as shown in the mockup for the 1. web traffic

var rangedTrafficLine = document.querySelector('#rangedTraffic'),
    
    trafficDaily = document.querySelector('#trafficBar'),
    trafficMobile = document.querySelector('#trafficPie'),
    rangedTrafficChart = new Chart(rangedTrafficLine, hourlyData),
    // Bar chart
    dailyTrafficBarChart = new Chart(trafficDaily, barData),
    mobileTrafficDoughnutChart = new Chart(trafficMobile, doughnutData);
