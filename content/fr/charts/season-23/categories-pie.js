import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 1, color: 'rgba(254, 231, 240, 1)' },
    { label: 'Aube', value: 1, color: 'rgba(255, 203, 96, 1)' },
    { label: 'Crépuscule', value: 1, color: 'rgba(179, 103, 0, 1)' },
    { label: 'Neige', value: 1, color: 'rgba(244, 254, 254, 1)' },
    { label: 'Climat', value: 1, color: 'rgb(50, 122, 183, 1)' },
    { label: 'Automne', value: 2, color: 'rgba(27, 79, 8, 1)' },
  ];
  addPieChart('season23Pie', [data], { plugins: { title: { display: true, text: 'Vingt-troisième Saison : Jamais trop - Depuis novembre 2024' } } });
})();
