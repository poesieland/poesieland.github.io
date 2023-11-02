import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
[
    { label: '3', value: 1 },
    { label: '4', value: 0 },
    { label: '6', value: 29 },
    { label: '8', value: 30 },
    { label: '10', value: 56 },
    { label: '12', value: 32 },
    { label: '14', value: 48 },
    { label: '16', value: 26 },
    { label: '18', value: 9 },
    { label: '20', value: 8 },
    { label: '22', value: 2 },
    { label: '24', value: 1 },
    { label: '26', value: 1 },
    { label: '28', value: 1 },
],
[
    { label: 'Quatrains', value: 0 },
    { label: 'Quatrains', value: 11 },
    { label: 'Quatrains', value: 0 },
    { label: 'Quatrains', value: 71 },
    { label: 'Quatrains', value: 0 },
    { label: 'Quatrains', value: 297 },
    { label: 'Quatrains', value: 0 },
    { label: 'Quatrains', value: 167 },
    { label: 'Quatrains', value: 0 },
    { label: 'Quatrains', value: 39 },
    { label: 'Quatrains', value: 0 },
    { label: 'Quatrains', value: 6 },
    { label: 'Quatrains', value: 0 },
    { label: 'Quatrains', value: 2 },
],
[
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Sonnets', value: 15 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
]
  ];
    addBarChart('poemLengthBar', ['Poèmes','Avec quatrains','Sonnets'], data);
})();
