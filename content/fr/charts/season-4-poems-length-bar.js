import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
[
    { label: '10', value: 1 },
    { label: '12', value: 23 },
    { label: '14', value: 1 },
    { label: '16', value: 21 },
    { label: '20', value: 3 },
    { label: '24', value: 1 },
]
  ];
    addBarChart('season4PoemLengthBar', ['Poèmes'], data, { scales: { y: { ticks: { stepSize: 1 } } } });
})();
