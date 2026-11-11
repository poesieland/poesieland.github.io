import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Passion', value: 1, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Aube', value: 4, color: 'rgba(245, 193, 106, 1)' },
    { label: 'Lune', value: 1, color: 'rgba(229, 163, 60, 1)' },
    { label: 'Ville', value: 1, color: 'rgba(185, 121, 43, 1)' },
    { label: 'Crépuscule', value: 1, color: 'rgba(139, 91, 41, 1)' },
    { label: 'Nuit', value: 1, color: 'rgba(47, 27, 12, 1)' },
    { label: 'Enfance et adolescence', value: 3, color: 'rgba(215, 182, 237, 1)' },
    { label: 'Création', value: 1, color: 'rgba(174, 122, 207, 1)' },
    { label: 'Portraits', value: 1, color: 'rgba(133, 70, 175, 1)' },
    { label: 'Temps', value: 4, color: 'rgba(113, 55, 154, 1)' },
    { label: 'Condition humaine', value: 1, color: 'rgba(94, 43, 131, 1)' },
    { label: 'Apprentissage', value: 5, color: 'rgba(98, 58, 155, 1)' },
    { label: 'Flore', value: 2, color: 'rgba(145, 195, 232, 1)' },
    { label: 'Eau douce', value: 2, color: 'rgba(57, 137, 194, 1)' },
    { label: 'Ciel', value: 6, color: 'rgba(36, 115, 173, 1)' },
    { label: 'Climat', value: 2, color: 'rgb(10, 53, 91, 1)' },
    { label: 'Mouvement', value: 1, color: 'rgba(240, 164, 119, 1)' },
    { label: 'Félinement vôtre', value: 9, color: 'rgba(161, 86, 28, 1)' },
    { label: 'Automne', value: 20, color: 'rgba(77, 150, 61, 1)' },
    { label: 'Hiver', value: 1, color: 'rgba(27, 79, 8, 1)' },
  ];
  addPieChart('season35Pie', [data], { plugins: { title: { display: true, text: 'Un jour à la fois (35) août à septembre 2026' } } });
})();
