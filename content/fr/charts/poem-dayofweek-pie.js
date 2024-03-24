import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Lundi', value: 142, color: 'rgba(72, 149, 239, 0.30000000000000004)' },
    { label: 'Mardi', value: 130, color: 'rgba(72, 149, 239, 0.4)' },
    { label: 'Mercredi', value: 138, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Jeudi', value: 93, color: 'rgba(72, 149, 239, 0.6000000000000001)' },
    { label: 'Vendredi', value: 121, color: 'rgba(72, 149, 239, 0.7)' },
    { label: 'Samedi', value: 143, color: 'rgba(72, 149, 239, 0.8)' },
    { label: 'Dimanche', value: 152, color: 'rgba(72, 149, 239, 0.9000000000000001)' },
  ];
  addPieChart('poemDayOfWeekPie', [data], 'Par jour de la semaine');
})();
