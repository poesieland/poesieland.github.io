import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 4, color: 'rgb(255, 229, 236)' },
    { label: 'Romantisme', value: 2, color: 'rgb(255, 179, 198)' },
    { label: 'Femme', value: 1, color: 'rgb(255, 143, 171)' },
    { label: 'Aube', value: 2, color: 'rgb(244, 228, 9)' },
    { label: 'Lune', value: 1, color: 'rgb(238, 186, 11)' },
    { label: 'Crépuscule', value: 4, color: 'rgb(166, 60, 6)' },
    { label: 'Enfance', value: 2, color: 'rgb(247, 235, 253)' },
    { label: 'Espoir', value: 3, color: 'rgb(234, 191, 250)' },
    { label: 'Création', value: 1, color: 'rgb(220, 147, 246)' },
    { label: 'Portraits', value: 8, color: 'rgb(179, 51, 233)' },
    { label: 'Temps', value: 1, color: 'rgb(140, 7, 221)' },
    { label: 'Etre', value: 3, color: 'rgb(105, 16, 168)' },
    { label: 'Révolte', value: 3, color: 'rgb(61, 0, 102)' },
    { label: 'Neige', value: 2, color: 'rgb(183, 239, 197)' },
    { label: 'Flore', value: 4, color: 'rgb(146, 230, 167)' },
    { label: 'Jardin et paysage', value: 3, color: 'rgb(74, 214, 109)' },
    { label: 'Eau douce', value: 1, color: 'rgb(37, 162, 68)' },
    { label: 'Ciel', value: 1, color: 'rgb(26, 116, 49)' },
    { label: 'Mer', value: 1, color: 'rgb(16, 69, 29)' },
    { label: 'Animaux', value: 2, color: 'rgb(30, 47, 35)' },
    { label: 'Toucher', value: 1, color: 'rgb(15, 128, 170)' },
    { label: 'Automne', value: 9, color: 'rgb(226, 113, 29)' },
    { label: 'Hiver', value: 3, color: 'rgb(204, 88, 3)' },
  ];
  addPieChart('season2Pie', [data], 'Deuxième Saison : Tableaux - De septembre à décembre 1996');
})();
