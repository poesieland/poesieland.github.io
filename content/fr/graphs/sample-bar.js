import { addBarChart } from './add-chart.js'

(async function () {
  const data = [
    { label: '4', value: 2 },
    { label: '5', value: 10 },
    { label: '6', value: 20 },
  ];

  addBarChart('sampleBar', 'My bar chart', data)
})();