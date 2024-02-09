import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: '3 quatrains', value: 3, color: 'rgba(72, 149, 239, 0.6000000000000001)' },
    { label: '4 quatrains', value: 2, color: 'rgba(72, 149, 239, 0.7000000000000001)' },
    { label: '5 quatrains', value: 2, color: 'rgba(72, 149, 239, 0.8)' },
  ];
  addPieChart('season19PoemLengthPie', [data], 'En quatrains ?');
})();
