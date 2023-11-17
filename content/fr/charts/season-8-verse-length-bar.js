import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
    { label: '10', value: 1 },
    { label: 'Pas de données pour l\'instant', value: 49, color: 'rgb(211, 211, 211)' },
  ];
    addBarChart('season8VerseLengthBar', ['Poèmes'], [data]);
})();
