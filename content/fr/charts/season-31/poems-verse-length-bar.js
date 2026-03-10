import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '3', value: 2 },
    { label: '4', value: 14 },
    { label: '5', value: 10 },
    { label: '6', value: 14 },
    { label: '8', value: 7 },
    { label: '9', value: 1 },
    { label: '12', value: 1 },
    { label: '4, 2', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('season31VerseLengthBar', ['Poèmes'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
