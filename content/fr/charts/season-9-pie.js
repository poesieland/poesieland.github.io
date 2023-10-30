import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Romantisme', value: 3, color: 'rgb(255, 179, 198)' },
    { label: 'Femme', value: 1, color: 'rgb(255, 143, 171)' },
    { label: 'Aimé (amant)', value: 1, color: 'rgb(251, 111, 146)' },
    { label: 'Aube', value: 1, color: 'rgb(244, 228, 9)' },
    { label: 'Nuit', value: 3, color: 'rgb(113, 0, 0)' },
    { label: 'Espoir', value: 5, color: 'rgb(234, 191, 250)' },
    { label: 'Création', value: 14, color: 'rgb(220, 147, 246)' },
    { label: 'Foi', value: 4, color: 'rgb(203, 93, 241)' },
    { label: 'Temps', value: 4, color: 'rgb(140, 7, 221)' },
    { label: 'Etre', value: 12, color: 'rgb(105, 16, 168)' },
    { label: 'Révolte', value: 2, color: 'rgb(61, 0, 102)' },
    { label: 'Flore', value: 2, color: 'rgb(146, 230, 167)' },
    { label: 'Eau douce', value: 1, color: 'rgb(37, 162, 68)' },
    { label: 'Mer', value: 1, color: 'rgb(16, 69, 29)' },
    { label: 'Animaux', value: 1, color: 'rgb(30, 47, 35)' },
    { label: 'Musique et chant', value: 7, color: 'rgb(63, 193, 192)' },
    { label: 'Sommeil', value: 1, color: 'rgb(29, 78, 137)' },
    { label: 'Automne', value: 4, color: 'rgb(226, 113, 29)' },
    { label: 'Hiver', value: 3, color: 'rgb(204, 88, 3)' },
  ];
  addPieChart('season9Pie', [data], 'Neuvième Saison : Souffles - De septembre à décembre 1998');
})();
