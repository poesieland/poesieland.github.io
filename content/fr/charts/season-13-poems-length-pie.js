import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: '2 quatrains', value: 10, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '3 quatrains', value: 16, color: 'rgba(72, 149, 239, 0.6000000000000001)' },
    { label: '4 quatrains', value: 7, color: 'rgba(72, 149, 239, 0.7000000000000001)' },
    { label: '5 quatrains', value: 1, color: 'rgba(72, 149, 239, 0.8)' },
    { label: 'Nombre de vers non multiple de quatre', value: 16, color: 'rgba(67, 97, 238, 0.9)' },
    { label: 'Pas de quatrain car rimes suivies, acrostiche découpé différemment', value: 0, color: 'rgba(67, 97, 238, 0.7)' },
  ];
  addPieChart('season13PoemLengthPie', [data], 'En quatrains ?');
})();
