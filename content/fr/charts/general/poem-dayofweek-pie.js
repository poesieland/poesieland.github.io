import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Lundi', value: 203, color: 'rgba(72, 149, 239, 0.30000000000000004)' },
    { label: 'Mardi', value: 200, color: 'rgba(72, 149, 239, 0.4)' },
    { label: 'Mercredi', value: 204, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Jeudi', value: 156, color: 'rgba(72, 149, 239, 0.6000000000000001)' },
    { label: 'Vendredi', value: 189, color: 'rgba(72, 149, 239, 0.7)' },
    { label: 'Samedi', value: 225, color: 'rgba(72, 149, 239, 0.8)' },
    { label: 'Dimanche', value: 263, color: 'rgba(72, 149, 239, 0.9000000000000001)' },
  ];
  addPieChart('poemDayOfWeekPie', [data], { plugins: { title: { display: true, text: 'Par jour de la semaine' } } });
})();
