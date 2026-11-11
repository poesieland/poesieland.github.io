import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Lune', value: 1, color: 'rgba(229, 163, 60, 1)' },
    { label: 'Nuit', value: 1, color: 'rgba(47, 27, 12, 1)' },
    { label: 'Temps', value: 1, color: 'rgba(113, 55, 154, 1)' },
    { label: 'Condition humaine', value: 1, color: 'rgba(94, 43, 131, 1)' },
    { label: 'Automne', value: 1, color: 'rgba(77, 150, 61, 1)' },
    { label: 'Hiver', value: 1, color: 'rgba(27, 79, 8, 1)' },
  ];
  addPieChart('metric1Pie', [data], { plugins: { title: { display: true, text: '' } } });
})();
