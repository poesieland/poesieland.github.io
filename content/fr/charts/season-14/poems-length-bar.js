import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '4', value: 1 },
    { label: '6', value: 4 },
    { label: '8', value: 8 },
    { label: '10', value: 6 },
    { label: '12', value: 23 },
    { label: '14', value: 3 },
    { label: '16', value: 5 },
]
  ];
    addBarChart('season14PoemLengthBar', ['Poèmes'], data, {scales: { y: { ticks: { stepSize: 1 } } }});
})();
