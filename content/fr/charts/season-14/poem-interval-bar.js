import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Moins d\'un jour', value: 7, color: 'rgba(72, 149, 239, 1)' },
    { label: 'Un jour', value: 2, color: 'rgba(72, 149, 239, 0.9)' },
    { label: '2j', value: 4, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '3j', value: 11, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '4j', value: 5, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '7j', value: 3, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '8j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '9j', value: 2, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '11j', value: 2, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '12j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '13j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '14j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '15j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '16j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '19j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '20j', value: 2, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '21j', value: 2, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '22j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '26j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '27j', value: 2, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '30j', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Entre un et trois mois', value: 2, color: 'rgba(72, 149, 239, 0.3)' },
  ];
    addBarChart('season14PoemIntervalBar', ['Fréquence'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
