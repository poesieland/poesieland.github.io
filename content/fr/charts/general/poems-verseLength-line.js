import { addLineChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: '1 syllabe', data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0], borderColor: 'rgb(247, 249, 249)', backgroundColor: 'rgb(247, 249, 249)', fill: true },
    { label: '2 syllabes', data: [0,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,1,2,2,2,4,4,4,3,0], borderColor: 'rgb(230, 176, 170)', backgroundColor: 'rgb(230, 176, 170)', fill: true },
    { label: '3 syllabes', data: [0,0,2,1,0,0,0,0,0,0,0,0,0,0,0,0,1,2,0,1,1,4,2,5,4,4,9,5,6.7], borderColor: 'rgb(245, 183, 177)', backgroundColor: 'rgb(245, 183, 177)', fill: true },
    { label: '4 syllabes', data: [0,5,2,2,0,1,2,1,0,1,2,0,0,0,0,0,1,2,5,2,5,11,7,14,10,10,11,11,6.7], borderColor: 'rgb(215, 189, 226)', backgroundColor: 'rgb(215, 189, 226)', fill: true },
    { label: '5 syllabes', data: [0,0,3,1,0,1,0,1,2,3,5,1,1,0,0,3,4,3,5,9,4,1,1,3,6,4,5,5,6.7], borderColor: 'rgb(169, 204, 227)', backgroundColor: 'rgb(169, 204, 227)', fill: true },
    { label: '6 syllabes', data: [5,6,13,26,19,8,5,4,17,6,12,8,9,10,7,10,15,22,13,25,12,13,17,14,12,15,19,15,20.0], borderColor: 'rgb(174, 214, 241)', backgroundColor: 'rgb(174, 214, 241)', fill: true },
    { label: '7 syllabes', data: [0,0,0,0,4,3,5,7,2,8,5,4,4,4,5,7,7,1,2,3,4,0,2,2,1,0,0,0,1.7], borderColor: 'rgb(163, 228, 215)', backgroundColor: 'rgb(163, 228, 215)', fill: true },
    { label: '8 syllabes', data: [15,15,25,22,23,26,21,29,12,19,15,14,15,20,20,16,15,13,16,6,16,17,18,13,10,11,5,14,8.3], borderColor: 'rgb(162, 217, 206)', backgroundColor: 'rgb(162, 217, 206)', fill: true },
    { label: '9 syllabes', data: [0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,3,1,0,1,0], borderColor: 'rgb(171, 235, 198)', backgroundColor: 'rgb(171, 235, 198)', fill: true },
    { label: '10 syllabes', data: [0,0,0,0,1,5,3,2,2,2,1,2,2,2,6,2,3,1,1,0,0,0,0,0,0,0,1,0,0], borderColor: 'rgb(249, 231, 159)', backgroundColor: 'rgb(249, 231, 159)', fill: true },
    { label: '11 syllabes', data: [0,0,0,0,0,0,0,0,0,5,3,4,1,2,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0], borderColor: 'rgb(250, 215, 160)', backgroundColor: 'rgb(250, 215, 160)', fill: true },
    { label: '12 syllabes', data: [29,24,6,0,3,6,13,6,15,7,7,16,18,10,11,12,3,6,7,4,7,5,5,2,3,6,0,2,3.3], borderColor: 'rgb(237, 187, 153)', backgroundColor: 'rgb(237, 187, 153)', fill: true },
    { label: '14 syllabes', data: [0,0,0,0,0,0,0,0,0,1,0,1,0,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0], borderColor: 'rgb(204, 209, 209)', backgroundColor: 'rgb(204, 209, 209)', fill: true },
  ];
    addLineChart('poemsVerseLengthLine', ['1 syllabe','2 syllabes','3 syllabes','4 syllabes','5 syllabes','6 syllabes','7 syllabes','8 syllabes','9 syllabes','10 syllabes','11 syllabes','12 syllabes','14 syllabes'], data, ['Premiers élans (1) 1994-96','Tableaux (2) 1996','Vivace (3) 1997','Rêves (4) 1997','Espaces de vie (5) 1997-98','Sur le chemin (6) 1998','Croire (7) 1998','Reflets perdus (8) 1998','Souffles (9) 1998','Pensées (10) 1998-99','Perceptible (11) 1999','Tempo piano (12) 1999','Divina (13) 1999','Au long cours (14) 1999-2001','De place en place (15) 2001','Plus loin (16) 2002-04','Traversées (17) 2004-23','Retour aux sources (18) 2023-24','Destination bonheur (19) 2024','Le temps qui nous reste (20) 2024','C\'est vivre qui compte (21) 2024','Au temps le dire (22) 2024','Jamais trop (23) 2024','Les mots respirent (24) 2024-25','Coeur et âme (25) 2025','Chemins non balisés (26) 2025','D\'un rêve à l\'autre (27) 2025','Les mots sur le chemin (28) 2025','Kaléidoscopes (29) 2025'], 'stack0', {});
})();
