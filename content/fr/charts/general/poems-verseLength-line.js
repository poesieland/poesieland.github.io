import { addLineChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Vers variable', data: [1,0,2,2,1,0,0,0,0,2,0,0,1,1,1,1,1,2,1,3,1,3,3], borderColor: 'black' },
    { label: '2 pieds', data: [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,0], borderColor: 'cyan' },
    { label: '3 pieds', data: [0,0,2,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,3,0], borderColor: 'blue' },
    { label: '4 pieds', data: [0,5,1,1,0,1,2,1,0,0,2,0,0,0,0,0,1,2,5,2,5,10,3], borderColor: 'teal' },
    { label: '5 pieds', data: [0,0,2,1,0,1,0,1,2,1,5,1,1,0,0,2,3,3,4,9,3,1,0], borderColor: 'green' },
    { label: '6 pieds', data: [5,6,12,24,18,8,5,4,17,5,12,8,8,9,7,10,15,20,13,23,12,11,5], borderColor: 'magenta' },
    { label: '7 pieds', data: [0,0,0,0,4,3,5,7,2,8,5,4,4,4,4,6,7,1,2,2,4,0,0], borderColor: 'purple' },
    { label: '8 pieds', data: [15,15,23,21,23,26,21,29,12,18,15,14,14,19,20,16,15,13,16,5,16,15,2], borderColor: 'yellow' },
    { label: '9 pieds', data: [0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0], borderColor: 'brown' },
    { label: '10 pieds', data: [0,0,0,0,1,5,3,2,2,2,1,2,2,2,6,2,3,1,1,0,0,0,0], borderColor: 'lime' },
    { label: '11 pieds', data: [0,0,0,0,0,0,0,0,0,5,3,4,1,2,0,0,0,1,0,0,0,0,0], borderColor: 'gray' },
    { label: '12 pieds', data: [29,24,6,0,3,6,13,6,15,7,7,16,18,10,11,12,3,6,7,4,7,5,0], borderColor: 'red' },
    { label: '13 pieds', data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], borderColor: 'navy' },
    { label: '14 pieds', data: [0,0,0,0,0,0,0,0,0,1,0,1,0,2,1,0,0,0,0,0,0,0,0], borderColor: 'olive' },
  ];
    addLineChart('poemsVerseLengthLine', ['Vers variable','2 pieds','3 pieds','4 pieds','5 pieds','6 pieds','7 pieds','8 pieds','9 pieds','10 pieds','11 pieds','12 pieds','13 pieds','14 pieds'], data, ['Première Saison : Premiers élans (1994 - 1996)','Deuxième Saison : Tableaux (1996)','Troisième Saison : Vivace (1997)','Quatrième Saison : Rêves (1997)','Cinquième Saison : Espaces de vie (1997 - 1998)','Sixième Saison : Sur le chemin (1998)','Septième Saison : Croire (1998)','Huitième Saison : Reflets perdus (1998)','Neuvième Saison : Souffles (1998)','Dixième Saison : Pensées (1999)','Onzième Saison : Perceptible (1999)','Douzième Saison : Tempo piano (1999)','Treizième Saison : Divina (1999)','Quatorzième Saison : Au long cours (1999 - 2001)','Quinzième Saison : De place en place (2001)','Seizième Saison : Plus loin (2002 - 2004)','Dix-septième Saison : Traversées (2004 - 2023)','Dix-huitième Saison : Retour aux sources (2023 - 2024)','Dix-neuvième Saison : Destination bonheur (2024)','Vingtième Saison : Le temps qui nous reste (2024)','Vingt-et-unième Saison : C\'est vivre qui compte (2024)','Vingt-deuxième Saison : Au temps le dire (2024)','Vingt-troisième Saison : Jamais trop (2024)'], 'stack0', {});
})();
