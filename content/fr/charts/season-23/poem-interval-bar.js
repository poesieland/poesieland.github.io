import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Moins d\'un jour', value: 3, color: 'rgba(72, 149, 239, 1)' },
    { label: 'Un jour', value: 6, color: 'rgba(72, 149, 239, 0.9)' },
    { label: '2j', value: 1, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '4j', value: 1, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '7j', value: 1, color: 'rgba(72, 149, 239, 0.7)' },
  ];
    addBarChart('season23PoemIntervalBar', ['Fréquence'], [data], { scales: { y: { ticks: { stepSize: 1 } } } });
})();
