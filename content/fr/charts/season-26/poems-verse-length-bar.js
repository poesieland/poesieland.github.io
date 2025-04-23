import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '4', value: 1 },
    { label: '6', value: 4 },
    { label: '8', value: 1 },
    { label: '12', value: 1 },
    { label: '6, 2', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('season26VerseLengthBar', ['Poèmes'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
