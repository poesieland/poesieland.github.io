import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '8', value: 5 },
    { label: '12', value: 24 },
    { label: '14', value: 0 },
    { label: '16', value: 15 },
    { label: '20', value: 3 },
    { label: '24', value: 2 },
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
    addBarChart('season29PoemLengthBar', ['Poèmes','Sonnets'], data, {scales: { y: { ticks: { stepSize: 1 } } }});
})();
