import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '8', value: 4 },
    { label: '12', value: 25 },
    { label: '16', value: 7 },
    { label: '20', value: 5 },
    { label: '24', value: 1 },
]
  ];
    addBarChart('season23PoemLengthBar', ['Poèmes'], data, { scales: { y: { ticks: { stepSize: 1 } } } });
})();
