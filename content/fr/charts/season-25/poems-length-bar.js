import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '8', value: 5 },
    { label: '12', value: 19 },
    { label: '14', value: 0 },
    { label: '16', value: 8 },
    { label: '19', value: 1 },
    { label: '20', value: 4 },
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
    addBarChart('season25PoemLengthBar', ['Poèmes','Sonnets'], data, {scales: { y: { ticks: { stepSize: 1 } } }});
})();
