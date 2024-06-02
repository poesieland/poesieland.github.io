import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 4, color: 'rgba(255, 229, 236, 1)' },
    { label: 'Romantisme', value: 2, color: 'rgba(255, 179, 198, 1)' },
    { label: 'Femme', value: 1, color: 'rgba(255, 143, 171, 1)' },
    { label: 'Aube', value: 2, color: 'rgba(244, 228, 9, 1)' },
    { label: 'Lune', value: 1, color: 'rgba(238, 186, 11, 1)' },
    { label: 'Crépuscule', value: 4, color: 'rgba(166, 60, 6, 1)' },
    { label: 'Enfance et adolescence', value: 2, color: 'rgba(247, 235, 253, 1)' },
    { label: 'Espoir', value: 3, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Création', value: 1, color: 'rgba(220, 147, 246, 1)' },
    { label: 'Portraits', value: 8, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Temps', value: 1, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Etre', value: 3, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Révolte', value: 3, color: 'rgba(61, 0, 102, 1)' },
    { label: 'Neige', value: 2, color: 'rgba(183, 239, 197, 1)' },
    { label: 'Flore', value: 4, color: 'rgba(146, 230, 167, 1)' },
    { label: 'Jardin et paysage', value: 3, color: 'rgba(74, 214, 109, 1)' },
    { label: 'Eau douce', value: 1, color: 'rgba(37, 162, 68, 1)' },
    { label: 'Ciel', value: 1, color: 'rgba(26, 116, 49, 1)' },
    { label: 'Mer', value: 1, color: 'rgba(16, 69, 29, 1)' },
    { label: 'Animaux', value: 2, color: 'rgba(30, 47, 35, 1)' },
    { label: 'Toucher', value: 1, color: 'rgba(15, 128, 170, 1)' },
    { label: 'Automne', value: 9, color: 'rgba(226, 113, 29, 1)' },
    { label: 'Hiver', value: 3, color: 'rgba(204, 88, 3, 1)' },
  ];
  addPieChart('season2Pie', [data], { plugins: { title: { display: true, text: 'Deuxième Saison : Tableaux - De septembre à décembre 1996' } } });
})();
