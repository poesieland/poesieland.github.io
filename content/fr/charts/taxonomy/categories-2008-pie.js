import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Automne', value: 1, color: 'rgba(77, 150, 61, 1)' },
  ];
  addPieChart('categories2008Pie', [data], { plugins: { title: { display: true, text: '2008' } } });
})();
