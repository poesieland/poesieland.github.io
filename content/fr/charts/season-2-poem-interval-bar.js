import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Moins d\'un jour', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: 'Un jour', value: 20, color: 'rgba(72, 149, 239, 0.9)' },
    { label: '2j', value: 7, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '3j', value: 10, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '4j', value: 5, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '5j', value: 2, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '6j', value: 1, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '7j', value: 3, color: 'rgba(72, 149, 239, 0.7)' },
  ];
    addBarChart('season2PoemIntervalBar', ['Fréquence'], [data], {});
})();
