import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
    { label: '5', value: 1 },
    { label: '6', value: 5 },
    { label: '7', value: 8 },
    { label: '8', value: 18 },
    { label: '9', value: 1 },
    { label: '10', value: 2 },
    { label: '11', value: 5 },
    { label: '12', value: 7 },
    { label: '14', value: 1 },
    { label: '5, 8', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '6, 5, 4', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('season10VerseLengthBar', ['Poèmes'], [data], {});
})();
