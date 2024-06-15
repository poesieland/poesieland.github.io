const addChart = (chartId, chartType, chartLabels, datas, options) => {

    var datasets = [
        {
            label: chartLabels[0],
            data: datas[0].map(row => row.value),
            backgroundColor: datas[0].map(row => row.color ?? options?.backgroundColor ?? 'rgba(76, 201, 240, 1)'),
        }
    ];

    if (datas.length > 1) {
        datasets[0].stack = 'stack 0'
        datasets.push({
            label: chartLabels[1],
            data: datas[1].map(row => row.value),
            backgroundColor: datas[1].map(row => row.color ?? 'rgba(72, 149, 239, 1)'),
            stack: 'stack 0'
        })
    };

    if (datas.length == 3) {
        datasets.push({
            label: chartLabels[2],
            data: datas[2].map(row => row.value),
            backgroundColor: datas[2].map(row => row.color ?? 'rgba(67, 97, 238, 1)'),
            stack: 'stack 0'
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
            options: Object.assign({ responsive: true }, options)
        }
    );
};

const addPieChart = (chartId, datas, options) => { addChart(chartId, 'pie', [''], datas, options); };

const addBarChart = (chartId, chartLabels, datas, options) => { addChart(chartId, 'bar', chartLabels, datas, options); };

const addRadarChart = (chartId, chartLabels, datas, options) => { addChart(chartId, 'radar', chartLabels, datas, options); }

const addBubbleChart = (chartId, title, data, borderColorsArray, options) => { 
    var datasets = [
        {
            label: title,
            data: data,
            backgroundColor : borderColorsArray ? borderColorsArray : undefined
        }
    ];

    new Chart(
        document.getElementById(chartId),
        {
            type: 'bubble',
            data: {
                datasets: datasets,
            },
            options: Object.assign({ responsive: true }, options)
        }
    );

 };

export { addChart, addPieChart, addBarChart, addRadarChart, addBubbleChart };
