import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Aimé (amant)', value: 4, color: 'rgba(251, 111, 146, 1)' },
    { label: 'Amour malheureux', value: 6, color: 'rgba(255, 194, 209, 1)' },
    { label: 'Animaux', value: 1, color: 'rgba(30, 47, 35, 1)' },
    { label: 'Apprentissage', value: 4, color: 'rgba(70, 24, 115, 1)' },
    { label: 'Automne', value: 2, color: 'rgba(226, 113, 29, 1)' },
    { label: 'Ciel', value: 1, color: 'rgba(26, 116, 49, 1)' },
    { label: 'Création', value: 8, color: 'rgba(220, 147, 246, 1)' },
    { label: 'Crépuscule', value: 1, color: 'rgba(166, 60, 6, 1)' },
    { label: 'Eau douce', value: 1, color: 'rgba(37, 162, 68, 1)' },
    { label: 'Espoir', value: 2, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Etre', value: 11, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Flore', value: 1, color: 'rgba(146, 230, 167, 1)' },
    { label: 'Foi', value: 3, color: 'rgba(203, 93, 241, 1)' },
    { label: 'Mer', value: 2, color: 'rgba(16, 69, 29, 1)' },
    { label: 'Musique, chant', value: 7, color: 'rgba(63, 193, 192, 1)' },
    { label: 'Nuit', value: 1, color: 'rgba(113, 0, 0, 1)' },
    { label: 'Révolte', value: 1, color: 'rgba(61, 0, 102, 1)' },
    { label: 'Romantisme', value: 4, color: 'rgba(255, 179, 198, 1)' },
    { label: 'Sommeil', value: 1, color: 'rgba(29, 78, 137, 1)' },
    { label: 'Temps', value: 1, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Toucher', value: 2, color: 'rgba(15, 128, 170, 1)' },
  ];
  addPieChart('samplePie', [data]);
})();