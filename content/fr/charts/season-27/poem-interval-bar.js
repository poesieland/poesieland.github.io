import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Un jour', value: 9, color: 'rgba(72, 149, 239, 0.9)' },
    { label: '2j', value: 2, color: 'rgba(72, 149, 239, 0.7)' },
  ];
    addBarChart('season27PoemIntervalBar', ['Fréquence'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
