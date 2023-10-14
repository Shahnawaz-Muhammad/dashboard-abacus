import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },

    },
};

const labels = ['J', 'F', 'M', 'A', 'M', 'J', 'J'];

const dataset1Data = [100, 400, 300, 600, 800, 500, 700]; // Replace with your own static data


export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: dataset1Data,
            backgroundColor: '#fff',
        },

    ],
};

export function ViewsChart() {
    return (
        <div className='w-full h-full'><Bar options={options} data={data} /></div>
    )
}
