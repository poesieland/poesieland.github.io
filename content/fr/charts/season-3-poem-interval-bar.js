import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Moins d\'un jour', value: 4, color: 'rgba(72, 149, 239, 1)' },
    { label: 'Un jour', value: 16, color: 'rgba(72, 149, 239, 0.9)' },
    { label: '2j', value: 14, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '3j', value: 6, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '4j', value: 3, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '5j', value: 2, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '6j', value: 1, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '8j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '11j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '18j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
  ];
    addBarChart('season3PoemIntervalBar', ['Fréquence'], [data], {});
})();
