import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Automne', value: 1, color: 'rgba(27, 79, 8, 1)' },
  ];
  addPieChart('season22Pie', [data], { plugins: { title: { display: true, text: 'Vingt-deuxième Saison : Au temps le dire - Depuis septembre 2024' } } });
})();
