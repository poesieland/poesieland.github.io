import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '2j', value: 119, color: 'rgba(72, 149, 239, 1)' },
    { label: '3j', value: 49, color: 'rgba(72, 149, 239, 1)' },
    { label: '4j', value: 23, color: 'rgba(72, 149, 239, 1)' },
    { label: '5j', value: 9, color: 'rgba(72, 149, 239, 1)' },
    { label: '6j', value: 10, color: 'rgba(72, 149, 239, 1)' },
    { label: '7j', value: 6, color: 'rgba(72, 149, 239, 1)' },
    { label: '8j', value: 2, color: 'rgba(72, 149, 239, 1)' },
    { label: '9j', value: 4, color: 'rgba(72, 149, 239, 1)' },
    { label: '10j', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '13j', value: 2, color: 'rgba(72, 149, 239, 1)' },
    { label: '19j', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '31j', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('poemSeriesBar', ['Séries'], [data], {});
})();
