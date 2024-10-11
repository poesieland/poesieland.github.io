import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '2, 7', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '5, 2', value: 2, color: 'rgba(72, 149, 239, 1)' },
    { label: '5, 3', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '5, 7, 5', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '5, 8', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '6, 2', value: 2, color: 'rgba(72, 149, 239, 1)' },
    { label: '6, 3', value: 2, color: 'rgba(72, 149, 239, 1)' },
    { label: '6, 4', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '6, 5, 4', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '6, 8', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '8, 3', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '8, 5', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '8, 6', value: 3, color: 'rgba(72, 149, 239, 1)' },
    { label: '8, 6, 4, 2', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: 'poème en prose', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('variableVerseLengthBar', ['Poèmes'], [data], { scales: { y: { ticks: { stepSize: 1 } } } });
})();
