import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Romantisme', value: 1, color: 'rgba(232, 93, 125, 1)' },
    { label: 'Passion', value: 1, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Aube', value: 1, color: 'rgba(245, 193, 106, 1)' },
    { label: 'Ville', value: 1, color: 'rgba(185, 121, 43, 1)' },
    { label: 'Crépuscule', value: 1, color: 'rgba(139, 91, 41, 1)' },
    { label: 'Nuit', value: 1, color: 'rgba(47, 27, 12, 1)' },
    { label: 'Enfance et adolescence', value: 2, color: 'rgba(215, 182, 237, 1)' },
    { label: 'Portraits', value: 1, color: 'rgba(133, 70, 175, 1)' },
    { label: 'Temps', value: 3, color: 'rgba(113, 55, 154, 1)' },
    { label: 'Condition humaine', value: 1, color: 'rgba(94, 43, 131, 1)' },
    { label: 'Angoisse', value: 2, color: 'rgba(41, 35, 79, 1)' },
    { label: 'Ciel', value: 1, color: 'rgba(36, 115, 173, 1)' },
    { label: 'Faune', value: 1, color: 'rgba(16, 74, 122, 1)' },
    { label: 'Climat', value: 1, color: 'rgb(10, 53, 91, 1)' },
    { label: 'Musique et chant', value: 1, color: 'rgba(246, 194, 160, 1)' },
    { label: 'Printemps', value: 1, color: 'rgba(180, 217, 166, 1)' },
    { label: 'Automne', value: 2, color: 'rgba(77, 150, 61, 1)' },
    { label: 'Hiver', value: 1, color: 'rgba(27, 79, 8, 1)' },
  ];
  addPieChart('metric9Pie', [data], { plugins: { title: { display: true, text: '' } } });
})();
