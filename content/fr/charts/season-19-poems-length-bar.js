import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
[
    { label: '12', value: 5 },
    { label: '16', value: 4 },
    { label: '20', value: 3 },
    { label: '24', value: 1 },
],
[
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
]
  ];
    addBarChart('season19PoemLengthBar', ['Poèmes','Sonnets'], data, { scales: { y: { ticks: { stepSize: 1 } } } });
})();
