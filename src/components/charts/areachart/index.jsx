import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const labels = ['Dec', 'January', 'February', 'March', 'April', 'June', 'July'];
  
  // Create an array of random static data points (replace this with your own data)
  const staticData = [[3,5], [23,43], [12,54],[12,66],[65,66],[64,34],[65,66]]
  
  export const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Dataset 2',
        data: staticData,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  
  export function AreaChart() {
    return <Line options={options} data={data} />;
  }
  