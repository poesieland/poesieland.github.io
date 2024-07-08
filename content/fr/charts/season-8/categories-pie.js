import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amour malheureux', value: 6, color: 'rgba(255, 194, 209, 1)' },
    { label: 'Romantisme', value: 4, color: 'rgba(255, 179, 198, 1)' },
    { label: 'Aimé (amant)', value: 4, color: 'rgba(251, 111, 146, 1)' },
    { label: 'Crépuscule', value: 1, color: 'rgba(129, 103, 41, 1)' },
    { label: 'Nuit', value: 1, color: 'rgba(91, 77, 11, 1)' },
    { label: 'Espoir', value: 2, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Création', value: 8, color: 'rgba(220, 147, 246, 1)' },
    { label: 'Foi', value: 3, color: 'rgba(203, 93, 241, 1)' },
    { label: 'Temps', value: 1, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Etre', value: 11, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Apprentissage', value: 4, color: 'rgba(70, 24, 115, 1)' },
    { label: 'Révolte', value: 1, color: 'rgba(61, 0, 102, 1)' },
    { label: 'Flore', value: 1, color: 'rgba(123, 233, 220, 1)' },
    { label: 'Eau douce', value: 1, color: 'rgba(29, 184, 166, 1)' },
    { label: 'Ciel', value: 1, color: 'rgba(19, 122, 110, 1)' },
    { label: 'Mer', value: 2, color: 'rgba(14, 92, 83, 1)' },
    { label: 'Faune', value: 1, color: 'rgba(9, 61, 55, 1)' },
    { label: 'Musique et chant', value: 7, color: 'rgba(252, 191, 140, 1)' },
    { label: 'Toucher', value: 2, color: 'rgba(244, 114, 5, 1)' },
    { label: 'Sommeil', value: 1, color: 'rgba(209, 98, 4, 1)' },
    { label: 'Automne', value: 2, color: 'rgba(98, 149, 162, 1)' },
  ];
  addPieChart('season8Pie', [data], { plugins: { title: { display: true, text: 'Huitième Saison : Reflets perdus - De juillet à septembre 1998' } } });
})();
