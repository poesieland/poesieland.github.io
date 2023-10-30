import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 2, color: 'rgb(255, 229, 236)' },
    { label: 'Romantisme', value: 2, color: 'rgb(255, 179, 198)' },
    { label: 'Femme', value: 2, color: 'rgb(255, 143, 171)' },
    { label: 'Aube', value: 1, color: 'rgb(244, 228, 9)' },
    { label: 'Lune', value: 4, color: 'rgb(238, 186, 11)' },
    { label: 'Crépuscule', value: 1, color: 'rgb(166, 60, 6)' },
    { label: 'Nuit', value: 5, color: 'rgb(113, 0, 0)' },
    { label: 'Enfance', value: 3, color: 'rgb(247, 235, 253)' },
    { label: 'Espoir', value: 3, color: 'rgb(234, 191, 250)' },
    { label: 'Création', value: 3, color: 'rgb(220, 147, 246)' },
    { label: 'Portraits', value: 4, color: 'rgb(179, 51, 233)' },
    { label: 'Temps', value: 8, color: 'rgb(140, 7, 221)' },
    { label: 'Etre', value: 4, color: 'rgb(105, 16, 168)' },
    { label: 'Apprentissage', value: 1, color: 'rgb(70, 24, 115)' },
    { label: 'Révolte', value: 1, color: 'rgb(61, 0, 102)' },
    { label: 'Flore', value: 3, color: 'rgb(146, 230, 167)' },
    { label: 'Jardin et paysage', value: 2, color: 'rgb(74, 214, 109)' },
    { label: 'Animaux', value: 3, color: 'rgb(30, 47, 35)' },
    { label: 'Musique et chant', value: 1, color: 'rgb(63, 193, 192)' },
    { label: 'Mouvement', value: 1, color: 'rgb(4, 166, 194)' },
    { label: 'Printemps', value: 4, color: 'rgb(255, 182, 39)' },
    { label: 'Automne', value: 1, color: 'rgb(226, 113, 29)' },
  ];
  addPieChart('season3Pie', [data], 'Troisième Saison : Vivace - De janvier à mai 1997');
})();
