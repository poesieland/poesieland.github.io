import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '8', value: 5 },
    { label: '12', value: 9 },
    { label: '16', value: 2 },
    { label: '20', value: 4 },
    { label: '24', value: 2 },
]
  ];
    addBarChart('season30PoemLengthBar', ['Poèmes'], data, {scales: { y: { ticks: { stepSize: 1 } } }});
})();
