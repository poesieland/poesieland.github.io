import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '8', value: 1 },
    { label: '12', value: 20 },
    { label: '16', value: 8 },
    { label: '20', value: 3 },
]
  ];
    addBarChart('season22PoemLengthBar', ['Poèmes'], data, { scales: { y: { ticks: { stepSize: 1 } } } });
})();
