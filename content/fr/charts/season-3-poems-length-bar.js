import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
[
    { label: '6', value: 1 },
    { label: '12', value: 25 },
    { label: '14', value: 1 },
    { label: '16', value: 18 },
    { label: '20', value: 5 },
],
[
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Sonnets', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
]
  ];
    addBarChart('season3PoemLengthBar', ['Poèmes','Sonnets'], data);
})();
