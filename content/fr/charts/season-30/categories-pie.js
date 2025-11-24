import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Angoisse', value: 1, color: 'rgba(38, 9, 78, 1)' },
    { label: 'Automne', value: 1, color: 'rgba(27, 79, 8, 1)' },
    { label: 'Hiver', value: 2, color: 'rgba(24, 57, 30, 1)' },
  ];
  addPieChart('season30Pie', [data], { plugins: { title: { display: true, text: 'Tout fait sens (30) novembre 2025' } } });
})();
