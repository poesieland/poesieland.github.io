import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '3', value: 2, color: 'rgb(255, 255, 255)' },
    { label: '4', value: 15, color: 'rgb(230, 176, 170)' },
    { label: '6', value: 32, color: 'rgb(245, 183, 177)' },
    { label: '8', value: 192, color: 'rgb(215, 189, 226)' },
    { label: '9', value: 1, color: 'rgb(215, 189, 226)' },
    { label: '10', value: 60, color: 'rgb(169, 204, 227)' },
    { label: '11', value: 2, color: 'rgb(169, 204, 227)' },
    { label: '12', value: 740, color: 'rgb(174, 214, 241)' },
    { label: '13', value: 1, color: 'rgb(174, 214, 241)' },
    { label: '14', value: 73, color: 'rgb(163, 228, 215)' },
    { label: '15', value: 17, color: 'rgb(163, 228, 215)' },
    { label: '16', value: 394, color: 'rgb(162, 217, 206)' },
    { label: '17', value: 1, color: 'rgb(162, 217, 206)' },
    { label: '18', value: 10, color: 'rgb(171, 235, 198)' },
    { label: '19', value: 6, color: 'rgb(171, 235, 198)' },
    { label: '20', value: 137, color: 'rgb(249, 231, 159)' },
    { label: '22', value: 2, color: 'rgb(250, 215, 160)' },
    { label: '23', value: 5, color: 'rgb(250, 215, 160)' },
    { label: '24', value: 44, color: 'rgb(237, 187, 153)' },
    { label: '26', value: 1, color: 'rgb(247, 249, 249)' },
    { label: '28', value: 8, color: 'rgb(204, 209, 209)' },
    { label: '32', value: 2, color: 'rgb(247, 249, 249)' },
  ];
  addPieChart('poemLengthPie', [data], { plugins: { title: { display: true, text: 'Poèmes' } } });
})();
