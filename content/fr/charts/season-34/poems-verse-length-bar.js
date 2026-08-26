import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '2', value: 1 },
    { label: '3', value: 2 },
    { label: '4', value: 9 },
    { label: '5', value: 5 },
    { label: '6', value: 10 },
    { label: '7', value: 1 },
    { label: '8', value: 8 },
    { label: '10', value: 1 },
    { label: '5, 7, 5', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '6, 2', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '6, 4', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '8, 2', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '8, 6', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('season34VerseLengthBar', ['Poèmes'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
