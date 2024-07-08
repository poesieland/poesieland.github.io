import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amour malheureux', value: 2, color: 'rgba(255, 194, 209, 1)' },
    { label: 'Romantisme', value: 4, color: 'rgba(255, 179, 198, 1)' },
    { label: 'Aube', value: 1, color: 'rgba(219, 194, 87, 1)' },
    { label: 'Lune', value: 3, color: 'rgba(198, 163, 55, 1)' },
    { label: 'Ville', value: 1, color: 'rgba(152, 151, 88, 1)' },
    { label: 'Crépuscule', value: 3, color: 'rgba(129, 103, 41, 1)' },
    { label: 'Nuit', value: 3, color: 'rgba(91, 77, 11, 1)' },
    { label: 'Espoir', value: 5, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Création', value: 3, color: 'rgba(220, 147, 246, 1)' },
    { label: 'Foi', value: 6, color: 'rgba(203, 93, 241, 1)' },
    { label: 'Temps', value: 1, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Etre', value: 5, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Révolte', value: 2, color: 'rgba(61, 0, 102, 1)' },
    { label: 'Neige', value: 4, color: 'rgba(154, 238, 228, 1)' },
    { label: 'Flore', value: 1, color: 'rgba(123, 233, 220, 1)' },
    { label: 'Jardin et paysage', value: 2, color: 'rgba(61, 223, 205, 1)' },
    { label: 'Ciel', value: 2, color: 'rgba(19, 122, 110, 1)' },
    { label: 'Mer', value: 5, color: 'rgba(14, 92, 83, 1)' },
    { label: 'Musique et chant', value: 5, color: 'rgba(252, 191, 140, 1)' },
    { label: 'Mouvement', value: 1, color: 'rgba(250, 152, 70, 1)' },
    { label: 'Toucher', value: 1, color: 'rgba(244, 114, 5, 1)' },
    { label: 'Sommeil', value: 2, color: 'rgba(209, 98, 4, 1)' },
    { label: 'Hiver', value: 1, color: 'rgba(73, 138, 185, 1)' },
  ];
  addPieChart('season10Pie', [data], { plugins: { title: { display: true, text: 'Dixième Saison : Pensées - De janvier à mars 1999' } } });
})();
