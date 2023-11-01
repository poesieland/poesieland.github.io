import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 1, color: 'rgb(255, 229, 236)' },
    { label: 'Amour malheureux', value: 1, color: 'rgb(255, 194, 209)' },
    { label: 'Romantisme', value: 1, color: 'rgb(255, 179, 198)' },
    { label: 'Aube', value: 2, color: 'rgb(244, 228, 9)' },
    { label: 'Ville', value: 3, color: 'rgb(195, 111, 9)' },
    { label: 'Crépuscule', value: 2, color: 'rgb(166, 60, 6)' },
    { label: 'Nuit', value: 2, color: 'rgb(113, 0, 0)' },
    { label: 'Enfance', value: 3, color: 'rgb(247, 235, 253)' },
    { label: 'Espoir', value: 4, color: 'rgb(234, 191, 250)' },
    { label: 'Création', value: 2, color: 'rgb(220, 147, 246)' },
    { label: 'Foi', value: 3, color: 'rgb(203, 93, 241)' },
    { label: 'Portraits', value: 4, color: 'rgb(179, 51, 233)' },
    { label: 'Temps', value: 3, color: 'rgb(140, 7, 221)' },
    { label: 'Etre', value: 3, color: 'rgb(105, 16, 168)' },
    { label: 'Apprentissage', value: 2, color: 'rgb(70, 24, 115)' },
    { label: 'Révolte', value: 1, color: 'rgb(61, 0, 102)' },
    { label: 'Neige', value: 2, color: 'rgb(183, 239, 197)' },
    { label: 'Flore', value: 4, color: 'rgb(146, 230, 167)' },
    { label: 'Jardin et paysage', value: 2, color: 'rgb(74, 214, 109)' },
    { label: 'Eau douce', value: 4, color: 'rgb(37, 162, 68)' },
    { label: 'Musique et chant', value: 1, color: 'rgb(63, 193, 192)' },
    { label: 'Printemps', value: 4, color: 'rgb(255, 182, 39)' },
    { label: 'Automne', value: 3, color: 'rgb(226, 113, 29)' },
    { label: 'Hiver', value: 6, color: 'rgb(204, 88, 3)' },
  ];
  addPieChart('season17Pie', [data], 'Dix-septième Saison : Traversées - D\'octobre 2004 à octobre 2023');
})();
