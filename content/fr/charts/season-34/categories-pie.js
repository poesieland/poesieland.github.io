import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Création', value: 1, color: 'rgba(220, 147, 246, 1)' },
    { label: 'Angoisse', value: 2, color: 'rgba(38, 9, 78, 1)' },
  ];
  addPieChart('season34Pie', [data], { plugins: { title: { display: true, text: 'A mi-chemin du paradis (34) juillet 2026' } } });
})();
