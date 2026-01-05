import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Jardin et paysage', value: 1, color: 'rgba(121, 248, 248, 1)' },
  ];
  addPieChart('categories2016Pie', [data], { plugins: { title: { display: true, text: '2016' } } });
})();
