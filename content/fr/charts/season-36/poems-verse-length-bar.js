import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '3', value: 4 },
    { label: '4', value: 5 },
    { label: '5', value: 9 },
    { label: '6', value: 10 },
    { label: '8', value: 14 },
    { label: '9', value: 1 },
    { label: '10', value: 1 },
    { label: '12', value: 1 },
    { label: '5, 2', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '5, 7, 5', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '6, 2', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('season36VerseLengthBar', ['Poèmes'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
