import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '8', value: 6 },
    { label: '12', value: 22 },
    { label: '14', value: 0 },
    { label: '16', value: 9 },
    { label: '19', value: 1 },
    { label: '20', value: 6 },
],
[
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Sonnets', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
]
  ];
    addBarChart('season25PoemLengthBar', ['Poèmes','Sonnets'], data, {scales: { y: { ticks: { stepSize: 1 } } }});
})();
