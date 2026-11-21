import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 1, color: 'rgba(255, 194, 209, 1)' },
    { label: 'Passion', value: 3, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Aube', value: 3, color: 'rgba(245, 193, 106, 1)' },
    { label: 'Lune', value: 1, color: 'rgba(229, 163, 60, 1)' },
    { label: 'Crépuscule', value: 6, color: 'rgba(139, 91, 41, 1)' },
    { label: 'Nuit', value: 3, color: 'rgba(47, 27, 12, 1)' },
    { label: 'Enfance et adolescence', value: 1, color: 'rgba(217, 185, 240, 1)' },
    { label: 'Espoir', value: 1, color: 'rgba(203, 163, 232, 1)' },
    { label: 'Création', value: 1, color: 'rgba(185, 140, 221, 1)' },
    { label: 'Portraits', value: 3, color: 'rgba(146, 95, 195, 1)' },
    { label: 'Temps', value: 5, color: 'rgba(128, 80, 178, 1)' },
    { label: 'Condition humaine', value: 3, color: 'rgba(110, 66, 158, 1)' },
    { label: 'Apprentissage', value: 5, color: 'rgba(113, 59, 145, 1)' },
    { label: 'Angoisse', value: 6, color: 'rgba(41, 35, 79, 1)' },
    { label: 'Flore', value: 5, color: 'rgba(145, 195, 232, 1)' },
    { label: 'Jardin et paysage', value: 1, color: 'rgba(101, 166, 213, 1)' },
    { label: 'Ciel', value: 4, color: 'rgba(36, 115, 173, 1)' },
    { label: 'Mer', value: 1, color: 'rgba(21, 94, 150, 1)' },
    { label: 'Musique et chant', value: 3, color: 'rgba(246, 194, 160, 1)' },
    { label: 'Mouvement', value: 1, color: 'rgba(240, 164, 119, 1)' },
    { label: 'Sommeil', value: 1, color: 'rgba(213, 104, 49, 1)' },
    { label: 'Félinement vôtre', value: 4, color: 'rgba(161, 86, 28, 1)' },
    { label: 'Printemps', value: 10, color: 'rgba(180, 217, 166, 1)' },
    { label: 'Eté', value: 1, color: 'rgba(130, 196, 108, 1)' },
    { label: 'Automne', value: 1, color: 'rgba(77, 150, 61, 1)' },
    { label: 'Hiver', value: 2, color: 'rgba(27, 79, 8, 1)' },
  ];
  addPieChart('season25Pie', [data], { plugins: { title: { display: true, text: 'Coeur et âme (25) février à avril 2025' } } });
})();
