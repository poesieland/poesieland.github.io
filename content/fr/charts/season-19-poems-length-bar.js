import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
[
    { label: '12', value: 3 },
    { label: '16', value: 2 },
    { label: '20', value: 2 },
],
[
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
]
  ];
    addBarChart('season19PoemLengthBar', ['Poèmes','Sonnets'], data, { scales: { y: { ticks: { stepSize: 1 } } } });
})();
