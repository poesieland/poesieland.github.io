import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Aube', value: 1, color: 'rgba(255, 203, 96, 1)' },
    { label: 'Crépuscule', value: 1, color: 'rgba(179, 103, 0, 1)' },
    { label: 'Espoir', value: 1, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Ciel', value: 3, color: 'rgba(119, 181, 254, 1)' },
    { label: 'Printemps', value: 2, color: 'rgba(130, 196, 108, 1)' },
  ];
  addPieChart('season25Pie', [data], { plugins: { title: { display: true, text: 'Coeur et âme (25) février à février 2025' } } });
})();
