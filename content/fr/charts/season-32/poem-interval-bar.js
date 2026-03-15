import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Un jour', value: 2, color: 'rgba(72, 149, 239, 0.9)' },
    { label: '7j', value: 1, color: 'rgba(72, 149, 239, 0.7)' },
  ];
    addBarChart('season32PoemIntervalBar', ['Fréquence'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
