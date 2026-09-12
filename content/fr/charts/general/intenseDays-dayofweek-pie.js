import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Lundi', value: 20, color: 'rgba(72, 149, 239, 0.3)' },
    { label: 'Mardi', value: 28, color: 'rgba(72, 149, 239, 0.4)' },
    { label: 'Mercredi', value: 19, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Jeudi', value: 16, color: 'rgba(72, 149, 239, 0.6)' },
    { label: 'Vendredi', value: 20, color: 'rgba(72, 149, 239, 0.7)' },
    { label: 'Samedi', value: 61, color: 'rgba(72, 149, 239, 0.8)' },
    { label: 'Dimanche', value: 52, color: 'rgba(72, 149, 239, 0.9)' },
  ];
  addPieChart('intenseDaysDayOfWeekPie', [data], { plugins: { title: { display: true, text: 'Par jour de la semaine' } } });
})();
