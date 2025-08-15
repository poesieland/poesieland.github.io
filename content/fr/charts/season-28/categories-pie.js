import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Romantisme', value: 2, color: 'rgba(253, 108, 158, 1)' },
    { label: 'Passion', value: 1, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Flore', value: 1, color: 'rgba(84, 114, 174, 1)' },
    { label: 'Mer', value: 1, color: 'rgba(0, 127, 255, 1)' },
    { label: 'Eté', value: 2, color: 'rgba(0, 86, 27, 1)' },
  ];
  addPieChart('season28Pie', [data], { plugins: { title: { display: true, text: 'Les mots sur le chemin (28) juillet à août 2025' } } });
})();
