import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '4', value: 3 },
    { label: '6', value: 3 },
    { label: '8', value: 1 },
    { label: '12, 4', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '4, 3', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('season23VerseLengthBar', ['Poèmes'], [data], { scales: { y: { ticks: { stepSize: 1 } } } });
})();