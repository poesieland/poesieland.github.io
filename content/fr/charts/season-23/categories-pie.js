import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 1, color: 'rgba(254, 231, 240, 1)' },
    { label: 'Romantisme', value: 1, color: 'rgba(253, 108, 158, 1)' },
    { label: 'Passion', value: 1, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Aube', value: 2, color: 'rgba(255, 203, 96, 1)' },
    { label: 'Lune', value: 1, color: 'rgba(253, 241, 184, 1)' },
    { label: 'Crépuscule', value: 1, color: 'rgba(179, 103, 0, 1)' },
    { label: 'Espoir', value: 4, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Création', value: 1, color: 'rgba(220, 147, 246, 1)' },
    { label: 'Foi', value: 9, color: 'rgba(203, 93, 241, 1)' },
    { label: 'Temps', value: 5, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Etre', value: 6, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Angoisse', value: 2, color: 'rgba(38, 9, 78, 1)' },
    { label: 'Neige', value: 2, color: 'rgba(244, 254, 254, 1)' },
    { label: 'Flore', value: 1, color: 'rgba(84, 114, 174, 1)' },
    { label: 'Ciel', value: 7, color: 'rgba(119, 181, 254, 1)' },
    { label: 'Climat', value: 2, color: 'rgb(50, 122, 183, 1)' },
    { label: 'Musique et chant', value: 1, color: 'rgba(252, 191, 140, 1)' },
    { label: 'Automne', value: 4, color: 'rgba(27, 79, 8, 1)' },
    { label: 'Hiver', value: 9, color: 'rgba(24, 57, 30, 1)' },
  ];
  addPieChart('season23Pie', [data], { plugins: { title: { display: true, text: 'Vingt-troisième Saison : Jamais trop - Depuis novembre 2024' } } });
})();
