import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 2 },
    { label: '4', value: 9 },
    { label: '5', value: 6 },
    { label: '6', value: 11 },
    { label: '7', value: 1 },
    { label: '8', value: 8 },
    { label: '9', value: 3 },
    { label: '12', value: 3 },
    { label: '4, 3', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '6, 2', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '8, 2', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '8, 3', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('season25VerseLengthBar', ['Poèmes'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
