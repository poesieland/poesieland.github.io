import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Romantisme', value: 1, color: 'rgba(232, 93, 125, 1)' },
    { label: 'Crépuscule', value: 3, color: 'rgba(139, 91, 41, 1)' },
    { label: 'Enfance et adolescence', value: 3, color: 'rgba(217, 185, 240, 1)' },
    { label: 'Espoir', value: 3, color: 'rgba(203, 163, 232, 1)' },
    { label: 'Création', value: 2, color: 'rgba(185, 140, 221, 1)' },
    { label: 'Foi', value: 1, color: 'rgba(166, 117, 209, 1)' },
    { label: 'Portraits', value: 2, color: 'rgba(146, 95, 195, 1)' },
    { label: 'Temps', value: 11, color: 'rgba(128, 80, 178, 1)' },
    { label: 'Condition humaine', value: 1, color: 'rgba(110, 66, 158, 1)' },
    { label: 'Apprentissage', value: 1, color: 'rgba(113, 59, 145, 1)' },
    { label: 'Révolte', value: 5, color: 'rgba(116, 54, 111, 1)' },
    { label: 'Angoisse', value: 9, color: 'rgba(41, 35, 79, 1)' },
    { label: 'Flore', value: 5, color: 'rgba(145, 195, 232, 1)' },
    { label: 'Jardin et paysage', value: 1, color: 'rgba(101, 166, 213, 1)' },
    { label: 'Eau douce', value: 2, color: 'rgba(57, 137, 194, 1)' },
    { label: 'Ciel', value: 2, color: 'rgba(36, 115, 173, 1)' },
    { label: 'Faune', value: 1, color: 'rgba(16, 74, 122, 1)' },
    { label: 'Climat', value: 14, color: 'rgb(10, 53, 91, 1)' },
    { label: 'Musique et chant', value: 1, color: 'rgba(246, 194, 160, 1)' },
    { label: 'Mouvement', value: 1, color: 'rgba(240, 164, 119, 1)' },
    { label: 'Félinement vôtre', value: 2, color: 'rgba(161, 86, 28, 1)' },
    { label: 'Eté', value: 10, color: 'rgba(130, 196, 108, 1)' },
    { label: 'Automne', value: 1, color: 'rgba(77, 150, 61, 1)' },
  ];
  addPieChart('season34Pie', [data], { plugins: { title: { display: true, text: 'A mi-chemin du paradis (34) juillet à août 2026' } } });
})();
