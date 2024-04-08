import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
[
    { label: '4', value: 1 },
    { label: '6', value: 1 },
    { label: '8', value: 3 },
    { label: '12', value: 17 },
    { label: '16', value: 13 },
    { label: '20', value: 4 },
    { label: '24', value: 1 },
]
  ];
    addBarChart('season19PoemLengthBar', ['Poèmes'], data, { scales: { y: { ticks: { stepSize: 1 } } } });
})();
