import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '1 poème', value: 847, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '2 poèmes', value: 183, color: 'rgba(72, 149, 239, 0.6)' },
    { label: '3 poèmes', value: 35, color: 'rgba(72, 149, 239, 0.7)' },
    { label: '4 poèmes', value: 7, color: 'rgba(72, 149, 239, 0.8)' },
    { label: '5 poèmes', value: 4, color: 'rgba(72, 149, 239, 0.9)' },
    { label: '6 poèmes', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
  addPieChart('poemIntensityPie', [data], { plugins: { title: { display: true, text: 'Les jours de création sont-ils intenses ?' } } });
})();
