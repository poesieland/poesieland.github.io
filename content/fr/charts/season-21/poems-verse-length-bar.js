import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '6', value: 1 },
  ];
    addBarChart('season21VerseLengthBar', ['Poèmes'], [data], { scales: { y: { ticks: { stepSize: 1 } } } });
})();
