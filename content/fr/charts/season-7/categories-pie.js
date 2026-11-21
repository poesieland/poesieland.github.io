import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 1, color: 'rgba(255, 194, 209, 1)' },
    { label: 'Amour platonique', value: 2, color: 'rgba(245, 143, 168, 1)' },
    { label: 'Romantisme', value: 5, color: 'rgba(232, 93, 125, 1)' },
    { label: 'Passion', value: 5, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Aube', value: 1, color: 'rgba(245, 193, 106, 1)' },
    { label: 'Lune', value: 3, color: 'rgba(229, 163, 60, 1)' },
    { label: 'Espoir', value: 3, color: 'rgba(203, 163, 232, 1)' },
    { label: 'Création', value: 14, color: 'rgba(185, 140, 221, 1)' },
    { label: 'Foi', value: 1, color: 'rgba(166, 117, 209, 1)' },
    { label: 'Portraits', value: 3, color: 'rgba(146, 95, 195, 1)' },
    { label: 'Condition humaine', value: 4, color: 'rgba(110, 66, 158, 1)' },
    { label: 'Apprentissage', value: 1, color: 'rgba(113, 59, 145, 1)' },
    { label: 'Révolte', value: 2, color: 'rgba(116, 54, 111, 1)' },
    { label: 'Angoisse', value: 5, color: 'rgba(41, 35, 79, 1)' },
    { label: 'Flore', value: 1, color: 'rgba(145, 195, 232, 1)' },
    { label: 'Eau douce', value: 1, color: 'rgba(57, 137, 194, 1)' },
    { label: 'Ciel', value: 1, color: 'rgba(36, 115, 173, 1)' },
    { label: 'Mer', value: 2, color: 'rgba(21, 94, 150, 1)' },
    { label: 'Musique et chant', value: 6, color: 'rgba(246, 194, 160, 1)' },
  ];
  addPieChart('season7Pie', [data], { plugins: { title: { display: true, text: 'Croire (7) juin à juillet 1998' } } });
})();
