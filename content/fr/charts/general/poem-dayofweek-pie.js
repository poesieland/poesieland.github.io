import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Lundi', value: 185, color: 'rgba(72, 149, 239, 0.30000000000000004)' },
    { label: 'Mardi', value: 175, color: 'rgba(72, 149, 239, 0.4)' },
    { label: 'Mercredi', value: 188, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Jeudi', value: 143, color: 'rgba(72, 149, 239, 0.6000000000000001)' },
    { label: 'Vendredi', value: 172, color: 'rgba(72, 149, 239, 0.7)' },
    { label: 'Samedi', value: 205, color: 'rgba(72, 149, 239, 0.8)' },
    { label: 'Dimanche', value: 240, color: 'rgba(72, 149, 239, 0.9000000000000001)' },
  ];
  addPieChart('poemDayOfWeekPie', [data], { plugins: { title: { display: true, text: 'Par jour de la semaine' } } });
})();
