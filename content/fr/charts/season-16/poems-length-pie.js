import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '2 quatrains', value: 6, color: 'rgba(72, 149, 239, 0.5)' },
    { label: '3 quatrains', value: 33, color: 'rgba(72, 149, 239, 0.6000000000000001)' },
    { label: '4 quatrains', value: 7, color: 'rgba(72, 149, 239, 0.7000000000000001)' },
    { label: '5 quatrains', value: 1, color: 'rgba(72, 149, 239, 0.8)' },
    { label: 'Nombre de vers non multiple de quatre', value: 3, color: 'rgba(67, 97, 238, 0.9)' },
  ];
  addPieChart('season16PoemLengthPie', [data], { plugins: { title: { display: true, text: 'En quatrains ?' } } });
})();
