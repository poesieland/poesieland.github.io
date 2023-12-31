import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
[
    { label: '4', value: 1 },
    { label: '6', value: 2 },
    { label: '8', value: 11 },
    { label: '10', value: 4 },
    { label: '12', value: 22 },
    { label: '14', value: 2 },
    { label: '16', value: 6 },
    { label: '18', value: 2 },
],
[
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Sonnets', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
]
  ];
    addBarChart('season15PoemLengthBar', ['Poèmes','Sonnets'], data, {});
})();
