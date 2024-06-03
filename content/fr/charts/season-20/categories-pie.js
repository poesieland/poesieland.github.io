import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 1, color: 'rgba(255, 229, 236, 1)' },
    { label: 'Ville', value: 1, color: 'rgba(195, 111, 9, 1)' },
    { label: 'Crépuscule', value: 2, color: 'rgba(166, 60, 6, 1)' },
    { label: 'Enfance et adolescence', value: 1, color: 'rgba(247, 235, 253, 1)' },
    { label: 'Espoir', value: 3, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Foi', value: 2, color: 'rgba(203, 93, 241, 1)' },
    { label: 'Portraits', value: 4, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Temps', value: 3, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Etre', value: 1, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Révolte', value: 2, color: 'rgba(61, 0, 102, 1)' },
    { label: 'Flore', value: 1, color: 'rgba(146, 230, 167, 1)' },
    { label: 'Jardin et paysage', value: 2, color: 'rgba(74, 214, 109, 1)' },
    { label: 'Eau douce', value: 2, color: 'rgba(37, 162, 68, 1)' },
    { label: 'Ciel', value: 2, color: 'rgba(26, 116, 49, 1)' },
    { label: 'Animaux', value: 1, color: 'rgba(30, 47, 35, 1)' },
    { label: 'Musique et chant', value: 2, color: 'rgba(63, 193, 192, 1)' },
    { label: 'Mouvement', value: 1, color: 'rgba(4, 166, 194, 1)' },
    { label: 'Eté', value: 3, color: 'rgba(255, 149, 5, 1)' },
    { label: 'Automne', value: 1, color: 'rgba(226, 113, 29, 1)' },
  ];
  addPieChart('season20Pie', [data], { plugins: { title: { display: true, text: 'Vingtième Saison : Le temps qui nous reste - Depuis avril 2024' } } });
})();
