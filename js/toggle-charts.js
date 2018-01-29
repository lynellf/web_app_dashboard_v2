// Create a navigation similar to the one in the mockup when the Hours, Daily, Weekly and Monthly button is selected. Add functionality to the Hourly, Daily, Weekly and Monthly buttons so that a different line chart is displayed on click.

var timeOptions = document.querySelectorAll('.traffic__config li');

// Load previous configuration from localStorage and set classNames accordingly
if (localStorage.trafficIndex) {
    var index = localStorage.trafficIndex;
    for (var k = 0; k < timeOptions.length; k++) {
        timeOptions[k].className = 'traffic__option';
    }
    timeOptions[index].className = 'traffic__option--active';
}

for (var i = 0; i < timeOptions.length; i++) {
    timeOptions[i].addEventListener('click', function(event) {
        var optionNodes = Array.prototype.slice.call(timeOptions),
            eventIndex = optionNodes.indexOf(event.target);
        localStorage.setItem('trafficIndex', eventIndex.toString());
        for (var j = 0; j < timeOptions.length; j++) {
            // Resetting all of the classes for both the options and charts.
            timeOptions[j].className = 'traffic__option';
        }
        // Setting the active chart and corresponding option classes.
        event.target.className = 'traffic__option--active';

        if (eventIndex === 0) {
            rangedTrafficChart = new Chart(rangedTrafficLine, hourlyData);
        } else if (eventIndex === 1) {
            rangedTrafficChart = new Chart(rangedTrafficLine, weeklyData);
        } else if (eventIndex === 2) {
            rangedTrafficChart = new Chart(rangedTrafficLine, weeklyData);
        } else if (eventIndex === 3) {
            rangedTrafficChart = new Chart(rangedTrafficLine, monthlyData);
        }
    });
}
