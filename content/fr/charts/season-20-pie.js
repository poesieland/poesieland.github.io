import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Portraits', value: 1, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Temps', value: 2, color: 'rgba(140, 7, 221, 1)' },
  ];
  addPieChart('season20Pie', [data], 'Vingtième Saison : Le temps qui nous reste - Depuis avril 2024');
})();
