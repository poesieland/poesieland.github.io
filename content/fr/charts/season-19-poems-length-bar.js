import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
[
    { label: '12', value: 2 },
],
[
    { label: '', value: 0 },
]
  ];
    addBarChart('season19PoemLengthBar', ['Poèmes','Sonnets'], data, {});
})();
