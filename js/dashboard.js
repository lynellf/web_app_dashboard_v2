// draws a rectangle with a rounded top
Chart.helpers.drawRoundedTopRectangle = function(
    ctx,
    x,
    y,
    width,
    height,
    radius
) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    // top right corner
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    // bottom right	corner
    ctx.lineTo(x + width, y + height);
    // bottom left corner
    ctx.lineTo(x, y + height);
    // top left
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
};

Chart.elements.RoundedTopRectangle = Chart.elements.Rectangle.extend({
    draw: function() {
        var ctx = this._chart.ctx;
        var vm = this._view;
        var left, right, top, bottom, signX, signY, borderSkipped;
        var borderWidth = vm.borderWidth;

        if (!vm.horizontal) {
            // bar
            left = vm.x - vm.width / 2;
            right = vm.x + vm.width / 2;
            top = vm.y;
            bottom = vm.base;
            signX = 1;
            signY = bottom > top ? 1 : -1;
            borderSkipped = vm.borderSkipped || 'bottom';
        } else {
            // horizontal bar
            left = vm.base;
            right = vm.x;
            top = vm.y - vm.height / 2;
            bottom = vm.y + vm.height / 2;
            signX = right > left ? 1 : -1;
            signY = 1;
            borderSkipped = vm.borderSkipped || 'left';
        }

        // Canvas doesn't allow us to stroke inside the width so we can
        // adjust the sizes to fit if we're setting a stroke on the line
        if (borderWidth) {
            // borderWidth shold be less than bar width and bar height.
            var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
            borderWidth = borderWidth > barSize ? barSize : borderWidth;
            var halfStroke = borderWidth / 2;
            // Adjust borderWidth when bar top position is near vm.base(zero).
            var borderLeft =
        left + (borderSkipped !== 'left' ? halfStroke * signX : 0);
            var borderRight =
        right + (borderSkipped !== 'right' ? -halfStroke * signX : 0);
            var borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0);
            var borderBottom =
        bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0);
            // not become a vertical line?
            if (borderLeft !== borderRight) {
                top = borderTop;
                bottom = borderBottom;
            }
            // not become a horizontal line?
            if (borderTop !== borderBottom) {
                left = borderLeft;
                right = borderRight;
            }
        }

        // calculate the bar width and roundess
        var barWidth = Math.abs(left - right);
        var roundness = this._chart.config.options.barRoundness || 0.5;
        var radius = barWidth * roundness * 0.5;

        // keep track of the original top of the bar
        var prevTop = top;

        // move the top down so there is room to draw the rounded top
        top = prevTop + radius;
        var barRadius = top - prevTop;

        ctx.beginPath();
        ctx.fillStyle = vm.backgroundColor;
        ctx.strokeStyle = vm.borderColor;
        ctx.lineWidth = borderWidth;

        // draw the rounded top rectangle
        Chart.helpers.drawRoundedTopRectangle(
            ctx,
            left,
            top - barRadius + 1,
            barWidth,
            bottom - prevTop,
            barRadius
        );

        ctx.fill();
        if (borderWidth) {
            ctx.stroke();
        }

        // restore the original top value so tooltips and scales still work
        top = prevTop;
    },
});

Chart.defaults.roundedBar = Chart.helpers.clone(Chart.defaults.bar);

Chart.controllers.roundedBar = Chart.controllers.bar.extend({
    dataElementType: Chart.elements.RoundedTopRectangle,
});

var weeklyData = {
        type: 'line',
        data: {
            labels: [
                '16-22',
                '23-29',
                '30-5',
                '6-12',
                '13-19',
                '20-26',
                '27-3',
                '4-10',
                '11-17',
                '18-24',
                '25-31',
            ],
            datasets: [
                {
                    data: [
                        800,
                        1300,
                        1050,
                        1500,
                        2000,
                        1450,
                        1800,
                        1300,
                        1600,
                        2300,
                        2000,
                        2300,
                        2450,
                    ],
                    borderColor: '#7477BF',
                    backgroundColor: 'rgba(212, 214, 231, 0.46)',
                    fill: true,
                    lineTension: 0,
                    pointRadius: 8,
                    pointBackgroundColor: 'white',
                },
            ],
        },
        options: {
            legend: {
                display: false,
            },
            responsive: true,
        },
    },
    hourlyData = {
        type: 'line',
        data: {
            labels: [
                '1-3',
                '4-6',
                '7-9',
                '10-12',
                '13-15',
                '16-18',
                '19-21',
                '22-24',
            ],
            datasets: [
                {
                    data: [
                        3,
                        4,
                        1,
                        5,
                        5,
                        10,
                        7,
                        7,
                        6,
                        3,
                        9,
                        1,
                        8,

                    ],
                    borderColor: '#7477BF',
                    backgroundColor: 'rgba(212, 214, 231, 0.46)',
                    fill: true,
                    lineTension: 0,
                    pointRadius: 8,
                    pointBackgroundColor: 'white',
                },
            ],
        },
        options: {
            legend: {
                display: false,
            },
            responsive: true,
        },
    },
    dailyData = {
        type: 'line',
        data: {
            labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            datasets: [
                {
                    data: [
                        27,
                        41,
                        14,
                        47,
                        51,
                        99,
                        71,
                        71,
                        64,
                        31,
                        90,
                        11,
                        76,

                    ],
                    borderColor: '#7477BF',
                    backgroundColor: 'rgba(212, 214, 231, 0.46)',
                    fill: true,
                    lineTension: 0,
                    pointRadius: 8,
                    pointBackgroundColor: 'white',
                },
            ],
        },
        options: {
            legend: {
                display: false,
            },
            responsive: true,
        },
    },
    monthlyData = {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    data: [
                        272,
                        414,
                        138,
                        467,
                        506,
                        993,
                        711,
                        713,
                        636,
                        313,
                        897,
                        108,
                        762

                    ],
                    borderColor: '#7477BF',
                    backgroundColor: 'rgba(212, 214, 231, 0.46)',
                    fill: true,
                    lineTension: 0,
                    pointRadius: 8,
                    pointBackgroundColor: 'white',
                },
            ],
        },
        options: {
            legend: {
                display: false,
            },
            responsive: true,
        },
    },
    barData = {
        type: 'roundedBar',
        data: {
            labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            datasets: [
                {
                    backgroundColor: '#4D4B72',
                    data: [75, 105, 165, 125, 225, 198, 98],
                },
            ],
        },
        options: {
            responsive: true,
            legend: { display: false },
            title: {
                display: true,
            },
        },
    },
    doughnutData = {
        type: 'doughnut',
        data: {
            labels: ['Phones', 'Tablets', 'Desktop'],
            datasets: [
                {
                    backgroundColor: ['#77B988', '#68A6B1', '#4D4B72'],
                    data: [25, 25, 75],
                },
            ],
        },
        options: {
            responsive: true,
            elements: {
                arc: {
                    borderWidth: 0,
                },
            },
            legend: {
                display: true,
                position: 'right',
                labels: {
                    boxWidth: 20,
                },
            },
        },
    };
// Step Three (b): Style the charts to match the overall style of the dashboard.

//    <!-- Step Three (b): Style the charts to match the overall style of the dashboard. -->
//    <!-- Step Three (c): You will need to make up this data - you can see the mockup for sample data -->
//    <!-- Step Three -->



// Step Three (a): using chart.js create and include the information for the following chart widgets as shown in the mockup for the 1. web traffic

var lineChartSmall = document.querySelector('.traffic__ranged--small'),
    lineChartLarge = document.querySelector('.traffic__ranged--large'),

    
    trafficDaily = document.querySelector('#trafficBar'),
    trafficMobile = document.querySelector('#trafficPie'),
    rangedTrafficSmall = new Chart(lineChartSmall, hourlyData),
    rangedTrafficLarge = new Chart(lineChartLarge, hourlyData),
    // Bar chart
    dailyTrafficBarChart = new Chart(trafficDaily, barData),
    mobileTrafficDoughnutChart = new Chart(trafficMobile, doughnutData);

// Add an "autocomplete" feature for the "Search for User" box, listing 
// names that match the searh term

var userElements = document.querySelectorAll('.members__name'),
    searchBox = document.querySelector('.message__input'),
    autocomplete = new autoComplete({
        selector: '.message__input',
        minChars: 2,
        source: function(term, suggest) {
            term = term.toLowerCase();
            var userNames = [],
                suggestions = [];
            for (var i = 0; i < userElements.length; i++) {
                userNames.push(userElements[i].textContent);
            }
            for (var j = 0; j < userNames.length; j++) {
                if(~userNames[j].toLowerCase().indexOf(term)) {
                    suggestions.push(userNames[j]);
                    suggest(suggestions);
                }
            }
        }
    });


// Create a navigation similar to the one in the mockup when the Hours, Daily, Weekly and Monthly button is selected. Add functionality to the Hourly, Daily, Weekly and Monthly buttons so that a different line chart is displayed on click.

var timeOptions = document.querySelectorAll('.traffic__list li');

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
            rangedTrafficSmall = new Chart(lineChartSmall, hourlyData);
            rangedTrafficLarge = new Chart(lineChartLarge, hourlyData);
        } else if (eventIndex === 1) {
            rangedTrafficSmall = new Chart(lineChartSmall, dailyData);
            rangedTrafficLarge = new Chart(lineChartLarge, dailyData);
        } else if (eventIndex === 2) {
            rangedTrafficSmall = new Chart(lineChartSmall, weeklyData);
            rangedTrafficLarge = new Chart(lineChartLarge, weeklyData);
        } else if (eventIndex === 3) {
            rangedTrafficSmall = new Chart(lineChartSmall, monthlyData);
            rangedTrafficLarge = new Chart(lineChartLarge, monthlyData);
        }
    });
}

// Step Two (a): Alert bar should be visible at the top but able to be
// closed when clicking the X button 

var alertParent = document.querySelector('.search'),
    alert = document.querySelector('.search__alert'),
    xIcon = document.querySelector('.icon--close'),
    alertClosed = false;

// Check localStorage for previously closed alert and adjust accordingly
if(localStorage.alertClosed) {
    if(localStorage.alertClosed === 'true') {
        alertClosed = true;
    }

    if(alertClosed === true) {
        alertParent.removeChild(alert);
    }
}

xIcon.addEventListener('click', function() {
    alertParent.removeChild(alert);
    alertClosed = true;
    localStorage.setItem('alertClosed', 'true');
});
// Step Five (e): Use JS to display error messages if a user isn't selected
// or the message field is empty

var searchErrorSpan = document.querySelector('#searchError'),
    textAreaErrorSpan = document.querySelector('#textError'),
    successMessageSpan = document.querySelector('#successMessage'),
    submitButton = document.querySelector('.message__submit'),
    messageBox = document.querySelector('.message__textarea');

submitButton.addEventListener('click', function(event) {
    var formData = {
        userName: searchBox.value,
        message: messageBox.value
    };

    if (formData.userName.length > 0 && formData.message.length > 0) {
        successMessageSpan.className = 'message__success-message--active';
        successMessageSpan.textContent = 'Message Sent!';
        searchErrorSpan.className = 'message__search-error';
        textAreaErrorSpan.className = 'message__text-error';
        searchErrorSpan.textContent = '';
        textAreaErrorSpan.textContent = '';
        searchBox.value = '';
        messageBox.value = '';
    } else if (formData.userName.length === 0) {
        searchErrorSpan.textContent = 'Please enter a name to search';
        searchErrorSpan.className = 'message__search-error--active';
        successMessageSpan.textContent = '';
        successMessageSpan.className = 'message__success-message';
    } else if (formData.userName.length > 0) {
        searchErrorSpan.className = 'message__search-error';
        searchErrorSpan.textContent = '';
    } 
    

    if (formData.message.length === 0) {
        textAreaErrorSpan.textContent = 'Please enter a message';
        textAreaErrorSpan.className = 'message__text-error--active';
        successMessageSpan.textContent = '';
        successMessageSpan.className = 'message__success-message';
    } else if (formData.message.length > 0) {
        textAreaErrorSpan.className = 'message__text-error';
        textAreaErrorSpan.textContent = '';
    }

    event.preventDefault();
});

var alertMsgs = [
        'Iboya Vat commented on YourApp\'s SEO Tips',
        'Aapo Niskanen liked the post Facebook\'s Changes for 2018',
        'Phillip Cox commented on Facebook\'s Changes for 2018',
        'Zilda Moreira posted YourApp\'s SEO Tips'
    ],
    dropdownContent = document.querySelector('#dropdownContent'),
    bell = document.querySelector('#notificationBell'),
    notificationSignal = document.querySelector('#notificationSignal'),
    alertStatus = true,
    dropdownStatus = false;

// Check localStorage for alertStatus and set accordingly

if(localStorage.alertState) {
    if(localStorage.alertState === 'false') {
        alertStatus = false;
    }
    if (alertStatus === false) {
        notificationSignal.style.display = 'none';
    }
}

bell.addEventListener('click', function() {
    if(dropdownStatus === false) {
        dropdownContent.className = 'dropdown__content--active';
        for (var i = 0; i < alertMsgs.length; i++) {
            var item = document.createElement('span');
            item.className = 'dropdown__item';
            item.textContent = alertMsgs[i];
            dropdownContent.appendChild(item);
        }
        notificationSignal.style.display = 'none';
        dropdownStatus = true;
    } else if(dropdownStatus === true) {
        while (dropdownContent.firstChild) {
            dropdownContent.className = 'dropdown__content';
            dropdownContent.removeChild(dropdownContent.firstChild);
        }
        dropdownStatus = false;
    }
});

document.addEventListener('click', function(event) {
    if (dropdownStatus === true && event.target !== bell) {
        while (dropdownContent.firstChild) {
            dropdownContent.className = 'dropdown__content';
            dropdownContent.removeChild(dropdownContent.firstChild);
        }
        dropdownStatus = false;
        alertStatus = false;
        localStorage.setItem('alertState', 'false');
    }
});



var emailSwitch = document.querySelector('#emailSwitch'),
    profileSwitch = document.querySelector('#profileSwitch'),
    timeZone = document.querySelector('#dropdownTimeZone'),
    saveButton = document.querySelector('#saveButton'),
    selectedZone = '',
    emailStatus = false,
    profileStatus = false;

// Check localStorage and set values accordingly

if(localStorage.emailStatus) {
    var emailValue = localStorage.emailStatus;

    if(emailValue === 'true') {
        emailStatus = true;
    } else {
        emailStatus = false;
    }

    if(emailStatus === true) {
        emailSwitch.checked = 'checked';
    } else {
        emailSwitch.checked = '';
    }
}

if (localStorage.profileStatus) {
    var profileValue = localStorage.profileStatus;

    if (profileValue === 'true') {
        profileStatus = true;
    } else {
        profileStatus = false;
    }

    if (profileStatus === true) {
        profileSwitch.checked = 'checked';
    } else {
        profileSwitch.checked = '';
    }
}

if(localStorage.timeZone) {
    timeZone.value = localStorage.timeZone;
}

emailSwitch.addEventListener('click', function() {
    emailStatus = !emailStatus;
});

profileSwitch.addEventListener('click', function() {
    profileStatus = !profileStatus;
});

timeZone.addEventListener('change', function() {
    selectedZone = timeZone.value;
});

saveButton.addEventListener('click', function() {
    localStorage.setItem('timeZone', selectedZone);
    localStorage.setItem('profileStatus', profileStatus.toString());
    localStorage.setItem('emailStatus', emailStatus.toString());
})

//# sourceMappingURL=js/dashboard.js.map
