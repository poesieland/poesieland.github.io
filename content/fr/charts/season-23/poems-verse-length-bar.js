import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '2', value: 1 },
    { label: '4', value: 3 },
    { label: '5', value: 1 },
    { label: '6', value: 9 },
    { label: '8', value: 5 },
    { label: '12', value: 2 },
    { label: '12, 4', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '4, 3', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '6, 3', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '8, 2', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('season23VerseLengthBar', ['Poèmes'], [data], { scales: { y: { ticks: { stepSize: 1 } } } });
})();
