import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amour platonique', value: 1, color: 'rgba(255, 111, 125, 1)' },
    { label: 'Temps', value: 1, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Ciel', value: 1, color: 'rgba(119, 181, 254, 1)' },
    { label: 'Printemps', value: 1, color: 'rgba(130, 196, 108, 1)' },
    { label: 'Automne', value: 6, color: 'rgba(27, 79, 8, 1)' },
  ];
  addPieChart('season22Pie', [data], { plugins: { title: { display: true, text: 'Vingt-deuxième Saison : Au temps le dire - Depuis septembre 2024' } } });
})();
