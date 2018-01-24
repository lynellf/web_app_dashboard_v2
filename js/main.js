// Step Three (a): using chart.js create and include the information for the following chart widgets as shown in the mockup for the 1. web traffic

const trafficDiv = document.querySelector('#trafficLine'),
  trafficDaily = document.querySelector('#trafficBar'),
  trafficMobile = document.querySelector('#trafficPie');

let siteTraffic = new Chart (trafficDiv, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
      datasets: [{ 
          data: [800, 1300, 1050, 1500, 2000, 1450, 1800, 1300, 1600, 2300, 2000, 2300],
          label: "Traffic",
          borderColor: "#7477BF",
          fill: true,
          lineTension: 0
        }],
    options: {
      title: {
        display: false,
        text: 'Traffic',
        responsive: true,
        maintainAspectRatio: false,
      }
    }
}
}),

// Bar chart
dailyTraffic = new Chart(trafficDaily, {
  type: 'bar',
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        backgroundColor: "#4D4B72",
        data: [75, 105, 165, 125, 225, 198, 98]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true
    }
  }
}),

mobileTraffic = new Chart(trafficMobile, {
  type: 'pie',
  data: {
    labels: ["Phones", "Tablets", "Desktop"],
    datasets: [{
      backgroundColor: ["#4D4B72", "green", "blue"],
      data: [75, 25, 25]
    }]
  },
  options: {
    legend: {
      display: true,
      position: "right"
    }
  }
});




