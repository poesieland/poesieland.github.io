import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '3 quatrains', value: 25, color: 'rgba(72, 149, 239, 0.6000000000000001)' },
    { label: '4 quatrains', value: 18, color: 'rgba(72, 149, 239, 0.7000000000000001)' },
    { label: '5 quatrains', value: 5, color: 'rgba(72, 149, 239, 0.8)' },
    { label: 'Nombre de vers non multiple de quatre', value: 2, color: 'rgba(67, 97, 238, 0.9)' },
  ];
  addPieChart('season3PoemLengthPie', [data], { plugins: { title: { display: true, text: 'En quatrains ?' } } });
})();