import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      data: [6, 60], // 6% filled and 94% gray
      backgroundColor: ['#FF6826', 'lightgray'], // Color for the 6% and gray for the remaining
      borderColor: 'white', // Border color for the 6% part
      borderWidth: 1,
      cutout: '70%', // Adjust the cutout to control the hole size
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  animation: false, // Disable animation for immediate rendering
  responsive: true,
  maintainAspectRatio: false, // Allow chart to scale with the container
};

export default function DoughnutChart() {
  return (
    <div className="h-[8rem] w-[8rem] relative flex justify-center items-center">
      <Doughnut data={data} options={options} />
      <div className='w-[6rem] h-[6rem] bg-white absolute rounded-full flex justify-center items-center text-black'>6%</div>
    </div>
  );
}
