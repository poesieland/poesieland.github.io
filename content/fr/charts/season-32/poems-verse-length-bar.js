import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '3', value: 1 },
    { label: '4', value: 8 },
    { label: '5', value: 6 },
    { label: '6', value: 5 },
    { label: '8', value: 8 },
  ];
    addBarChart('season32VerseLengthBar', ['Poèmes'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
