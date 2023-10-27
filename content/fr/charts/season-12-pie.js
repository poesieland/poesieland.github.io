import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Aimé (amant)', value: 2, color: rgba(251, 111, 146, 1) },
    { label: 'Amour malheureux', value: 1, color: rgba(255, 194, 209, 1) },
    { label: 'Apprentissage', value: 2, color: rgba(70, 24, 115, 1) },
    { label: 'Ciel', value: 3, color: rgba(26, 116, 49, 1) },
    { label: 'Création', value: 7, color: rgba(220, 147, 246, 1) },
    { label: 'Crépuscule', value: 1, color: rgba(166, 60, 6, 1) },
    { label: 'Eau douce', value: 2, color: rgba(37, 162, 68, 1) },
    { label: 'Enfance', value: 1, color: rgba(247, 235, 253, 1) },
    { label: 'Espoir', value: 1, color: rgba(234, 191, 250, 1) },
    { label: 'Etre', value: 7, color: rgba(105, 16, 168, 1) },
    { label: 'Flore', value: 1, color: rgba(146, 230, 167, 1) },
    { label: 'Foi', value: 3, color: rgba(203, 93, 241, 1) },
    { label: 'Hiver', value: 1, color: rgba(204, 88, 3, 1) },
    { label: 'Jardin, paysage', value: 1, color: rgba(74, 214, 109, 1) },
    { label: 'Lune', value: 3, color: rgba(238, 186, 11, 1) },
    { label: 'Musique, chant', value: 11, color: rgba(63, 193, 192, 1) },
    { label: 'Nuit', value: 3, color: rgba(113, 0, 0, 1) },
    { label: 'Portraits', value: 3, color: rgba(179, 51, 233, 1) },
    { label: 'Romantisme', value: 2, color: rgba(255, 179, 198, 1) },
    { label: 'Sommeil', value: 1, color: rgba(29, 78, 137, 1) },
    { label: 'Temps', value: 8, color: rgba(140, 7, 221, 1) },
    { label: 'Toucher', value: 2, color: rgba(15, 128, 170, 1) },
  ];
  addPieChart('samplePie', [data]);
})();
