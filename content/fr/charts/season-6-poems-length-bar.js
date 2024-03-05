import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
[
    { label: '8', value: 2 },
    { label: '10', value: 1 },
    { label: '12', value: 13 },
    { label: '14', value: 3 },
    { label: '16', value: 22 },
    { label: '20', value: 8 },
    { label: '24', value: 1 },
]
  ];
    addBarChart('season6PoemLengthBar', ['Poèmes'], data, { scales: { y: { ticks: { stepSize: 1 } } } });
})();
