import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '8', value: 7 },
    { label: '12', value: 13 },
    { label: '16', value: 6 },
    { label: '20', value: 2 },
]
  ];
    addBarChart('season24PoemLengthBar', ['Poèmes'], data, { scales: { y: { ticks: { stepSize: 1 } } } });
})();
