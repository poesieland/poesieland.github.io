import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '4', value: 1 },
    { label: '12', value: 29 },
    { label: '14', value: 2 },
    { label: '16', value: 9 },
    { label: '20', value: 3 },
    { label: '22', value: 1 },
    { label: '28', value: 2 },
],
[
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Sonnets', value: 3 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
]
  ];
    addBarChart('season2PoemLengthBar', ['Poèmes','Sonnets'], data, {scales: { y: { ticks: { stepSize: 1 } } }});
})();
