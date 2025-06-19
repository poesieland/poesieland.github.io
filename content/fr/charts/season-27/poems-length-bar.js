import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '8', value: 1 },
    { label: '12', value: 4 },
    { label: '16', value: 1 },
    { label: '20', value: 2 },
]
  ];
    addBarChart('season27PoemLengthBar', ['Poèmes'], data, {scales: { y: { ticks: { stepSize: 1 } } }});
})();
