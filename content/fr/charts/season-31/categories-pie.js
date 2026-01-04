import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Faune', value: 1, color: 'rgba(4, 139, 154, 1)' },
  ];
  addPieChart('season31Pie', [data], { plugins: { title: { display: true, text: 'Emotions mouvantes (31) janvier 2026' } } });
})();
