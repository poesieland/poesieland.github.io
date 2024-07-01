import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Etre', value: 1, color: 'rgba(105, 16, 168, 1)' },
  ];
  addPieChart('season21Pie', [data], { plugins: { title: { display: true, text: 'Vingt-et-unième Saison : C\'est vivre qui compte - Depuis juin 2024' } } });
})();
