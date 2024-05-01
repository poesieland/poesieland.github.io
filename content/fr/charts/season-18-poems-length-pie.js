import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: '2 quatrains', value: 4, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '3 quatrains', value: 15, color: 'rgba(72, 149, 239, 0.6000000000000001)' },
    { label: '4 quatrains', value: 12, color: 'rgba(72, 149, 239, 0.7000000000000001)' },
    { label: '5 quatrains', value: 9, color: 'rgba(72, 149, 239, 0.8)' },
    { label: '6 quatrains', value: 5, color: 'rgba(72, 149, 239, 0.9)' },
    { label: '7 quatrains', value: 2, color: 'rgba(72, 149, 239, 1)' },
    { label: 'Nombre de vers non multiple de quatre', value: 1, color: 'rgba(67, 97, 238, 0.9)' },
    { label: 'Rimes suivies ou acrostiche découpé différemment', value: 2, color: 'rgba(67, 97, 238, 0.7)' },
  ];
  addPieChart('season18PoemLengthPie', [data], { plugins: { title: { display: true, text: 'En quatrains ?' } } });
})();
