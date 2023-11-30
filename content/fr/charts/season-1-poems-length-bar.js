import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
[
    { label: '8', value: 2 },
    { label: '10', value: 3 },
    { label: '12', value: 21 },
    { label: '14', value: 4 },
    { label: '16', value: 12 },
    { label: '20', value: 4 },
    { label: '24', value: 1 },
    { label: '26', value: 1 },
],
[
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Sonnets', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
]
  ];
    addBarChart('season1PoemLengthBar', ['Poèmes','Sonnets'], data);
})();
