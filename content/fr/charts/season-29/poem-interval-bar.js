import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Un jour', value: 1, color: 'rgba(72, 149, 239, 0.9)' },
    { label: '2j', value: 1, color: 'rgba(72, 149, 239, 0.7)' },
  ];
    addBarChart('season29PoemIntervalBar', ['Fréquence'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
