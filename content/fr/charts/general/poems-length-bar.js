import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
[
    { label: '3', value: 1 },
    { label: '4', value: 13 },
    { label: '6', value: 32 },
    { label: '8', value: 139 },
    { label: '10', value: 60 },
    { label: '12', value: 506 },
    { label: '14', value: 47 },
    { label: '16', value: 273 },
    { label: '18', value: 9 },
    { label: '20', value: 86 },
    { label: '22', value: 2 },
    { label: '24', value: 17 },
    { label: '26', value: 1 },
    { label: '28', value: 5 },
],
[
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Sonnets', value: 19 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
]
  ];
    addBarChart('poemLengthBar', ['Poèmes','Sonnets'], data, {scales: { y: { max: 300 } }});
})();
