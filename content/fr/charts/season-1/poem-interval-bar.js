import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Moins d\'un jour', value: 2, color: 'rgba(72, 149, 239, 1)' },
    { label: 'Un jour', value: 6, color: 'rgba(72, 149, 239, 0.9)' },
    { label: '2j', value: 6, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '3j', value: 6, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '4j', value: 2, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '5j', value: 2, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '6j', value: 3, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '8j', value: 3, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '13j', value: 2, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '17j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '25j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '27j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Entre un et trois mois', value: 4, color: 'rgba(72, 149, 239, 0.3)' },
    { label: 'Entre trois mois et un an', value: 1, color: 'rgba(72, 149, 239, 0.2)' },
  ];
    addBarChart('season1PoemIntervalBar', ['Fréquence'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
