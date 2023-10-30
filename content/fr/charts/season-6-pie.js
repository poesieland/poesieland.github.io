import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 4, color: 'rgb(255, 229, 236)' },
    { label: 'Amour malheureux', value: 4, color: 'rgb(255, 194, 209)' },
    { label: 'Romantisme', value: 1, color: 'rgb(255, 179, 198)' },
    { label: 'Aimé (amant)', value: 1, color: 'rgb(251, 111, 146)' },
    { label: 'Lune', value: 1, color: 'rgb(238, 186, 11)' },
    { label: 'Enfance', value: 1, color: 'rgb(247, 235, 253)' },
    { label: 'Espoir', value: 5, color: 'rgb(234, 191, 250)' },
    { label: 'Création', value: 6, color: 'rgb(220, 147, 246)' },
    { label: 'Portraits', value: 5, color: 'rgb(179, 51, 233)' },
    { label: 'Temps', value: 3, color: 'rgb(140, 7, 221)' },
    { label: 'Etre', value: 8, color: 'rgb(105, 16, 168)' },
    { label: 'Apprentissage', value: 3, color: 'rgb(70, 24, 115)' },
    { label: 'Révolte', value: 2, color: 'rgb(61, 0, 102)' },
    { label: 'Flore', value: 2, color: 'rgb(146, 230, 167)' },
    { label: 'Animaux', value: 2, color: 'rgb(30, 47, 35)' },
    { label: 'Musique et chant', value: 2, color: 'rgb(63, 193, 192)' },
    { label: 'Mouvement', value: 3, color: 'rgb(4, 166, 194)' },
    { label: 'Printemps', value: 1, color: 'rgb(255, 182, 39)' },
  ];
  addPieChart('season6Pie', [data], 'Sixième Saison : Sur le chemin - De mars à juin 1998');
})();
