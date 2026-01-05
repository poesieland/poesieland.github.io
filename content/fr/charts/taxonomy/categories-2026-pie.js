import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Temps', value: 1, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Neige', value: 1, color: 'rgba(244, 254, 254, 1)' },
    { label: 'Faune', value: 2, color: 'rgba(4, 139, 154, 1)' },
  ];
  addPieChart('categories2026Pie', [data], { plugins: { title: { display: true, text: '2026' } } });
})();
