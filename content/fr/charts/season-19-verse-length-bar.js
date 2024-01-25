import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
    { label: '6', value: 2 },
    { label: '8', value: 2 },
  ];
    addBarChart('season19VerseLengthBar', ['Poèmes'], [data], {});
})();
