import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amour platonique', value: 3, color: 'rgba(245, 143, 168, 1)' },
    { label: 'Romantisme', value: 1, color: 'rgba(232, 93, 125, 1)' },
    { label: 'Passion', value: 1, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Aube', value: 1, color: 'rgba(245, 193, 106, 1)' },
    { label: 'Lune', value: 4, color: 'rgba(229, 163, 60, 1)' },
    { label: 'Nuit', value: 1, color: 'rgba(47, 27, 12, 1)' },
    { label: 'Espoir', value: 3, color: 'rgba(203, 163, 232, 1)' },
    { label: 'Création', value: 4, color: 'rgba(185, 140, 221, 1)' },
    { label: 'Foi', value: 4, color: 'rgba(166, 117, 209, 1)' },
    { label: 'Portraits', value: 1, color: 'rgba(146, 95, 195, 1)' },
    { label: 'Temps', value: 12, color: 'rgba(128, 80, 178, 1)' },
    { label: 'Condition humaine', value: 3, color: 'rgba(110, 66, 158, 1)' },
    { label: 'Apprentissage', value: 1, color: 'rgba(113, 59, 145, 1)' },
    { label: 'Angoisse', value: 2, color: 'rgba(41, 35, 79, 1)' },
    { label: 'Flore', value: 3, color: 'rgba(145, 195, 232, 1)' },
    { label: 'Jardin et paysage', value: 6, color: 'rgba(101, 166, 213, 1)' },
    { label: 'Eau douce', value: 1, color: 'rgba(57, 137, 194, 1)' },
    { label: 'Ciel', value: 4, color: 'rgba(36, 115, 173, 1)' },
    { label: 'Musique et chant', value: 5, color: 'rgba(246, 194, 160, 1)' },
    { label: 'Mouvement', value: 4, color: 'rgba(240, 164, 119, 1)' },
    { label: 'Au contact', value: 1, color: 'rgba(232, 132, 77, 1)' },
    { label: 'Félinement vôtre', value: 1, color: 'rgba(161, 86, 28, 1)' },
    { label: 'Printemps', value: 4, color: 'rgba(180, 217, 166, 1)' },
    { label: 'Eté', value: 1, color: 'rgba(130, 196, 108, 1)' },
    { label: 'Automne', value: 4, color: 'rgba(77, 150, 61, 1)' },
    { label: 'Hiver', value: 2, color: 'rgba(27, 79, 8, 1)' },
  ];
  addPieChart('season14Pie', [data], { plugins: { title: { display: true, text: 'Au long cours (14) novembre 1999 à mars 2001' } } });
})();
