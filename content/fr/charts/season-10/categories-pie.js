import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amour malheureux', value: 2, color: 'rgba(255, 194, 209, 1)' },
    { label: 'Romantisme', value: 4, color: 'rgba(255, 179, 198, 1)' },
    { label: 'Aube', value: 1, color: 'rgba(244, 228, 9, 1)' },
    { label: 'Lune', value: 3, color: 'rgba(238, 186, 11, 1)' },
    { label: 'Ville', value: 1, color: 'rgba(195, 111, 9, 1)' },
    { label: 'Crépuscule', value: 3, color: 'rgba(166, 60, 6, 1)' },
    { label: 'Nuit', value: 3, color: 'rgba(113, 0, 0, 1)' },
    { label: 'Espoir', value: 5, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Création', value: 3, color: 'rgba(220, 147, 246, 1)' },
    { label: 'Foi', value: 6, color: 'rgba(203, 93, 241, 1)' },
    { label: 'Temps', value: 1, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Etre', value: 5, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Révolte', value: 2, color: 'rgba(61, 0, 102, 1)' },
    { label: 'Neige', value: 4, color: 'rgba(183, 239, 197, 1)' },
    { label: 'Flore', value: 1, color: 'rgba(146, 230, 167, 1)' },
    { label: 'Jardin et paysage', value: 2, color: 'rgba(74, 214, 109, 1)' },
    { label: 'Ciel', value: 2, color: 'rgba(26, 116, 49, 1)' },
    { label: 'Mer', value: 5, color: 'rgba(16, 69, 29, 1)' },
    { label: 'Musique et chant', value: 5, color: 'rgba(63, 193, 192, 1)' },
    { label: 'Mouvement', value: 1, color: 'rgba(4, 166, 194, 1)' },
    { label: 'Toucher', value: 1, color: 'rgba(15, 128, 170, 1)' },
    { label: 'Sommeil', value: 2, color: 'rgba(29, 78, 137, 1)' },
    { label: 'Hiver', value: 1, color: 'rgba(204, 88, 3, 1)' },
  ];
  addPieChart('season10Pie', [data], { plugins: { title: { display: true, text: 'Dixième Saison : Pensées - De janvier à mars 1999' } } });
})();