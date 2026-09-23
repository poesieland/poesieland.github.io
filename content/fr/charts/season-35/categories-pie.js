import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Passion', value: 1, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Aube', value: 2, color: 'rgba(255, 163, 0, 1)' },
    { label: 'Lune', value: 1, color: 'rgba(252, 215, 87, 1)' },
    { label: 'Enfance et adolescence', value: 2, color: 'rgba(247, 235, 253, 1)' },
    { label: 'Création', value: 1, color: 'rgba(220, 147, 246, 1)' },
    { label: 'Portraits', value: 1, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Temps', value: 4, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Condition humaine', value: 1, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Apprentissage', value: 3, color: 'rgba(70, 24, 115, 1)' },
    { label: 'Flore', value: 2, color: 'rgba(84, 114, 174, 1)' },
    { label: 'Eau douce', value: 1, color: 'rgba(0, 127, 255, 1)' },
    { label: 'Ciel', value: 4, color: 'rgba(119, 181, 254, 1)' },
    { label: 'Climat', value: 1, color: 'rgb(50, 122, 183, 1)' },
    { label: 'Félinement vôtre', value: 7, color: 'rgba(161, 86, 28, 1)' },
    { label: 'Automne', value: 12, color: 'rgba(27, 79, 8, 1)' },
  ];
  addPieChart('season35Pie', [data], { plugins: { title: { display: true, text: 'Un jour à la fois (35) août à septembre 2026' } } });
})();
