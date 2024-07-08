import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 2, color: 'rgba(255, 229, 236, 1)' },
    { label: 'Amour malheureux', value: 2, color: 'rgba(255, 194, 209, 1)' },
    { label: 'Romantisme', value: 8, color: 'rgba(255, 179, 198, 1)' },
    { label: 'Femme', value: 3, color: 'rgba(255, 143, 171, 1)' },
    { label: 'Aimé (amant)', value: 1, color: 'rgba(251, 111, 146, 1)' },
    { label: 'Aube', value: 2, color: 'rgba(219, 194, 87, 1)' },
    { label: 'Lune', value: 5, color: 'rgba(198, 163, 55, 1)' },
    { label: 'Enfance et adolescence', value: 2, color: 'rgba(247, 235, 253, 1)' },
    { label: 'Espoir', value: 3, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Création', value: 2, color: 'rgba(220, 147, 246, 1)' },
    { label: 'Portraits', value: 1, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Temps', value: 2, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Etre', value: 3, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Apprentissage', value: 1, color: 'rgba(70, 24, 115, 1)' },
    { label: 'Révolte', value: 1, color: 'rgba(61, 0, 102, 1)' },
    { label: 'Flore', value: 2, color: 'rgba(123, 233, 220, 1)' },
    { label: 'Jardin et paysage', value: 2, color: 'rgba(61, 223, 205, 1)' },
    { label: 'Eau douce', value: 2, color: 'rgba(29, 184, 166, 1)' },
    { label: 'Ciel', value: 1, color: 'rgba(19, 122, 110, 1)' },
    { label: 'Faune', value: 4, color: 'rgba(9, 61, 55, 1)' },
    { label: 'Musique et chant', value: 2, color: 'rgba(252, 191, 140, 1)' },
    { label: 'Mouvement', value: 2, color: 'rgba(250, 152, 70, 1)' },
    { label: 'Toucher', value: 1, color: 'rgba(244, 114, 5, 1)' },
    { label: 'Eté', value: 4, color: 'rgba(128, 185, 173, 1)' },
    { label: 'Automne', value: 7, color: 'rgba(98, 149, 162, 1)' },
  ];
  addPieChart('season4Pie', [data], { plugins: { title: { display: true, text: 'Quatrième Saison : Rêves - De mai à septembre 1997' } } });
})();
