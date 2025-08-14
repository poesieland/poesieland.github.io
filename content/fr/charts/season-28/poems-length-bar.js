import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '12', value: 2 },
    { label: '16', value: 1 },
]
  ];
    addBarChart('season28PoemLengthBar', ['Poèmes'], data, {scales: { y: { ticks: { stepSize: 1 } } }});
})();
