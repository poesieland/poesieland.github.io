import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '8', value: 6 },
    { label: '12', value: 22 },
    { label: '14', value: 0 },
    { label: '16', value: 12 },
    { label: '20', value: 2 },
    { label: '24', value: 5 },
],
[
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Sonnets', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
]
  ];
    addBarChart('season28PoemLengthBar', ['Poèmes','Sonnets'], data, {scales: { y: { ticks: { stepSize: 1 } } }});
})();
