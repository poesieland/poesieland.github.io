import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
    { label: '6', value: 9 },
    { label: '7', value: 4 },
    { label: '8', value: 19 },
    { label: '9', value: 1 },
    { label: '10', value: 2 },
    { label: '11', value: 2 },
    { label: '12', value: 10 },
    { label: '14', value: 2 },
    { label: '8, 6', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('season14VerseLengthBar', ['Poèmes'], [data], {});
})();
