import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Apprentissage', value: 1, color: 'rgba(98, 58, 155, 1)' },
    { label: 'Automne', value: 1, color: 'rgba(77, 150, 61, 1)' },
  ];
  addPieChart('categories2007Pie', [data], { plugins: { title: { display: true, text: '2007' } } });
})();
