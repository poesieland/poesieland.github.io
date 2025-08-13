import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
  ];
    addBarChart('season28PoemIntervalBar', ['Fréquence'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
