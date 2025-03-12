import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '6', value: 7 },
    { label: '7', value: 4 },
    { label: '8', value: 20 },
    { label: '10', value: 6 },
    { label: '12', value: 11 },
    { label: '14', value: 1 },
    { label: '7, 9', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('season15VerseLengthBar', ['Poèmes'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
