import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '5', value: 2 },
    { label: '6', value: 17 },
    { label: '7', value: 2 },
    { label: '8', value: 12 },
    { label: '10', value: 2 },
    { label: '12', value: 15 },
  ];
    addBarChart('season9VerseLengthBar', ['Poèmes'], [data], { scales: { y: { ticks: { stepSize: 1 } } } });
})();
