import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Eté', value: 1, color: 'rgba(0, 86, 27, 1)' },
  ];
  addPieChart('season28Pie', [data], { plugins: { title: { display: true, text: 'Les mots sur le chemin (28) juillet 2025' } } });
})();
