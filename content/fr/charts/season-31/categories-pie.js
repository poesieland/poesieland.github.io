import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Neige', value: 1, color: 'rgba(244, 254, 254, 1)' },
    { label: 'Faune', value: 3, color: 'rgba(4, 139, 154, 1)' },
  ];
  addPieChart('season31Pie', [data], { plugins: { title: { display: true, text: 'Emotions mouvantes (31) janvier 2026' } } });
})();
