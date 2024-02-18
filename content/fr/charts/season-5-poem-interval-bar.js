import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Moins d\'un jour', value: 3, color: 'rgba(72, 149, 239, 1)' },
    { label: 'Un jour', value: 11, color: 'rgba(72, 149, 239, 0.9)' },
    { label: '2j', value: 4, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '3j', value: 7, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '4j', value: 11, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '5j', value: 6, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '6j', value: 3, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '7j', value: 2, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '10j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '15j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
  ];
    addBarChart('season5PoemIntervalBar', ['Fréquence'], [data], {});
})();
