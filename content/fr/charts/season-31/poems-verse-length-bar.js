import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '5', value: 1 },
  ];
    addBarChart('season31VerseLengthBar', ['Poèmes'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
