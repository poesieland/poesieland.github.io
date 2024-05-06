import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: '3 quatrains', value: 7, color: 'rgba(72, 149, 239, 0.6000000000000001)' },
    { label: '4 quatrains', value: 2, color: 'rgba(72, 149, 239, 0.7000000000000001)' },
    { label: '6 quatrains', value: 1, color: 'rgba(72, 149, 239, 0.9)' },
    { label: 'Rimes suivies', value: 1, color: 'rgba(67, 97, 238, 0.7)' },
  ];
  addPieChart('season20PoemLengthPie', [data], { plugins: { title: { display: true, text: 'En quatrains ?' } } });
})();
