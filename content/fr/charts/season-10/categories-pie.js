import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amour platonique', value: 2, color: 'rgba(245, 143, 168, 1)' },
    { label: 'Romantisme', value: 4, color: 'rgba(232, 93, 125, 1)' },
    { label: 'Passion', value: 1, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Aube', value: 1, color: 'rgba(245, 193, 106, 1)' },
    { label: 'Lune', value: 3, color: 'rgba(229, 163, 60, 1)' },
    { label: 'Ville', value: 1, color: 'rgba(185, 121, 43, 1)' },
    { label: 'Crépuscule', value: 4, color: 'rgba(139, 91, 41, 1)' },
    { label: 'Nuit', value: 3, color: 'rgba(47, 27, 12, 1)' },
    { label: 'Espoir', value: 4, color: 'rgba(196, 154, 223, 1)' },
    { label: 'Création', value: 3, color: 'rgba(174, 122, 207, 1)' },
    { label: 'Foi', value: 6, color: 'rgba(152, 92, 192, 1)' },
    { label: 'Temps', value: 1, color: 'rgba(113, 55, 154, 1)' },
    { label: 'Condition humaine', value: 4, color: 'rgba(94, 43, 131, 1)' },
    { label: 'Révolte', value: 2, color: 'rgba(138, 36, 95, 1)' },
    { label: 'Angoisse', value: 1, color: 'rgba(41, 35, 79, 1)' },
    { label: 'Neige', value: 4, color: 'rgba(195, 223, 243, 1)' },
    { label: 'Flore', value: 1, color: 'rgba(145, 195, 232, 1)' },
    { label: 'Jardin et paysage', value: 2, color: 'rgba(101, 166, 213, 1)' },
    { label: 'Ciel', value: 2, color: 'rgba(36, 115, 173, 1)' },
    { label: 'Mer', value: 5, color: 'rgba(21, 94, 150, 1)' },
    { label: 'Musique et chant', value: 5, color: 'rgba(246, 194, 160, 1)' },
    { label: 'Mouvement', value: 1, color: 'rgba(240, 164, 119, 1)' },
    { label: 'Au contact', value: 1, color: 'rgba(232, 132, 77, 1)' },
    { label: 'Sommeil', value: 2, color: 'rgba(213, 104, 49, 1)' },
    { label: 'Hiver', value: 1, color: 'rgba(27, 79, 8, 1)' },
  ];
  addPieChart('season10Pie', [data], { plugins: { title: { display: true, text: 'Pensées (10) janvier 1998 à mars 1999' } } });
})();
