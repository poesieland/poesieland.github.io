import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
[
    { label: '12', value: 2 },
    { label: '16', value: 1 },
],
[
    { label: '', value: 0 },
    { label: '', value: 0 },
]
  ];
    addBarChart('season19PoemLengthBar', ['Poèmes','Sonnets'], data, {});
})();
