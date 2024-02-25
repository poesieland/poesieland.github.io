import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
[
    { label: '4', value: 4 },
    { label: '6', value: 6 },
    { label: '8', value: 11 },
    { label: '10', value: 10 },
    { label: '12', value: 11 },
    { label: '14', value: 1 },
    { label: '16', value: 5 },
],
[
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Sonnets', value: 2 },
    { label: '', value: 0 },
]
  ];
    addBarChart('season12PoemLengthBar', ['Poèmes','Sonnets'], data, { scales: { y: { ticks: { stepSize: 1 } } } });
})();
