import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 2, color: 'rgba(255, 194, 209, 1)' },
    { label: 'Amour platonique', value: 4, color: 'rgba(245, 143, 168, 1)' },
    { label: 'Aube', value: 1, color: 'rgba(245, 193, 106, 1)' },
    { label: 'Lune', value: 4, color: 'rgba(229, 163, 60, 1)' },
    { label: 'Crépuscule', value: 1, color: 'rgba(139, 91, 41, 1)' },
    { label: 'Nuit', value: 4, color: 'rgba(47, 27, 12, 1)' },
    { label: 'Enfance et adolescence', value: 3, color: 'rgba(215, 182, 237, 1)' },
    { label: 'Espoir', value: 3, color: 'rgba(196, 154, 223, 1)' },
    { label: 'Création', value: 3, color: 'rgba(174, 122, 207, 1)' },
    { label: 'Portraits', value: 4, color: 'rgba(133, 70, 175, 1)' },
    { label: 'Temps', value: 9, color: 'rgba(113, 55, 154, 1)' },
    { label: 'Condition humaine', value: 4, color: 'rgba(94, 43, 131, 1)' },
    { label: 'Apprentissage', value: 1, color: 'rgba(98, 58, 155, 1)' },
    { label: 'Révolte', value: 1, color: 'rgba(138, 36, 95, 1)' },
    { label: 'Flore', value: 3, color: 'rgba(145, 195, 232, 1)' },
    { label: 'Jardin et paysage', value: 2, color: 'rgba(101, 166, 213, 1)' },
    { label: 'Ciel', value: 3, color: 'rgba(36, 115, 173, 1)' },
    { label: 'Faune', value: 3, color: 'rgba(16, 74, 122, 1)' },
    { label: 'Musique et chant', value: 1, color: 'rgba(246, 194, 160, 1)' },
    { label: 'Mouvement', value: 1, color: 'rgba(240, 164, 119, 1)' },
    { label: 'Printemps', value: 5, color: 'rgba(180, 217, 166, 1)' },
  ];
  addPieChart('season3Pie', [data], { plugins: { title: { display: true, text: 'Vivace (3) janvier à mai 1997' } } });
})();
