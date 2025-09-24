import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '3', value: 3 },
    { label: '4', value: 9 },
    { label: '5', value: 4 },
    { label: '6', value: 14 },
    { label: '8', value: 13 },
    { label: '9', value: 1 },
    { label: '12', value: 2 },
    { label: '2, 3, 4, 5, 4, 3, 2, 1', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '3, 6', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '4, 2', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '8, 2', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('season28VerseLengthBar', ['Poèmes'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
