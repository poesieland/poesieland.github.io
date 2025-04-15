import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '6', value: 1 },
    { label: '6, 2', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('season26VerseLengthBar', ['Poèmes'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
