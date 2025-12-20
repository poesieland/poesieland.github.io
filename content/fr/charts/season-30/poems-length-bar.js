import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '8', value: 6 },
    { label: '12', value: 12 },
    { label: '16', value: 4 },
    { label: '20', value: 5 },
    { label: '24', value: 2 },
]
  ];
    addBarChart('season30PoemLengthBar', ['Poèmes'], data, {scales: { y: { ticks: { stepSize: 1 } } }});
})();
