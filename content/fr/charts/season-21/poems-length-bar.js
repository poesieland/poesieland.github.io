import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '6', value: 1 },
    { label: '8', value: 7 },
    { label: '10', value: 2 },
    { label: '12', value: 23 },
    { label: '16', value: 10 },
    { label: '20', value: 4 },
    { label: '24', value: 2 },
    { label: '28', value: 1 },
]
  ];
    addBarChart('season21PoemLengthBar', ['Poèmes'], data, { scales: { y: { ticks: { stepSize: 1 } } } });
})();
