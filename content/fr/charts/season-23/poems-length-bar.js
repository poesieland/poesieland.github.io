import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '8', value: 2 },
    { label: '12', value: 15 },
    { label: '16', value: 4 },
    { label: '20', value: 3 },
    { label: '24', value: 1 },
]
  ];
    addBarChart('season23PoemLengthBar', ['Poèmes'], data, { scales: { y: { ticks: { stepSize: 1 } } } });
})();
