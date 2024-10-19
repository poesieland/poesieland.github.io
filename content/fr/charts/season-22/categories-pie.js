import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 2, color: 'rgba(254, 231, 240, 1)' },
    { label: 'Amour platonique', value: 1, color: 'rgba(255, 111, 125, 1)' },
    { label: 'Aube', value: 2, color: 'rgba(255, 203, 96, 1)' },
    { label: 'Crépuscule', value: 1, color: 'rgba(179, 103, 0, 1)' },
    { label: 'Nuit', value: 1, color: 'rgba(47, 27, 12, 1)' },
    { label: 'Temps', value: 5, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Etre', value: 1, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Angoisse', value: 8, color: 'rgba(38, 9, 78, 1)' },
    { label: 'Flore', value: 2, color: 'rgba(84, 114, 174, 1)' },
    { label: 'Ciel', value: 3, color: 'rgba(119, 181, 254, 1)' },
    { label: 'Faune', value: 2, color: 'rgba(4, 139, 154, 1)' },
    { label: 'Climat', value: 1, color: 'rgb(50, 122, 183, 1)' },
    { label: 'Printemps', value: 1, color: 'rgba(130, 196, 108, 1)' },
    { label: 'Eté', value: 1, color: 'rgba(0, 86, 27, 1)' },
    { label: 'Automne', value: 14, color: 'rgba(27, 79, 8, 1)' },
  ];
  addPieChart('season22Pie', [data], { plugins: { title: { display: true, text: 'Vingt-deuxième Saison : Au temps le dire - Depuis septembre 2024' } } });
})();
