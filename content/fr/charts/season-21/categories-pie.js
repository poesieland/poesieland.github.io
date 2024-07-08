import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Crépuscule', value: 1, color: 'rgba(129, 103, 41, 1)' },
    { label: 'Nuit', value: 1, color: 'rgba(91, 77, 11, 1)' },
    { label: 'Enfance et adolescence', value: 1, color: 'rgba(247, 235, 253, 1)' },
    { label: 'Temps', value: 1, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Etre', value: 2, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Faune', value: 2, color: 'rgba(9, 61, 55, 1)' },
    { label: 'Eté', value: 1, color: 'rgba(128, 185, 173, 1)' },
  ];
  addPieChart('season21Pie', [data], { plugins: { title: { display: true, text: 'Vingt-et-unième Saison : C\'est vivre qui compte - Depuis juin 2024' } } });
})();
