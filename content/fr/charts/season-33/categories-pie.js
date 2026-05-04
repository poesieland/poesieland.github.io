import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Crépuscule', value: 1, color: 'rgba(179, 103, 0, 1)' },
    { label: 'Faune', value: 1, color: 'rgba(4, 139, 154, 1)' },
    { label: 'Eté', value: 1, color: 'rgba(0, 86, 27, 1)' },
  ];
  addPieChart('season33Pie', [data], { plugins: { title: { display: true, text: 'La musique des mots (33) avril 2026' } } });
})();
