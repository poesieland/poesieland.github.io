import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '3', value: 1 },
    { label: '4', value: 2 },
    { label: '5', value: 3 },
    { label: '6', value: 5 },
    { label: '8', value: 4 },
    { label: '12', value: 2 },
  ];
    addBarChart('season30VerseLengthBar', ['Poèmes'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
