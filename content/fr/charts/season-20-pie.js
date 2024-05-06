import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Espoir', value: 2, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Portraits', value: 2, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Temps', value: 2, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Etre', value: 1, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Flore', value: 1, color: 'rgba(146, 230, 167, 1)' },
    { label: 'Jardin et paysage', value: 1, color: 'rgba(74, 214, 109, 1)' },
    { label: 'Animaux', value: 1, color: 'rgba(30, 47, 35, 1)' },
  ];
  addPieChart('season20Pie', [data], { plugins: { title: { display: true, text: 'Vingtième Saison : Le temps qui nous reste - Depuis avril 2024' } } });
})();