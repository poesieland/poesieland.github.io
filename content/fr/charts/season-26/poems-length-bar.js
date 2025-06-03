import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '8', value: 8 },
    { label: '12', value: 22 },
    { label: '16', value: 11 },
    { label: '18', value: 1 },
    { label: '20', value: 4 },
]
  ];
    addBarChart('season26PoemLengthBar', ['Poèmes'], data, {scales: { y: { ticks: { stepSize: 1 } } }});
})();
