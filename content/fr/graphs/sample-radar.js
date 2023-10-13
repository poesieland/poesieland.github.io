
(async function () {
    const data = [
        { label: '1', value: 2 },
        { label: '2', value: 10 },
        { label: '3', value: 20 },
        { label: '4', value: 2 },
        { label: '5', value: 10 },
        { label: '6', value: 20 },
        { label: '7', value: 2 },
        { label: '8', value: 10 },
        { label: '9', value: 20 },
        { label: '10', value: 2 },
        { label: '11', value: 10 },
        { label: '12', value: 20 }
    ];

    new Chart(
        document.getElementById('sampleRadar'),
        {
            type: 'radar',
            data: {
                labels: data.map(row => row.label),
                datasets: [
                    {
                        label: 'My chart',
                        data: data.map(row => row.value),
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgb(54, 162, 235)',
                        pointBackgroundColor: 'rgb(54, 162, 235)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(54, 162, 235)'
                    }
                ]
            },
            options: {
                elements: {
                  line: {
                    borderWidth: 1
                  }
                }
              }
        }
    );
})();