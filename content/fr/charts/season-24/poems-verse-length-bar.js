import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '2', value: 2 },
    { label: '3', value: 2 },
    { label: '4', value: 11 },
    { label: '5', value: 1 },
    { label: '6', value: 12 },
    { label: '7', value: 1 },
    { label: '8', value: 10 },
    { label: '12', value: 2 },
    { label: '5, 3', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '6, 3', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '7, 4', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '8, 4', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('season24VerseLengthBar', ['Poèmes'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
