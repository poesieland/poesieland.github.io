import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 10 },
    { label: '5', value: 1 },
    { label: '6', value: 11 },
    { label: '8', value: 15 },
    { label: '12', value: 5 },
    { label: '6, 4', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '8, 3', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '8, 6', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('season22VerseLengthBar', ['Poèmes'], [data], { scales: { y: { ticks: { stepSize: 1 } } } });
})();
