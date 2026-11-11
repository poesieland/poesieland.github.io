import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 2, color: 'rgba(255, 194, 209, 1)' },
    { label: 'Romantisme', value: 2, color: 'rgba(232, 93, 125, 1)' },
    { label: 'Passion', value: 1, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Aube', value: 3, color: 'rgba(245, 193, 106, 1)' },
    { label: 'Lune', value: 1, color: 'rgba(229, 163, 60, 1)' },
    { label: 'Crépuscule', value: 2, color: 'rgba(139, 91, 41, 1)' },
    { label: 'Nuit', value: 1, color: 'rgba(47, 27, 12, 1)' },
    { label: 'Espoir', value: 1, color: 'rgba(196, 154, 223, 1)' },
    { label: 'Création', value: 5, color: 'rgba(174, 122, 207, 1)' },
    { label: 'Portraits', value: 2, color: 'rgba(133, 70, 175, 1)' },
    { label: 'Temps', value: 8, color: 'rgba(113, 55, 154, 1)' },
    { label: 'Condition humaine', value: 3, color: 'rgba(94, 43, 131, 1)' },
    { label: 'Apprentissage', value: 4, color: 'rgba(98, 58, 155, 1)' },
    { label: 'Angoisse', value: 2, color: 'rgba(41, 35, 79, 1)' },
    { label: 'Neige', value: 5, color: 'rgba(195, 223, 243, 1)' },
    { label: 'Flore', value: 1, color: 'rgba(145, 195, 232, 1)' },
    { label: 'Jardin et paysage', value: 2, color: 'rgba(101, 166, 213, 1)' },
    { label: 'Eau douce', value: 3, color: 'rgba(57, 137, 194, 1)' },
    { label: 'Ciel', value: 4, color: 'rgba(36, 115, 173, 1)' },
    { label: 'Climat', value: 1, color: 'rgb(10, 53, 91, 1)' },
    { label: 'Sommeil', value: 1, color: 'rgba(213, 104, 49, 1)' },
    { label: 'Félinement vôtre', value: 9, color: 'rgba(161, 86, 28, 1)' },
    { label: 'Printemps', value: 7, color: 'rgba(180, 217, 166, 1)' },
    { label: 'Hiver', value: 2, color: 'rgba(27, 79, 8, 1)' },
  ];
  addPieChart('season31Pie', [data], { plugins: { title: { display: true, text: 'Emotions mouvantes (31) janvier à mars 2026' } } });
})();
