import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '2', value: 1 },
    { label: '3', value: 2 },
    { label: '4', value: 1 },
    { label: '5', value: 2 },
    { label: '6', value: 12 },
    { label: '8', value: 23 },
    { label: '9', value: 1 },
    { label: '12', value: 6 },
    { label: '8, 5', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '8, 6, 4, 2', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('season3VerseLengthBar', ['Poèmes'], [data], { scales: { y: { ticks: { stepSize: 1 } } } });
})();
