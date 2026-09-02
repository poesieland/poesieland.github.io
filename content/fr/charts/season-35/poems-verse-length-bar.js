import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '5', value: 2 },
    { label: '8', value: 1 },
    { label: '10', value: 1 },
  ];
    addBarChart('season35VerseLengthBar', ['Poèmes'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
