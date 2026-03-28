import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 1, color: 'rgba(254, 231, 240, 1)' },
    { label: 'Aube', value: 2, color: 'rgba(255, 203, 96, 1)' },
    { label: 'Lune', value: 1, color: 'rgba(253, 241, 184, 1)' },
    { label: 'Crépuscule', value: 1, color: 'rgba(179, 103, 0, 1)' },
    { label: 'Enfance et adolescence', value: 1, color: 'rgba(247, 235, 253, 1)' },
    { label: 'Portraits', value: 1, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Temps', value: 1, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Etre', value: 1, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Angoisse', value: 1, color: 'rgba(38, 9, 78, 1)' },
    { label: 'Neige', value: 1, color: 'rgba(244, 254, 254, 1)' },
    { label: 'Ciel', value: 3, color: 'rgba(119, 181, 254, 1)' },
    { label: 'Faune', value: 4, color: 'rgba(4, 139, 154, 1)' },
    { label: 'Mouvement', value: 1, color: 'rgba(250, 152, 70, 1)' },
    { label: 'Printemps', value: 2, color: 'rgba(130, 196, 108, 1)' },
  ];
  addPieChart('season32Pie', [data], { plugins: { title: { display: true, text: 'Témoin jour après jour (32) mars 2026' } } });
})();
