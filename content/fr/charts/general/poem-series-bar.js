import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '2j', value: 106, color: 'rgba(72, 149, 239, 1)' },
    { label: '3j', value: 31, color: 'rgba(72, 149, 239, 1)' },
    { label: '4j', value: 16, color: 'rgba(72, 149, 239, 1)' },
    { label: '5j', value: 6, color: 'rgba(72, 149, 239, 1)' },
    { label: '6j', value: 4, color: 'rgba(72, 149, 239, 1)' },
    { label: '7j', value: 4, color: 'rgba(72, 149, 239, 1)' },
    { label: '8j', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '9j', value: 2, color: 'rgba(72, 149, 239, 1)' },
    { label: '13j', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '19j', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('poemSeriesBar', ['Séries'], [data], {});
})();