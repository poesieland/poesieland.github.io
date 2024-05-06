import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
[
    { label: '12', value: 7 },
    { label: '16', value: 2 },
    { label: '20', value: 1 },
    { label: '24', value: 1 },
]
  ];
    addBarChart('season20PoemLengthBar', ['Poèmes'], data, { scales: { y: { ticks: { stepSize: 1 } } } });
})();
