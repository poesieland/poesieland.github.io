import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Moins d\'un jour', value: 10, color: 'rgba(72, 149, 239, 1)' },
    { label: 'Un jour', value: 19, color: 'rgba(72, 149, 239, 0.9)' },
    { label: '2j', value: 9, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '4j', value: 2, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '5j', value: 2, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '7j', value: 2, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '10j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '11j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '12j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '15j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '16j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
  ];
    addBarChart('season4PoemIntervalBar', ['Fréquence'], [data], {});
})();
