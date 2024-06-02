import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '4', value: 1 },
    { label: '6', value: 1 },
    { label: '8', value: 3 },
    { label: '10', value: 1 },
    { label: '12', value: 20 },
    { label: '16', value: 16 },
    { label: '20', value: 4 },
    { label: '24', value: 3 },
]
  ];
    addBarChart('season19PoemLengthBar', ['Poèmes'], data, { scales: { y: { ticks: { stepSize: 1 } } } });
})();
