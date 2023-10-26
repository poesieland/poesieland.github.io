import { addBarChart } from './add-chart.js'

(async function () {
  const datas = [[
    { label: '4', value: 2 },
    { label: '5', value: 10 },
    { label: '6', value: 20 },
  ],
  [
    { label: '4', value: 1 },
    { label: '5', value: 3 },
    { label: '6', value: 5 },
  ]];

  addBarChart('sampleStackedBar', ['Basic', 'Special'], datas)
})();