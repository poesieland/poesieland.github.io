import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Romantisme', value: 1, color: 'rgba(232, 93, 125, 1)' },
    { label: 'Passion', value: 1, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Enfance et adolescence', value: 1, color: 'rgba(217, 185, 240, 1)' },
    { label: 'Portraits', value: 1, color: 'rgba(146, 95, 195, 1)' },
    { label: 'Révolte', value: 5, color: 'rgba(116, 54, 111, 1)' },
    { label: 'Angoisse', value: 1, color: 'rgba(41, 35, 79, 1)' },
    { label: 'Flore', value: 1, color: 'rgba(145, 195, 232, 1)' },
    { label: 'Musique et chant', value: 1, color: 'rgba(246, 194, 160, 1)' },
  ];
  addPieChart('categories1994Pie', [data], { plugins: { title: { display: true, text: '1994' } } });
})();
