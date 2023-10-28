import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 3, color: 'rgb(255, 229, 236)' },
    { label: 'Amour malheureux', value: 2, color: 'rgb(255, 194, 209)' },
    { label: 'Romantisme', value: 8, color: 'rgb(255, 179, 198)' },
    { label: 'Femme', value: 1, color: 'rgb(255, 143, 171)' },
    { label: 'Aimé (amant)', value: 1, color: 'rgb(251, 111, 146)' },
    { label: 'Aube', value: 1, color: 'rgb(244, 228, 9)' },
    { label: 'Lune', value: 1, color: 'rgb(238, 186, 11)' },
    { label: 'Nuit', value: 2, color: 'rgb(113, 0, 0)' },
    { label: 'Enfance', value: 1, color: 'rgb(247, 235, 253)' },
    { label: 'Espoir', value: 2, color: 'rgb(234, 191, 250)' },
    { label: 'Création', value: 3, color: 'rgb(220, 147, 246)' },
    { label: 'Portraits', value: 1, color: 'rgb(179, 51, 233)' },
    { label: 'Temps', value: 4, color: 'rgb(140, 7, 221)' },
    { label: 'Etre', value: 6, color: 'rgb(105, 16, 168)' },
    { label: 'Apprentissage', value: 4, color: 'rgb(70, 24, 115)' },
    { label: 'Révolte', value: 1, color: 'rgb(61, 0, 102)' },
    { label: 'Flore', value: 4, color: 'rgb(146, 230, 167)' },
    { label: 'Ciel', value: 2, color: 'rgb(26, 116, 49)' },
    { label: 'Mer', value: 1, color: 'rgb(16, 69, 29)' },
    { label: 'Animaux', value: 4, color: 'rgb(30, 47, 35)' },
    { label: 'Musique, chant', value: 1, color: 'rgb(63, 193, 192)' },
    { label: 'Toucher', value: 2, color: 'rgb(15, 128, 170)' },
    { label: 'Automne', value: 4, color: 'rgb(226, 113, 29)' },
    { label: 'Hiver', value: 3, color: 'rgb(204, 88, 3)' },
  ];
  addPieChart('season5Pie', [data], 'Cinquième Saison : Espaces de vie - De septembre 1997 à mars 1998');
})();
