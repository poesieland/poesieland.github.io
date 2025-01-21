import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '8', value: 6 },
    { label: '12', value: 11 },
    { label: '16', value: 6 },
    { label: '20', value: 2 },
]
  ];
    addBarChart('season24PoemLengthBar', ['Poèmes'], data, { scales: { y: { ticks: { stepSize: 1 } } } });
})();
