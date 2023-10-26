import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
    { label: '3', value: 1 },
    { label: '4', value: 11 },
    { label: '6', value: 29 },
    { label: '8', value: 100 },
    { label: '10', value: 56 },
    { label: '12', value: 323 },
    { label: '14', value: 61 },
    { label: '16', value: 185 },
    { label: '18', value: 9 },
    { label: '20', value: 44 },
    { label: '22', value: 2 },
    { label: '24', value: 7 },
    { label: '26', value: 1 },
    { label: '28', value: 3 },
  ];
    addBarChart('poemLengthBar', ['Poèmes', 'XX'], [data])
})();
