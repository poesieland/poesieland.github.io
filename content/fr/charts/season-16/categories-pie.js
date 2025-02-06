import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amour platonique', value: 1, color: 'rgba(255, 111, 125, 1)' },
    { label: 'Romantisme', value: 2, color: 'rgba(253, 108, 158, 1)' },
    { label: 'Passion', value: 4, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Aube', value: 6, color: 'rgba(255, 203, 96, 1)' },
    { label: 'Lune', value: 2, color: 'rgba(253, 241, 184, 1)' },
    { label: 'Ville', value: 4, color: 'rgba(152, 151, 88, 1)' },
    { label: 'Nuit', value: 3, color: 'rgba(47, 27, 12, 1)' },
    { label: 'Enfance et adolescence', value: 1, color: 'rgba(247, 235, 253, 1)' },
    { label: 'Espoir', value: 2, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Création', value: 2, color: 'rgba(220, 147, 246, 1)' },
    { label: 'Foi', value: 1, color: 'rgba(203, 93, 241, 1)' },
    { label: 'Temps', value: 11, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Etre', value: 7, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Apprentissage', value: 2, color: 'rgba(70, 24, 115, 1)' },
    { label: 'Révolte', value: 2, color: 'rgba(61, 0, 102, 1)' },
    { label: 'Angoisse', value: 2, color: 'rgba(38, 9, 78, 1)' },
    { label: 'Neige', value: 1, color: 'rgba(244, 254, 254, 1)' },
    { label: 'Flore', value: 2, color: 'rgba(84, 114, 174, 1)' },
    { label: 'Jardin et paysage', value: 8, color: 'rgba(121, 248, 248, 1)' },
    { label: 'Eau douce', value: 3, color: 'rgba(0, 127, 255, 1)' },
    { label: 'Ciel', value: 2, color: 'rgba(119, 181, 254, 1)' },
    { label: 'Faune', value: 3, color: 'rgba(4, 139, 154, 1)' },
    { label: 'Musique et chant', value: 1, color: 'rgba(252, 191, 140, 1)' },
    { label: 'Toucher', value: 1, color: 'rgba(244, 114, 5, 1)' },
    { label: 'Sommeil', value: 2, color: 'rgba(209, 98, 4, 1)' },
    { label: 'Printemps', value: 3, color: 'rgba(130, 196, 108, 1)' },
    { label: 'Eté', value: 3, color: 'rgba(0, 86, 27, 1)' },
    { label: 'Automne', value: 7, color: 'rgba(27, 79, 8, 1)' },
  ];
  addPieChart('season16Pie', [data], { plugins: { title: { display: true, text: 'Plus loin (16) - De mars 2002 à octobre 2004' } } });
})();
