import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 2, color: 'rgba(255, 194, 209, 1)' },
    { label: 'Amour platonique', value: 1, color: 'rgba(245, 143, 168, 1)' },
    { label: 'Aube', value: 4, color: 'rgba(245, 193, 106, 1)' },
    { label: 'Crépuscule', value: 2, color: 'rgba(139, 91, 41, 1)' },
    { label: 'Nuit', value: 2, color: 'rgba(47, 27, 12, 1)' },
    { label: 'Enfance et adolescence', value: 1, color: 'rgba(215, 182, 237, 1)' },
    { label: 'Espoir', value: 1, color: 'rgba(196, 154, 223, 1)' },
    { label: 'Foi', value: 3, color: 'rgba(152, 92, 192, 1)' },
    { label: 'Portraits', value: 3, color: 'rgba(133, 70, 175, 1)' },
    { label: 'Temps', value: 6, color: 'rgba(113, 55, 154, 1)' },
    { label: 'Condition humaine', value: 2, color: 'rgba(94, 43, 131, 1)' },
    { label: 'Angoisse', value: 9, color: 'rgba(41, 35, 79, 1)' },
    { label: 'Neige', value: 1, color: 'rgba(195, 223, 243, 1)' },
    { label: 'Flore', value: 2, color: 'rgba(145, 195, 232, 1)' },
    { label: 'Ciel', value: 8, color: 'rgba(36, 115, 173, 1)' },
    { label: 'Faune', value: 1, color: 'rgba(16, 74, 122, 1)' },
    { label: 'Climat', value: 1, color: 'rgb(10, 53, 91, 1)' },
    { label: 'Félinement vôtre', value: 1, color: 'rgba(161, 86, 28, 1)' },
    { label: 'Printemps', value: 1, color: 'rgba(180, 217, 166, 1)' },
    { label: 'Eté', value: 1, color: 'rgba(130, 196, 108, 1)' },
    { label: 'Automne', value: 22, color: 'rgba(77, 150, 61, 1)' },
    { label: 'Hiver', value: 6, color: 'rgba(27, 79, 8, 1)' },
  ];
  addPieChart('season22Pie', [data], { plugins: { title: { display: true, text: 'Au temps le dire (22) septembre à novembre 2024' } } });
})();
