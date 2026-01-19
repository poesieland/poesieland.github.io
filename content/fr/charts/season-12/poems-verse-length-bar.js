import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '5', value: 1 },
    { label: '6', value: 8 },
    { label: '7', value: 4 },
    { label: '8', value: 14 },
    { label: '10', value: 2 },
    { label: '11', value: 4 },
    { label: '12', value: 15 },
    { label: '14', value: 1 },
    { label: '12, 8', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('season12VerseLengthBar', ['Poèmes'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
