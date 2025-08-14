import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '3j', value: 2, color: 'rgba(72, 149, 239, 0.7)' },
  ];
    addBarChart('season28PoemIntervalBar', ['Fréquence'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
