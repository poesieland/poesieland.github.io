import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Amour platonique', value: 1, color: 'rgba(245, 143, 168, 1)' },
    { label: 'Aube', value: 1, color: 'rgba(245, 193, 106, 1)' },
    { label: 'Lune', value: 2, color: 'rgba(229, 163, 60, 1)' },
    { label: 'Ville', value: 2, color: 'rgba(185, 121, 43, 1)' },
    { label: 'Nuit', value: 1, color: 'rgba(47, 27, 12, 1)' },
    { label: 'Temps', value: 1, color: 'rgba(113, 55, 154, 1)' },
    { label: 'Condition humaine', value: 1, color: 'rgba(94, 43, 131, 1)' },
    { label: 'Révolte', value: 1, color: 'rgba(138, 36, 95, 1)' },
    { label: 'Neige', value: 1, color: 'rgba(195, 223, 243, 1)' },
    { label: 'Jardin et paysage', value: 2, color: 'rgba(101, 166, 213, 1)' },
    { label: 'Eau douce', value: 1, color: 'rgba(57, 137, 194, 1)' },
    { label: 'Félinement vôtre', value: 1, color: 'rgba(161, 86, 28, 1)' },
    { label: 'Printemps', value: 1, color: 'rgba(180, 217, 166, 1)' },
    { label: 'Automne', value: 2, color: 'rgba(77, 150, 61, 1)' },
  ];
  addPieChart('categories2003Pie', [data], { plugins: { title: { display: true, text: '2003' } } });
})();
