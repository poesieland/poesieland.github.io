import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 1, color: 'rgba(255, 229, 236, 1)' },
    { label: 'Romantisme', value: 2, color: 'rgba(255, 179, 198, 1)' },
    { label: 'Aube', value: 1, color: 'rgba(219, 194, 87, 1)' },
    { label: 'Crépuscule', value: 1, color: 'rgba(129, 103, 41, 1)' },
    { label: 'Enfance et adolescence', value: 3, color: 'rgba(247, 235, 253, 1)' },
    { label: 'Espoir', value: 4, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Création', value: 5, color: 'rgba(220, 147, 246, 1)' },
    { label: 'Foi', value: 1, color: 'rgba(203, 93, 241, 1)' },
    { label: 'Portraits', value: 4, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Temps', value: 4, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Etre', value: 1, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Révolte', value: 1, color: 'rgba(61, 0, 102, 1)' },
    { label: 'Neige', value: 4, color: 'rgba(154, 238, 228, 1)' },
    { label: 'Flore', value: 1, color: 'rgba(123, 233, 220, 1)' },
    { label: 'Jardin et paysage', value: 4, color: 'rgba(61, 223, 205, 1)' },
    { label: 'Eau douce', value: 3, color: 'rgba(29, 184, 166, 1)' },
    { label: 'Ciel', value: 3, color: 'rgba(19, 122, 110, 1)' },
    { label: 'Faune', value: 5, color: 'rgba(9, 61, 55, 1)' },
    { label: 'Musique et chant', value: 2, color: 'rgba(252, 191, 140, 1)' },
    { label: 'Printemps', value: 1, color: 'rgba(179, 226, 167, 1)' },
    { label: 'Eté', value: 4, color: 'rgba(128, 185, 173, 1)' },
    { label: 'Automne', value: 8, color: 'rgba(98, 149, 162, 1)' },
    { label: 'Hiver', value: 12, color: 'rgba(73, 138, 185, 1)' },
  ];
  addPieChart('season18Pie', [data], { plugins: { title: { display: true, text: 'Dix-huitième Saison : Retour aux sources - D\'octobre 2023 à janvier 2024' } } });
})();
