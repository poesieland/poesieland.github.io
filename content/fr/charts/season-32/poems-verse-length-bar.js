import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '4', value: 1 },
    { label: '5', value: 2 },
    { label: '6', value: 1 },
  ];
    addBarChart('season32VerseLengthBar', ['Poèmes'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
