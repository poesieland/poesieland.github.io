let defaultOptions = {
    scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true
        }
      }
}

const addChart = (chartId, chartType, chartLabels, datas, options) => {
    var datasets = [
        {
            label: chartLabels[0],
            data: datas[0].map(row => row.value),
            backgroundColor: datas[0].map(row => row.color ?? 'rgba(76, 201, 240, 1)')
        }
    ];

    if (datas.length == 2) {
        datasets.push({
            label: chartLabels[1],
            data: datas[1].map(row => row.value),
            backgroundColor: datas[1].map(row => row.color ?? 'rgba(72, 149, 239, 1)')
        })
    };

    new Chart(
        document.getElementById(chartId),
        {
            type: chartType,
            data: {
                labels: datas[0].map(row => row.label),
                datasets: datasets,
            },
            options: Object.assign(defaultOptions, options)
        }
    );
};

const addPieChart = (chartId, datas) => { addChart(chartId, 'pie', [''], datas, {}); };

const addBarChart = (chartId, chartLabels, datas) => { addChart(chartId, 'bar', chartLabels, datas, {}); };

const addRadarChart = (chartId, chartLabels, datas) => {
    addChart(chartId, 'radar', chartLabels, datas, {
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
