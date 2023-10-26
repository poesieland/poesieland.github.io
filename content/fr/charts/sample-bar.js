import { addBarChart } from './add-chart.js'

(async function () {
  const data = [
    { label: 'Nice', value: 2 },
    { label: 'Fine', value: 10 },
    { label: 'Excellent', value: 20 },
  ];

  addBarChart('sampleBar', ['Notations'], [data])
})();