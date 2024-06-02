import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '6', value: 19 },
    { label: '7', value: 4 },
    { label: '8', value: 23 },
    { label: '10', value: 1 },
    { label: '12', value: 3 },
  ];
    addBarChart('season5VerseLengthBar', ['Poèmes'], [data], { scales: { y: { ticks: { stepSize: 1 } } } });
})();
