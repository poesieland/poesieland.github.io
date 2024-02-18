import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
    { label: '2', value: 1 },
    { label: '4', value: 1 },
    { label: '6', value: 4 },
    { label: '7', value: 1 },
    { label: '8', value: 4 },
  ];
    addBarChart('season19VerseLengthBar', ['Poèmes'], [data], { scales: { y: { ticks: { stepSize: 1 } } } });
})();
