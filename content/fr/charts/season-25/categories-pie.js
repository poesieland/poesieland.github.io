import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Passion', value: 3, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Aube', value: 2, color: 'rgba(255, 203, 96, 1)' },
    { label: 'Lune', value: 1, color: 'rgba(253, 241, 184, 1)' },
    { label: 'Crépuscule', value: 5, color: 'rgba(179, 103, 0, 1)' },
    { label: 'Nuit', value: 2, color: 'rgba(47, 27, 12, 1)' },
    { label: 'Enfance et adolescence', value: 1, color: 'rgba(247, 235, 253, 1)' },
    { label: 'Espoir', value: 1, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Portraits', value: 2, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Temps', value: 3, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Etre', value: 2, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Apprentissage', value: 4, color: 'rgba(70, 24, 115, 1)' },
    { label: 'Angoisse', value: 5, color: 'rgba(38, 9, 78, 1)' },
    { label: 'Flore', value: 4, color: 'rgba(84, 114, 174, 1)' },
    { label: 'Ciel', value: 3, color: 'rgba(119, 181, 254, 1)' },
    { label: 'Mer', value: 1, color: 'rgba(0, 127, 255, 1)' },
    { label: 'Faune', value: 3, color: 'rgba(4, 139, 154, 1)' },
    { label: 'Musique et chant', value: 1, color: 'rgba(252, 191, 140, 1)' },
    { label: 'Mouvement', value: 1, color: 'rgba(250, 152, 70, 1)' },
    { label: 'Sommeil', value: 1, color: 'rgba(209, 98, 4, 1)' },
    { label: 'Printemps', value: 9, color: 'rgba(130, 196, 108, 1)' },
    { label: 'Eté', value: 1, color: 'rgba(0, 86, 27, 1)' },
    { label: 'Automne', value: 1, color: 'rgba(27, 79, 8, 1)' },
    { label: 'Hiver', value: 2, color: 'rgba(24, 57, 30, 1)' },
  ];
  addPieChart('season25Pie', [data], { plugins: { title: { display: true, text: 'Coeur et âme (25) février à mars 2025' } } });
})();
