import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '8', value: 4 },
    { label: '12', value: 10 },
    { label: '16', value: 3 },
    { label: '20', value: 1 },
]
  ];
    addBarChart('season21PoemLengthBar', ['Poèmes'], data, { scales: { y: { ticks: { stepSize: 1 } } } });
})();
