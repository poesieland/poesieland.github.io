import { addLineChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Métrique variable', data: [2,0,4,4,2,0,0,0,0,4,0,0,2,2,2,2,2,4,2,6,2,6,8,10,30], borderColor: 'rgb(247, 249, 249)', backgroundColor: 'rgb(247, 249, 249)', fill: true },
    { label: '2 pieds', data: [0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,4,2,4,0], borderColor: 'rgb(230, 176, 170)', backgroundColor: 'rgb(230, 176, 170)', fill: true },
    { label: '3 pieds', data: [0,0,4,2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,6,0,4,0], borderColor: 'rgb(245, 183, 177)', backgroundColor: 'rgb(245, 183, 177)', fill: true },
    { label: '4 pieds', data: [0,10,2,2,0,2,4,2,0,0,4,0,0,0,0,0,2,4,10,4,10,20,10,24,10], borderColor: 'rgb(215, 189, 226)', backgroundColor: 'rgb(215, 189, 226)', fill: true },
    { label: '5 pieds', data: [0,0,4,2,0,2,0,2,4,2,10,2,2,0,0,4,6,6,8,18,6,2,2,4,10], borderColor: 'rgb(169, 204, 227)', backgroundColor: 'rgb(169, 204, 227)', fill: true },
    { label: '6 pieds', data: [10,12,24,48,36,16,10,8,34,10,24,16,16,18,14,20,30,40,26,46,24,22,32,26,30], borderColor: 'rgb(174, 214, 241)', backgroundColor: 'rgb(174, 214, 241)', fill: true },
    { label: '7 pieds', data: [0,0,0,0,8,6,10,14,4,16,10,8,8,8,8,12,14,2,4,4,8,0,4,2,0], borderColor: 'rgb(163, 228, 215)', backgroundColor: 'rgb(163, 228, 215)', fill: true },
    { label: '8 pieds', data: [30,30,46,42,46,52,42,58,24,36,30,28,28,38,40,32,30,26,32,10,32,30,34,22,10], borderColor: 'rgb(162, 217, 206)', backgroundColor: 'rgb(162, 217, 206)', fill: true },
    { label: '9 pieds', data: [0,0,2,0,0,0,2,0,0,2,0,0,2,2,0,2,2,0,0,2,2,0,0,0,0], borderColor: 'rgb(171, 235, 198)', backgroundColor: 'rgb(171, 235, 198)', fill: true },
    { label: '10 pieds', data: [0,0,0,0,2,10,6,4,4,4,2,4,4,4,12,4,6,2,2,0,0,0,0,0,0], borderColor: 'rgb(249, 231, 159)', backgroundColor: 'rgb(249, 231, 159)', fill: true },
    { label: '11 pieds', data: [0,0,0,0,0,0,0,0,0,10,6,8,2,4,0,0,0,2,0,0,0,0,0,0,0], borderColor: 'rgb(250, 215, 160)', backgroundColor: 'rgb(250, 215, 160)', fill: true },
    { label: '12 pieds', data: [58,48,12,0,6,12,26,12,30,14,14,32,36,20,22,24,6,12,14,8,14,10,8,4,10], borderColor: 'rgb(237, 187, 153)', backgroundColor: 'rgb(237, 187, 153)', fill: true },
    { label: '14 pieds', data: [0,0,0,0,0,0,0,0,0,2,0,2,0,4,2,0,0,0,0,0,0,0,0,0,0], borderColor: 'rgb(204, 209, 209)', backgroundColor: 'rgb(204, 209, 209)', fill: true },
  ];
    addLineChart('poemsVerseLengthLine', ['Métrique variable','2 pieds','3 pieds','4 pieds','5 pieds','6 pieds','7 pieds','8 pieds','9 pieds','10 pieds','11 pieds','12 pieds','14 pieds'], data, ['Premiers élans (1) 1994-96','Tableaux (2) 1996','Vivace (3) 1997','Rêves (4) 1997','Espaces de vie (5) 1997-98','Sur le chemin (6) 1998','Croire (7) 1998','Reflets perdus (8) 1998','Souffles (9) 1998','Pensées (10) 1998-99','Perceptible (11) 1999','Tempo piano (12) 1999','Divina (13) 1999','Au long cours (14) 1999-2001','De place en place (15) 2001','Plus loin (16) 2002-04','Traversées (17) 2004-23','Retour aux sources (18) 2023-24','Destination bonheur (19) 2024','Le temps qui nous reste (20) 2024','C\'est vivre qui compte (21) 2024','Au temps le dire (22) 2024','Jamais trop (23) 2024','Les mots respirent (24) 2024-25','Coeur et âme (25) 2025'], 'stack0', {});
})();
