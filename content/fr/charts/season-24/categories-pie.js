import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Foi', value: 1, color: 'rgba(203, 93, 241, 1)' },
    { label: 'Temps', value: 3, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Angoisse', value: 1, color: 'rgba(38, 9, 78, 1)' },
    { label: 'Mouvement', value: 1, color: 'rgba(250, 152, 70, 1)' },
    { label: 'Hiver', value: 1, color: 'rgba(24, 57, 30, 1)' },
  ];
  addPieChart('season24Pie', [data], { plugins: { title: { display: true, text: 'Vingt-quatrième Saison : Les mots respirent - Depuis ddécembre 2024' } } });
})();
