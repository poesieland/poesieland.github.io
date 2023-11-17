import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Pas de données pour l\'instant', value: 50, color: 'rgb(211, 211, 211)' },
  ];
    addBarChart('season12VerseLengthBar', ['Poèmes'], [data]);
})();
