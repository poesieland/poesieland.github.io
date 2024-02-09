import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
    { label: '4', value: 1 },
    { label: '6', value: 3 },
    { label: '8', value: 3 },
  ];
    addBarChart('season19VerseLengthBar', ['Poèmes'], [data], { scales: { y: { ticks: { stepSize: 1 } } } });
})();
