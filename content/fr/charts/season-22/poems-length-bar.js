import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '8', value: 1 },
    { label: '10', value: 1 },
    { label: '12', value: 23 },
    { label: '16', value: 9 },
    { label: '20', value: 5 },
]
  ];
    addBarChart('season22PoemLengthBar', ['Poèmes'], data, { scales: { y: { ticks: { stepSize: 1 } } } });
})();
