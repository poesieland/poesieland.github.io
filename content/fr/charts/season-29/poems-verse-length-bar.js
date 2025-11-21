import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '3', value: 2 },
    { label: '4', value: 5 },
    { label: '5', value: 5 },
    { label: '6', value: 21 },
    { label: '7', value: 1 },
    { label: '8', value: 5 },
    { label: '12', value: 3 },
    { label: '4, 2', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '4, 3', value: 2, color: 'rgba(72, 149, 239, 1)' },
    { label: '5, 3', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('season29VerseLengthBar', ['Poèmes'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
