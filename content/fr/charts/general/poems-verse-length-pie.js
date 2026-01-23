import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '1 syllabe', value: 4, color: 'rgb(247, 249, 249)' },
    { label: '2 syllabes', value: 35, color: 'rgb(230, 176, 170)' },
    { label: '3 syllabes', value: 51, color: 'rgb(245, 183, 177)' },
    { label: '4 syllabes', value: 122, color: 'rgb(215, 189, 226)' },
    { label: '5 syllabes', value: 100, color: 'rgb(169, 204, 227)' },
    { label: '6 syllabes', value: 392, color: 'rgb(174, 214, 241)' },
    { label: '7 syllabes', value: 83, color: 'rgb(163, 228, 215)' },
    { label: '8 syllabes', value: 481, color: 'rgb(162, 217, 206)' },
    { label: '9 syllabes', value: 16, color: 'rgb(171, 235, 198)' },
    { label: '10 syllabes', value: 36, color: 'rgb(249, 231, 159)' },
    { label: '11 syllabes', value: 17, color: 'rgb(250, 215, 160)' },
    { label: '12 syllabes', value: 238, color: 'rgb(237, 187, 153)' },
    { label: '14 syllabes', value: 5, color: 'rgb(204, 209, 209)' },
  ];
  addPieChart('poemVerseLengthPie', [data], { plugins: { title: { display: true, text: 'Poèmes' } } });
})();
