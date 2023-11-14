import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
    { label: '2', value: 1 },
    { label: '3', value: 3 },
    { label: '4', value: 10 },
    { label: '5', value: 8 },
    { label: '6', value: 100 },
    { label: '7', value: 17 },
    { label: '8', value: 135 },
    { label: '9', value: 3 },
    { label: '10', value: 7 },
    { label: '12', value: 71 },
    { label: '5, 2', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '5, 7, 5', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '6, 3', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '8, 5', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '8, 6, 4, 2', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: 'poème en prose', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: 'Pas de données pour l\'instant', value: 510, color: 'rgb(211, 211, 211)' },
  ];
    addBarChart('poemVerseLengthBar', ['Poèmes'], [data]);
})();
