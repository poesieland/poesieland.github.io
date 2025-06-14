import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '3', value: 3 },
    { label: '4', value: 8 },
    { label: '5', value: 2 },
    { label: '6', value: 14 },
    { label: '8', value: 11 },
    { label: '9', value: 1 },
    { label: '12', value: 6 },
    { label: '2, 4', value: 2, color: 'rgba(72, 149, 239, 1)' },
    { label: '2, 5', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '5, 3', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '6, 2', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('season26VerseLengthBar', ['Poèmes'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
