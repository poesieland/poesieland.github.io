import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Lundi', value: 191, color: 'rgba(72, 149, 239, 0.30000000000000004)' },
    { label: 'Mardi', value: 180, color: 'rgba(72, 149, 239, 0.4)' },
    { label: 'Mercredi', value: 193, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Jeudi', value: 145, color: 'rgba(72, 149, 239, 0.6000000000000001)' },
    { label: 'Vendredi', value: 176, color: 'rgba(72, 149, 239, 0.7)' },
    { label: 'Samedi', value: 213, color: 'rgba(72, 149, 239, 0.8)' },
    { label: 'Dimanche', value: 246, color: 'rgba(72, 149, 239, 0.9000000000000001)' },
  ];
  addPieChart('poemDayOfWeekPie', [data], { plugins: { title: { display: true, text: 'Par jour de la semaine' } } });
})();
