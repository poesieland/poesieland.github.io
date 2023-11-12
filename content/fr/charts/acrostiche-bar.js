import { addBarChart } from './add-chart.js'
(async function () {
  const data = [
[
    { label: 'Première Saison : Premiers élans', value: 50 },
    { label: 'Deuxième Saison : Tableaux', value: 50 },
    { label: 'Troisième Saison : Vivace', value: 48 },
    { label: 'Quatrième Saison : Rêves', value: 41 },
    { label: 'Cinquième Saison : Espaces de vie', value: 34 },
    { label: 'Sixième Saison : Sur le chemin', value: 27 },
    { label: 'Septième Saison : Croire', value: 3 },
    { label: 'Huitième Saison : Reflets perdus', value: 2 },
    { label: 'Neuvième Saison : Souffles', value: 1 },
    { label: 'Dixième Saison : Pensées', value: 3 },
    { label: 'Onzième Saison : Perceptible', value: 0 },
    { label: 'Douzième Saison : Tempo piano', value: 1 },
    { label: 'Treizième Saison : Divina', value: 0 },
    { label: 'Quatorzième Saison : Au long cours', value: 7 },
    { label: 'Quinzième Saison : De place en place', value: 10 },
    { label: 'Seizième Saison : Plus loin', value: 26 },
    { label: 'Dix-septième Saison : Traversées', value: 47 },
    { label: 'Dix-huitième Saison : Retour aux sources', value: 18 },
],
[
    { label: 'Première Saison : Premiers élans', value: 0 },
    { label: 'Deuxième Saison : Tableaux', value: 0 },
    { label: 'Troisième Saison : Vivace', value: 2 },
    { label: 'Quatrième Saison : Rêves', value: 9 },
    { label: 'Cinquième Saison : Espaces de vie', value: 16 },
    { label: 'Sixième Saison : Sur le chemin', value: 23 },
    { label: 'Septième Saison : Croire', value: 47 },
    { label: 'Huitième Saison : Reflets perdus', value: 48 },
    { label: 'Neuvième Saison : Souffles', value: 49 },
    { label: 'Dixième Saison : Pensées', value: 47 },
    { label: 'Onzième Saison : Perceptible', value: 50 },
    { label: 'Douzième Saison : Tempo piano', value: 49 },
    { label: 'Treizième Saison : Divina', value: 50 },
    { label: 'Quatorzième Saison : Au long cours', value: 43 },
    { label: 'Quinzième Saison : De place en place', value: 40 },
    { label: 'Seizième Saison : Plus loin', value: 24 },
    { label: 'Dix-septième Saison : Traversées', value: 3 },
    { label: 'Dix-huitième Saison : Retour aux sources', value: 1 },
]
  ];
    addBarChart('acrosticheBar', ['Ordinaire','Acrostiche'], data);
})();
