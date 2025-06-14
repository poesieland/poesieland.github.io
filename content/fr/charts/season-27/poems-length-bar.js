import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '12', value: 1 },
    { label: '16', value: 1 },
]
  ];
    addBarChart('season27PoemLengthBar', ['Poèmes'], data, {scales: { y: { ticks: { stepSize: 1 } } }});
})();
