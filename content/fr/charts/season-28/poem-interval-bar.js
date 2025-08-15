import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Moins d\'un jour', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '3j', value: 3, color: 'rgba(72, 149, 239, 0.7)' },
  ];
    addBarChart('season28PoemIntervalBar', ['Fréquence'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
