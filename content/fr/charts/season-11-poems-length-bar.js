import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
[
    { label: '4', value: 1 },
    { label: '6', value: 3 },
    { label: '8', value: 9 },
    { label: '10', value: 8 },
    { label: '12', value: 13 },
    { label: '14', value: 6 },
    { label: '16', value: 7 },
    { label: '18', value: 1 },
    { label: '20', value: 1 },
],
[
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Sonnets', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
]
  ];
    addBarChart('season11PoemLengthBar', ['Poèmes','Sonnets'], data, { scales: { y: { ticks: { stepSize: 1 } } } });
})();
