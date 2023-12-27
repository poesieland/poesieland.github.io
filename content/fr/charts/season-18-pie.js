import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 1, color: 'rgba(255, 229, 236, 1)' },
    { label: 'Romantisme', value: 2, color: 'rgba(255, 179, 198, 1)' },
    { label: 'Aube', value: 1, color: 'rgba(244, 228, 9, 1)' },
    { label: 'Crépuscule', value: 1, color: 'rgba(166, 60, 6, 1)' },
    { label: 'Enfance et adolescence', value: 3, color: 'rgba(247, 235, 253, 1)' },
    { label: 'Espoir', value: 2, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Création', value: 3, color: 'rgba(220, 147, 246, 1)' },
    { label: 'Foi', value: 1, color: 'rgba(203, 93, 241, 1)' },
    { label: 'Portraits', value: 3, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Temps', value: 4, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Neige', value: 3, color: 'rgba(183, 239, 197, 1)' },
    { label: 'Flore', value: 1, color: 'rgba(146, 230, 167, 1)' },
    { label: 'Jardin et paysage', value: 4, color: 'rgba(74, 214, 109, 1)' },
    { label: 'Eau douce', value: 2, color: 'rgba(37, 162, 68, 1)' },
    { label: 'Ciel', value: 1, color: 'rgba(26, 116, 49, 1)' },
    { label: 'Animaux', value: 5, color: 'rgba(30, 47, 35, 1)' },
    { label: 'Printemps', value: 1, color: 'rgba(255, 182, 39, 1)' },
    { label: 'Eté', value: 3, color: 'rgba(255, 149, 5, 1)' },
    { label: 'Automne', value: 8, color: 'rgba(226, 113, 29, 1)' },
    { label: 'Hiver', value: 8, color: 'rgba(204, 88, 3, 1)' },
  ];
  addPieChart('season18Pie', [data], 'Dix-huitième Saison : Retour aux sources - D\'octobre 2023 à ce jour');
})();
