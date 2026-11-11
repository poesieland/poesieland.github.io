import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 1, color: 'rgba(255, 194, 209, 1)' },
    { label: 'Romantisme', value: 1, color: 'rgba(232, 93, 125, 1)' },
    { label: 'Passion', value: 1, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Aube', value: 3, color: 'rgba(245, 193, 106, 1)' },
    { label: 'Lune', value: 1, color: 'rgba(229, 163, 60, 1)' },
    { label: 'Ville', value: 3, color: 'rgba(185, 121, 43, 1)' },
    { label: 'Crépuscule', value: 2, color: 'rgba(139, 91, 41, 1)' },
    { label: 'Nuit', value: 3, color: 'rgba(47, 27, 12, 1)' },
    { label: 'Enfance et adolescence', value: 3, color: 'rgba(215, 182, 237, 1)' },
    { label: 'Espoir', value: 5, color: 'rgba(196, 154, 223, 1)' },
    { label: 'Création', value: 2, color: 'rgba(174, 122, 207, 1)' },
    { label: 'Foi', value: 4, color: 'rgba(152, 92, 192, 1)' },
    { label: 'Portraits', value: 5, color: 'rgba(133, 70, 175, 1)' },
    { label: 'Temps', value: 3, color: 'rgba(113, 55, 154, 1)' },
    { label: 'Condition humaine', value: 4, color: 'rgba(94, 43, 131, 1)' },
    { label: 'Apprentissage', value: 3, color: 'rgba(98, 58, 155, 1)' },
    { label: 'Révolte', value: 1, color: 'rgba(138, 36, 95, 1)' },
    { label: 'Neige', value: 2, color: 'rgba(195, 223, 243, 1)' },
    { label: 'Flore', value: 4, color: 'rgba(145, 195, 232, 1)' },
    { label: 'Jardin et paysage', value: 3, color: 'rgba(101, 166, 213, 1)' },
    { label: 'Eau douce', value: 4, color: 'rgba(57, 137, 194, 1)' },
    { label: 'Climat', value: 1, color: 'rgb(10, 53, 91, 1)' },
    { label: 'Musique et chant', value: 2, color: 'rgba(246, 194, 160, 1)' },
    { label: 'Sommeil', value: 1, color: 'rgba(213, 104, 49, 1)' },
    { label: 'Printemps', value: 4, color: 'rgba(180, 217, 166, 1)' },
    { label: 'Eté', value: 1, color: 'rgba(130, 196, 108, 1)' },
    { label: 'Automne', value: 8, color: 'rgba(77, 150, 61, 1)' },
    { label: 'Hiver', value: 6, color: 'rgba(27, 79, 8, 1)' },
  ];
  addPieChart('season17Pie', [data], { plugins: { title: { display: true, text: 'Traversées (17) octobre 2004 à octobre 2023' } } });
})();
