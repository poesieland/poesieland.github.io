import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: '1 quatrain', value: 1, color: 'rgba(72, 149, 239, 0.4)' },
    { label: '2 quatrains', value: 10, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '3 quatrains', value: 21, color: 'rgba(72, 149, 239, 0.6000000000000001)' },
    { label: '4 quatrains', value: 5, color: 'rgba(72, 149, 239, 0.7000000000000001)' },
    { label: 'Nombre de vers non multiple de quatre', value: 10, color: 'rgba(67, 97, 238, 0.9)' },
    { label: 'Pas de quatrain car rimes suivies, acrostiche découpé différemment', value: 3, color: 'rgba(67, 97, 238, 0.7)' },
  ];
  addPieChart('season15PoemLengthPie', [data], 'En quatrains ?');
})();
