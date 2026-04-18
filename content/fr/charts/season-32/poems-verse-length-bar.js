import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '3', value: 2 },
    { label: '4', value: 8 },
    { label: '5', value: 6 },
    { label: '6', value: 6 },
    { label: '7', value: 1 },
    { label: '8', value: 10 },
    { label: '12', value: 1 },
  ];
    addBarChart('season32VerseLengthBar', ['Poèmes'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
