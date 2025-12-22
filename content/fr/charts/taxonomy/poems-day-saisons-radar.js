import { addRadarChart } from '../add-chart.js'
(async function () {
  const data = [[
    { label: 'Janvier', value: 1, color: 'rgba(130, 196, 108, 0.5)' },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 3 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 0 },
    { label: '', value: 0 },
    { label: '', value: 1 }
  ],
  [
{ label: 'Janvier', value: 1, color: 'rgba(130, 196, 208, 0.5)' },
    { label: '', value: 1 },
    { label: '', value: 2 },
    { label: '', value: 3 },
    { label: '', value: 0 },
    { label: '', value: 1 },
    { label: '', value: 3 },
    { label: '', value: 2 },
    { label: '', value: 0 }
  ]
    
  ];
  addRadarChart('poemDay-saisonsRadar', ['D1', 'D2'], data, { elements: { line: { borderWidth: 1  } }, scales: { r: { ticks: { stepSize: 1 }, beginAtZero: true } }, plugins: { filler: { propagate: true } } });
})();
