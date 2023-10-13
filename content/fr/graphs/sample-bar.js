(async function() {
    const data = [
      { label: '4', value: 2 },
      { label: '5', value: 10 },
      { label: '6', value: 20 },
    ];

    new Chart(
      document.getElementById('sampleBar'),
      {
        type: 'bar',
        data: {
          labels: data.map(row => row.label),
          datasets: [
            {
              label: 'My chart',
              data: data.map(row => row.value),
            }
          ]
        },
        options: {
          datasets: {
            bar: {
              backgroundColor: 'rgba(54, 162, 235, 0.2)'
            }
          }
        }
      }
    );
  })();