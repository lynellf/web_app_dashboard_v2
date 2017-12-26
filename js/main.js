// Step Three (a): using chart.js create and include the information for the following chart widgets as shown in the mockup for the 1. web traffic

const trafficDiv = document.querySelector('#traffic');

let myChart = new Chart (trafficDiv, {
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
        text: 'Traffic'
      }
    }
}
});