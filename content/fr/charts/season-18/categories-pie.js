import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 1, color: 'rgba(254, 231, 240, 1)' },
    { label: 'Romantisme', value: 2, color: 'rgba(253, 108, 158, 1)' },
    { label: 'Aube', value: 1, color: 'rgba(255, 203, 96, 1)' },
    { label: 'Crépuscule', value: 1, color: 'rgba(179, 103, 0, 1)' },
    { label: 'Enfance et adolescence', value: 3, color: 'rgba(247, 235, 253, 1)' },
    { label: 'Espoir', value: 4, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Création', value: 5, color: 'rgba(220, 147, 246, 1)' },
    { label: 'Foi', value: 1, color: 'rgba(203, 93, 241, 1)' },
    { label: 'Portraits', value: 4, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Temps', value: 4, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Etre', value: 1, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Révolte', value: 1, color: 'rgba(61, 0, 102, 1)' },
    { label: 'Angoisse', value: 3, color: 'rgba(38, 9, 78, 1)' },
    { label: 'Neige', value: 4, color: 'rgba(244, 254, 254, 1)' },
    { label: 'Flore', value: 1, color: 'rgba(84, 114, 174, 1)' },
    { label: 'Jardin et paysage', value: 4, color: 'rgba(121, 248, 248, 1)' },
    { label: 'Eau douce', value: 3, color: 'rgba(0, 127, 255, 1)' },
    { label: 'Ciel', value: 3, color: 'rgba(119, 181, 254, 1)' },
    { label: 'Faune', value: 5, color: 'rgba(4, 139, 154, 1)' },
    { label: 'Climat', value: 9, color: 'rgb(50, 122, 183, 1)' },
    { label: 'Musique et chant', value: 2, color: 'rgba(252, 191, 140, 1)' },
    { label: 'Printemps', value: 1, color: 'rgba(130, 196, 108, 1)' },
    { label: 'Eté', value: 4, color: 'rgba(0, 86, 27, 1)' },
    { label: 'Automne', value: 8, color: 'rgba(27, 79, 8, 1)' },
    { label: 'Hiver', value: 12, color: 'rgba(24, 57, 30, 1)' },
  ];
  addPieChart('season18Pie', [data], { plugins: { title: { display: true, text: 'Retour aux sources (18) octobre 2023 à janvier 2024' } } });
})();
