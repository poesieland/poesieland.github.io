import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amour platonique', value: 2, color: 'rgba(245, 143, 168, 1)' },
    { label: 'Romantisme', value: 5, color: 'rgba(232, 93, 125, 1)' },
    { label: 'Passion', value: 10, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Crépuscule', value: 1, color: 'rgba(139, 91, 41, 1)' },
    { label: 'Nuit', value: 1, color: 'rgba(47, 27, 12, 1)' },
    { label: 'Espoir', value: 2, color: 'rgba(196, 154, 223, 1)' },
    { label: 'Création', value: 8, color: 'rgba(174, 122, 207, 1)' },
    { label: 'Foi', value: 3, color: 'rgba(152, 92, 192, 1)' },
    { label: 'Temps', value: 1, color: 'rgba(113, 55, 154, 1)' },
    { label: 'Condition humaine', value: 5, color: 'rgba(94, 43, 131, 1)' },
    { label: 'Apprentissage', value: 5, color: 'rgba(98, 58, 155, 1)' },
    { label: 'Révolte', value: 1, color: 'rgba(138, 36, 95, 1)' },
    { label: 'Angoisse', value: 3, color: 'rgba(41, 35, 79, 1)' },
    { label: 'Flore', value: 1, color: 'rgba(145, 195, 232, 1)' },
    { label: 'Eau douce', value: 1, color: 'rgba(57, 137, 194, 1)' },
    { label: 'Ciel', value: 1, color: 'rgba(36, 115, 173, 1)' },
    { label: 'Mer', value: 2, color: 'rgba(21, 94, 150, 1)' },
    { label: 'Faune', value: 1, color: 'rgba(16, 74, 122, 1)' },
    { label: 'Musique et chant', value: 7, color: 'rgba(246, 194, 160, 1)' },
    { label: 'Au contact', value: 2, color: 'rgba(232, 132, 77, 1)' },
    { label: 'Sommeil', value: 1, color: 'rgba(213, 104, 49, 1)' },
    { label: 'Automne', value: 2, color: 'rgba(77, 150, 61, 1)' },
  ];
  addPieChart('season8Pie', [data], { plugins: { title: { display: true, text: 'Reflets perdus (8) juillet à septembre 1998' } } });
})();
