import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Amour malheureux', value: 1, color: 'rgb(255, 194, 209)' },
    { label: 'Romantisme', value: 3, color: 'rgb(255, 179, 198)' },
    { label: 'Aimé (amant)', value: 1, color: 'rgb(251, 111, 146)' },
    { label: 'Lune', value: 1, color: 'rgb(238, 186, 11)' },
    { label: 'Crépuscule', value: 2, color: 'rgb(166, 60, 6)' },
    { label: 'Nuit', value: 1, color: 'rgb(113, 0, 0)' },
    { label: 'Espoir', value: 4, color: 'rgb(234, 191, 250)' },
    { label: 'Création', value: 4, color: 'rgb(220, 147, 246)' },
    { label: 'Foi', value: 4, color: 'rgb(203, 93, 241)' },
    { label: 'Portraits', value: 1, color: 'rgb(179, 51, 233)' },
    { label: 'Temps', value: 7, color: 'rgb(140, 7, 221)' },
    { label: 'Etre', value: 3, color: 'rgb(105, 16, 168)' },
    { label: 'Révolte', value: 1, color: 'rgb(61, 0, 102)' },
    { label: 'Neige', value: 1, color: 'rgb(183, 239, 197)' },
    { label: 'Flore', value: 5, color: 'rgb(146, 230, 167)' },
    { label: 'Jardin et paysage', value: 3, color: 'rgb(74, 214, 109)' },
    { label: 'Eau douce', value: 1, color: 'rgb(37, 162, 68)' },
    { label: 'Ciel', value: 3, color: 'rgb(26, 116, 49)' },
    { label: 'Mer', value: 2, color: 'rgb(16, 69, 29)' },
    { label: 'Musique et chant', value: 11, color: 'rgb(63, 193, 192)' },
    { label: 'Mouvement', value: 4, color: 'rgb(4, 166, 194)' },
    { label: 'Toucher', value: 1, color: 'rgb(15, 128, 170)' },
    { label: 'Printemps', value: 2, color: 'rgb(255, 182, 39)' },
    { label: 'Eté', value: 1, color: 'rgb(255, 149, 5)' },
  ];
  addPieChart('season11Pie', [data], 'Onzième Saison : Perceptible - De mars à mai 1999');
})();
