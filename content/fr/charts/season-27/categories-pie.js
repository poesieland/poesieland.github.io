import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amour platonique', value: 2, color: 'rgba(255, 111, 125, 1)' },
    { label: 'Passion', value: 1, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Ville', value: 1, color: 'rgba(152, 151, 88, 1)' },
    { label: 'Crépuscule', value: 2, color: 'rgba(179, 103, 0, 1)' },
    { label: 'Espoir', value: 1, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Création', value: 1, color: 'rgba(220, 147, 246, 1)' },
    { label: 'Portraits', value: 5, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Temps', value: 5, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Etre', value: 4, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Révolte', value: 1, color: 'rgba(61, 0, 102, 1)' },
    { label: 'Flore', value: 3, color: 'rgba(84, 114, 174, 1)' },
    { label: 'Eau douce', value: 1, color: 'rgba(0, 127, 255, 1)' },
    { label: 'Ciel', value: 2, color: 'rgba(119, 181, 254, 1)' },
    { label: 'Faune', value: 1, color: 'rgba(4, 139, 154, 1)' },
    { label: 'Musique et chant', value: 2, color: 'rgba(252, 191, 140, 1)' },
    { label: 'Mouvement', value: 2, color: 'rgba(250, 152, 70, 1)' },
    { label: 'Sommeil', value: 1, color: 'rgba(209, 98, 4, 1)' },
    { label: 'Printemps', value: 1, color: 'rgba(130, 196, 108, 1)' },
    { label: 'Eté', value: 5, color: 'rgba(0, 86, 27, 1)' },
    { label: 'Automne', value: 1, color: 'rgba(27, 79, 8, 1)' },
    { label: 'Hiver', value: 1, color: 'rgba(24, 57, 30, 1)' },
  ];
  addPieChart('season27Pie', [data], { plugins: { title: { display: true, text: 'D\'un rêve à l\'autre (27) juin à juin 2025' } } });
})();
