import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '6', value: 6 },
    { label: '8', value: 15 },
    { label: '10', value: 2 },
    { label: '12', value: 11 },
    { label: '14', value: 3 },
    { label: '16', value: 5 },
    { label: '18', value: 1 },
    { label: '20', value: 5 },
    { label: '24', value: 1 },
],
[
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Sonnets', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
]
  ];
    addBarChart('season10PoemLengthBar', ['Poèmes','Sonnets'], data, {scales: { y: { ticks: { stepSize: 1 } } }});
})();
