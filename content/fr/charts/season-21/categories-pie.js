import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Crépuscule', value: 1, color: 'rgba(166, 60, 6, 1)' },
    { label: 'Nuit', value: 1, color: 'rgba(113, 0, 0, 1)' },
    { label: 'Enfance et adolescence', value: 1, color: 'rgba(247, 235, 253, 1)' },
    { label: 'Temps', value: 1, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Etre', value: 2, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Animaux', value: 2, color: 'rgba(30, 47, 35, 1)' },
    { label: 'Eté', value: 1, color: 'rgba(255, 149, 5, 1)' },
  ];
  addPieChart('season21Pie', [data], { plugins: { title: { display: true, text: 'Vingt-et-unième Saison : C\'est vivre qui compte - Depuis juin 2024' } } });
})();
