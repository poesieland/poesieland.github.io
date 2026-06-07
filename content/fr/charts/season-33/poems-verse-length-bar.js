import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '4', value: 2 },
    { label: '5', value: 2 },
    { label: '6', value: 10 },
    { label: '8', value: 4 },
    { label: '10', value: 2 },
    { label: '12', value: 2 },
  ];
    addBarChart('season33VerseLengthBar', ['Poèmes'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
