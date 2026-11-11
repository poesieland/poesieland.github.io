import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Romantisme', value: 2, color: 'rgba(232, 93, 125, 1)' },
    { label: 'Passion', value: 1, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Aube', value: 3, color: 'rgba(245, 193, 106, 1)' },
    { label: 'Lune', value: 1, color: 'rgba(229, 163, 60, 1)' },
    { label: 'Crépuscule', value: 1, color: 'rgba(139, 91, 41, 1)' },
    { label: 'Espoir', value: 2, color: 'rgba(196, 154, 223, 1)' },
    { label: 'Création', value: 2, color: 'rgba(174, 122, 207, 1)' },
    { label: 'Foi', value: 2, color: 'rgba(152, 92, 192, 1)' },
    { label: 'Portraits', value: 2, color: 'rgba(133, 70, 175, 1)' },
    { label: 'Temps', value: 2, color: 'rgba(113, 55, 154, 1)' },
    { label: 'Condition humaine', value: 3, color: 'rgba(94, 43, 131, 1)' },
    { label: 'Apprentissage', value: 3, color: 'rgba(98, 58, 155, 1)' },
    { label: 'Révolte', value: 1, color: 'rgba(138, 36, 95, 1)' },
    { label: 'Angoisse', value: 2, color: 'rgba(41, 35, 79, 1)' },
    { label: 'Neige', value: 4, color: 'rgba(195, 223, 243, 1)' },
    { label: 'Flore', value: 1, color: 'rgba(145, 195, 232, 1)' },
    { label: 'Jardin et paysage', value: 2, color: 'rgba(101, 166, 213, 1)' },
    { label: 'Ciel', value: 2, color: 'rgba(36, 115, 173, 1)' },
    { label: 'Faune', value: 1, color: 'rgba(16, 74, 122, 1)' },
    { label: 'Climat', value: 1, color: 'rgb(10, 53, 91, 1)' },
    { label: 'Musique et chant', value: 2, color: 'rgba(246, 194, 160, 1)' },
    { label: 'Mouvement', value: 1, color: 'rgba(240, 164, 119, 1)' },
    { label: 'Félinement vôtre', value: 8, color: 'rgba(161, 86, 28, 1)' },
    { label: 'Automne', value: 1, color: 'rgba(77, 150, 61, 1)' },
    { label: 'Hiver', value: 15, color: 'rgba(27, 79, 8, 1)' },
  ];
  addPieChart('season30Pie', [data], { plugins: { title: { display: true, text: 'Tout fait sens (30) novembre 2025 à janvier 2026' } } });
})();
