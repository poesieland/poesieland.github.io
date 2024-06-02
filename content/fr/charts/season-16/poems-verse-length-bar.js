import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '5', value: 2 },
    { label: '6', value: 10 },
    { label: '7', value: 6 },
    { label: '8', value: 16 },
    { label: '9', value: 1 },
    { label: '10', value: 2 },
    { label: '12', value: 12 },
    { label: '5, 7, 5', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('season16VerseLengthBar', ['Poèmes'], [data], { scales: { y: { ticks: { stepSize: 1 } } } });
})();
