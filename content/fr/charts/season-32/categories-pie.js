import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Aube', value: 1, color: 'rgba(255, 203, 96, 1)' },
    { label: 'Etre', value: 1, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Faune', value: 1, color: 'rgba(4, 139, 154, 1)' },
    { label: 'Printemps', value: 1, color: 'rgba(130, 196, 108, 1)' },
  ];
  addPieChart('season32Pie', [data], { plugins: { title: { display: true, text: 'Témoin jour après jour (32) mars 2026' } } });
})();
