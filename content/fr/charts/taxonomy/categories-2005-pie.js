import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Romantisme', value: 1, color: 'rgba(253, 108, 158, 1)' },
    { label: 'Passion', value: 1, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Aube', value: 1, color: 'rgba(255, 203, 96, 1)' },
    { label: 'Ville', value: 3, color: 'rgba(152, 151, 88, 1)' },
    { label: 'Espoir', value: 1, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Foi', value: 1, color: 'rgba(203, 93, 241, 1)' },
    { label: 'Portraits', value: 3, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Temps', value: 2, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Etre', value: 3, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Neige', value: 1, color: 'rgba(244, 254, 254, 1)' },
    { label: 'Flore', value: 4, color: 'rgba(84, 114, 174, 1)' },
    { label: 'Jardin et paysage', value: 1, color: 'rgba(121, 248, 248, 1)' },
    { label: 'Eau douce', value: 3, color: 'rgba(0, 127, 255, 1)' },
    { label: 'Climat', value: 1, color: 'rgb(50, 122, 183, 1)' },
    { label: 'Musique et chant', value: 1, color: 'rgba(252, 191, 140, 1)' },
    { label: 'Printemps', value: 3, color: 'rgba(130, 196, 108, 1)' },
    { label: 'Hiver', value: 3, color: 'rgba(24, 57, 30, 1)' },
  ];
  addPieChart('categories2005Pie', [data], { plugins: { title: { display: true, text: '2005' } } });
})();
