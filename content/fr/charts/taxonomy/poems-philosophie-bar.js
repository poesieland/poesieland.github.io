import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Première Saison : Premiers élans (1994 - 1996)', value: 24, color: 'rgba(220, 147, 246, 0.5)' },
    { label: 'Deuxième Saison : Tableaux (1996)', value: 21, color: 'rgba(220, 147, 246, 0.5)' },
    { label: 'Troisième Saison : Vivace (1997)', value: 26, color: 'rgba(220, 147, 246, 0.5)' },
    { label: 'Quatrième Saison : Rêves (1997)', value: 14, color: 'rgba(220, 147, 246, 0.5)' },
    { label: 'Cinquième Saison : Espaces de vie (1997 - 1998)', value: 21, color: 'rgba(220, 147, 246, 0.5)' },
    { label: 'Sixième Saison : Sur le chemin (1998)', value: 32, color: 'rgba(220, 147, 246, 0.5)' },
    { label: 'Septième Saison : Croire (1998)', value: 35, color: 'rgba(220, 147, 246, 0.5)' },
    { label: 'Huitième Saison : Reflets perdus (1998)', value: 30, color: 'rgba(220, 147, 246, 0.5)' },
    { label: 'Neuvième Saison : Souffles (1998)', value: 39, color: 'rgba(220, 147, 246, 0.5)' },
    { label: 'Dixième Saison : Pensées (1999)', value: 22, color: 'rgba(220, 147, 246, 0.5)' },
    { label: 'Onzième Saison : Perceptible (1999)', value: 23, color: 'rgba(220, 147, 246, 0.5)' },
    { label: 'Douzième Saison : Tempo piano (1999)', value: 29, color: 'rgba(220, 147, 246, 0.5)' },
    { label: 'Treizième Saison : Divina (1999)', value: 33, color: 'rgba(220, 147, 246, 0.5)' },
    { label: 'Quatorzième Saison : Au long cours (1999 - 2001)', value: 26, color: 'rgba(220, 147, 246, 0.5)' },
    { label: 'Quinzième Saison : De place en place (2001)', value: 31, color: 'rgba(220, 147, 246, 0.5)' },
    { label: 'Seizième Saison : Plus loin (2002 - 2004)', value: 24, color: 'rgba(220, 147, 246, 0.5)' },
    { label: 'Dix-septième Saison : Traversées (2004 - 2023)', value: 24, color: 'rgba(220, 147, 246, 0.5)' },
    { label: 'Dix-huitième Saison : Retour aux sources (2023 - 2024)', value: 19, color: 'rgba(220, 147, 246, 0.5)' },
    { label: 'Dix-neuvième Saison : Destination bonheur (2024)', value: 27, color: 'rgba(220, 147, 246, 0.5)' },
    { label: 'Vingtième Saison : Le temps qui nous reste (2024)', value: 22, color: 'rgba(220, 147, 246, 0.5)' },
    { label: 'Vingt-et-unième Saison : C\'est vivre qui compte (2024)', value: 23, color: 'rgba(220, 147, 246, 0.5)' },
    { label: 'Vingt-deuxième Saison : Au temps le dire (2024)', value: 20, color: 'rgba(220, 147, 246, 0.5)' },
    { label: 'Vingt-troisième Saison : Jamais trop (2024)', value: 8, color: 'rgba(220, 147, 246, 0.5)' },
  ];
    addBarChart('poems-philosophieBar', ['Poèmes au fil des saisons'], [data], { scales: { y: { ticks: { stepSize: 1 } } } });
})();
