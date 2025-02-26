import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Romantisme', value: 2, color: 'rgba(253, 108, 158, 1)' },
    { label: 'Aube', value: 3, color: 'rgba(255, 203, 96, 1)' },
    { label: 'Ville', value: 1, color: 'rgba(152, 151, 88, 1)' },
    { label: 'Crépuscule', value: 3, color: 'rgba(179, 103, 0, 1)' },
    { label: 'Enfance et adolescence', value: 5, color: 'rgba(247, 235, 253, 1)' },
    { label: 'Espoir', value: 2, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Création', value: 2, color: 'rgba(220, 147, 246, 1)' },
    { label: 'Foi', value: 2, color: 'rgba(203, 93, 241, 1)' },
    { label: 'Portraits', value: 4, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Temps', value: 8, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Etre', value: 2, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Apprentissage', value: 3, color: 'rgba(70, 24, 115, 1)' },
    { label: 'Angoisse', value: 5, color: 'rgba(38, 9, 78, 1)' },
    { label: 'Neige', value: 3, color: 'rgba(244, 254, 254, 1)' },
    { label: 'Jardin et paysage', value: 4, color: 'rgba(121, 248, 248, 1)' },
    { label: 'Ciel', value: 9, color: 'rgba(119, 181, 254, 1)' },
    { label: 'Mer', value: 1, color: 'rgba(0, 127, 255, 1)' },
    { label: 'Faune', value: 4, color: 'rgba(4, 139, 154, 1)' },
    { label: 'Musique et chant', value: 1, color: 'rgba(252, 191, 140, 1)' },
    { label: 'Mouvement', value: 1, color: 'rgba(250, 152, 70, 1)' },
    { label: 'Sommeil', value: 2, color: 'rgba(209, 98, 4, 1)' },
    { label: 'Printemps', value: 4, color: 'rgba(130, 196, 108, 1)' },
    { label: 'Eté', value: 1, color: 'rgba(0, 86, 27, 1)' },
    { label: 'Hiver', value: 10, color: 'rgba(24, 57, 30, 1)' },
  ];
  addPieChart('season24Pie', [data], { plugins: { title: { display: true, text: 'Les mots respirent (24) décembre 2024 à février 2025' } } });
})();
