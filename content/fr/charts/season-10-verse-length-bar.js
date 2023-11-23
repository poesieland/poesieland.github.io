import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
    { label: '6', value: 1 },
    { label: '7', value: 2 },
    { label: '8', value: 3 },
    { label: '9', value: 1 },
    { label: '11', value: 1 },
    { label: '12', value: 2 },
    { label: '14', value: 1 },
    { label: 'Pas de données pour l\'instant', value: 39, color: 'rgb(211, 211, 211)' },
  ];
    addBarChart('season10VerseLengthBar', ['Poèmes'], [data]);
})();
