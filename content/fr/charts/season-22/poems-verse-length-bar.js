import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '8', value: 1 },
  ];
    addBarChart('season22VerseLengthBar', ['Poèmes'], [data], { scales: { y: { ticks: { stepSize: 1 } } } });
})();
