import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 4, color: 'rgba(255, 229, 236, 1)' },
    { label: 'Amour malheureux', value: 4, color: 'rgba(255, 194, 209, 1)' },
    { label: 'Romantisme', value: 2, color: 'rgba(255, 179, 198, 1)' },
    { label: 'Aimé (amant)', value: 1, color: 'rgba(251, 111, 146, 1)' },
    { label: 'Lune', value: 1, color: 'rgba(238, 186, 11, 1)' },
    { label: 'Enfance', value: 1, color: 'rgba(247, 235, 253, 1)' },
    { label: 'Espoir', value: 5, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Création', value: 6, color: 'rgba(220, 147, 246, 1)' },
    { label: 'Portraits', value: 6, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Temps', value: 3, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Etre', value: 8, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Apprentissage', value: 3, color: 'rgba(70, 24, 115, 1)' },
    { label: 'Révolte', value: 2, color: 'rgba(61, 0, 102, 1)' },
    { label: 'Flore', value: 2, color: 'rgba(146, 230, 167, 1)' },
    { label: 'Animaux', value: 2, color: 'rgba(30, 47, 35, 1)' },
    { label: 'Musique et chant', value: 2, color: 'rgba(63, 193, 192, 1)' },
    { label: 'Mouvement', value: 3, color: 'rgba(4, 166, 194, 1)' },
    { label: 'Printemps', value: 1, color: 'rgba(255, 182, 39, 1)' },
  ];
  addPieChart('season6Pie', [data], 'Sixième Saison : Sur le chemin - De mars à juin 1998');
})();
