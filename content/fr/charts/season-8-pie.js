import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Amour malheureux', value: 6, color: 'rgb(255, 194, 209)' },
    { label: 'Romantisme', value: 4, color: 'rgb(255, 179, 198)' },
    { label: 'Aimé (amant)', value: 4, color: 'rgb(251, 111, 146)' },
    { label: 'Crépuscule', value: 1, color: 'rgb(166, 60, 6)' },
    { label: 'Nuit', value: 1, color: 'rgb(113, 0, 0)' },
    { label: 'Espoir', value: 2, color: 'rgb(234, 191, 250)' },
    { label: 'Création', value: 8, color: 'rgb(220, 147, 246)' },
    { label: 'Foi', value: 3, color: 'rgb(203, 93, 241)' },
    { label: 'Temps', value: 1, color: 'rgb(140, 7, 221)' },
    { label: 'Etre', value: 11, color: 'rgb(105, 16, 168)' },
    { label: 'Apprentissage', value: 4, color: 'rgb(70, 24, 115)' },
    { label: 'Révolte', value: 1, color: 'rgb(61, 0, 102)' },
    { label: 'Flore', value: 1, color: 'rgb(146, 230, 167)' },
    { label: 'Eau douce', value: 1, color: 'rgb(37, 162, 68)' },
    { label: 'Ciel', value: 1, color: 'rgb(26, 116, 49)' },
    { label: 'Mer', value: 2, color: 'rgb(16, 69, 29)' },
    { label: 'Animaux', value: 1, color: 'rgb(30, 47, 35)' },
    { label: 'Musique et chant', value: 7, color: 'rgb(63, 193, 192)' },
    { label: 'Toucher', value: 2, color: 'rgb(15, 128, 170)' },
    { label: 'Sommeil', value: 1, color: 'rgb(29, 78, 137)' },
    { label: 'Automne', value: 2, color: 'rgb(226, 113, 29)' },
  ];
  addPieChart('season8Pie', [data], 'Huitième Saison : Reflets perdus - De juillet à septembre 1998');
})();
