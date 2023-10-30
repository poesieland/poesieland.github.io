import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 1, color: 'rgb(255, 229, 236)' },
    { label: 'Romantisme', value: 1, color: 'rgb(255, 179, 198)' },
    { label: 'Aimé (amant)', value: 1, color: 'rgb(251, 111, 146)' },
    { label: 'Aube', value: 1, color: 'rgb(244, 228, 9)' },
    { label: 'Lune', value: 2, color: 'rgb(238, 186, 11)' },
    { label: 'Ville', value: 4, color: 'rgb(195, 111, 9)' },
    { label: 'Crépuscule', value: 1, color: 'rgb(166, 60, 6)' },
    { label: 'Nuit', value: 2, color: 'rgb(113, 0, 0)' },
    { label: 'Espoir', value: 3, color: 'rgb(234, 191, 250)' },
    { label: 'Création', value: 4, color: 'rgb(220, 147, 246)' },
    { label: 'Foi', value: 12, color: 'rgb(203, 93, 241)' },
    { label: 'Portraits', value: 4, color: 'rgb(179, 51, 233)' },
    { label: 'Temps', value: 10, color: 'rgb(140, 7, 221)' },
    { label: 'Etre', value: 4, color: 'rgb(105, 16, 168)' },
    { label: 'Apprentissage', value: 1, color: 'rgb(70, 24, 115)' },
    { label: 'Flore', value: 2, color: 'rgb(146, 230, 167)' },
    { label: 'Jardin et paysage', value: 3, color: 'rgb(74, 214, 109)' },
    { label: 'Ciel', value: 4, color: 'rgb(26, 116, 49)' },
    { label: 'Mer', value: 3, color: 'rgb(16, 69, 29)' },
    { label: 'Animaux', value: 1, color: 'rgb(30, 47, 35)' },
    { label: 'Musique et chant', value: 4, color: 'rgb(63, 193, 192)' },
    { label: 'Sommeil', value: 1, color: 'rgb(29, 78, 137)' },
    { label: 'Automne', value: 5, color: 'rgb(226, 113, 29)' },
  ];
  addPieChart('season13Pie', [data], 'Treizième Saison : Divina - De juillet à novembre 1999');
})();
