import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
    { label: '3', value: 1 },
    { label: '4', value: 1 },
    { label: '5', value: 2 },
    { label: '6', value: 15 },
    { label: '7', value: 1 },
    { label: '8', value: 11 },
    { label: '11', value: 1 },
    { label: '12', value: 4 },
    { label: '6, 3', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('season18VerseLengthBar', ['Poèmes'], [data]);
})();
