import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '8', value: 10 },
    { label: '12', value: 23 },
    { label: '16', value: 7 },
    { label: '20', value: 5 },
]
  ];
    addBarChart('season24PoemLengthBar', ['Poèmes'], data, {scales: { y: { ticks: { stepSize: 1 } } }});
})();
