import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '4', value: 2 },
    { label: '5', value: 3 },
    { label: '6', value: 11 },
    { label: '8', value: 6 },
    { label: '10', value: 2 },
    { label: '12', value: 2 },
  ];
    addBarChart('season33VerseLengthBar', ['Poèmes'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
