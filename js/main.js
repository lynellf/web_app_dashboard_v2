// Step Three (b): Style the charts to match the overall style of the dashboard.

//    <!-- Step Three (b): Style the charts to match the overall style of the dashboard. -->
//    <!-- Step Three (c): You will need to make up this data - you can see the mockup for sample data -->
//    <!-- Step Three -->

// draws a rectangle with a rounded top
Chart.helpers.drawRoundedTopRectangle = function(ctx, x, y, width, height, radius) {
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
            signY = bottom > top? 1: -1;
            borderSkipped = vm.borderSkipped || 'bottom';
        } else {
            // horizontal bar
            left = vm.base;
            right = vm.x;
            top = vm.y - vm.height / 2;
            bottom = vm.y + vm.height / 2;
            signX = right > left? 1: -1;
            signY = 1;
            borderSkipped = vm.borderSkipped || 'left';
        }

        // Canvas doesn't allow us to stroke inside the width so we can
        // adjust the sizes to fit if we're setting a stroke on the line
        if (borderWidth) {
            // borderWidth shold be less than bar width and bar height.
            var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
            borderWidth = borderWidth > barSize? barSize: borderWidth;
            var halfStroke = borderWidth / 2;
            // Adjust borderWidth when bar top position is near vm.base(zero).
            var borderLeft = left + (borderSkipped !== 'left'? halfStroke * signX: 0);
            var borderRight = right + (borderSkipped !== 'right'? -halfStroke * signX: 0);
            var borderTop = top + (borderSkipped !== 'top'? halfStroke * signY: 0);
            var borderBottom = bottom + (borderSkipped !== 'bottom'? -halfStroke * signY: 0);
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
        Chart.helpers.drawRoundedTopRectangle(ctx, left, (top - barRadius + 1), barWidth, bottom - prevTop, barRadius);

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
    dataElementType: Chart.elements.RoundedTopRectangle
});

// Step Three (a): using chart.js create and include the information for the following chart widgets as shown in the mockup for the 1. web traffic

const trafficDiv = document.querySelector('#trafficLine'),
    trafficDaily = document.querySelector('#trafficBar'),
    trafficMobile = document.querySelector('#trafficPie'),
    lineData = {
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
    },
    siteTraffic = new Chart(trafficDiv, lineData),
    // Bar chart
    dailyTraffic = new Chart(trafficDaily, barData),
    mobileTraffic = new Chart(trafficMobile, doughnutData);
