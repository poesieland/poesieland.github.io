import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '16', value: 1 },
]
  ];
    addBarChart('season30PoemLengthBar', ['Poèmes'], data, {scales: { y: { ticks: { stepSize: 1 } } }});
})();
