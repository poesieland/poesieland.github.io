import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
    { label: '2', value: 1 },
    { label: '3', value: 4 },
    { label: '4', value: 14 },
    { label: '5', value: 11 },
    { label: '6', value: 135 },
    { label: '7', value: 40 },
    { label: '8', value: 222 },
    { label: '9', value: 6 },
    { label: '10', value: 22 },
    { label: '11', value: 1 },
    { label: '12', value: 126 },
    { label: '13', value: 1 },
    { label: '14', value: 2 },
    { label: '5, 2', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '5, 7, 5', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '6, 3', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '8, 5', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '8, 6, 4, 2', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: 'poème en prose', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: 'Pas de données pour l\'instant', value: 295, color: 'rgb(211, 211, 211)' },
  ];
    addBarChart('poemVerseLengthBar', ['Poèmes'], [data]);
})();
