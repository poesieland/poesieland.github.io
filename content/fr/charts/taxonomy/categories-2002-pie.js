import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Romantisme', value: 1, color: 'rgba(232, 93, 125, 1)' },
    { label: 'Passion', value: 4, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Espoir', value: 1, color: 'rgba(196, 154, 223, 1)' },
    { label: 'Apprentissage', value: 1, color: 'rgba(98, 58, 155, 1)' },
    { label: 'Au contact', value: 1, color: 'rgba(232, 132, 77, 1)' },
    { label: 'Sommeil', value: 2, color: 'rgba(213, 104, 49, 1)' },
  ];
  addPieChart('categories2002Pie', [data], { plugins: { title: { display: true, text: '2002' } } });
})();
