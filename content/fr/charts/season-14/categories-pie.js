import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amour platonique', value: 3, color: 'rgba(255, 111, 125, 1)' },
    { label: 'Romantisme', value: 1, color: 'rgba(253, 108, 158, 1)' },
    { label: 'Passion', value: 1, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Aube', value: 1, color: 'rgba(255, 203, 96, 1)' },
    { label: 'Lune', value: 4, color: 'rgba(253, 241, 184, 1)' },
    { label: 'Nuit', value: 1, color: 'rgba(47, 27, 12, 1)' },
    { label: 'Espoir', value: 3, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Création', value: 4, color: 'rgba(220, 147, 246, 1)' },
    { label: 'Foi', value: 4, color: 'rgba(203, 93, 241, 1)' },
    { label: 'Portraits', value: 1, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Temps', value: 12, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Etre', value: 3, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Apprentissage', value: 1, color: 'rgba(70, 24, 115, 1)' },
    { label: 'Angoisse', value: 2, color: 'rgba(38, 9, 78, 1)' },
    { label: 'Flore', value: 3, color: 'rgba(84, 114, 174, 1)' },
    { label: 'Jardin et paysage', value: 6, color: 'rgba(121, 248, 248, 1)' },
    { label: 'Eau douce', value: 1, color: 'rgba(0, 127, 255, 1)' },
    { label: 'Ciel', value: 4, color: 'rgba(119, 181, 254, 1)' },
    { label: 'Faune', value: 1, color: 'rgba(4, 139, 154, 1)' },
    { label: 'Musique et chant', value: 5, color: 'rgba(252, 191, 140, 1)' },
    { label: 'Mouvement', value: 4, color: 'rgba(250, 152, 70, 1)' },
    { label: 'Toucher', value: 1, color: 'rgba(244, 114, 5, 1)' },
    { label: 'Printemps', value: 4, color: 'rgba(130, 196, 108, 1)' },
    { label: 'Automne', value: 3, color: 'rgba(27, 79, 8, 1)' },
    { label: 'Hiver', value: 1, color: 'rgba(24, 57, 30, 1)' },
  ];
  addPieChart('season14Pie', [data], { plugins: { title: { display: true, text: 'Au long cours (14) - De novembre 1999 à mars 2001' } } });
})();
