import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '3', value: 2 },
    { label: '4', value: 8 },
    { label: '5', value: 8 },
    { label: '6', value: 12 },
    { label: '7', value: 1 },
    { label: '8', value: 11 },
    { label: '12', value: 1 },
  ];
    addBarChart('season32VerseLengthBar', ['Poèmes'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
