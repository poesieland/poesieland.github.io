import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
    { label: '6', value: 1 },
    { label: '7', value: 2 },
    { label: 'Pas de données pour l\'instant', value: 47, color: 'rgb(211, 211, 211)' },
  ];
    addBarChart('season12VerseLengthBar', ['Poèmes'], [data], {});
})();
