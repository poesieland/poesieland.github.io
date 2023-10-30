import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 1, color: 'rgb(255, 229, 236)' },
    { label: 'Amour malheureux', value: 4, color: 'rgb(255, 194, 209)' },
    { label: 'Romantisme', value: 5, color: 'rgb(255, 179, 198)' },
    { label: 'Aimé (amant)', value: 1, color: 'rgb(251, 111, 146)' },
    { label: 'Aube', value: 1, color: 'rgb(244, 228, 9)' },
    { label: 'Lune', value: 3, color: 'rgb(238, 186, 11)' },
    { label: 'Espoir', value: 3, color: 'rgb(234, 191, 250)' },
    { label: 'Création', value: 14, color: 'rgb(220, 147, 246)' },
    { label: 'Foi', value: 1, color: 'rgb(203, 93, 241)' },
    { label: 'Portraits', value: 3, color: 'rgb(179, 51, 233)' },
    { label: 'Etre', value: 10, color: 'rgb(105, 16, 168)' },
    { label: 'Apprentissage', value: 1, color: 'rgb(70, 24, 115)' },
    { label: 'Révolte', value: 3, color: 'rgb(61, 0, 102)' },
    { label: 'Flore', value: 1, color: 'rgb(146, 230, 167)' },
    { label: 'Eau douce', value: 1, color: 'rgb(37, 162, 68)' },
    { label: 'Ciel', value: 1, color: 'rgb(26, 116, 49)' },
    { label: 'Mer', value: 2, color: 'rgb(16, 69, 29)' },
    { label: 'Musique et chant', value: 6, color: 'rgb(63, 193, 192)' },
  ];
  addPieChart('season7Pie', [data], 'Septième Saison : Croire - Juin et juillet 1998');
})();
