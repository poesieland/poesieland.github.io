import { addBarChart } from './add-chart.js'

(async function () {
  const datas = [[
    { label: 'with some awesome', value: 2 },
    { label: 'with some exciting', value: 10 },
    { label: 'with some terrific', value: 20 },
  ],
  [
    { label: 'awesome', value: 1 },
    { label: 'exciting', value: 3 },
    { label: 'terrific', value: 5 },
  ]];

  addBarChart('sampleStackedBar', ['Basic', 'Special'], datas)
})();