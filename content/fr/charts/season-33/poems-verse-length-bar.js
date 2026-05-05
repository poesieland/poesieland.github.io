import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '6', value: 3 },
    { label: '8', value: 1 },
  ];
    addBarChart('season33VerseLengthBar', ['Poèmes'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
