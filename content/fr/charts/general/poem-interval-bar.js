import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Moins d\'un jour', value: 287, color: 'rgba(72, 149, 239, 1)' },
    { label: 'Un jour', value: 458, color: 'rgba(72, 149, 239, 0.9)' },
    { label: '2j', value: 183, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '3j', value: 119, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '4j', value: 77, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '5j', value: 54, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '6j', value: 25, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '7j', value: 22, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '8j', value: 9, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '9j', value: 6, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '10j', value: 6, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '11j', value: 7, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '12j', value: 5, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '13j', value: 5, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '14j', value: 5, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '15j', value: 3, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '16j', value: 8, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '17j', value: 4, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '18j', value: 2, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '19j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '20j', value: 4, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '21j', value: 4, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '22j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '23j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '25j', value: 4, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '26j', value: 3, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '27j', value: 3, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '30j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Entre un et trois mois', value: 14, color: 'rgba(72, 149, 239, 0.3)' },
    { label: 'Entre trois mois et un an', value: 7, color: 'rgba(72, 149, 239, 0.2)' },
    { label: 'Plus d\'un an', value: 5, color: 'rgba(72, 149, 239, 0.1)' },
  ];
    addBarChart('poemIntervalBar', ['Fréquence'], [data], {});
})();
