import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '12', value: 3 },
    { label: '16', value: 2 },
    { label: '24', value: 1 },
]
  ];
    addBarChart('season23PoemLengthBar', ['Poèmes'], data, { scales: { y: { ticks: { stepSize: 1 } } } });
})();
