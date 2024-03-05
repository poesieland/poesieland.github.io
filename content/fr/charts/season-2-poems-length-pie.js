import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: '1 quatrain', value: 1, color: 'rgba(72, 149, 239, 0.4)' },
    { label: '3 quatrains', value: 29, color: 'rgba(72, 149, 239, 0.6000000000000001)' },
    { label: '4 quatrains', value: 8, color: 'rgba(72, 149, 239, 0.7000000000000001)' },
    { label: '5 quatrains', value: 3, color: 'rgba(72, 149, 239, 0.8)' },
    { label: '7 quatrains', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: 'Nombre de vers non multiple de quatre', value: 6, color: 'rgba(67, 97, 238, 0.9)' },
    { label: 'Rimes suivies', value: 2, color: 'rgba(67, 97, 238, 0.7)' },
  ];
  addPieChart('season2PoemLengthPie', [data], 'En quatrains ?');
})();
