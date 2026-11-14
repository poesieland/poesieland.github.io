import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Lundi', value: 242, color: 'rgba(72, 149, 239, 0.3)' },
    { label: 'Mardi', value: 246, color: 'rgba(72, 149, 239, 0.4)' },
    { label: 'Mercredi', value: 243, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Jeudi', value: 210, color: 'rgba(72, 149, 239, 0.6)' },
    { label: 'Vendredi', value: 234, color: 'rgba(72, 149, 239, 0.7)' },
    { label: 'Samedi', value: 296, color: 'rgba(72, 149, 239, 0.8)' },
    { label: 'Dimanche', value: 332, color: 'rgba(72, 149, 239, 0.9)' },
  ];
  addPieChart('poemDayOfWeekPie', [data], { plugins: { title: { display: true, text: 'Par jour de la semaine' } } });
})();
