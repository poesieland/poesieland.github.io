import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '4', value: 1 },
    { label: '5', value: 1 },
    { label: '6', value: 4 },
    { label: '7', value: 7 },
    { label: '8', value: 29 },
    { label: '10', value: 2 },
    { label: '12', value: 6 },
  ];
    addBarChart('season8VerseLengthBar', ['Poèmes'], [data], { scales: { y: { ticks: { stepSize: 1 } } } });
})();
