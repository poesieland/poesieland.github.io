import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '3', value: 1, color: 'rgb(255, 255, 255)' },
    { label: '4', value: 13, color: 'rgb(230, 176, 170)' },
    { label: '6', value: 32, color: 'rgb(245, 183, 177)' },
    { label: '8', value: 150, color: 'rgb(215, 189, 226)' },
    { label: '10', value: 60, color: 'rgb(169, 204, 227)' },
    { label: '12', value: 547, color: 'rgb(174, 214, 241)' },
    { label: '14', value: 68, color: 'rgb(163, 228, 215)' },
    { label: '16', value: 288, color: 'rgb(162, 217, 206)' },
    { label: '18', value: 9, color: 'rgb(171, 235, 198)' },
    { label: '20', value: 95, color: 'rgb(249, 231, 159)' },
    { label: '22', value: 2, color: 'rgb(250, 215, 160)' },
    { label: '24', value: 17, color: 'rgb(237, 187, 153)' },
    { label: '26', value: 1, color: 'rgb(247, 249, 249)' },
    { label: '28', value: 5, color: 'rgb(204, 209, 209)' },
  ];
  addPieChart('poemLengthPie', [data], { plugins: { title: { display: true, text: 'Poèmes' } } });
})();
