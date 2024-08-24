import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '2', value: 1 },
    { label: '4', value: 3 },
    { label: '5', value: 3 },
    { label: '6', value: 10 },
    { label: '7', value: 4 },
    { label: '8', value: 13 },
    { label: '9', value: 1 },
    { label: '12', value: 7 },
  ];
    addBarChart('season21VerseLengthBar', ['Poèmes'], [data], { scales: { y: { ticks: { stepSize: 1 } } } });
})();
