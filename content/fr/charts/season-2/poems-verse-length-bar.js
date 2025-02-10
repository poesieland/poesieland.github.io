import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '4', value: 5 },
    { label: '6', value: 6 },
    { label: '8', value: 15 },
    { label: '12', value: 24 },
  ];
    addBarChart('season2VerseLengthBar', ['Poèmes'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
