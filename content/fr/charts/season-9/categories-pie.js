import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amour platonique', value: 4, color: 'rgba(245, 143, 168, 1)' },
    { label: 'Passion', value: 2, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Aube', value: 1, color: 'rgba(245, 193, 106, 1)' },
    { label: 'Nuit', value: 3, color: 'rgba(47, 27, 12, 1)' },
    { label: 'Espoir', value: 5, color: 'rgba(203, 163, 232, 1)' },
    { label: 'Création', value: 16, color: 'rgba(185, 140, 221, 1)' },
    { label: 'Foi', value: 4, color: 'rgba(166, 117, 209, 1)' },
    { label: 'Temps', value: 4, color: 'rgba(128, 80, 178, 1)' },
    { label: 'Condition humaine', value: 9, color: 'rgba(110, 66, 158, 1)' },
    { label: 'Révolte', value: 1, color: 'rgba(116, 54, 111, 1)' },
    { label: 'Angoisse', value: 3, color: 'rgba(41, 35, 79, 1)' },
    { label: 'Flore', value: 2, color: 'rgba(145, 195, 232, 1)' },
    { label: 'Eau douce', value: 1, color: 'rgba(57, 137, 194, 1)' },
    { label: 'Mer', value: 1, color: 'rgba(21, 94, 150, 1)' },
    { label: 'Faune', value: 1, color: 'rgba(16, 74, 122, 1)' },
    { label: 'Musique et chant', value: 8, color: 'rgba(246, 194, 160, 1)' },
    { label: 'Sommeil', value: 1, color: 'rgba(213, 104, 49, 1)' },
    { label: 'Automne', value: 4, color: 'rgba(77, 150, 61, 1)' },
    { label: 'Hiver', value: 3, color: 'rgba(27, 79, 8, 1)' },
  ];
  addPieChart('season9Pie', [data], { plugins: { title: { display: true, text: 'Souffles (9) septembre à décembre 1998' } } });
})();
