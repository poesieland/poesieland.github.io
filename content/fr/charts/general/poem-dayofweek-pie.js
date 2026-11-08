import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Lundi', value: 241, color: 'rgba(72, 149, 239, 0.3)' },
    { label: 'Mardi', value: 244, color: 'rgba(72, 149, 239, 0.4)' },
    { label: 'Mercredi', value: 243, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Jeudi', value: 209, color: 'rgba(72, 149, 239, 0.6)' },
    { label: 'Vendredi', value: 233, color: 'rgba(72, 149, 239, 0.7)' },
    { label: 'Samedi', value: 293, color: 'rgba(72, 149, 239, 0.8)' },
    { label: 'Dimanche', value: 328, color: 'rgba(72, 149, 239, 0.9)' },
  ];
  addPieChart('poemDayOfWeekPie', [data], { plugins: { title: { display: true, text: 'Par jour de la semaine' } } });
})();
