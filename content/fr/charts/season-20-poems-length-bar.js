import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
[
    { label: '12', value: 11 },
    { label: '14', value: 0 },
    { label: '16', value: 4 },
    { label: '20', value: 2 },
    { label: '24', value: 1 },
],
[
    { label: '', value: 0 },
    { label: 'Sonnets', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
]
  ];
    addBarChart('season20PoemLengthBar', ['Poèmes','Sonnets'], data, { scales: { y: { ticks: { stepSize: 1 } } } });
})();
