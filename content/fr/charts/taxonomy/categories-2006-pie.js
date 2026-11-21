import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 1, color: 'rgba(255, 194, 209, 1)' },
    { label: 'Aube', value: 1, color: 'rgba(245, 193, 106, 1)' },
    { label: 'Lune', value: 1, color: 'rgba(229, 163, 60, 1)' },
    { label: 'Nuit', value: 1, color: 'rgba(47, 27, 12, 1)' },
    { label: 'Enfance et adolescence', value: 1, color: 'rgba(217, 185, 240, 1)' },
    { label: 'Espoir', value: 1, color: 'rgba(203, 163, 232, 1)' },
    { label: 'Foi', value: 1, color: 'rgba(166, 117, 209, 1)' },
    { label: 'Portraits', value: 1, color: 'rgba(146, 95, 195, 1)' },
    { label: 'Eau douce', value: 1, color: 'rgba(57, 137, 194, 1)' },
    { label: 'Musique et chant', value: 1, color: 'rgba(246, 194, 160, 1)' },
    { label: 'Sommeil', value: 1, color: 'rgba(213, 104, 49, 1)' },
    { label: 'Eté', value: 1, color: 'rgba(130, 196, 108, 1)' },
  ];
  addPieChart('categories2006Pie', [data], { plugins: { title: { display: true, text: '2006' } } });
})();
