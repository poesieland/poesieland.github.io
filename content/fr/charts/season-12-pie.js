import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Amour malheureux', value: 1, color: 'rgb(255, 194, 209)' },
    { label: 'Romantisme', value: 2, color: 'rgb(255, 179, 198)' },
    { label: 'Aimé (amant)', value: 2, color: 'rgb(251, 111, 146)' },
    { label: 'Lune', value: 3, color: 'rgb(238, 186, 11)' },
    { label: 'Crépuscule', value: 1, color: 'rgb(166, 60, 6)' },
    { label: 'Nuit', value: 3, color: 'rgb(113, 0, 0)' },
    { label: 'Enfance', value: 1, color: 'rgb(247, 235, 253)' },
    { label: 'Espoir', value: 1, color: 'rgb(234, 191, 250)' },
    { label: 'Création', value: 7, color: 'rgb(220, 147, 246)' },
    { label: 'Foi', value: 3, color: 'rgb(203, 93, 241)' },
    { label: 'Portraits', value: 3, color: 'rgb(179, 51, 233)' },
    { label: 'Temps', value: 8, color: 'rgb(140, 7, 221)' },
    { label: 'Etre', value: 7, color: 'rgb(105, 16, 168)' },
    { label: 'Apprentissage', value: 2, color: 'rgb(70, 24, 115)' },
    { label: 'Flore', value: 1, color: 'rgb(146, 230, 167)' },
    { label: 'Jardin, paysage', value: 1, color: 'rgb(74, 214, 109)' },
    { label: 'Eau douce', value: 2, color: 'rgb(37, 162, 68)' },
    { label: 'Ciel', value: 3, color: 'rgb(26, 116, 49)' },
    { label: 'Musique, chant', value: 11, color: 'rgb(63, 193, 192)' },
    { label: 'Toucher', value: 2, color: 'rgb(15, 128, 170)' },
    { label: 'Sommeil', value: 1, color: 'rgb(29, 78, 137)' },
    { label: 'Hiver', value: 1, color: 'rgb(204, 88, 3)' },
  ];
  addPieChart('season12Pie', [data], 'Douzième Saison : Tempo piano - De mai à juillet 1999');
})();
