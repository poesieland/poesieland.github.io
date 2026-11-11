import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 1, color: 'rgba(255, 194, 209, 1)' },
    { label: 'Romantisme', value: 2, color: 'rgba(232, 93, 125, 1)' },
    { label: 'Aube', value: 2, color: 'rgba(245, 193, 106, 1)' },
    { label: 'Lune', value: 1, color: 'rgba(229, 163, 60, 1)' },
    { label: 'Ville', value: 1, color: 'rgba(185, 121, 43, 1)' },
    { label: 'Crépuscule', value: 3, color: 'rgba(139, 91, 41, 1)' },
    { label: 'Enfance et adolescence', value: 3, color: 'rgba(215, 182, 237, 1)' },
    { label: 'Création', value: 6, color: 'rgba(174, 122, 207, 1)' },
    { label: 'Foi', value: 1, color: 'rgba(152, 92, 192, 1)' },
    { label: 'Portraits', value: 1, color: 'rgba(133, 70, 175, 1)' },
    { label: 'Temps', value: 11, color: 'rgba(113, 55, 154, 1)' },
    { label: 'Condition humaine', value: 4, color: 'rgba(94, 43, 131, 1)' },
    { label: 'Angoisse', value: 1, color: 'rgba(41, 35, 79, 1)' },
    { label: 'Neige', value: 1, color: 'rgba(195, 223, 243, 1)' },
    { label: 'Flore', value: 4, color: 'rgba(145, 195, 232, 1)' },
    { label: 'Eau douce', value: 1, color: 'rgba(57, 137, 194, 1)' },
    { label: 'Ciel', value: 3, color: 'rgba(36, 115, 173, 1)' },
    { label: 'Faune', value: 1, color: 'rgba(16, 74, 122, 1)' },
    { label: 'Climat', value: 1, color: 'rgb(10, 53, 91, 1)' },
    { label: 'Musique et chant', value: 1, color: 'rgba(246, 194, 160, 1)' },
    { label: 'Mouvement', value: 1, color: 'rgba(240, 164, 119, 1)' },
    { label: 'Félinement vôtre', value: 5, color: 'rgba(161, 86, 28, 1)' },
    { label: 'Printemps', value: 4, color: 'rgba(180, 217, 166, 1)' },
    { label: 'Eté', value: 2, color: 'rgba(130, 196, 108, 1)' },
  ];
  addPieChart('season32Pie', [data], { plugins: { title: { display: true, text: 'Témoin jour après jour (32) mars à avril 2026' } } });
})();
