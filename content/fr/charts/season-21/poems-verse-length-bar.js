import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '5', value: 1 },
    { label: '6', value: 4 },
    { label: '7', value: 4 },
    { label: '8', value: 4 },
    { label: '12', value: 1 },
  ];
    addBarChart('season21VerseLengthBar', ['Poèmes'], [data], { scales: { y: { ticks: { stepSize: 1 } } } });
})();
