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