import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Hiver', value: 1, color: 'rgba(24, 57, 30, 1)' },
  ];
  addPieChart('season30Pie', [data], { plugins: { title: { display: true, text: 'Tout fait sens (30) novembre 2025' } } });
})();
