import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Animaux', value: 2, color: 'rgba(30, 47, 35, 1)' },
    { label: 'Aube', value: 1, color: 'rgba(244, 228, 9, 1)' },
    { label: 'Automne', value: 2, color: 'rgba(226, 113, 29, 1)' },
    { label: 'Portraits', value: 1, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Romantisme', value: 2, color: 'rgba(255, 179, 198, 1)' },
    { label: 'Temps', value: 1, color: 'rgba(140, 7, 221, 1)' },
  ];
  addPieChart('samplePie', [data]);
})();
