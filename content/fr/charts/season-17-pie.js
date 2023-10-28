import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Amour malheureux', value: 1, color: 'rgba(255, 194, 209, 1)' },
    { label: 'Apprentissage', value: 2, color: 'rgba(70, 24, 115, 1)' },
    { label: 'Aube', value: 1, color: 'rgba(244, 228, 9, 1)' },
    { label: 'Automne', value: 3, color: 'rgba(226, 113, 29, 1)' },
    { label: 'Création', value: 2, color: 'rgba(220, 147, 246, 1)' },
    { label: 'Crépuscule', value: 2, color: 'rgba(166, 60, 6, 1)' },
    { label: 'Eau douce', value: 3, color: 'rgba(37, 162, 68, 1)' },
    { label: 'Enfance', value: 2, color: 'rgba(247, 235, 253, 1)' },
    { label: 'Espoir', value: 4, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Etre', value: 2, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Flore', value: 3, color: 'rgba(146, 230, 167, 1)' },
    { label: 'Foi', value: 3, color: 'rgba(203, 93, 241, 1)' },
    { label: 'Hiver', value: 5, color: 'rgba(204, 88, 3, 1)' },
    { label: 'Jardin, paysage', value: 2, color: 'rgba(74, 214, 109, 1)' },
    { label: 'Musique, chant', value: 1, color: 'rgba(63, 193, 192, 1)' },
    { label: 'Neige', value: 2, color: 'rgba(183, 239, 197, 1)' },
    { label: 'Nuit', value: 2, color: 'rgba(113, 0, 0, 1)' },
    { label: 'Portraits', value: 2, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Printemps', value: 4, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Révolte', value: 1, color: 'rgba(61, 0, 102, 1)' },
    { label: 'Temps', value: 3, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Ville', value: 3, color: 'rgba(195, 111, 9, 1)' },
  ];
  addPieChart('samplePie', [data]);
})();
