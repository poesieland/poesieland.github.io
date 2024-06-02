import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 1, color: 'rgba(255, 229, 236, 1)' },
    { label: 'Amour malheureux', value: 4, color: 'rgba(255, 194, 209, 1)' },
    { label: 'Romantisme', value: 5, color: 'rgba(255, 179, 198, 1)' },
    { label: 'Aimé (amant)', value: 1, color: 'rgba(251, 111, 146, 1)' },
    { label: 'Aube', value: 1, color: 'rgba(244, 228, 9, 1)' },
    { label: 'Lune', value: 3, color: 'rgba(238, 186, 11, 1)' },
    { label: 'Espoir', value: 3, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Création', value: 14, color: 'rgba(220, 147, 246, 1)' },
    { label: 'Foi', value: 1, color: 'rgba(203, 93, 241, 1)' },
    { label: 'Portraits', value: 3, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Etre', value: 10, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Apprentissage', value: 1, color: 'rgba(70, 24, 115, 1)' },
    { label: 'Révolte', value: 3, color: 'rgba(61, 0, 102, 1)' },
    { label: 'Flore', value: 1, color: 'rgba(146, 230, 167, 1)' },
    { label: 'Eau douce', value: 1, color: 'rgba(37, 162, 68, 1)' },
    { label: 'Ciel', value: 1, color: 'rgba(26, 116, 49, 1)' },
    { label: 'Mer', value: 2, color: 'rgba(16, 69, 29, 1)' },
    { label: 'Musique et chant', value: 6, color: 'rgba(63, 193, 192, 1)' },
  ];
  addPieChart('season7Pie', [data], { plugins: { title: { display: true, text: 'Septième Saison : Croire - Juin et juillet 1998' } } });
})();
