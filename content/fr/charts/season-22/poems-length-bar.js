import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '8', value: 1 },
    { label: '10', value: 1 },
    { label: '12', value: 27 },
    { label: '16', value: 10 },
    { label: '20', value: 6 },
]
  ];
    addBarChart('season22PoemLengthBar', ['Poèmes'], data, { scales: { y: { ticks: { stepSize: 1 } } } });
})();
