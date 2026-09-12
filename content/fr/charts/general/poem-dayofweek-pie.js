import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Lundi', value: 234, color: 'rgba(72, 149, 239, 0.3)' },
    { label: 'Mardi', value: 238, color: 'rgba(72, 149, 239, 0.4)' },
    { label: 'Mercredi', value: 232, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Jeudi', value: 199, color: 'rgba(72, 149, 239, 0.6)' },
    { label: 'Vendredi', value: 229, color: 'rgba(72, 149, 239, 0.7)' },
    { label: 'Samedi', value: 281, color: 'rgba(72, 149, 239, 0.8)' },
    { label: 'Dimanche', value: 317, color: 'rgba(72, 149, 239, 0.9)' },
  ];
  addPieChart('poemDayOfWeekPie', [data], { plugins: { title: { display: true, text: 'Par jour de la semaine' } } });
})();
