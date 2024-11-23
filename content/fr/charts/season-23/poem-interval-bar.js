import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Moins d\'un jour', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: 'Un jour', value: 4, color: 'rgba(72, 149, 239, 0.9)' },
  ];
    addBarChart('season23PoemIntervalBar', ['Fréquence'], [data], { scales: { y: { ticks: { stepSize: 1 } } } });
})();
