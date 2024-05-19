import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Jours sans écrire', value: 23, color: 'rgba(72, 149, 239, 1)' },
    { label: 'Jours de création', value: 342, color: 'rgba(76, 201, 240, 1)' },
  ];
  addPieChart('poemDayPie', [data], { plugins: { title: { display: true, text: 'Avec ou sans création ?' } } });
})();
