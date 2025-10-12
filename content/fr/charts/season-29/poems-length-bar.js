import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '8', value: 3 },
    { label: '12', value: 6 },
    { label: '16', value: 5 },
    { label: '20', value: 3 },
    { label: '24', value: 1 },
]
  ];
    addBarChart('season29PoemLengthBar', ['Poèmes'], data, {scales: { y: { ticks: { stepSize: 1 } } }});
})();
