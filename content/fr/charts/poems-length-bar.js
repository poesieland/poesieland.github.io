import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
[
    { label: '3', value: 1 },
    { label: '4', value: 0 },
    { label: '6', value: 29 },
    { label: '8', value: 1 },
    { label: '10', value: 56 },
    { label: '12', value: 9 },
    { label: '14', value: 48 },
    { label: '16', value: 9 },
    { label: '18', value: 9 },
    { label: '20', value: 1 },
    { label: '22', value: 2 },
    { label: '24', value: 0 },
    { label: '26', value: 1 },
    { label: '28', value: 0 },
],
[
    { label: 'Quatrains', value: 0 },
    { label: 'Quatrains', value: 11 },
    { label: 'Quatrains', value: 0 },
    { label: 'Quatrains', value: 99 },
    { label: 'Quatrains', value: 0 },
    { label: 'Quatrains', value: 314 },
    { label: 'Quatrains', value: 0 },
    { label: 'Quatrains', value: 176 },
    { label: 'Quatrains', value: 0 },
    { label: 'Quatrains', value: 43 },
    { label: 'Quatrains', value: 0 },
    { label: 'Quatrains', value: 7 },
    { label: 'Quatrains', value: 0 },
    { label: 'Quatrains', value: 3 },
],
[
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Sonnets', value: 13 },
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
