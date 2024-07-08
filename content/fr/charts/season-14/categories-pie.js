import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 1, color: 'rgba(255, 229, 236, 1)' },
    { label: 'Romantisme', value: 4, color: 'rgba(255, 179, 198, 1)' },
    { label: 'Aube', value: 1, color: 'rgba(219, 194, 87, 1)' },
    { label: 'Lune', value: 4, color: 'rgba(198, 163, 55, 1)' },
    { label: 'Nuit', value: 1, color: 'rgba(91, 77, 11, 1)' },
    { label: 'Espoir', value: 3, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Création', value: 4, color: 'rgba(220, 147, 246, 1)' },
    { label: 'Foi', value: 4, color: 'rgba(203, 93, 241, 1)' },
    { label: 'Portraits', value: 1, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Temps', value: 12, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Etre', value: 5, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Apprentissage', value: 1, color: 'rgba(70, 24, 115, 1)' },
    { label: 'Flore', value: 3, color: 'rgba(123, 233, 220, 1)' },
    { label: 'Jardin et paysage', value: 6, color: 'rgba(61, 223, 205, 1)' },
    { label: 'Eau douce', value: 1, color: 'rgba(29, 184, 166, 1)' },
    { label: 'Ciel', value: 4, color: 'rgba(19, 122, 110, 1)' },
    { label: 'Faune', value: 1, color: 'rgba(9, 61, 55, 1)' },
    { label: 'Musique et chant', value: 5, color: 'rgba(252, 191, 140, 1)' },
    { label: 'Mouvement', value: 4, color: 'rgba(250, 152, 70, 1)' },
    { label: 'Toucher', value: 1, color: 'rgba(244, 114, 5, 1)' },
    { label: 'Printemps', value: 4, color: 'rgba(179, 226, 167, 1)' },
    { label: 'Automne', value: 3, color: 'rgba(98, 149, 162, 1)' },
    { label: 'Hiver', value: 1, color: 'rgba(73, 138, 185, 1)' },
  ];
  addPieChart('season14Pie', [data], { plugins: { title: { display: true, text: 'Quatorzième Saison : Au long cours - De novembre 1999 à mars 2001' } } });
})();
