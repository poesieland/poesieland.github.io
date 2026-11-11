import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Condition humaine', value: 1, color: 'rgba(94, 43, 131, 1)' },
    { label: 'Automne', value: 1, color: 'rgba(77, 150, 61, 1)' },
  ];
  addPieChart('categories2009Pie', [data], { plugins: { title: { display: true, text: '2009' } } });
})();
