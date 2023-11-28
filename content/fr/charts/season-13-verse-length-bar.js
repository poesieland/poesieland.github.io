import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
    { label: '7', value: 1 },
    { label: '8', value: 1 },
    { label: '9', value: 1 },
    { label: '12', value: 4 },
    { label: '13', value: 1 },
    { label: 'Pas de données pour l\'instant', value: 42, color: 'rgb(211, 211, 211)' },
  ];
    addBarChart('season13VerseLengthBar', ['Poèmes'], [data]);
})();
