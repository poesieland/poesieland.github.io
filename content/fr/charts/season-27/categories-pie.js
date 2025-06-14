import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Etre', value: 2, color: 'rgba(105, 16, 168, 1)' },
  ];
  addPieChart('season27Pie', [data], { plugins: { title: { display: true, text: 'D\'un rêve à l\'autre (27) juin à juin 2025' } } });
})();
