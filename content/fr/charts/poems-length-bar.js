import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
[
    { label: '3', value: 1 },
    { label: '4', value: 0 },
    { label: '6', value: 30 },
    { label: '8', value: 23 },
    { label: '10', value: 56 },
    { label: '12', value: 27 },
    { label: '14', value: 48 },
    { label: '16', value: 27 },
    { label: '18', value: 9 },
    { label: '20', value: 8 },
    { label: '22', value: 2 },
    { label: '24', value: 1 },
    { label: '26', value: 1 },
    { label: '28', value: 1 },
],
[
    { label: 'Quatrains', value: 0 },
    { label: 'Quatrains', value: 12 },
    { label: 'Quatrains', value: 0 },
    { label: 'Quatrains', value: 78 },
    { label: 'Quatrains', value: 0 },
    { label: 'Quatrains', value: 312 },
    { label: 'Quatrains', value: 0 },
    { label: 'Quatrains', value: 172 },
    { label: 'Quatrains', value: 0 },
    { label: 'Quatrains', value: 45 },
    { label: 'Quatrains', value: 0 },
    { label: 'Quatrains', value: 7 },
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
    { label: 'Sonnets', value: 16 },
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
