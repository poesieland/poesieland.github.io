import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 3, color: 'rgba(254, 231, 240, 1)' },
    { label: 'Amour platonique', value: 1, color: 'rgba(255, 111, 125, 1)' },
    { label: 'Romantisme', value: 1, color: 'rgba(253, 108, 158, 1)' },
    { label: 'Passion', value: 1, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Aube', value: 1, color: 'rgba(255, 203, 96, 1)' },
    { label: 'Crépuscule', value: 4, color: 'rgba(179, 103, 0, 1)' },
    { label: 'Enfance et adolescence', value: 3, color: 'rgba(247, 235, 253, 1)' },
    { label: 'Espoir', value: 1, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Création', value: 2, color: 'rgba(220, 147, 246, 1)' },
    { label: 'Foi', value: 2, color: 'rgba(203, 93, 241, 1)' },
    { label: 'Portraits', value: 4, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Temps', value: 5, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Etre', value: 5, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Apprentissage', value: 2, color: 'rgba(70, 24, 115, 1)' },
    { label: 'Angoisse', value: 4, color: 'rgba(38, 9, 78, 1)' },
    { label: 'Flore', value: 5, color: 'rgba(84, 114, 174, 1)' },
    { label: 'Jardin et paysage', value: 2, color: 'rgba(121, 248, 248, 1)' },
    { label: 'Eau douce', value: 6, color: 'rgba(0, 127, 255, 1)' },
    { label: 'Ciel', value: 4, color: 'rgba(119, 181, 254, 1)' },
    { label: 'Mer', value: 1, color: 'rgba(0, 127, 255, 1)' },
    { label: 'Faune', value: 3, color: 'rgba(4, 139, 154, 1)' },
    { label: 'Climat', value: 3, color: 'rgb(50, 122, 183, 1)' },
    { label: 'Musique et chant', value: 3, color: 'rgba(252, 191, 140, 1)' },
    { label: 'Printemps', value: 4, color: 'rgba(130, 196, 108, 1)' },
    { label: 'Eté', value: 3, color: 'rgba(0, 86, 27, 1)' },
    { label: 'Automne', value: 1, color: 'rgba(27, 79, 8, 1)' },
    { label: 'Hiver', value: 1, color: 'rgba(24, 57, 30, 1)' },
  ];
  addPieChart('season26Pie', [data], { plugins: { title: { display: true, text: 'Chemins non balisés (26) avril à juin 2025' } } });
})();
