import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '8', value: 7 },
    { label: '12', value: 20 },
    { label: '16', value: 10 },
    { label: '20', value: 4 },
]
  ];
    addBarChart('season26PoemLengthBar', ['Poèmes'], data, {scales: { y: { ticks: { stepSize: 1 } } }});
})();
