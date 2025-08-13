import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Lundi', value: 193, color: 'rgba(72, 149, 239, 0.30000000000000004)' },
    { label: 'Mardi', value: 184, color: 'rgba(72, 149, 239, 0.4)' },
    { label: 'Mercredi', value: 194, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Jeudi', value: 147, color: 'rgba(72, 149, 239, 0.6000000000000001)' },
    { label: 'Vendredi', value: 180, color: 'rgba(72, 149, 239, 0.7)' },
    { label: 'Samedi', value: 215, color: 'rgba(72, 149, 239, 0.8)' },
    { label: 'Dimanche', value: 249, color: 'rgba(72, 149, 239, 0.9000000000000001)' },
  ];
  addPieChart('poemDayOfWeekPie', [data], { plugins: { title: { display: true, text: 'Par jour de la semaine' } } });
})();
