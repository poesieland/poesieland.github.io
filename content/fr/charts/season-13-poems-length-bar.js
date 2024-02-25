import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
[
    { label: '6', value: 2 },
    { label: '8', value: 10 },
    { label: '10', value: 5 },
    { label: '12', value: 16 },
    { label: '14', value: 8 },
    { label: '16', value: 7 },
    { label: '18', value: 1 },
    { label: '20', value: 1 },
],
[
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Sonnets', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
]
  ];
    addBarChart('season13PoemLengthBar', ['Poèmes','Sonnets'], data, { scales: { y: { ticks: { stepSize: 1 } } } });
})();
