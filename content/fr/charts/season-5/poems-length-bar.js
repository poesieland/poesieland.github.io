import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '12', value: 18 },
    { label: '16', value: 23 },
    { label: '20', value: 9 },
]
  ];
    addBarChart('season5PoemLengthBar', ['Poèmes'], data, { scales: { y: { ticks: { stepSize: 1 } } } });
})();
