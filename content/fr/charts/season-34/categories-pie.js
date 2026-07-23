import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Angoisse', value: 2, color: 'rgba(38, 9, 78, 1)' },
  ];
  addPieChart('season34Pie', [data], { plugins: { title: { display: true, text: 'A mi-chemin du paradis (34) juillet 2026' } } });
})();
