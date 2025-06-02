import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '1 syllabe', value: 1, color: 'rgb(247, 249, 249)' },
    { label: '2 syllabes', value: 11, color: 'rgb(230, 176, 170)' },
    { label: '3 syllabes', value: 14, color: 'rgb(245, 183, 177)' },
    { label: '4 syllabes', value: 71, color: 'rgb(215, 189, 226)' },
    { label: '5 syllabes', value: 51, color: 'rgb(169, 204, 227)' },
    { label: '6 syllabes', value: 305, color: 'rgb(174, 214, 241)' },
    { label: '7 syllabes', value: 76, color: 'rgb(163, 228, 215)' },
    { label: '8 syllabes', value: 427, color: 'rgb(162, 217, 206)' },
    { label: '9 syllabes', value: 13, color: 'rgb(171, 235, 198)' },
    { label: '10 syllabes', value: 35, color: 'rgb(249, 231, 159)' },
    { label: '11 syllabes', value: 16, color: 'rgb(250, 215, 160)' },
    { label: '12 syllabes', value: 228, color: 'rgb(237, 187, 153)' },
    { label: '14 syllabes', value: 5, color: 'rgb(204, 209, 209)' },
    { label: 'Variable (en blanc)', value: 41, color: 'rgb(255, 255, 255)' },
  ];
  addPieChart('poemVerseLengthPie', [data], { plugins: { title: { display: true, text: 'Poèmes' } } });
})();
