import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 1, color: 'rgba(255, 194, 209, 1)' },
    { label: 'Romantisme', value: 4, color: 'rgba(232, 93, 125, 1)' },
    { label: 'Passion', value: 1, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Aube', value: 1, color: 'rgba(245, 193, 106, 1)' },
    { label: 'Crépuscule', value: 15, color: 'rgba(139, 91, 41, 1)' },
    { label: 'Nuit', value: 1, color: 'rgba(47, 27, 12, 1)' },
    { label: 'Enfance et adolescence', value: 5, color: 'rgba(215, 182, 237, 1)' },
    { label: 'Espoir', value: 1, color: 'rgba(196, 154, 223, 1)' },
    { label: 'Foi', value: 2, color: 'rgba(152, 92, 192, 1)' },
    { label: 'Portraits', value: 2, color: 'rgba(133, 70, 175, 1)' },
    { label: 'Temps', value: 7, color: 'rgba(113, 55, 154, 1)' },
    { label: 'Condition humaine', value: 5, color: 'rgba(94, 43, 131, 1)' },
    { label: 'Apprentissage', value: 1, color: 'rgba(98, 58, 155, 1)' },
    { label: 'Révolte', value: 1, color: 'rgba(138, 36, 95, 1)' },
    { label: 'Angoisse', value: 2, color: 'rgba(41, 35, 79, 1)' },
    { label: 'Flore', value: 2, color: 'rgba(145, 195, 232, 1)' },
    { label: 'Eau douce', value: 1, color: 'rgba(57, 137, 194, 1)' },
    { label: 'Ciel', value: 6, color: 'rgba(36, 115, 173, 1)' },
    { label: 'Faune', value: 4, color: 'rgba(16, 74, 122, 1)' },
    { label: 'Climat', value: 4, color: 'rgb(10, 53, 91, 1)' },
    { label: 'Félinement vôtre', value: 2, color: 'rgba(161, 86, 28, 1)' },
    { label: 'Eté', value: 7, color: 'rgba(130, 196, 108, 1)' },
    { label: 'Automne', value: 6, color: 'rgba(77, 150, 61, 1)' },
  ];
  addPieChart('season21Pie', [data], { plugins: { title: { display: true, text: 'C\'est vivre qui compte (21) juin à septembre 2024' } } });
})();
