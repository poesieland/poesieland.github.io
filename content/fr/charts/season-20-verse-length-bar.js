import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
    { label: '5', value: 2 },
    { label: '6', value: 1 },
  ];
    addBarChart('season20VerseLengthBar', ['Poèmes'], [data], { scales: { y: { ticks: { stepSize: 1 } } } });
})();
