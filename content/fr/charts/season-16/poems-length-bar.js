import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '3', value: 1 },
    { label: '8', value: 6 },
    { label: '12', value: 33 },
    { label: '14', value: 0 },
    { label: '16', value: 7 },
    { label: '18', value: 1 },
    { label: '20', value: 1 },
],
[
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Sonnets', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
]
  ];
    addBarChart('season16PoemLengthBar', ['Poèmes','Sonnets'], data, { scales: { y: { ticks: { stepSize: 1 } } } });
})();
