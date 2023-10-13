
import { addRadarChart } from './add-chart.js'

(async function () {
    const data = [
        { label: '1', value: 2 },
        { label: '2', value: 10 },
        { label: '3', value: 20 },
        { label: '4', value: 2 },
        { label: '5', value: 10 },
        { label: '6', value: 20 },
        { label: '7', value: 2 },
        { label: '8', value: 10 },
        { label: '9', value: 20 },
        { label: '10', value: 2 },
        { label: '11', value: 10 },
        { label: '12', value: 20 }
    ];

    addRadarChart('sampleRadar', 'My radar chart', data);
})();