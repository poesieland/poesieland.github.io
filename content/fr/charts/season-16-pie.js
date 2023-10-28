import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Amour malheureux', value: 2, color: 'rgb(255, 194, 209)' },
    { label: 'Romantisme', value: 2, color: 'rgb(255, 179, 198)' },
    { label: 'Aimé (amant)', value: 4, color: 'rgb(251, 111, 146)' },
    { label: 'Aube', value: 6, color: 'rgb(244, 228, 9)' },
    { label: 'Lune', value: 2, color: 'rgb(238, 186, 11)' },
    { label: 'Ville', value: 4, color: 'rgb(195, 111, 9)' },
    { label: 'Nuit', value: 3, color: 'rgb(113, 0, 0)' },
    { label: 'Enfance', value: 1, color: 'rgb(247, 235, 253)' },
    { label: 'Espoir', value: 2, color: 'rgb(234, 191, 250)' },
    { label: 'Création', value: 2, color: 'rgb(220, 147, 246)' },
    { label: 'Foi', value: 1, color: 'rgb(203, 93, 241)' },
    { label: 'Temps', value: 12, color: 'rgb(140, 7, 221)' },
    { label: 'Etre', value: 9, color: 'rgb(105, 16, 168)' },
    { label: 'Apprentissage', value: 1, color: 'rgb(70, 24, 115)' },
    { label: 'Révolte', value: 2, color: 'rgb(61, 0, 102)' },
    { label: 'Neige', value: 1, color: 'rgb(183, 239, 197)' },
    { label: 'Flore', value: 2, color: 'rgb(146, 230, 167)' },
    { label: 'Jardin, paysage', value: 8, color: 'rgb(74, 214, 109)' },
    { label: 'Eau douce', value: 3, color: 'rgb(37, 162, 68)' },
    { label: 'Ciel', value: 2, color: 'rgb(26, 116, 49)' },
    { label: 'Mer', value: 1, color: 'rgb(16, 69, 29)' },
    { label: 'Animaux', value: 3, color: 'rgb(30, 47, 35)' },
    { label: 'Musique, chant', value: 1, color: 'rgb(63, 193, 192)' },
    { label: 'Toucher', value: 1, color: 'rgb(15, 128, 170)' },
    { label: 'Sommeil', value: 2, color: 'rgb(29, 78, 137)' },
    { label: 'Printemps', value: 3, color: 'rgb(179, 51, 233)' },
    { label: 'Eté', value: 3, color: 'rgb(255, 149, 5)' },
    { label: 'Automne', value: 7, color: 'rgb(226, 113, 29)' },
  ];
  addPieChart('season16Pie', [data], 'Seizième Saison : Plus loin - De mars 2002 à octobre 2004');
})();
