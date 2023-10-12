(async function() {
    const data = [
      { label: 'red', color: 'rgb(255, 99, 132)', value: 300 },
      { label: 'blue', color: 'rgb(54, 162, 235)', value: 50 },
      { label: 'yellow', color: 'rgb(255, 205, 86)', value: 100 },
    ];

    new Chart(
      document.getElementById('samplePie'),
      {
        type: 'pie',
        data: {
          labels: data.map(row => row.label),
          datasets: [
            {
              label: 'Sample pie chart',
              data: data.map(row => row.value),
              backgroundColor: data.map(row => row.color)
            }
          ],
          hoverOffset: 4
        },
      }
    );
  })();