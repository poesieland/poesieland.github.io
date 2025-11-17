const addChart = (chartId, chartType, chartLabels, datas, options) => {

    var datasets = [
        {
            label: chartLabels[0],
            data: datas[0].map(row => row.value),
            backgroundColor: datas[0].map(row => row.color ?? options?.backgroundColor ?? 'rgba(76, 201, 240, 1)'),
        }
    ];

    const stackId =  chartType == 'bar' ? 'stack 0' : null;

    if (datas.length > 1) {
        datasets[0].stack = stackId
        datasets.push({
            label: chartLabels[1],
            data: datas[1].map(row => row.value),
            backgroundColor: datas[1].map(row => row.color ?? 'rgba(72, 149, 239, 1)'),
            stack: stackId
        })
    };

    if (datas.length == 3) {
        datasets.push({
            label: chartLabels[2],
            data: datas[2].map(row => row.value),
            backgroundColor: datas[2].map(row => row.color ?? 'rgba(67, 97, 238, 1)'),
            stack: stackId
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

const addRadarChart = (chartId, chartLabels, datas, options) => { addChart(chartId, 'radar', chartLabels, datas, 
    Object.assign({ plugins: { tooltip: { callbacks: { label: function(context) { return context.parsed.r; } } } } }, options)) };

const addBubbleChart = (chartId, chartLabels, datas, options) => { 
    var datasets = [];

    for (var i = 0; i < datas.length; i++) {
        datasets.push({
            label: chartLabels[i],
            data: datas[i],
            backgroundColor : datas[i][0].color
        })
    }

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

 const addLineChart = (chartId, chartLabels, datas, xLabels, stack, options) => { 
    var datasets = [];

    for (var i = 0; i < datas.length; i++) {
        datasets.push({
            label: chartLabels[i],
            data: datas[i].data,
            borderColor: datas[i].borderColor,
            backgroundColor: datas[i].backgroundColor,
            stack: stack,
            fill: datas[i].fill
        })
    }

    new Chart(
        document.getElementById(chartId),
        {
            type: 'line',
            data: {
                labels: xLabels,
                datasets: datasets,
            },
            options: Object.assign({ responsive: true }, options)
        }
    );

 };

export { addChart, addPieChart, addBarChart, addRadarChart, addBubbleChart, addLineChart };
