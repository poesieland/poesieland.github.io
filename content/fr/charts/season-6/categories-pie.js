import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 4, color: 'rgba(255, 194, 209, 1)' },
    { label: 'Amour platonique', value: 1, color: 'rgba(245, 143, 168, 1)' },
    { label: 'Romantisme', value: 3, color: 'rgba(232, 93, 125, 1)' },
    { label: 'Passion', value: 4, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Lune', value: 1, color: 'rgba(229, 163, 60, 1)' },
    { label: 'Enfance et adolescence', value: 1, color: 'rgba(215, 182, 237, 1)' },
    { label: 'Espoir', value: 5, color: 'rgba(196, 154, 223, 1)' },
    { label: 'Création', value: 6, color: 'rgba(174, 122, 207, 1)' },
    { label: 'Portraits', value: 6, color: 'rgba(133, 70, 175, 1)' },
    { label: 'Temps', value: 3, color: 'rgba(113, 55, 154, 1)' },
    { label: 'Condition humaine', value: 7, color: 'rgba(94, 43, 131, 1)' },
    { label: 'Apprentissage', value: 3, color: 'rgba(98, 58, 155, 1)' },
    { label: 'Révolte', value: 2, color: 'rgba(138, 36, 95, 1)' },
    { label: 'Flore', value: 2, color: 'rgba(145, 195, 232, 1)' },
    { label: 'Faune', value: 2, color: 'rgba(16, 74, 122, 1)' },
    { label: 'Musique et chant', value: 2, color: 'rgba(246, 194, 160, 1)' },
    { label: 'Mouvement', value: 3, color: 'rgba(240, 164, 119, 1)' },
    { label: 'Printemps', value: 1, color: 'rgba(180, 217, 166, 1)' },
  ];
  addPieChart('season6Pie', [data], { plugins: { title: { display: true, text: 'Sur le chemin (6) mars à juin 1998' } } });
})();
