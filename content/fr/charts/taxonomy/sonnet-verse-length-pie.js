import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '2 syllabes', value: 1, color: 'rgb(230, 176, 170)' },
    { label: '6 syllabes', value: 4, color: 'rgb(174, 214, 241)' },
    { label: '8 syllabes', value: 6, color: 'rgb(162, 217, 206)' },
    { label: '10 syllabes', value: 1, color: 'rgb(249, 231, 159)' },
    { label: '12 syllabes', value: 12, color: 'rgb(237, 187, 153)' },
  ];
  addPieChart('sonnetVerseLengthPie', [data], { plugins: { title: { display: true, text: 'Poèmes' } } });
})();
