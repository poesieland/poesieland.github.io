import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '8', value: 10 },
    { label: '10', value: 9 },
    { label: '12', value: 16 },
    { label: '14', value: 6 },
    { label: '16', value: 6 },
    { label: '18', value: 2 },
    { label: '20', value: 1 },
]
  ];
    addBarChart('season8PoemLengthBar', ['Poèmes'], data, {scales: { y: { ticks: { stepSize: 1 } } }});
})();
