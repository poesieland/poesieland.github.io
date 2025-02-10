import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '8', value: 5 },
    { label: '12', value: 30 },
    { label: '16', value: 8 },
    { label: '20', value: 6 },
    { label: '24', value: 1 },
]
  ];
    addBarChart('season23PoemLengthBar', ['Poèmes'], data, {scales: { y: { ticks: { stepSize: 1 } } }});
})();
