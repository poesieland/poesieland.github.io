import { addPieChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Romantisme', value: 1, color: 'rgba(253, 108, 158, 1)' },
    { label: 'Crépuscule', value: 2, color: 'rgba(179, 103, 0, 1)' },
    { label: 'Enfance et adolescence', value: 2, color: 'rgba(247, 235, 253, 1)' },
    { label: 'Espoir', value: 1, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Création', value: 2, color: 'rgba(220, 147, 246, 1)' },
    { label: 'Foi', value: 1, color: 'rgba(203, 93, 241, 1)' },
    { label: 'Portraits', value: 1, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Temps', value: 8, color: 'rgba(140, 7, 221, 1)' },
    { label: 'Révolte', value: 4, color: 'rgba(61, 0, 102, 1)' },
    { label: 'Angoisse', value: 7, color: 'rgba(38, 9, 78, 1)' },
    { label: 'Flore', value: 4, color: 'rgba(84, 114, 174, 1)' },
    { label: 'Jardin et paysage', value: 1, color: 'rgba(121, 248, 248, 1)' },
    { label: 'Eau douce', value: 1, color: 'rgba(0, 127, 255, 1)' },
    { label: 'Climat', value: 10, color: 'rgb(50, 122, 183, 1)' },
    { label: 'Félinement vôtre', value: 1, color: 'rgba(161, 86, 28, 1)' },
    { label: 'Eté', value: 10, color: 'rgba(0, 86, 27, 1)' },
  ];
  addPieChart('season34Pie', [data], { plugins: { title: { display: true, text: 'A mi-chemin du paradis (34) juillet à août 2026' } } });
})();
