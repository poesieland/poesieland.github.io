import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 2, color: 'rgba(255, 194, 209, 1)' },
    { label: 'Amour platonique', value: 4, color: 'rgba(245, 143, 168, 1)' },
    { label: 'Romantisme', value: 1, color: 'rgba(232, 93, 125, 1)' },
    { label: 'Passion', value: 4, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Lune', value: 1, color: 'rgba(229, 163, 60, 1)' },
    { label: 'Ville', value: 2, color: 'rgba(185, 121, 43, 1)' },
    { label: 'Enfance et adolescence', value: 7, color: 'rgba(215, 182, 237, 1)' },
    { label: 'Espoir', value: 2, color: 'rgba(196, 154, 223, 1)' },
    { label: 'Création', value: 4, color: 'rgba(174, 122, 207, 1)' },
    { label: 'Foi', value: 1, color: 'rgba(152, 92, 192, 1)' },
    { label: 'Portraits', value: 2, color: 'rgba(133, 70, 175, 1)' },
    { label: 'Temps', value: 1, color: 'rgba(113, 55, 154, 1)' },
    { label: 'Condition humaine', value: 1, color: 'rgba(94, 43, 131, 1)' },
    { label: 'Révolte', value: 6, color: 'rgba(138, 36, 95, 1)' },
    { label: 'Angoisse', value: 3, color: 'rgba(41, 35, 79, 1)' },
    { label: 'Neige', value: 1, color: 'rgba(195, 223, 243, 1)' },
    { label: 'Flore', value: 3, color: 'rgba(145, 195, 232, 1)' },
    { label: 'Jardin et paysage', value: 5, color: 'rgba(101, 166, 213, 1)' },
    { label: 'Ciel', value: 1, color: 'rgba(36, 115, 173, 1)' },
    { label: 'Mer', value: 6, color: 'rgba(21, 94, 150, 1)' },
    { label: 'Musique et chant', value: 1, color: 'rgba(246, 194, 160, 1)' },
    { label: 'Mouvement', value: 1, color: 'rgba(240, 164, 119, 1)' },
    { label: 'Au contact', value: 1, color: 'rgba(232, 132, 77, 1)' },
    { label: 'Félinement vôtre', value: 2, color: 'rgba(161, 86, 28, 1)' },
    { label: 'Automne', value: 2, color: 'rgba(77, 150, 61, 1)' },
  ];
  addPieChart('season1Pie', [data], { plugins: { title: { display: true, text: 'Premiers élans (1) janvier 1994 à septembre 1996' } } });
})();
