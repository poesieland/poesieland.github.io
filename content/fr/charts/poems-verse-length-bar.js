import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
    { label: '2', value: 1 },
    { label: '3', value: 2 },
    { label: '4', value: 9 },
    { label: '5', value: 6 },
    { label: '6', value: 84 },
    { label: '7', value: 13 },
    { label: '8', value: 117 },
    { label: '9', value: 3 },
    { label: '10', value: 5 },
    { label: '12', value: 67 },
    { label: '5, 7, 5', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '8, 5', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '8, 6, 4, 2', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: 'Pas de données pour l\'instant', value: 542, color: 'rgb(211, 211, 211)' },
  ];
    addBarChart('poemVerseLengthBar', ['Poèmes'], [data]);
})();
