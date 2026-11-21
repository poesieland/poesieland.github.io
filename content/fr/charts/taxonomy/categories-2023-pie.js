import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 1, color: 'rgba(255, 194, 209, 1)' },
    { label: 'Romantisme', value: 2, color: 'rgba(232, 93, 125, 1)' },
    { label: 'Aube', value: 1, color: 'rgba(245, 193, 106, 1)' },
    { label: 'Crépuscule', value: 1, color: 'rgba(139, 91, 41, 1)' },
    { label: 'Enfance et adolescence', value: 4, color: 'rgba(217, 185, 240, 1)' },
    { label: 'Espoir', value: 2, color: 'rgba(203, 163, 232, 1)' },
    { label: 'Création', value: 4, color: 'rgba(185, 140, 221, 1)' },
    { label: 'Foi', value: 1, color: 'rgba(166, 117, 209, 1)' },
    { label: 'Portraits', value: 5, color: 'rgba(146, 95, 195, 1)' },
    { label: 'Temps', value: 2, color: 'rgba(128, 80, 178, 1)' },
    { label: 'Apprentissage', value: 2, color: 'rgba(113, 59, 145, 1)' },
    { label: 'Révolte', value: 1, color: 'rgba(116, 54, 111, 1)' },
    { label: 'Angoisse', value: 3, color: 'rgba(41, 35, 79, 1)' },
    { label: 'Neige', value: 3, color: 'rgba(195, 223, 243, 1)' },
    { label: 'Flore', value: 1, color: 'rgba(145, 195, 232, 1)' },
    { label: 'Jardin et paysage', value: 4, color: 'rgba(101, 166, 213, 1)' },
    { label: 'Eau douce', value: 2, color: 'rgba(57, 137, 194, 1)' },
    { label: 'Ciel', value: 2, color: 'rgba(36, 115, 173, 1)' },
    { label: 'Faune', value: 4, color: 'rgba(16, 74, 122, 1)' },
    { label: 'Climat', value: 7, color: 'rgb(10, 53, 91, 1)' },
    { label: 'Mouvement', value: 1, color: 'rgba(240, 164, 119, 1)' },
    { label: 'Félinement vôtre', value: 1, color: 'rgba(161, 86, 28, 1)' },
    { label: 'Printemps', value: 2, color: 'rgba(180, 217, 166, 1)' },
    { label: 'Eté', value: 3, color: 'rgba(130, 196, 108, 1)' },
    { label: 'Automne', value: 10, color: 'rgba(77, 150, 61, 1)' },
    { label: 'Hiver', value: 9, color: 'rgba(27, 79, 8, 1)' },
  ];
  addPieChart('categories2023Pie', [data], { plugins: { title: { display: true, text: '2023' } } });
})();
