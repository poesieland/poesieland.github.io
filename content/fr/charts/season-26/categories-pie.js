import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Passion', value: 1, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Eau douce', value: 1, color: 'rgba(0, 127, 255, 1)' },
    { label: 'Ciel', value: 1, color: 'rgba(119, 181, 254, 1)' },
  ];
  addPieChart('season26Pie', [data], { plugins: { title: { display: true, text: 'Chemins non balisés (26) avril à avril 2025' } } });
})();
