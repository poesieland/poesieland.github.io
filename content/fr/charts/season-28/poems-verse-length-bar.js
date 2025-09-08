import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '3', value: 2 },
    { label: '4', value: 8 },
    { label: '5', value: 3 },
    { label: '6', value: 12 },
    { label: '8', value: 6 },
    { label: '12', value: 1 },
    { label: '3, 6', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '8, 2', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('season28VerseLengthBar', ['Poèmes'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
