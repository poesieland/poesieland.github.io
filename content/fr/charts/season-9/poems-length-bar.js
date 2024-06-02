import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '4', value: 2 },
    { label: '6', value: 2 },
    { label: '8', value: 7 },
    { label: '10', value: 4 },
    { label: '12', value: 14 },
    { label: '14', value: 3 },
    { label: '16', value: 15 },
    { label: '20', value: 1 },
],
[
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Sonnets', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 0 },
]
  ];
    addBarChart('season9PoemLengthBar', ['Poèmes','Sonnets'], data, { scales: { y: { ticks: { stepSize: 1 } } } });
})();
