import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '8', value: 1 },
    { label: '12', value: 18 },
    { label: '16', value: 7 },
    { label: '20', value: 3 },
]
  ];
    addBarChart('season22PoemLengthBar', ['Poèmes'], data, { scales: { y: { ticks: { stepSize: 1 } } } });
})();
