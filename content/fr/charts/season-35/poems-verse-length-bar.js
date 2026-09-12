import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '3', value: 1 },
    { label: '4', value: 1 },
    { label: '5', value: 6 },
    { label: '6', value: 3 },
    { label: '8', value: 1 },
    { label: '9', value: 1 },
    { label: '10', value: 1 },
  ];
    addBarChart('season35VerseLengthBar', ['Poèmes'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
