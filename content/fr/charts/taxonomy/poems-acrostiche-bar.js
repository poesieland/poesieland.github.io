import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Première Saison : Premiers élans (1994 - 1996)', value: 0, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Deuxième Saison : Tableaux (1996)', value: 0, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Troisième Saison : Vivace (1997)', value: 2, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Quatrième Saison : Rêves (1997)', value: 9, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Cinquième Saison : Espaces de vie (1997 - 1998)', value: 16, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Sixième Saison : Sur le chemin (1998)', value: 23, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Septième Saison : Croire (1998)', value: 47, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Huitième Saison : Reflets perdus (1998)', value: 48, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Neuvième Saison : Souffles (1998)', value: 49, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Dixième Saison : Pensées (1999)', value: 47, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Onzième Saison : Perceptible (1999)', value: 50, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Douzième Saison : Tempo piano (1999)', value: 49, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Treizième Saison : Divina (1999)', value: 50, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Quatorzième Saison : Au long cours (1999 - 2001)', value: 43, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Quinzième Saison : De place en place (2001)', value: 40, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Seizième Saison : Plus loin (2002 - 2004)', value: 24, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Dix-septième Saison : Traversées (2004 - 2023)', value: 3, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Dix-huitième Saison : Retour aux sources (2023 - 2024)', value: 1, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Dix-neuvième Saison : Destination bonheur (2024)', value: 0, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Vingtième Saison : Le temps qui nous reste (2024)', value: 2, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Vingt-et-unième Saison : C\'est vivre qui compte (2024)', value: 9, color: 'rgba(72, 149, 239, 0.5)' },
    { label: 'Vingt-deuxième Saison : Au temps le dire (2024)', value: 2, color: 'rgba(72, 149, 239, 0.5)' },
  ];
    addBarChart('poems-acrosticheBar', ['Poèmes au fil des saisons'], [data], { scales: { y: { ticks: { stepSize: 1 } } } });
})();
