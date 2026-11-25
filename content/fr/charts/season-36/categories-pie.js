import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Romantisme', value: 1, color: 'rgba(232, 93, 125, 1)' },
    { label: 'Ville', value: 1, color: 'rgba(185, 121, 43, 1)' },
    { label: 'Crépuscule', value: 5, color: 'rgba(139, 91, 41, 1)' },
    { label: 'Enfance et adolescence', value: 3, color: 'rgba(217, 185, 240, 1)' },
    { label: 'Création', value: 3, color: 'rgba(185, 140, 221, 1)' },
    { label: 'Portraits', value: 1, color: 'rgba(146, 95, 195, 1)' },
    { label: 'Temps', value: 5, color: 'rgba(128, 80, 178, 1)' },
    { label: 'Condition humaine', value: 4, color: 'rgba(110, 66, 158, 1)' },
    { label: 'Apprentissage', value: 2, color: 'rgba(113, 59, 145, 1)' },
    { label: 'Angoisse', value: 1, color: 'rgba(41, 35, 79, 1)' },
    { label: 'Flore', value: 1, color: 'rgba(145, 195, 232, 1)' },
    { label: 'Eau douce', value: 1, color: 'rgba(57, 137, 194, 1)' },
    { label: 'Ciel', value: 4, color: 'rgba(36, 115, 173, 1)' },
    { label: 'Climat', value: 2, color: 'rgb(10, 53, 91, 1)' },
    { label: 'Musique et chant', value: 2, color: 'rgba(246, 194, 160, 1)' },
    { label: 'Mouvement', value: 1, color: 'rgba(240, 164, 119, 1)' },
    { label: 'Félinement vôtre', value: 8, color: 'rgba(161, 86, 28, 1)' },
    { label: 'Automne', value: 17, color: 'rgba(77, 150, 61, 1)' },
    { label: 'Hiver', value: 2, color: 'rgba(27, 79, 8, 1)' },
  ];
  addPieChart('season36Pie', [data], { plugins: { title: { display: true, text: 'N\'attends pas (36) septembre à novembre 2026' } } });
})();
