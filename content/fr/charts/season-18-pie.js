import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Romantisme', value: 2, color: 'rgb(255, 179, 198)' },
    { label: 'Aube', value: 1, color: 'rgb(244, 228, 9)' },
    { label: 'Portraits', value: 1, color: 'rgb(179, 51, 233)' },
    { label: 'Temps', value: 1, color: 'rgb(140, 7, 221)' },
    { label: 'Animaux', value: 2, color: 'rgb(30, 47, 35)' },
    { label: 'Automne', value: 2, color: 'rgb(226, 113, 29)' },
  ];
  addPieChart('season18Pie', [data], 'Dix-huitième Saison : Retour aux sources - D\'octobre 2023 à ce jour');
})();
