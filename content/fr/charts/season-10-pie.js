import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Amour malheureux', value: 2, color: 'rgb(255, 194, 209)' },
    { label: 'Romantisme', value: 4, color: 'rgb(255, 179, 198)' },
    { label: 'Aube', value: 1, color: 'rgb(244, 228, 9)' },
    { label: 'Lune', value: 3, color: 'rgb(238, 186, 11)' },
    { label: 'Ville', value: 1, color: 'rgb(195, 111, 9)' },
    { label: 'Crépuscule', value: 3, color: 'rgb(166, 60, 6)' },
    { label: 'Nuit', value: 2, color: 'rgb(113, 0, 0)' },
    { label: 'Espoir', value: 5, color: 'rgb(234, 191, 250)' },
    { label: 'Création', value: 3, color: 'rgb(220, 147, 246)' },
    { label: 'Foi', value: 6, color: 'rgb(203, 93, 241)' },
    { label: 'Temps', value: 1, color: 'rgb(140, 7, 221)' },
    { label: 'Etre', value: 5, color: 'rgb(105, 16, 168)' },
    { label: 'Révolte', value: 2, color: 'rgb(61, 0, 102)' },
    { label: 'Neige', value: 4, color: 'rgb(183, 239, 197)' },
    { label: 'Flore', value: 1, color: 'rgb(146, 230, 167)' },
    { label: 'Jardin, paysage', value: 2, color: 'rgb(74, 214, 109)' },
    { label: 'Ciel', value: 2, color: 'rgb(26, 116, 49)' },
    { label: 'Mer', value: 5, color: 'rgb(16, 69, 29)' },
    { label: 'Musique, chant', value: 5, color: 'rgb(63, 193, 192)' },
    { label: 'Mouvement', value: 1, color: 'rgb(4, 166, 194)' },
    { label: 'Toucher', value: 1, color: 'rgb(15, 128, 170)' },
    { label: 'Sommeil', value: 2, color: 'rgb(29, 78, 137)' },
    { label: 'Hiver', value: 1, color: 'rgb(204, 88, 3)' },
  ];
  addPieChart('season10Pie', [data], 'Dixième Saison : Pensées - De janvier à mars 1999');
})();
