import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '8', value: 5 },
    { label: '12', value: 17 },
    { label: '16', value: 8 },
    { label: '19', value: 1 },
    { label: '20', value: 4 },
]
  ];
    addBarChart('season25PoemLengthBar', ['Poèmes'], data, {scales: { y: { ticks: { stepSize: 1 } } }});
})();
