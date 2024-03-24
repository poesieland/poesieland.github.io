import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
[
    { label: '6', value: 1 },
    { label: '8', value: 2 },
    { label: '12', value: 12 },
    { label: '16', value: 8 },
    { label: '20', value: 4 },
    { label: '24', value: 1 },
]
  ];
    addBarChart('season19PoemLengthBar', ['Poèmes'], data, { scales: { y: { ticks: { stepSize: 1 } } } });
})();
