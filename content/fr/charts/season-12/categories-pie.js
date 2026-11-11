import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amour platonique', value: 1, color: 'rgba(245, 143, 168, 1)' },
    { label: 'Romantisme', value: 2, color: 'rgba(232, 93, 125, 1)' },
    { label: 'Passion', value: 3, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Lune', value: 3, color: 'rgba(229, 163, 60, 1)' },
    { label: 'Crépuscule', value: 2, color: 'rgba(139, 91, 41, 1)' },
    { label: 'Nuit', value: 4, color: 'rgba(47, 27, 12, 1)' },
    { label: 'Enfance et adolescence', value: 1, color: 'rgba(215, 182, 237, 1)' },
    { label: 'Espoir', value: 1, color: 'rgba(196, 154, 223, 1)' },
    { label: 'Création', value: 7, color: 'rgba(174, 122, 207, 1)' },
    { label: 'Foi', value: 3, color: 'rgba(152, 92, 192, 1)' },
    { label: 'Portraits', value: 3, color: 'rgba(133, 70, 175, 1)' },
    { label: 'Temps', value: 8, color: 'rgba(113, 55, 154, 1)' },
    { label: 'Condition humaine', value: 6, color: 'rgba(94, 43, 131, 1)' },
    { label: 'Apprentissage', value: 2, color: 'rgba(98, 58, 155, 1)' },
    { label: 'Flore', value: 1, color: 'rgba(145, 195, 232, 1)' },
    { label: 'Jardin et paysage', value: 1, color: 'rgba(101, 166, 213, 1)' },
    { label: 'Eau douce', value: 2, color: 'rgba(57, 137, 194, 1)' },
    { label: 'Ciel', value: 3, color: 'rgba(36, 115, 173, 1)' },
    { label: 'Musique et chant', value: 11, color: 'rgba(246, 194, 160, 1)' },
    { label: 'Au contact', value: 2, color: 'rgba(232, 132, 77, 1)' },
    { label: 'Sommeil', value: 1, color: 'rgba(213, 104, 49, 1)' },
    { label: 'Hiver', value: 1, color: 'rgba(27, 79, 8, 1)' },
  ];
  addPieChart('season12Pie', [data], { plugins: { title: { display: true, text: 'Tempo piano (12) mai à juillet 1999' } } });
})();
