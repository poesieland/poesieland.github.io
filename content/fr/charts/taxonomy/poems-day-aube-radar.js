import { addRadarChart } from '../add-chart.js'
(async function () {
  const data = [
    { label: 'Janvier', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: 'Février', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Mars', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Printemps', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Avril', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: 'Mai', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Juin', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Eté', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Juillet', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: 'Août', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Septembre', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Automne', value: 0 },
    { label: '', value: 2 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Octobre', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 3 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Novembre', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Décembre', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: 'Hiver', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 0 },
  ];
  addRadarChart('poemDay-aubeRadar', ['Mois les plus représentés : février, avril, octobre, novembre'], [data], { backgroundColor: 'rgba(255, 203, 96, 0.5)', borderColor: 'rgba(255, 203, 96, 1)', pointBackgroundColor: 'rgba(255, 203, 96, 1)', pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgb(54, 162, 235)', elements: { line: { borderWidth: 1  } }, scales: { r: { ticks: { stepSize: 1 } } } });
})();
