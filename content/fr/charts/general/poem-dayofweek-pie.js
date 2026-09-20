import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Lundi', value: 235, color: 'rgba(72, 149, 239, 0.3)' },
    { label: 'Mardi', value: 240, color: 'rgba(72, 149, 239, 0.4)' },
    { label: 'Mercredi', value: 236, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Jeudi', value: 204, color: 'rgba(72, 149, 239, 0.6)' },
    { label: 'Vendredi', value: 230, color: 'rgba(72, 149, 239, 0.7)' },
    { label: 'Samedi', value: 282, color: 'rgba(72, 149, 239, 0.8)' },
    { label: 'Dimanche', value: 319, color: 'rgba(72, 149, 239, 0.9)' },
  ];
  addPieChart('poemDayOfWeekPie', [data], { plugins: { title: { display: true, text: 'Par jour de la semaine' } } });
})();
