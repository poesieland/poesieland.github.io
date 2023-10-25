const addChart = (chartId, chartType, chartLabel, data, options) => {
    new Chart(
        document.getElementById(chartId),
        {
            type: chartType,
            data: {
                labels: data.map(row => row.label),
                datasets: [
                    {
                        label: chartLabel,
                        data: data.map(row => row.value),
                        backgroundColor: data.map(row => row.color ?? 'rgba(54, 162, 235, 0.2)')
                    }
                ],
            },
            options: options
        }
    );
};

const addPieChart = (chartId, data) => { addChart(chartId, 'pie', '', data, {}); };

const addBarChart = (chartId, chartLabel, data) => { addChart(chartId, 'bar', chartLabel, data, {}); };

const addRadarChart = (chartId, chartLabel, data) => {
    addChart(chartId, 'radar', chartLabel, data, {
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)',
        elements: {
            line: {
                borderWidth: 1
            }
        }
    });
}

export { addChart, addPieChart, addBarChart, addRadarChart };
