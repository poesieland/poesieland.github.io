import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '5', value: 1 },
    { label: '6', value: 5 },
    { label: '7', value: 4 },
    { label: '8', value: 6 },
    { label: '12', value: 4 },
  ];
    addBarChart('season21VerseLengthBar', ['Poèmes'], [data], { scales: { y: { ticks: { stepSize: 1 } } } });
})();
