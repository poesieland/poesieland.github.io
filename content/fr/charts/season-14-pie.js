import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 1, color: 'rgba(255, 229, 236, 1)' },
    { label: 'Animaux', value: 1, color: 'rgba(30, 47, 35, 1)' },
    { label: 'Apprentissage', value: 1, color: 'rgba(70, 24, 115, 1)' },
    { label: 'Aube', value: 1, color: 'rgba(244, 228, 9, 1)' },
    { label: 'Automne', value: 3, color: 'rgba(226, 113, 29, 1)' },
    { label: 'Ciel', value: 4, color: 'rgba(26, 116, 49, 1)' },
    { label: 'Création', value: 4, color: 'rgba(220, 147, 246, 1)' },
    { label: 'Eau douce', value: 1, color: 'rgba(37, 162, 68, 1)' },
    { label: 'Espoir', value: 3, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Etre', value: 5, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Flore', value: 3, color: 'rgba(146, 230, 167, 1)' },
    { label: 'Foi', value: 4, color: 'rgba(203, 93, 241, 1)' },
    { label: 'Hiver', value: 1, color: 'rgba(204, 88, 3, 1)' },
    { label: 'Jardin, paysage', value: 6, color: 'rgba(74, 214, 109, 1)' },
    { label: 'Lune', value: 4, color: 'rgba(238, 186, 11, 1)' },
    { label: 'Mouvement', value: 4, color: 'rgba(4, 166, 194, 1)' },
    { label: 'Musique, chant', value: 5, color: 'rgba(63, 193, 192, 1)' },
    { label: 'Nuit', value: 1, color: 'rgba(113, 0, 0, 1)' },
    { label: 'Portraits', value: 1, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Printemps', value: 4, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Romantisme', value: 4, color: 'rgba(255, 179, 198, 1)' },
    { label: 'Temps', value: 12, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Toucher', value: 1, color: 'rgba(15, 128, 170, 1)' },
  ];
  addPieChart('samplePie', [data]);
})();
