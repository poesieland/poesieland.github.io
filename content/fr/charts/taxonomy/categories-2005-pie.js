import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Romantisme', value: 1, color: 'rgba(232, 93, 125, 1)' },
    { label: 'Passion', value: 1, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Aube', value: 1, color: 'rgba(245, 193, 106, 1)' },
    { label: 'Ville', value: 3, color: 'rgba(185, 121, 43, 1)' },
    { label: 'Espoir', value: 1, color: 'rgba(196, 154, 223, 1)' },
    { label: 'Foi', value: 1, color: 'rgba(152, 92, 192, 1)' },
    { label: 'Portraits', value: 3, color: 'rgba(133, 70, 175, 1)' },
    { label: 'Temps', value: 2, color: 'rgba(113, 55, 154, 1)' },
    { label: 'Condition humaine', value: 3, color: 'rgba(94, 43, 131, 1)' },
    { label: 'Neige', value: 1, color: 'rgba(195, 223, 243, 1)' },
    { label: 'Flore', value: 4, color: 'rgba(145, 195, 232, 1)' },
    { label: 'Jardin et paysage', value: 1, color: 'rgba(101, 166, 213, 1)' },
    { label: 'Eau douce', value: 3, color: 'rgba(57, 137, 194, 1)' },
    { label: 'Climat', value: 1, color: 'rgb(10, 53, 91, 1)' },
    { label: 'Musique et chant', value: 1, color: 'rgba(246, 194, 160, 1)' },
    { label: 'Printemps', value: 3, color: 'rgba(180, 217, 166, 1)' },
    { label: 'Hiver', value: 3, color: 'rgba(27, 79, 8, 1)' },
  ];
  addPieChart('categories2005Pie', [data], { plugins: { title: { display: true, text: '2005' } } });
})();
