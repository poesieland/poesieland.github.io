import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 1, color: 'rgba(254, 231, 240, 1)' },
    { label: 'Espoir', value: 1, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Temps', value: 1, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Etre', value: 1, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Neige', value: 4, color: 'rgba(244, 254, 254, 1)' },
    { label: 'Eau douce', value: 1, color: 'rgba(0, 127, 255, 1)' },
    { label: 'Faune', value: 4, color: 'rgba(4, 139, 154, 1)' },
    { label: 'Sommeil', value: 1, color: 'rgba(209, 98, 4, 1)' },
  ];
  addPieChart('categories2026Pie', [data], { plugins: { title: { display: true, text: '2026' } } });
})();
