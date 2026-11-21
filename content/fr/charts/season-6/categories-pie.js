import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 4, color: 'rgba(255, 194, 209, 1)' },
    { label: 'Amour platonique', value: 1, color: 'rgba(245, 143, 168, 1)' },
    { label: 'Romantisme', value: 3, color: 'rgba(232, 93, 125, 1)' },
    { label: 'Passion', value: 4, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Lune', value: 1, color: 'rgba(229, 163, 60, 1)' },
    { label: 'Enfance et adolescence', value: 1, color: 'rgba(217, 185, 240, 1)' },
    { label: 'Espoir', value: 5, color: 'rgba(203, 163, 232, 1)' },
    { label: 'Création', value: 6, color: 'rgba(185, 140, 221, 1)' },
    { label: 'Portraits', value: 6, color: 'rgba(146, 95, 195, 1)' },
    { label: 'Temps', value: 3, color: 'rgba(128, 80, 178, 1)' },
    { label: 'Condition humaine', value: 7, color: 'rgba(110, 66, 158, 1)' },
    { label: 'Apprentissage', value: 3, color: 'rgba(113, 59, 145, 1)' },
    { label: 'Révolte', value: 2, color: 'rgba(116, 54, 111, 1)' },
    { label: 'Flore', value: 2, color: 'rgba(145, 195, 232, 1)' },
    { label: 'Faune', value: 2, color: 'rgba(16, 74, 122, 1)' },
    { label: 'Musique et chant', value: 2, color: 'rgba(246, 194, 160, 1)' },
    { label: 'Mouvement', value: 3, color: 'rgba(240, 164, 119, 1)' },
    { label: 'Printemps', value: 1, color: 'rgba(180, 217, 166, 1)' },
  ];
  addPieChart('season6Pie', [data], { plugins: { title: { display: true, text: 'Sur le chemin (6) mars à juin 1998' } } });
})();
