import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '4', value: 1 },
    { label: '5', value: 1 },
    { label: '6', value: 8 },
    { label: '7', value: 3 },
    { label: '8', value: 26 },
    { label: '10', value: 5 },
    { label: '12', value: 6 },
  ];
    addBarChart('season6VerseLengthBar', ['Poèmes'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
