import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
    { label: '5', value: 1 },
    { label: '6', value: 5 },
    { label: '7', value: 4 },
    { label: '8', value: 5 },
    { label: '9', value: 1 },
    { label: '12', value: 3 },
    { label: '5, 7, 5', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: 'Pas de données pour l\'instant', value: 30, color: 'rgb(211, 211, 211)' },
  ];
    addBarChart('season16VerseLengthBar', ['Poèmes'], [data]);
})();
