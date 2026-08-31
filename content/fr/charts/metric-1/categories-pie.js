import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Lune', value: 1, color: 'rgba(252, 215, 87, 1)' },
    { label: 'Nuit', value: 1, color: 'rgba(47, 27, 12, 1)' },
    { label: 'Temps', value: 1, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Etre', value: 1, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Automne', value: 1, color: 'rgba(27, 79, 8, 1)' },
    { label: 'Hiver', value: 1, color: 'rgba(24, 57, 30, 1)' },
  ];
  addPieChart('metric1Pie', [data], { plugins: { title: { display: true, text: '' } } });
})();
