import { addPieChart} from './add-chart.js'

(async function () {
  const data = [
    { label: 'red', color: 'rgb(255, 99, 132)', value: 300 },
    { label: 'blue', color: 'rgb(54, 162, 235)', value: 50 },
    { label: 'yellow', color: 'rgb(255, 205, 86)', value: 100 },
  ];

  addPieChart('samplePie', data);

})();