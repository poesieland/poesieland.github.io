import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 1, color: 'rgb(255, 229, 236)' },
    { label: 'Romantisme', value: 4, color: 'rgb(255, 179, 198)' },
    { label: 'Aube', value: 1, color: 'rgb(244, 228, 9)' },
    { label: 'Lune', value: 4, color: 'rgb(238, 186, 11)' },
    { label: 'Nuit', value: 1, color: 'rgb(113, 0, 0)' },
    { label: 'Espoir', value: 3, color: 'rgb(234, 191, 250)' },
    { label: 'Création', value: 4, color: 'rgb(220, 147, 246)' },
    { label: 'Foi', value: 4, color: 'rgb(203, 93, 241)' },
    { label: 'Portraits', value: 1, color: 'rgb(179, 51, 233)' },
    { label: 'Temps', value: 12, color: 'rgb(140, 7, 221)' },
    { label: 'Etre', value: 5, color: 'rgb(105, 16, 168)' },
    { label: 'Apprentissage', value: 1, color: 'rgb(70, 24, 115)' },
    { label: 'Flore', value: 3, color: 'rgb(146, 230, 167)' },
    { label: 'Jardin, paysage', value: 6, color: 'rgb(74, 214, 109)' },
    { label: 'Eau douce', value: 1, color: 'rgb(37, 162, 68)' },
    { label: 'Ciel', value: 4, color: 'rgb(26, 116, 49)' },
    { label: 'Animaux', value: 1, color: 'rgb(30, 47, 35)' },
    { label: 'Musique, chant', value: 5, color: 'rgb(63, 193, 192)' },
    { label: 'Mouvement', value: 4, color: 'rgb(4, 166, 194)' },
    { label: 'Toucher', value: 1, color: 'rgb(15, 128, 170)' },
    { label: 'Printemps', value: 4, color: 'rgb(179, 51, 233)' },
    { label: 'Automne', value: 3, color: 'rgb(226, 113, 29)' },
    { label: 'Hiver', value: 1, color: 'rgb(204, 88, 3)' },
  ];
  addPieChart('season14Pie', [data], 'Quatorzième Saison : Au long cours - De novembre 1999 à mars 2001');
})();
