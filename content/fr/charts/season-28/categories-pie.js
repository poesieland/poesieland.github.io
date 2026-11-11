import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Romantisme', value: 6, color: 'rgba(232, 93, 125, 1)' },
    { label: 'Passion', value: 1, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Aube', value: 2, color: 'rgba(245, 193, 106, 1)' },
    { label: 'Crépuscule', value: 4, color: 'rgba(139, 91, 41, 1)' },
    { label: 'Enfance et adolescence', value: 1, color: 'rgba(215, 182, 237, 1)' },
    { label: 'Création', value: 3, color: 'rgba(174, 122, 207, 1)' },
    { label: 'Portraits', value: 1, color: 'rgba(133, 70, 175, 1)' },
    { label: 'Temps', value: 8, color: 'rgba(113, 55, 154, 1)' },
    { label: 'Condition humaine', value: 1, color: 'rgba(94, 43, 131, 1)' },
    { label: 'Apprentissage', value: 6, color: 'rgba(98, 58, 155, 1)' },
    { label: 'Révolte', value: 2, color: 'rgba(138, 36, 95, 1)' },
    { label: 'Angoisse', value: 2, color: 'rgba(41, 35, 79, 1)' },
    { label: 'Flore', value: 3, color: 'rgba(145, 195, 232, 1)' },
    { label: 'Ciel', value: 2, color: 'rgba(36, 115, 173, 1)' },
    { label: 'Mer', value: 1, color: 'rgba(21, 94, 150, 1)' },
    { label: 'Faune', value: 1, color: 'rgba(16, 74, 122, 1)' },
    { label: 'Climat', value: 2, color: 'rgb(10, 53, 91, 1)' },
    { label: 'Félinement vôtre', value: 4, color: 'rgba(161, 86, 28, 1)' },
    { label: 'Eté', value: 5, color: 'rgba(130, 196, 108, 1)' },
    { label: 'Automne', value: 16, color: 'rgba(77, 150, 61, 1)' },
    { label: 'Hiver', value: 1, color: 'rgba(27, 79, 8, 1)' },
  ];
  addPieChart('season28Pie', [data], { plugins: { title: { display: true, text: 'Les mots sur le chemin (28) juillet à septembre 2025' } } });
})();
