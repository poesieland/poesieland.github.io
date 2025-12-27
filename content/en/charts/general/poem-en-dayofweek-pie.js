import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Monday', value: 2, color: 'rgba(72, 149, 239, 0.30000000000000004)' },
    { label: 'Tuesday', value: 5, color: 'rgba(72, 149, 239, 0.4)' },
    { label: 'Wednesday', value: 3, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Thursday', value: 4, color: 'rgba(72, 149, 239, 0.6000000000000001)' },
    { label: 'Friday', value: 3, color: 'rgba(72, 149, 239, 0.7)' },
    { label: 'Saturday', value: 3, color: 'rgba(72, 149, 239, 0.8)' },
    { label: 'Sunday', value: 3, color: 'rgba(72, 149, 239, 0.9000000000000001)' },
  ];
  addPieChart('poemEnDayOfWeekPie', [data], { plugins: { title: { display: true, text: 'By day of week' } } });
})();
