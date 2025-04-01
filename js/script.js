// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    // Initialize Analytics Chart
    initChart();
});

function initChart() {
    const ctx = document.getElementById('analytics-chart');

    if (!ctx) return;

    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Income',
                data: [1500, 2500, 1800, 3000, 2200, 3500, 2800],
                borderColor: '#6200ee',
                backgroundColor: 'rgba(98, 0, 238, 0.1)',
                tension: 0.3,
                fill: true
            }, {
                label: 'Expenses',
                data: [1200, 1900, 1400, 2100, 1800, 2400, 2000],
                borderColor: '#ff5630',
                backgroundColor: 'rgba(255, 86, 48, 0.05)',
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    align: 'end',
                    labels: {
                        boxWidth: 8,
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    titleColor: '#172b4d',
                    bodyColor: '#6b778c',
                    borderColor: '#e9ecef',
                    borderWidth: 1,
                    padding: 10,
                    displayColors: true,
                    callbacks: {
                        labelColorBackground: function (context) {
                            return context.dataset.borderColor;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    grid: {
                        borderDash: [5, 5],
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        callback: function (value) {
                            return '$' + value;
                        }
                    }
                }
            }
        }
    });

    // Add event listeners for time filters
    const timeFilters = document.querySelectorAll('.time-filter');

    timeFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            // Remove active class from all filters
            timeFilters.forEach(f => f.classList.remove('active'));

            // Add active class to clicked filter
            filter.classList.add('active');

            // You would update the chart data here based on the selected time filter
            updateChartData(chart, filter.textContent.trim());
        });
    });
}

function updateChartData(chart, timeFrame) {
    // This function would fetch and update chart data based on the selected time frame
    // For demonstration purposes, we'll just update with random data

    let labels = [];
    let incomeData = [];
    let expenseData = [];

    if (timeFrame === 'Weekly') {
        labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        incomeData = [1500, 2500, 1800, 3000, 2200, 3500, 2800];
        expenseData = [1200, 1900, 1400, 2100, 1800, 2400, 2000];
    } else if (timeFrame === 'Monthly') {
        labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
        incomeData = [7000, 9500, 8200, 10500];
        expenseData = [5500, 7800, 6900, 8400];
    } else if (timeFrame === 'Yearly') {
        labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        incomeData = [28000, 32000, 35000, 37000, 40000, 38000, 42000, 43000, 41000, 39000, 45000, 48000];
        expenseData = [22000, 25000, 28000, 30000, 31000, 29000, 34000, 36000, 33000, 32000, 38000, 39000];
    }

    chart.data.labels = labels;
    chart.data.datasets[0].data = incomeData;
    chart.data.datasets[1].data = expenseData;

    chart.update();
}
