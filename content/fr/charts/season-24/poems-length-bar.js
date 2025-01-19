import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '8', value: 2 },
    { label: '12', value: 10 },
    { label: '16', value: 4 },
    { label: '20', value: 1 },
]
  ];
    addBarChart('season24PoemLengthBar', ['Poèmes'], data, { scales: { y: { ticks: { stepSize: 1 } } } });
})();
