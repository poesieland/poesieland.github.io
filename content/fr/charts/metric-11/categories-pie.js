import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Passion', value: 1, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Nuit', value: 1, color: 'rgba(47, 27, 12, 1)' },
    { label: 'Création', value: 3, color: 'rgba(174, 122, 207, 1)' },
    { label: 'Foi', value: 3, color: 'rgba(152, 92, 192, 1)' },
    { label: 'Temps', value: 5, color: 'rgba(113, 55, 154, 1)' },
    { label: 'Apprentissage', value: 1, color: 'rgba(98, 58, 155, 1)' },
    { label: 'Neige', value: 1, color: 'rgba(195, 223, 243, 1)' },
    { label: 'Musique et chant', value: 3, color: 'rgba(246, 194, 160, 1)' },
    { label: 'Mouvement', value: 1, color: 'rgba(240, 164, 119, 1)' },
    { label: 'Sommeil', value: 1, color: 'rgba(213, 104, 49, 1)' },
  ];
  addPieChart('metric11Pie', [data], { plugins: { title: { display: true, text: '' } } });
})();
