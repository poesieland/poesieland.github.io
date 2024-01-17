import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
[
    { label: '8', value: 4 },
    { label: '12', value: 15 },
    { label: '14', value: 0 },
    { label: '16', value: 13 },
    { label: '20', value: 10 },
    { label: '24', value: 5 },
    { label: '28', value: 2 },
],
[
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Sonnets', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
]
  ];
    addBarChart('season18PoemLengthBar', ['Poèmes','Sonnets'], data, {});
})();
