import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 1, color: 'rgba(255, 229, 236, 1)' },
    { label: 'Romantisme', value: 1, color: 'rgba(255, 179, 198, 1)' },
    { label: 'Aimé (amant)', value: 1, color: 'rgba(251, 111, 146, 1)' },
    { label: 'Aube', value: 1, color: 'rgba(219, 194, 87, 1)' },
    { label: 'Lune', value: 2, color: 'rgba(198, 163, 55, 1)' },
    { label: 'Ville', value: 4, color: 'rgba(152, 151, 88, 1)' },
    { label: 'Crépuscule', value: 1, color: 'rgba(129, 103, 41, 1)' },
    { label: 'Nuit', value: 2, color: 'rgba(91, 77, 11, 1)' },
    { label: 'Enfance et adolescence', value: 1, color: 'rgba(247, 235, 253, 1)' },
    { label: 'Espoir', value: 3, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Création', value: 4, color: 'rgba(220, 147, 246, 1)' },
    { label: 'Foi', value: 12, color: 'rgba(203, 93, 241, 1)' },
    { label: 'Portraits', value: 4, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Temps', value: 9, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Etre', value: 4, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Apprentissage', value: 1, color: 'rgba(70, 24, 115, 1)' },
    { label: 'Flore', value: 2, color: 'rgba(123, 233, 220, 1)' },
    { label: 'Jardin et paysage', value: 3, color: 'rgba(61, 223, 205, 1)' },
    { label: 'Ciel', value: 4, color: 'rgba(19, 122, 110, 1)' },
    { label: 'Mer', value: 3, color: 'rgba(14, 92, 83, 1)' },
    { label: 'Faune', value: 1, color: 'rgba(9, 61, 55, 1)' },
    { label: 'Musique et chant', value: 4, color: 'rgba(252, 191, 140, 1)' },
    { label: 'Sommeil', value: 1, color: 'rgba(209, 98, 4, 1)' },
    { label: 'Automne', value: 6, color: 'rgba(98, 149, 162, 1)' },
  ];
  addPieChart('season13Pie', [data], { plugins: { title: { display: true, text: 'Treizième Saison : Divina - De juillet à novembre 1999' } } });
})();
