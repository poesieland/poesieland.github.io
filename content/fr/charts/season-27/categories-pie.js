import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amour platonique', value: 1, color: 'rgba(255, 111, 125, 1)' },
    { label: 'Nuit', value: 1, color: 'rgba(47, 27, 12, 1)' },
    { label: 'Etre', value: 2, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Eau douce', value: 1, color: 'rgba(0, 127, 255, 1)' },
    { label: 'Ciel', value: 1, color: 'rgba(119, 181, 254, 1)' },
  ];
  addPieChart('season27Pie', [data], { plugins: { title: { display: true, text: 'D\'un rêve à l\'autre (27) juin à juin 2025' } } });
})();
