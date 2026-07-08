import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '4', value: 4 },
    { label: '5', value: 8 },
    { label: '6', value: 18 },
    { label: '8', value: 10 },
    { label: '10', value: 2 },
    { label: '12', value: 2 },
    { label: '4, 2', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('season33VerseLengthBar', ['Poèmes'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
