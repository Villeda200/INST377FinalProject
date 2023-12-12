/*
This is a JS file for about.html. 

EXAMPLE: using an external library (Chart.js) within your code.
We can use the Chart.js library in this script because in the 'about.html' file, 
this line loads it:
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

*/

// Example Bar Chart:
// Source: https://www.chartjs.org/docs/latest/getting-started/usage.html
const chart_container = document.getElementById("chart-container")

const data = [
    { year: 2010, count: 50 },
    { year: 2011, count: 39 },
    { year: 2012, count: 26 },
    { year: 2013, count: 28 },
    { year: 2014, count: 14 },
    { year: 2015, count: 6 },
    { year: 2016, count: 3 },
];

new Chart(
    chart_container,
    {
        type: 'bar',
        data: {
            labels: data.map(row => row.year),
            datasets: [
                {
                    label: 'Compliments by year',
                    data: data.map(row => row.count)
                }
            ]
        }
    }
)
