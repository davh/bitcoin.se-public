function createChart(elementId, labels, prices, yMin, yMax) {

    var ctx = document.getElementById(elementId).getContext('2d');

    var gradientPoint = ctx.createLinearGradient(0, 0, 960, 0);
    gradientPoint.addColorStop(0, "rgba(255, 255, 255, 0.2)");
    gradientPoint.addColorStop(1, "rgba(255, 255, 255, 0.5)");

    var gradientStroke = ctx.createLinearGradient(0, 0, 960, 0);
    gradientStroke.addColorStop(0, "rgba(73, 53, 128, 0.7)");
    gradientStroke.addColorStop(1, "rgba(73, 53, 128, 1)");

    var gradientFill = ctx.createLinearGradient(0, 0, 960, 0);
    gradientFill.addColorStop(0, "rgba(73, 53, 128, 0.2)");
    gradientFill.addColorStop(1, "rgba(73, 53, 128, 0.5)");

    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                data: prices,
                borderColor: gradientStroke,
                pointBorderColor: gradientPoint,
                pointBackgroundColor: gradientPoint,
                pointHoverBackgroundColor: "rgba(255, 191, 15, 0.5)",
                pointHoverBorderColor: "rgba(255, 191, 15, 0.5)",
                pointBorderWidth: 10,
                pointHoverRadius: 20,
                pointHoverBorderWidth: 1,
                pointRadius: 3,
                fill: true,
                backgroundColor: gradientFill,
                borderWidth: 4
            }]
        },
        options: {
            layout: {
                padding: {
                    left: 24,
                    right: 24,
                    top: 56,
                    bottom: 24
                }
            },
            animation: {
                //easing: "easeInOutBack"
            },
            legend: {
                display: false
            },
            tooltips: {
                mode: 'index',
                intersect: false,
                callbacks: {
                    label: function (tooltipItem, data) {
                        return tooltipItem.yLabel.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }) + ' kr';
                    }
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: "rgba(255, 255, 255, 0.3)",
                        fontStyle: "bold",
                        beginAtZero: false,
                        maxTicksLimit: 5,
                        padding: 20,
                        callback: function (value) {
                            return value.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }) + ' kr';
                        }
                    },
                    gridLines: {
                        zeroLineColor: "transparent",
                        drawTicks: false,
                        display: false
                    }

                }],
                xAxes: [{
                    gridLines: {
                        zeroLineColor: "transparent",
                        color: "rgba(73, 53, 128, 0.5)",
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "rgba(255, 255, 255, 0.3)",
                        maxTicksLimit: 10,
                        fontStyle: "bold",
                        maxRotation: 0,
                        minRotation: 0
                    }
                }]
            }
        }
    });
}
