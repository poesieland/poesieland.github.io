import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
    { label: '12', value: 1 },
    { label: 'Pas de données pour l\'instant', value: 49, color: 'rgb(211, 211, 211)' },
  ];
    addBarChart('season14VerseLengthBar', ['Poèmes'], [data]);
})();
