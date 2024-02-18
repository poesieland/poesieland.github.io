import { addPieChart } from './add-chart.js'
(async function () {
  const data = [
    { label: 'Romantisme', value: 1, color: 'rgba(255, 179, 198, 1)' },
    { label: 'Femme', value: 1, color: 'rgba(255, 143, 171, 1)' },
    { label: 'Aube', value: 1, color: 'rgba(244, 228, 9, 1)' },
    { label: 'Lune', value: 2, color: 'rgba(238, 186, 11, 1)' },
    { label: 'Enfance et adolescence', value: 3, color: 'rgba(247, 235, 253, 1)' },
    { label: 'Espoir', value: 1, color: 'rgba(234, 191, 250, 1)' },
    { label: 'Portraits', value: 1, color: 'rgba(179, 51, 233, 1)' },
    { label: 'Etre', value: 1, color: 'rgba(105, 16, 168, 1)' },
    { label: 'Neige', value: 1, color: 'rgba(183, 239, 197, 1)' },
    { label: 'Jardin et paysage', value: 2, color: 'rgba(74, 214, 109, 1)' },
    { label: 'Printemps', value: 1, color: 'rgba(255, 182, 39, 1)' },
  ];
  addPieChart('season19Pie', [data], 'Dix-neuvième Saison : Destination bonheur - De janvier 2024 à ce jour');
})();
