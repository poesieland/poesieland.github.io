import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Romantisme', value: 1, color: 'rgba(253, 108, 158, 1)' },
    { label: 'Crépuscule', value: 1, color: 'rgba(179, 103, 0, 1)' },
    { label: 'Enfance et adolescence', value: 3, color: 'rgba(247, 235, 253, 1)' },
    { label: 'Espoir', value: 2, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Foi', value: 2, color: 'rgba(203, 93, 241, 1)' },
    { label: 'Portraits', value: 4, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Temps', value: 6, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Apprentissage', value: 1, color: 'rgba(70, 24, 115, 1)' },
    { label: 'Angoisse', value: 5, color: 'rgba(38, 9, 78, 1)' },
    { label: 'Neige', value: 2, color: 'rgba(244, 254, 254, 1)' },
    { label: 'Jardin et paysage', value: 1, color: 'rgba(121, 248, 248, 1)' },
    { label: 'Ciel', value: 5, color: 'rgba(119, 181, 254, 1)' },
    { label: 'Faune', value: 3, color: 'rgba(4, 139, 154, 1)' },
    { label: 'Musique et chant', value: 1, color: 'rgba(252, 191, 140, 1)' },
    { label: 'Mouvement', value: 1, color: 'rgba(250, 152, 70, 1)' },
    { label: 'Sommeil', value: 1, color: 'rgba(209, 98, 4, 1)' },
    { label: 'Printemps', value: 1, color: 'rgba(130, 196, 108, 1)' },
    { label: 'Hiver', value: 5, color: 'rgba(24, 57, 30, 1)' },
  ];
  addPieChart('season24Pie', [data], { plugins: { title: { display: true, text: 'Vingt-quatrième Saison : Les mots respirent - De décembre 2024 à courant 2025' } } });
})();
