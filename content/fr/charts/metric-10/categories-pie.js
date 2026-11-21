import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amitié', value: 1, color: 'rgba(255, 194, 209, 1)' },
    { label: 'Amour platonique', value: 3, color: 'rgba(245, 143, 168, 1)' },
    { label: 'Romantisme', value: 3, color: 'rgba(232, 93, 125, 1)' },
    { label: 'Passion', value: 1, color: 'rgba(199, 44, 72, 1)' },
    { label: 'Crépuscule', value: 1, color: 'rgba(139, 91, 41, 1)' },
    { label: 'Nuit', value: 1, color: 'rgba(47, 27, 12, 1)' },
    { label: 'Enfance et adolescence', value: 2, color: 'rgba(217, 185, 240, 1)' },
    { label: 'Espoir', value: 2, color: 'rgba(203, 163, 232, 1)' },
    { label: 'Création', value: 7, color: 'rgba(185, 140, 221, 1)' },
    { label: 'Foi', value: 4, color: 'rgba(166, 117, 209, 1)' },
    { label: 'Portraits', value: 1, color: 'rgba(146, 95, 195, 1)' },
    { label: 'Temps', value: 7, color: 'rgba(128, 80, 178, 1)' },
    { label: 'Condition humaine', value: 3, color: 'rgba(110, 66, 158, 1)' },
    { label: 'Apprentissage', value: 1, color: 'rgba(113, 59, 145, 1)' },
    { label: 'Révolte', value: 2, color: 'rgba(116, 54, 111, 1)' },
    { label: 'Flore', value: 3, color: 'rgba(145, 195, 232, 1)' },
    { label: 'Jardin et paysage', value: 1, color: 'rgba(101, 166, 213, 1)' },
    { label: 'Eau douce', value: 1, color: 'rgba(57, 137, 194, 1)' },
    { label: 'Ciel', value: 3, color: 'rgba(36, 115, 173, 1)' },
    { label: 'Climat', value: 1, color: 'rgb(10, 53, 91, 1)' },
    { label: 'Musique et chant', value: 2, color: 'rgba(246, 194, 160, 1)' },
    { label: 'Mouvement', value: 1, color: 'rgba(240, 164, 119, 1)' },
    { label: 'Au contact', value: 1, color: 'rgba(232, 132, 77, 1)' },
    { label: 'Printemps', value: 1, color: 'rgba(180, 217, 166, 1)' },
    { label: 'Automne', value: 4, color: 'rgba(77, 150, 61, 1)' },
    { label: 'Hiver', value: 3, color: 'rgba(27, 79, 8, 1)' },
  ];
  addPieChart('metric10Pie', [data], { plugins: { title: { display: true, text: '' } } });
})();
