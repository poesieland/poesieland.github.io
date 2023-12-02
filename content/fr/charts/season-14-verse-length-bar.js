import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
    { label: '6', value: 4 },
    { label: '7', value: 3 },
    { label: '8', value: 4 },
    { label: '10', value: 1 },
    { label: '12', value: 3 },
    { label: 'Pas de données pour l\'instant', value: 35, color: 'rgb(211, 211, 211)' },
  ];
    addBarChart('season14VerseLengthBar', ['Poèmes'], [data]);
})();
