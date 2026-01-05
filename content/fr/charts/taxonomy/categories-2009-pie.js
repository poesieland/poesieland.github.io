import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Etre', value: 1, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Automne', value: 1, color: 'rgba(27, 79, 8, 1)' },
  ];
  addPieChart('categories2009Pie', [data], { plugins: { title: { display: true, text: '2009' } } });
})();
