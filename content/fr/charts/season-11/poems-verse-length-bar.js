import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '4', value: 2 },
    { label: '5', value: 5 },
    { label: '6', value: 12 },
    { label: '7', value: 5 },
    { label: '8', value: 15 },
    { label: '10', value: 1 },
    { label: '11', value: 3 },
    { label: '12', value: 7 },
  ];
    addBarChart('season11VerseLengthBar', ['Poèmes'], [data], { scales: { y: { ticks: { stepSize: 1 } } } });
})();
