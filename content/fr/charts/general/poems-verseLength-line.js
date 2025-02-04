import { addLineChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Vers variable', data: [2,0,4,4,2,0,0,0,0,4,0,0,2,2,2,2,2,4,2,6,2,6,8,6.5], borderColor: 'rgb(247, 249, 249)', backgroundColor: 'rgb(247, 249, 249)', fill: true },
    { label: '2 pieds', data: [0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,4,2,6.5], borderColor: 'rgb(230, 176, 170)', backgroundColor: 'rgb(230, 176, 170)', fill: true },
    { label: '3 pieds', data: [0,0,4,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,6,0,0], borderColor: 'rgb(245, 183, 177)', backgroundColor: 'rgb(245, 183, 177)', fill: true },
    { label: '4 pieds', data: [0,10,2,2,0,2,4,2,0,0,4,0,0,0,0,0,2,4,10,4,10,20,10,29.0], borderColor: 'rgb(215, 189, 226)', backgroundColor: 'rgb(215, 189, 226)', fill: true },
    { label: '5 pieds', data: [0,0,4,2,0,2,0,2,4,2,10,2,2,0,0,4,6,6,8,18,6,2,2,3.2], borderColor: 'rgb(169, 204, 227)', backgroundColor: 'rgb(169, 204, 227)', fill: true },
    { label: '6 pieds', data: [10,12,24,48,36,16,10,8,34,10,24,16,16,18,14,20,30,40,26,46,24,22,32,25.8], borderColor: 'rgb(174, 214, 241)', backgroundColor: 'rgb(174, 214, 241)', fill: true },
    { label: '7 pieds', data: [0,0,0,0,8,6,10,14,4,16,10,8,8,8,8,12,14,2,4,4,8,0,4,3.2], borderColor: 'rgb(163, 228, 215)', backgroundColor: 'rgb(163, 228, 215)', fill: true },
    { label: '8 pieds', data: [30,30,46,42,46,52,42,58,24,36,30,28,28,38,40,32,30,26,32,10,32,30,34,22.6], borderColor: 'rgb(162, 217, 206)', backgroundColor: 'rgb(162, 217, 206)', fill: true },
    { label: '9 pieds', data: [0,0,2,0,0,0,2,0,0,2,0,0,2,2,0,2,2,0,0,2,2,0,0,0], borderColor: 'rgb(171, 235, 198)', backgroundColor: 'rgb(171, 235, 198)', fill: true },
    { label: '10 pieds', data: [0,0,0,0,2,10,6,4,4,4,2,4,4,4,12,4,6,2,2,0,0,0,0,0], borderColor: 'rgb(249, 231, 159)', backgroundColor: 'rgb(249, 231, 159)', fill: true },
    { label: '11 pieds', data: [0,0,0,0,0,0,0,0,0,10,6,8,2,4,0,0,0,2,0,0,0,0,0,0], borderColor: 'rgb(250, 215, 160)', backgroundColor: 'rgb(250, 215, 160)', fill: true },
    { label: '12 pieds', data: [58,48,12,0,6,12,26,12,30,14,14,32,36,20,22,24,6,12,14,8,14,10,8,3.2], borderColor: 'rgb(237, 187, 153)', backgroundColor: 'rgb(237, 187, 153)', fill: true },
    { label: '14 pieds', data: [0,0,0,0,0,0,0,0,0,2,0,2,0,4,2,0,0,0,0,0,0,0,0,0], borderColor: 'rgb(204, 209, 209)', backgroundColor: 'rgb(204, 209, 209)', fill: true },
  ];
    addLineChart('poemsVerseLengthLine', ['Vers variable','2 pieds','3 pieds','4 pieds','5 pieds','6 pieds','7 pieds','8 pieds','9 pieds','10 pieds','11 pieds','12 pieds','14 pieds'], data, ['Première Saison : Premiers élans (1994 - 1996)','Deuxième Saison : Tableaux (1996)','Troisième Saison : Vivace (1997)','Quatrième Saison : Rêves (1997)','Cinquième Saison : Espaces de vie (1997 - 1998)','Sixième Saison : Sur le chemin (1998)','Septième Saison : Croire (1998)','Huitième Saison : Reflets perdus (1998)','Neuvième Saison : Souffles (1998)','Dixième Saison : Pensées (1999)','Onzième Saison : Perceptible (1999)','Douzième Saison : Tempo piano (1999)','Treizième Saison : Divina (1999)','Quatorzième Saison : Au long cours (1999 - 2001)','Quinzième Saison : De place en place (2001)','Seizième Saison : Plus loin (2002 - 2004)','Dix-septième Saison : Traversées (2004 - 2023)','Dix-huitième Saison : Retour aux sources (2023 - 2024)','Dix-neuvième Saison : Destination bonheur (2024)','Vingtième Saison : Le temps qui nous reste (2024)','Vingt-et-unième Saison : C\'est vivre qui compte (2024)','Vingt-deuxième Saison : Au temps le dire (2024)','Vingt-troisième Saison : Jamais trop (2024)','Vingt-quatrième Saison : Les mots respirent (2024 - 2025)'], 'stack0', {});
})();
