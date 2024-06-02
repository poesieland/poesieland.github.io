import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '4', value: 2 },
    { label: '6', value: 5 },
    { label: '7', value: 5 },
    { label: '8', value: 21 },
    { label: '9', value: 1 },
    { label: '10', value: 3 },
    { label: '12', value: 13 },
  ];
    addBarChart('season7VerseLengthBar', ['Poèmes'], [data], { scales: { y: { ticks: { stepSize: 1 } } } });
})();
