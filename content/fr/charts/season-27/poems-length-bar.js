import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '6', value: 1 },
    { label: '8', value: 5 },
    { label: '12', value: 17 },
    { label: '16', value: 10 },
    { label: '20', value: 9 },
    { label: '24', value: 1 },
]
  ];
    addBarChart('season27PoemLengthBar', ['Poèmes'], data, {scales: { y: { ticks: { stepSize: 1 } } }});
})();
