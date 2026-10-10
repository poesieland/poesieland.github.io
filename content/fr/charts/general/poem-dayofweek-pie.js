import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Lundi', value: 237, color: 'rgba(72, 149, 239, 0.3)' },
    { label: 'Mardi', value: 242, color: 'rgba(72, 149, 239, 0.4)' },
    { label: 'Mercredi', value: 239, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Jeudi', value: 206, color: 'rgba(72, 149, 239, 0.6)' },
    { label: 'Vendredi', value: 231, color: 'rgba(72, 149, 239, 0.7)' },
    { label: 'Samedi', value: 286, color: 'rgba(72, 149, 239, 0.8)' },
    { label: 'Dimanche', value: 320, color: 'rgba(72, 149, 239, 0.9)' },
  ];
  addPieChart('poemDayOfWeekPie', [data], { plugins: { title: { display: true, text: 'Par jour de la semaine' } } });
})();
