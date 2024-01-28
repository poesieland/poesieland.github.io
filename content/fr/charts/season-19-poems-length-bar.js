import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
[
    { label: '12', value: 3 },
    { label: '16', value: 1 },
    { label: '20', value: 1 },
],
[
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
]
  ];
    addBarChart('season19PoemLengthBar', ['Poèmes','Sonnets'], data, {});
})();
