import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Romantisme', value: 2, color: 'rgb(255, 179, 198)' },
    { label: 'Aimé (amant)', value: 2, color: 'rgb(251, 111, 146)' },
    { label: 'Aube', value: 1, color: 'rgb(244, 228, 9)' },
    { label: 'Lune', value: 1, color: 'rgb(238, 186, 11)' },
    { label: 'Ville', value: 8, color: 'rgb(195, 111, 9)' },
    { label: 'Crépuscule', value: 4, color: 'rgb(166, 60, 6)' },
    { label: 'Nuit', value: 3, color: 'rgb(113, 0, 0)' },
    { label: 'Espoir', value: 4, color: 'rgb(234, 191, 250)' },
    { label: 'Création', value: 3, color: 'rgb(220, 147, 246)' },
    { label: 'Foi', value: 1, color: 'rgb(203, 93, 241)' },
    { label: 'Portraits', value: 1, color: 'rgb(179, 51, 233)' },
    { label: 'Temps', value: 6, color: 'rgb(140, 7, 221)' },
    { label: 'Etre', value: 14, color: 'rgb(105, 16, 168)' },
    { label: 'Apprentissage', value: 1, color: 'rgb(70, 24, 115)' },
    { label: 'Révolte', value: 1, color: 'rgb(61, 0, 102)' },
    { label: 'Neige', value: 1, color: 'rgb(183, 239, 197)' },
    { label: 'Flore', value: 2, color: 'rgb(146, 230, 167)' },
    { label: 'Jardin, paysage', value: 4, color: 'rgb(74, 214, 109)' },
    { label: 'Eau douce', value: 3, color: 'rgb(37, 162, 68)' },
    { label: 'Ciel', value: 3, color: 'rgb(26, 116, 49)' },
    { label: 'Musique, chant', value: 2, color: 'rgb(63, 193, 192)' },
    { label: 'Toucher', value: 3, color: 'rgb(15, 128, 170)' },
    { label: 'Sommeil', value: 1, color: 'rgb(29, 78, 137)' },
    { label: 'Eté', value: 3, color: 'rgb(255, 149, 5)' },
    { label: 'Automne', value: 4, color: 'rgb(226, 113, 29)' },
    { label: 'Hiver', value: 1, color: 'rgb(204, 88, 3)' },
  ];
  addPieChart('season15Pie', [data], 'Quinzième Saison : De place en place - D\'avril à décembre 2001');
})();
