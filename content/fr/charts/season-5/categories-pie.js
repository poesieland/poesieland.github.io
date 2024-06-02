import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 3, color: 'rgba(255, 229, 236, 1)' },
    { label: 'Amour malheureux', value: 2, color: 'rgba(255, 194, 209, 1)' },
    { label: 'Romantisme', value: 8, color: 'rgba(255, 179, 198, 1)' },
    { label: 'Femme', value: 1, color: 'rgba(255, 143, 171, 1)' },
    { label: 'Aimé (amant)', value: 1, color: 'rgba(251, 111, 146, 1)' },
    { label: 'Aube', value: 1, color: 'rgba(244, 228, 9, 1)' },
    { label: 'Lune', value: 1, color: 'rgba(238, 186, 11, 1)' },
    { label: 'Nuit', value: 2, color: 'rgba(113, 0, 0, 1)' },
    { label: 'Enfance et adolescence', value: 2, color: 'rgba(247, 235, 253, 1)' },
    { label: 'Espoir', value: 2, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Création', value: 3, color: 'rgba(220, 147, 246, 1)' },
    { label: 'Portraits', value: 1, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Temps', value: 4, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Etre', value: 6, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Apprentissage', value: 5, color: 'rgba(70, 24, 115, 1)' },
    { label: 'Révolte', value: 1, color: 'rgba(61, 0, 102, 1)' },
    { label: 'Flore', value: 4, color: 'rgba(146, 230, 167, 1)' },
    { label: 'Ciel', value: 2, color: 'rgba(26, 116, 49, 1)' },
    { label: 'Mer', value: 1, color: 'rgba(16, 69, 29, 1)' },
    { label: 'Animaux', value: 4, color: 'rgba(30, 47, 35, 1)' },
    { label: 'Musique et chant', value: 1, color: 'rgba(63, 193, 192, 1)' },
    { label: 'Toucher', value: 2, color: 'rgba(15, 128, 170, 1)' },
    { label: 'Automne', value: 4, color: 'rgba(226, 113, 29, 1)' },
    { label: 'Hiver', value: 3, color: 'rgba(204, 88, 3, 1)' },
  ];
  addPieChart('season5Pie', [data], { plugins: { title: { display: true, text: 'Cinquième Saison : Espaces de vie - De septembre 1997 à mars 1998' } } });
})();
