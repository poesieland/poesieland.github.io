import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Crépuscule', value: 1, color: 'rgba(179, 103, 0, 1)' },
    { label: 'Portraits', value: 1, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Automne', value: 1, color: 'rgba(27, 79, 8, 1)' },
  ];
  addPieChart('season29Pie', [data], { plugins: { title: { display: true, text: 'Kaléidoscopes (29) septembre 2025' } } });
})();
