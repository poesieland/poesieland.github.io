import { addBarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Premiers élans (1) (1994 - 1996)', value: 1, color: 'rgba(250, 152, 70, 0.5)' },
    { label: 'Tableaux (2) (1996)', value: 0, color: 'rgba(250, 152, 70, 0.5)' },
    { label: 'Vivace (3) (1997)', value: 1, color: 'rgba(250, 152, 70, 0.5)' },
    { label: 'Rêves (4) (1997)', value: 2, color: 'rgba(250, 152, 70, 0.5)' },
    { label: 'Espaces de vie (5) (1997 - 1998)', value: 0, color: 'rgba(250, 152, 70, 0.5)' },
    { label: 'Sur le chemin (6) (1998)', value: 3, color: 'rgba(250, 152, 70, 0.5)' },
    { label: 'Croire (7) (1998)', value: 0, color: 'rgba(250, 152, 70, 0.5)' },
    { label: 'Reflets perdus (8) (1998)', value: 0, color: 'rgba(250, 152, 70, 0.5)' },
    { label: 'Souffles (9) (1998)', value: 0, color: 'rgba(250, 152, 70, 0.5)' },
    { label: 'Pensées (10) (1999)', value: 1, color: 'rgba(250, 152, 70, 0.5)' },
    { label: 'Perceptible (11) (1999)', value: 4, color: 'rgba(250, 152, 70, 0.5)' },
    { label: 'Tempo piano (12) (1999)', value: 0, color: 'rgba(250, 152, 70, 0.5)' },
    { label: 'Divina (13) (1999)', value: 0, color: 'rgba(250, 152, 70, 0.5)' },
    { label: 'Au long cours (14) (1999 - 2001)', value: 4, color: 'rgba(250, 152, 70, 0.5)' },
    { label: 'De place en place (15) (2001)', value: 0, color: 'rgba(250, 152, 70, 0.5)' },
    { label: 'Plus loin (16) (2002 - 2004)', value: 0, color: 'rgba(250, 152, 70, 0.5)' },
    { label: 'Traversées (17) (2004 - 2023)', value: 0, color: 'rgba(250, 152, 70, 0.5)' },
    { label: 'Retour aux sources (18) (2023 - 2024)', value: 0, color: 'rgba(250, 152, 70, 0.5)' },
    { label: 'Destination bonheur (19) (2024)', value: 0, color: 'rgba(250, 152, 70, 0.5)' },
    { label: 'Le temps qui nous reste (20) (2024)', value: 3, color: 'rgba(250, 152, 70, 0.5)' },
    { label: 'C\'est vivre qui compte (21) (2024)', value: 0, color: 'rgba(250, 152, 70, 0.5)' },
    { label: 'Au temps le dire (22) (2024)', value: 0, color: 'rgba(250, 152, 70, 0.5)' },
    { label: 'Jamais trop (23) (2024)', value: 0, color: 'rgba(250, 152, 70, 0.5)' },
    { label: 'Les mots respirent (24) (2024 - 2025)', value: 1, color: 'rgba(250, 152, 70, 0.5)' },
  ];
    addBarChart('poems-mouvementBar', ['Poèmes au fil des saisons'], [data], {scales: { y: { ticks: { stepSize: 1 } } }});
})();
