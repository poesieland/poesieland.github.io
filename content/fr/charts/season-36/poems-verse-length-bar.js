import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '8', value: 2 },
    { label: '6, 2', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('season36VerseLengthBar', ['Poèmes'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
