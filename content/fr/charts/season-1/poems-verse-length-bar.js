import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '6', value: 5 },
    { label: '8', value: 15 },
    { label: '12', value: 29 },
    { label: 'poème en prose', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('season1VerseLengthBar', ['Poèmes'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
