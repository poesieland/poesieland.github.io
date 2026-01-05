import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Apprentissage', value: 1, color: 'rgba(70, 24, 115, 1)' },
    { label: 'Automne', value: 1, color: 'rgba(27, 79, 8, 1)' },
  ];
  addPieChart('categories2007Pie', [data], { plugins: { title: { display: true, text: '2007' } } });
})();
