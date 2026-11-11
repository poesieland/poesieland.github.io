import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Lune', value: 3, color: 'rgba(229, 163, 60, 1)' },
    { label: 'Nuit', value: 1, color: 'rgba(47, 27, 12, 1)' },
    { label: 'Espoir', value: 2, color: 'rgba(196, 154, 223, 1)' },
    { label: 'Création', value: 2, color: 'rgba(174, 122, 207, 1)' },
    { label: 'Foi', value: 1, color: 'rgba(152, 92, 192, 1)' },
    { label: 'Temps', value: 10, color: 'rgba(113, 55, 154, 1)' },
    { label: 'Condition humaine', value: 1, color: 'rgba(94, 43, 131, 1)' },
    { label: 'Apprentissage', value: 1, color: 'rgba(98, 58, 155, 1)' },
    { label: 'Angoisse', value: 2, color: 'rgba(41, 35, 79, 1)' },
    { label: 'Flore', value: 1, color: 'rgba(145, 195, 232, 1)' },
    { label: 'Jardin et paysage', value: 2, color: 'rgba(101, 166, 213, 1)' },
    { label: 'Eau douce', value: 1, color: 'rgba(57, 137, 194, 1)' },
    { label: 'Ciel', value: 1, color: 'rgba(36, 115, 173, 1)' },
    { label: 'Musique et chant', value: 2, color: 'rgba(246, 194, 160, 1)' },
    { label: 'Printemps', value: 1, color: 'rgba(180, 217, 166, 1)' },
    { label: 'Automne', value: 3, color: 'rgba(77, 150, 61, 1)' },
    { label: 'Hiver', value: 1, color: 'rgba(27, 79, 8, 1)' },
  ];
  addPieChart('categories2000Pie', [data], { plugins: { title: { display: true, text: '2000' } } });
})();
