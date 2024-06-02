import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '3', value: 1 },
    { label: '4', value: 1 },
    { label: '5', value: 1 },
    { label: '6', value: 26 },
    { label: '8', value: 21 },
  ];
    addBarChart('season4VerseLengthBar', ['Poèmes'], [data], { scales: { y: { ticks: { stepSize: 1 } } } });
})();
