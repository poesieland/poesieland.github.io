import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 2, color: 'rgb(255, 229, 236)' },
    { label: 'Amour malheureux', value: 2, color: 'rgb(255, 194, 209)' },
    { label: 'Romantisme', value: 1, color: 'rgb(255, 179, 198)' },
    { label: 'Femme', value: 6, color: 'rgb(255, 143, 171)' },
    { label: 'Lune', value: 1, color: 'rgb(238, 186, 11)' },
    { label: 'Ville', value: 2, color: 'rgb(195, 111, 9)' },
    { label: 'Enfance', value: 6, color: 'rgb(247, 235, 253)' },
    { label: 'Espoir', value: 2, color: 'rgb(234, 191, 250)' },
    { label: 'Création', value: 4, color: 'rgb(220, 147, 246)' },
    { label: 'Foi', value: 1, color: 'rgb(203, 93, 241)' },
    { label: 'Portraits', value: 3, color: 'rgb(179, 51, 233)' },
    { label: 'Temps', value: 1, color: 'rgb(140, 7, 221)' },
    { label: 'Révolte', value: 6, color: 'rgb(61, 0, 102)' },
    { label: 'Neige', value: 1, color: 'rgb(183, 239, 197)' },
    { label: 'Flore', value: 4, color: 'rgb(146, 230, 167)' },
    { label: 'Jardin, paysage', value: 5, color: 'rgb(74, 214, 109)' },
    { label: 'Ciel', value: 1, color: 'rgb(26, 116, 49)' },
    { label: 'Mer', value: 6, color: 'rgb(16, 69, 29)' },
    { label: 'Animaux', value: 2, color: 'rgb(30, 47, 35)' },
    { label: 'Musique, chant', value: 1, color: 'rgb(63, 193, 192)' },
    { label: 'Mouvement', value: 1, color: 'rgb(4, 166, 194)' },
    { label: 'Automne', value: 2, color: 'rgb(226, 113, 29)' },
  ];
  addPieChart('season1Pie', [data], 'Première Saison : Premiers élans - De 1994 à septembre 1996');
})();
