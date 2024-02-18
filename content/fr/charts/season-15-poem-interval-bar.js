import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Moins d\'un jour', value: 8, color: 'rgba(72, 149, 239, 1)' },
    { label: 'Un jour', value: 6, color: 'rgba(72, 149, 239, 0.9)' },
    { label: '2j', value: 5, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '3j', value: 9, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '4j', value: 4, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '5j', value: 5, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '6j', value: 1, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '7j', value: 2, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '8j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '9j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '10j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '12j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '16j', value: 2, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '20j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '24j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Entre un et trois mois', value: 1, color: 'rgba(72, 149, 239, 0.3)' },
  ];
    addBarChart('season15PoemIntervalBar', ['Fréquence'], [data], {});
})();
