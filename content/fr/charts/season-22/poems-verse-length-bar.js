import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '3', value: 1 },
    { label: '6', value: 1 },
    { label: '8', value: 8 },
    { label: '12', value: 1 },
    { label: '8, 3', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('season22VerseLengthBar', ['Poèmes'], [data], { scales: { y: { ticks: { stepSize: 1 } } } });
})();
