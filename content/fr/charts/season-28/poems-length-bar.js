import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '12', value: 11 },
    { label: '14', value: 0 },
    { label: '16', value: 9 },
    { label: '20', value: 2 },
    { label: '24', value: 3 },
],
[
    { label: '', value: 0 },
    { label: 'Sonnets', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
]
  ];
    addBarChart('season28PoemLengthBar', ['Poèmes','Sonnets'], data, {scales: { y: { ticks: { stepSize: 1 } } }});
})();
