import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
[
    { label: 'Troisième Saison : Vivace (1997)', value: 48 },
    { label: 'Quatrième Saison : Rêves (1997)', value: 41 },
    { label: 'Cinquième Saison : Espaces de vie (1997 - 1998)', value: 34 },
    { label: 'Sixième Saison : Sur le chemin (1998)', value: 27 },
    { label: 'Septième Saison : Croire (1998)', value: 3 },
    { label: 'Huitième Saison : Reflets perdus (1998)', value: 2 },
    { label: 'Neuvième Saison : Souffles (1998)', value: 1 },
    { label: 'Dixième Saison : Pensées (1999)', value: 3 },
    { label: 'Onzième Saison : Perceptible (1999)', value: 0 },
    { label: 'Douzième Saison : Tempo piano (1999)', value: 1 },
    { label: 'Treizième Saison : Divina (1999)', value: 0 },
    { label: 'Quatorzième Saison : Au long cours (1999 - 2001)', value: 7 },
    { label: 'Quinzième Saison : De place en place (2001)', value: 10 },
    { label: 'Seizième Saison : Plus loin (2002 - 2004)', value: 26 },
    { label: 'Dix-septième Saison : Traversées (2004 - 2023)', value: 47 },
],
[
    { label: 'Troisième Saison : Vivace (1997)', value: 2 },
    { label: 'Quatrième Saison : Rêves (1997)', value: 9 },
    { label: 'Cinquième Saison : Espaces de vie (1997 - 1998)', value: 16 },
    { label: 'Sixième Saison : Sur le chemin (1998)', value: 23 },
    { label: 'Septième Saison : Croire (1998)', value: 47 },
    { label: 'Huitième Saison : Reflets perdus (1998)', value: 48 },
    { label: 'Neuvième Saison : Souffles (1998)', value: 49 },
    { label: 'Dixième Saison : Pensées (1999)', value: 47 },
    { label: 'Onzième Saison : Perceptible (1999)', value: 50 },
    { label: 'Douzième Saison : Tempo piano (1999)', value: 49 },
    { label: 'Treizième Saison : Divina (1999)', value: 50 },
    { label: 'Quatorzième Saison : Au long cours (1999 - 2001)', value: 43 },
    { label: 'Quinzième Saison : De place en place (2001)', value: 40 },
    { label: 'Seizième Saison : Plus loin (2002 - 2004)', value: 24 },
    { label: 'Dix-septième Saison : Traversées (2004 - 2023)', value: 3 },
]
  ];
    addBarChart('acrosticheBar', ['Non acrostiche','Acrostiche'], data, {});
})();
