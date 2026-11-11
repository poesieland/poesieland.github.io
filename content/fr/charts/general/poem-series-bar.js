import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '2 poèmes (en 1 jours, 2 jours)', value: 139, color: 'rgba(72, 149, 239, 1)' },
    { label: '3 poèmes (en 1 jours, 2 jours, 3 jours)', value: 56, color: 'rgba(72, 149, 239, 1)' },
    { label: '4 poèmes (en 1 jours, 2 jours, 3 jours, 4 jours)', value: 44, color: 'rgba(72, 149, 239, 1)' },
    { label: '5 poèmes (en 1 jours, 3 jours, 4 jours, 5 jours)', value: 20, color: 'rgba(72, 149, 239, 1)' },
    { label: '6 poèmes (en 2 jours, 3 jours, 4 jours, 5 jours, 6 jours)', value: 13, color: 'rgba(72, 149, 239, 1)' },
    { label: '7 poèmes (en 3 jours, 4 jours, 5 jours, 6 jours, 7 jours)', value: 8, color: 'rgba(72, 149, 239, 1)' },
    { label: '8 poèmes (en 3 jours, 5 jours, 6 jours, 7 jours, 8 jours)', value: 12, color: 'rgba(72, 149, 239, 1)' },
    { label: '9 poèmes (en 4 jours, 5 jours, 6 jours, 7 jours)', value: 7, color: 'rgba(72, 149, 239, 1)' },
    { label: '10 poèmes (en 5 jours, 6 jours, 7 jours, 8 jours, 9 jours)', value: 5, color: 'rgba(72, 149, 239, 1)' },
    { label: '11 poèmes (en 6 jours, 7 jours)', value: 2, color: 'rgba(72, 149, 239, 1)' },
    { label: '12 poèmes (en 8 jours)', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '13 poèmes (en 9 jours)', value: 3, color: 'rgba(72, 149, 239, 1)' },
    { label: '14 poèmes (en 9 jours)', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '18 poèmes (en 10 jours, 13 jours)', value: 2, color: 'rgba(72, 149, 239, 1)' },
    { label: '19 poèmes (en 10 jours, 16 jours)', value: 2, color: 'rgba(72, 149, 239, 1)' },
    { label: '20 poèmes (en 10 jours)', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '22 poèmes (en 13 jours)', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '25 poèmes (en 17 jours)', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '29 poèmes (en 16 jours)', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '43 poèmes (en 19 jours)', value: 1, color: 'rgba(72, 149, 239, 1)' },
    { label: '61 poèmes (en 31 jours)', value: 1, color: 'rgba(72, 149, 239, 1)' },
  ];
    addBarChart('poemSeriesBar', ['Séries'], [data], {});
})();
