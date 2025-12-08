import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Aube', value: 1, color: 'rgba(255, 203, 96, 1)' },
    { label: 'Crépuscule', value: 1, color: 'rgba(179, 103, 0, 1)' },
    { label: 'Création', value: 1, color: 'rgba(220, 147, 246, 1)' },
    { label: 'Angoisse', value: 1, color: 'rgba(38, 9, 78, 1)' },
    { label: 'Neige', value: 1, color: 'rgba(244, 254, 254, 1)' },
    { label: 'Ciel', value: 2, color: 'rgba(119, 181, 254, 1)' },
    { label: 'Faune', value: 1, color: 'rgba(4, 139, 154, 1)' },
    { label: 'Automne', value: 1, color: 'rgba(27, 79, 8, 1)' },
    { label: 'Hiver', value: 4, color: 'rgba(24, 57, 30, 1)' },
  ];
  addPieChart('season30Pie', [data], { plugins: { title: { display: true, text: 'Tout fait sens (30) novembre 2025' } } });
})();
