import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '3', value: 1 },
    { label: '4', value: 1 },
    { label: '6', value: 4 },
    { label: '8', value: 3 },
    { label: '12', value: 1 },
  ];
    addBarChart('season28VerseLengthBar', ['Poèmes'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
