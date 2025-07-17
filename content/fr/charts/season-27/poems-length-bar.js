import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '6', value: 1 },
    { label: '8', value: 4 },
    { label: '12', value: 11 },
    { label: '16', value: 7 },
    { label: '20', value: 6 },
    { label: '24', value: 1 },
]
  ];
    addBarChart('season27PoemLengthBar', ['Poèmes'], data, {scales: { y: { ticks: { stepSize: 1 } } }});
})();
