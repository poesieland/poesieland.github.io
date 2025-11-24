import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '6', value: 2 },
    { label: '12', value: 1 },
  ];
    addBarChart('season30VerseLengthBar', ['Poèmes'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
