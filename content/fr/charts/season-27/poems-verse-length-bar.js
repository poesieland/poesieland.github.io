import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '2', value: 1 },
    { label: '3', value: 1 },
    { label: '4', value: 3 },
    { label: '6', value: 3 },
    { label: '8', value: 2 },
    { label: '3, 2', value: 2, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('season27VerseLengthBar', ['Poèmes'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
